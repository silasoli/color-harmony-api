import { ApiProperty } from '@nestjs/swagger';
import OpenAI from 'openai';

export class MessageDTO {
  @ApiProperty()
  role: string;

  @ApiProperty()
  content: string;
}

export class ChoiceDTO {
  @ApiProperty()
  index: number;

  @ApiProperty({ type: MessageDTO })
  message: MessageDTO;

  @ApiProperty()
  finish_reason: string;
}

export class UsageDTO {
  @ApiProperty()
  prompt_tokens: number;

  @ApiProperty()
  completion_tokens: number;

  @ApiProperty()
  total_tokens: number;
}

export class ChatCompletionDTO {
  constructor(chat: OpenAI.Chat.ChatCompletion) {
    const { id, object, created, model, choices, usage } = chat;

    return { id, object, created, model, choices, usage };
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  object: string;

  @ApiProperty()
  created: number;

  @ApiProperty()
  model: string;

  @ApiProperty({ type: [ChoiceDTO] })
  choices: ChoiceDTO[];

  @ApiProperty({ type: UsageDTO })
  usage: UsageDTO;
}
