import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class MockQueryDto {
  @ApiProperty({ required: false })
  @IsOptional()
  url: string;
}
