import { Module } from '@nestjs/common';
import { ResendMailService } from './services/resend.service';
import { MailRepository } from './repositories/mail.repository';

@Module({
  providers: [{ provide: MailRepository, useClass: ResendMailService }],
  exports: [MailRepository],
})
export class MailModule {}
