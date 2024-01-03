import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('NestApplication');

  app.use(cookieParser());
  app.enableCors({
    credentials: true,
    origin: true,
  });

  await app.listen(3333);
  logger.log('Application running on port 3333');
}
bootstrap();
