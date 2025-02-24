import { IsJSON, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateMessageDto {
  @IsString()
  @MinLength(1)
  @IsOptional()
  message?: string;

  @IsJSON()
  @MinLength(1)
  @IsOptional()
  response?: string;
}
