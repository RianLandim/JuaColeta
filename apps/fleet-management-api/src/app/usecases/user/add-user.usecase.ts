import { User } from '@app/entities/user';
import { UserRepository } from '@app/repositories/user.repository';
import { MailRepository } from '@infra/mail/repositories/mail.repository';
import ConfirmEmail from '@infra/mail/templates/confirm-email';
import { Injectable } from '@nestjs/common';
import { render } from '@react-email/components';

import { hashSync } from 'bcrypt';

interface UserRequestProps {
  email: string;
  password: string;
  name: string;
  license?: string | null;
  cellphone: string;
  companyId?: string;
  role: 'ADMIN' | 'COMPANY_ADMIN' | 'DRIVER' | 'CLIENT';
}

export interface UserResponseProps {
  id: string;
}

@Injectable()
export class CreateUser {
  constructor(
    private userRepository: UserRepository,
    private mailRepository?: MailRepository,
  ) {}

  async execute(request: UserRequestProps): Promise<UserResponseProps> {
    const hashedPassword = hashSync(request.password, 8);

    const user = new User({ ...request, password: hashedPassword });

    await this.userRepository.create(user, request.companyId);

    if (this.mailRepository) {
      await this.mailRepository.sendMail({
        from: 'no-reply@fleetmanagement.com',
        to: user.email,
        subject: 'Confirmação',
        html: render(ConfirmEmail()),
      });
    }

    return {
      id: user.id,
    };
  }
}
