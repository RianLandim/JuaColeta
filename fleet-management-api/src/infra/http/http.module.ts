import { Module } from '@nestjs/common';
import { AuthenticationController } from './controllers/authentication.controller';

@Module({
  controllers: [AuthenticationController],
})
export class HttpModule {}
