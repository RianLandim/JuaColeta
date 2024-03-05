import { Injectable } from '@nestjs/common';
import {
  MailRepository,
  SendMailParams,
} from '../repositories/mail.repository';
import { Transporter, createTransport } from 'nodemailer';

@Injectable()
export class NodemailerService implements MailRepository {
  nodemailer: Transporter;

  constructor() {
    this.nodemailer = createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: 'e4e565763bac79',
        pass: 'c3d02c16fa11bc',
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
