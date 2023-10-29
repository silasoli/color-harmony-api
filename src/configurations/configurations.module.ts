import { Module } from '@nestjs/common';
import { ConfigurationsService } from './services/configurations.service';
import { ConfigurationsController } from './controllers/configurations.controller';
import {
  Configuration,
  ConfigurationSchema,
} from './schemas/configuration.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Configuration.name, schema: ConfigurationSchema },
    ]),
  ],
  controllers: [ConfigurationsController],
  providers: [ConfigurationsService],
})
export class ConfigurationsModule {}
