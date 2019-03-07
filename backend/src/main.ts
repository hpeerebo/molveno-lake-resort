import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  
  const options = new DocumentBuilder()
    .setTitle('Molveno')
    .setDescription('Backend for the Molveno application')
    .setVersion('1.0')
    .addTag('kamers')
    .addTag('restaurant')
    .addTag('activiteiten')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
