import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessagesGateway } from './messages.gateway';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('messages')
export class MessagesController {
  constructor(
    private readonly messagesService: MessagesService,
    private readonly messagesGateway: MessagesGateway,
  ) {}

  @Get()
  getMessages() {
    return this.messagesService?.findAll?.();
  }

  @Get(':id')
  async getMessage(@Param('id', ParseIntPipe) id: number) {
    const message = await this.messagesService?.findOne?.(id);
    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return message;
  }

  @Post()
  createMessage(@Body() message: CreateMessageDto) {
    const createdMessage = this.messagesService?.create?.(message);
    return createdMessage;
  }

  @Patch(':id')
  updateMessage(
    @Param('id', ParseIntPipe) id: number,
    @Body() message: UpdateMessageDto,
  ) {
    return this.messagesService?.update?.(id, message);
  }

  @Delete(':id')
  async deleteMessage(@Param('id', ParseIntPipe) id: number) {
    const message = await this.messagesService?.deleteOne?.(id);
    if (!message) {
      throw new NotFoundException(`Message with id ${id} not found`);
    }
    return message;
  }
}
