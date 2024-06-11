export interface SendMailParams {
  from: string;
  subject: string;
  to: string;
  html: string;
}

export abstract class MailRepository {
  abstract sendMail(params: SendMailParams): Promise<void>;
}
