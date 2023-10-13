import { Injectable } from '@nestjs/common';
import { CreateOpenaiApiDto } from './dto/create-openai-api.dto';
import OpenAI from 'openai';

@Injectable()
export class OpenaiApiService {
  private openApiKey = process.env.OPEN_API_KEY;

  public async create(
    dto: CreateOpenaiApiDto,
  ): Promise<OpenAI.Chat.Completions.ChatCompletion> {
    const openai = new OpenAI({
      apiKey: this.openApiKey,
    });

    const params: OpenAI.Chat.ChatCompletionCreateParams = {
      messages: [
        {
          role: 'user',
          content: dto.question,
        },
      ],
      model: 'gpt-3.5-turbo',
    };
    const chatCompletion: OpenAI.Chat.ChatCompletion =
      await openai.chat.completions.create(params);

    return chatCompletion;
  }
}
