import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { MessagesService } from './messages.service';
import { generateResponse } from './utils/generate-response';

@WebSocketGateway({ namespace: 'messages' })
export class MessagesGateway
  implements OnGatewayConnection, OnGatewayDisconnect
{
  @WebSocketServer()
  server: Server;

  constructor(private readonly messagesService: MessagesService) {}

  handleConnection(client: Socket) {
    console.log('Client connected: ', client.id);
  }

  handleDisconnect(client: Socket) {
    console.log('Client disconnected: ', client.id);
  }

  @SubscribeMessage('generate-response')
  async handleMessage(
    @MessageBody() message: string,
    @ConnectedSocket() client: Socket,
  ) {
    const createdMessage = await this.messagesService?.create?.({ message });
    const response = await generateResponse(createdMessage?.message);

    if (!response) {
      return client.emit('response', 'No response received');
    }

    const updateMessage = await this.messagesService?.update?.(
      createdMessage.id,
      { response },
    );
    console.log('generate-response', updateMessage?.response);
    client.emit('response', updateMessage?.response);
  }
}
