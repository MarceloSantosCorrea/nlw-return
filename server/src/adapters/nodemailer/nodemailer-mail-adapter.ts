import { MailAdapter, SendMailData } from '../mail-adapter';
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'ee372fae258c5c',
    pass: 'c8a39f98d7542b',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.sendMail({
      from: 'Equipe Feedback <oi@feedback.com>',
      to: 'Marcelo Corrêa <marcelocorrea229@gmail.com>',
      subject,
      html: body
    });
  }
}