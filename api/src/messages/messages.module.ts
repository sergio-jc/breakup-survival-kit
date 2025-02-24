import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesGateway } from './messages.gateway';
import { PrismaService } from 'src/core/prisma.service';

@Module({
  controllers: [MessagesController],
  providers: [MessagesService, PrismaService, MessagesGateway],
})
export class MessagesModule {}
