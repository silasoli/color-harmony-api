import { Injectable } from '@nestjs/common';
import { CreateOptimizationScrapingDto } from './dto/create-optimization-scraping.dto';
import puppeteer from 'puppeteer';
import { OpenaiApiService } from '../openai-api/openai-api.service';
import { CreateOptimizationStyleDto } from './dto/create-optimization-style.dto';

@Injectable()
export class OptimizationsService {
  constructor(private readonly openaiApiService: OpenaiApiService) {}

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

  private createOptimizationRequest(css: string): string {
    let request: string;
    const user = { night_mode: true, fontsize: '5rem' };

    if (user.night_mode) {
      request +=
        'Por favor, crie um estilo de modo escuro para o site. Defina o background-color do corpo do site e outros elementos como #333, e mude o color de todos os elementos de texto para branco';
    }

    // if (user.darkmode) {
    //   request +=
    //     'crie um estilo modo escuro e adicione background-color: #333; color: #fff';
    // }

    if (user.fontsize) {
      request += `deixe todas as fontes no tamanho ${user.fontsize}`;
    }

    return `aplique os ajustes, me retorne apenas o código pronto para usar: ${request}\n nesse css: ${css}`;
  }

  public async requestOptimizationToIA(css: string) {
    const optimization = await this.openaiApiService.create({ question: css });
    return optimization?.choices[0].message.content.replace(/\n/g, '');
  }

  public async createOptimizationByScraping(
    dto: CreateOptimizationScrapingDto,
  ): Promise<string> {
    const css = await this.getCSSFromLinksInHead(dto.url);
    const request = this.createOptimizationRequest(css);
    return this.requestOptimizationToIA(request);
  }

  public async createOptimizationByStyle(
    dto: CreateOptimizationStyleDto,
  ): Promise<string> {
    const request = this.createOptimizationRequest(dto.css);
    return this.requestOptimizationToIA(request);
  }
}
