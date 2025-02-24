import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useDocumentation } from './core/documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  useDocumentation(app);
  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
