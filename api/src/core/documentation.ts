import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const useDocumentation = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Breakup Survival Kit API')
    .setDescription('Breakup Survival Kit API description')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
};
