import { CompanyRepository } from '@app/repositories/company.repository';
import { UserRepository } from '@app/repositories/user.repository';
import { Injectable, NotFoundException } from '@nestjs/common';

interface InsertEmployeeCompanyRequest {
  userId: string;
  companyId: string;
}

@Injectable()
export class InsertEmployeeCompany {
  constructor(
    private companyRepository: CompanyRepository,
    private userRepository: UserRepository,
  ) {}

  async execute(request: InsertEmployeeCompanyRequest) {
    const { companyId, userId } = request;

    const company = await this.companyRepository.findById(companyId);

    if (!company) {
      throw new NotFoundException('Empresa não encontrada');
    }

    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new NotFoundException('Usuário(a) não encontrado(a)');
    }

    await this.companyRepository.insertEmployee(user.id, company.id);
  }
}
