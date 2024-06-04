import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import {
  MailRepository,
  type SendMailParams,
} from '../repositories/mail.repository';

@Injectable()
export class ResendMailService implements MailRepository {
  resend: Resend;

  constructor(private configService: ConfigService) {
    this.resend = new Resend(this.configService.get('RESEND_KEY'));
  }

  logger = new Logger(ResendMailService.name);

  async sendMail(params: SendMailParams) {
    const { from, html, subject, to } = params;

    const email = await this.resend.emails.send({
      from,
      subject,
      to,
      html,
    });

    if (email.error) {
      throw new InternalServerErrorException(email.error.message);
    }

    this.logger.debug(email.data.id);
  }
}
