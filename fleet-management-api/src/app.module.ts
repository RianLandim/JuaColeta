import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { HttpModule } from './infra/http/http.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [HttpModule, AuthenticationModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
