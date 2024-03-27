import { Controller, Get, Post, Render, Request } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('/email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post()
  enviarEmail(@Request() req) {
    return this.emailService.enviarEmail(
      req.body.email,
      req.body.mensagem,
    );
  }
}