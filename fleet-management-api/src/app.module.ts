import { Module } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { ZodValidationPipe } from 'nestjs-zod';
import { HttpModule } from './infra/http/http.module';
import { DatabaseModule } from '@infra/database/database.module';

@Module({
  imports: [HttpModule, DatabaseModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ZodValidationPipe,
    },
  ],
})
export class AppModule {}
