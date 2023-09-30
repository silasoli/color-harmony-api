import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { RolesModule } from './roles/roles.module';
import { OpenaiApiModule } from './openai-api/openai-api.module';
import { OptimizationsModule } from './optimizations/optimizations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    UsersModule,
    AuthModule,
    RolesModule,
    OpenaiApiModule,
    OptimizationsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
