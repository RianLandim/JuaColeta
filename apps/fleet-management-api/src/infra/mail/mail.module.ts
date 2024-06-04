import { Module } from '@nestjs/common';
import { ResendMailService } from './services/resend.service';
import { MailRepository } from './repositories/mail.repository';
import { NodemailerService } from './services/nodemailer.service';

@Module({
  providers: [
    {
      provide: MailRepository,
      useClass:
        process.env.NODE_ENV === 'development'
          ? NodemailerService
          : ResendMailService,
    },
  ],
  exports: [MailRepository],
})
export class MailModule {}
