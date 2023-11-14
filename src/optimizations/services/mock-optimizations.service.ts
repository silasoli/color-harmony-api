import { Injectable } from '@nestjs/common';
import { ConfigurationsService } from '../../configurations/services/configurations.service';
import { GuiaSobreVentiladores } from '../mocks/guia-sobre-ventiladores';
import { GuiaViolao } from '../mocks/guia-violao';
import { LivrosDeProgramacao } from '../mocks/livros-de-programacao';
import { ConfigurationResponseDto } from '../../configurations/dto/configuration-response.dto';

@Injectable()
export class MockOptimizationsService {
  constructor(private readonly configurationsService: ConfigurationsService) {}

  public async getMockOptimizationByURL(
    user_id: string,
    url: string,
  ): Promise<string> {
    const userConfig = await this.configurationsService.findOne(user_id);
    const styleOptions = this.getStyleOptionsByURL(url);
    const optimization = this.generateStyle(userConfig, styleOptions);
    // styleOptions.font_size('22')

    return 'oi';
  }

  private getStyleOptionsByURL(url: string): any {
    const optimizations = {
      ['https://livros-de-programacao.vercel.app/']: LivrosDeProgramacao,
      ['https://guia-violao.vercel.app/']: GuiaViolao,
      ['https://guia-sobre-ventiladores.vercel.app/']: GuiaSobreVentiladores,
    };

    return optimizations[url];
  }

  private generateStyle(
    config: ConfigurationResponseDto,
    styleOptions: any,
  ): string {
    console.log(config, styleOptions);
    return 'oi';
  }
}
