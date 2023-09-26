import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  private dataUser = [
    { id: 1, username: 'danil', email: 'fantastfad830@gmail.com' },
    { id: 2, username: 'sanek', email: 'karpuhinlox12@gmail.com' },
    { id: 3, username: 'vas9a', email: 'tosy.85@mail.ru' },
  ];
  private token = Math.floor(1000 * Math.random() * 1000).toString();

  constructor(
    private readonly mailerService: MailerService,
    private readonly cfgService: ConfigService,
  ) {}
  sendMail(id: number): void {
    const userEmail = this.dataUser.find((user) => user.id === id).email;

    console.log(userEmail, this.cfgService.get('MAIL_USER'));

    this.mailerService.sendMail({
      to: userEmail,
      from: 'soorqprod@mail.ru',
      subject: 'Testing',

      template: 'Welcome',
    });
  }
}
