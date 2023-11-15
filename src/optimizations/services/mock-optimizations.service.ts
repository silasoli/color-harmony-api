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
    return this.generateStyle(userConfig, styleOptions);
  }

  private getStyleOptionsByURL(url: string): Mock {
    const optimizations = {
      ['https://livros-de-programacao.vercel.app/']: LivrosDeProgramacao,
      ['https://guia-violao.vercel.app/']: GuiaViolao,
      ['https://guia-sobre-ventiladores.vercel.app/']: GuiaSobreVentiladores,
    };

    return optimizations[url];
  }

  private generateStyle(
    config: ConfigurationResponseDto,
    styleOptions: Mock,
  ): string {
    const { night_mode, daltonian, font_size } = config;
    let style: string = ' * { margin: 0; padding: 0; }';

    if (font_size) style += styleOptions.font_size(font_size);

    if (night_mode && daltonian)
      return (style += styleOptions.night_mode_daltonian);

    if (night_mode) return (style += styleOptions.night_mode);

    if (daltonian) return (style += styleOptions.daltonian);

    return style;
  }
}
