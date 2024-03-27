import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailService {
  constructor(private mailerService: MailerService) {}

  async enviarEmail(email: string, mensagem: string) {
    await this.mailerService.sendMail({
      to: email,
      from: 'noreply@filmesapi.com.br',
      subject: 'Enviando Email com NestJS',
      html: `<h3 style="color: red">${mensagem}</h3>`,
    });
  }
}