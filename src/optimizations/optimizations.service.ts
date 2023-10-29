import { Injectable } from '@nestjs/common';
import { CreateOptimizationScrapingDto } from './dto/create-optimization-scraping.dto';
import puppeteer from 'puppeteer';
import { OpenaiApiService } from '../openai-api/openai-api.service';
import { CreateOptimizationStyleDto } from './dto/create-optimization-style.dto';
import { ConfigurationsService } from '../configurations/services/configurations.service';

@Injectable()
export class OptimizationsService {
  constructor(
    private readonly openaiApiService: OpenaiApiService,
    private readonly configurationsService: ConfigurationsService,
  ) {}

  public async getCSSFromLinksInHead(url: string): Promise<string> {
    const browser = await puppeteer.launch({
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(url, {
      waitUntil: 'networkidle2',
    });

    const cssContents = await page.evaluate(async () => {
      const linkElements = Array.from(
        document.querySelectorAll('head link[rel="stylesheet"]'),
      );
      const cssPromises = linkElements.map(async (linkElement) => {
        const href = linkElement.getAttribute('href');
        const response = await fetch(href);
        const cssText = await response.text();
        return cssText;
      });

      return Promise.all(cssPromises);
    });

    const cssText = cssContents.join('\n');

    await browser.close();
    return cssText;
  }

  private async createOptimizationRequest(
    user_id: string,
    css: string,
  ): Promise<string> {
    let request: string;
    const config = await this.configurationsService.findOne(user_id);

    if (config.night_mode) {
      request +=
        'Por favor, crie um estilo de modo escuro para o site. Defina o background-color do corpo do site e outros elementos como #333, e mude o color de todos os elementos de texto para branco';
    }

    // if (user.darkmode) {
    //   request +=
    //     'crie um estilo modo escuro e adicione background-color: #333; color: #fff';
    // }

    if (config.font_size) {
      request += `deixe todas as fontes no tamanho ${config.font_size}`;
    }

    return `aplique os ajustes, me retorne apenas o código pronto para usar: ${request}\n nesse css: ${css}`;
  }

  public async requestOptimizationToIA(css: string) {
    const optimization = await this.openaiApiService.create({ question: css });
    return optimization?.choices[0].message.content.replace(/\n/g, '');
  }

  public async createOptimizationByScraping(
    user_id: string,
    dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    const css = await this.getCSSFromLinksInHead(dto.url);
    const request = await this.createOptimizationRequest(user_id, css);
    return this.requestOptimizationToIA(request);
  }

  public async createOptimizationByStyle(
    user_id: string,
    dto: CreateOptimizationStyleDto,
  ): Promise<string> {
    const request = await this.createOptimizationRequest(user_id, dto.css);
    return this.requestOptimizationToIA(request);
  }
}
