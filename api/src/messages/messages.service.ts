import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { PrismaService } from 'src/core/prisma.service';
import { Message } from '@prisma/client';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  create(message: CreateMessageDto): Promise<Message> {
    return this.prisma.message.create({ data: message });
  }

  findAll(): Promise<Message[]> {
    return this.prisma.message.findMany();
  }

  async update(id: number, message: UpdateMessageDto): Promise<Message> {
    return this.prisma.message.update({
      where: { id },
      data: message,
    });
  }

  async findOne(id: number): Promise<Message | null> {
    const message = await this.prisma.message.findUnique({ where: { id } });
    return message;
  }

  async deleteOne(id: number): Promise<Message> {
    const message = await this.prisma.message.delete({ where: { id } });
    return message;
  }
}
