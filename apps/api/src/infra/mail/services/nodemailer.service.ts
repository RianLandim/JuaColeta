import { Injectable } from '@nestjs/common';
import {
  MailRepository,
  SendMailParams,
} from '../repositories/mail.repository';
import { Transporter, createTransport } from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ConfigurationProps } from '@utils/configuration.validator';

@Injectable()
export class NodemailerService implements MailRepository {
  nodemailer: Transporter;

  constructor(private configService: ConfigService<ConfigurationProps>) {
    this.nodemailer = createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: this.configService.get('MAILER_USER'),
        pass: this.configService.get('MAILER_PASS'),
      },
    });
  }

  async sendMail(params: SendMailParams): Promise<void> {
    const { from, html, subject, to } = params;

    await this.nodemailer.sendMail({
      from,
      subject,
      to,
      html,
    });
  }
}
