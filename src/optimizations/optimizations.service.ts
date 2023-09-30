import { Injectable } from '@nestjs/common';
import { CreateOptimizationDto } from './dto/create-optimization.dto';
import puppeteer from 'puppeteer';
import { OpenaiApiService } from '../openai-api/openai-api.service';

@Injectable()
export class OptimizationsService {
  constructor(private readonly openaiApiService: OpenaiApiService) { }


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

  public async requestOptimizationToIA(css: string) {
    return this.openaiApiService.create({ question: css });
  }

  public async createOptimization(dto: CreateOptimizationDto): Promise<any> {
    const css = await this.getCSSFromLinksInHead(dto.url);
    console.log(css)
    return this.requestOptimizationToIA(css);
  }
}
