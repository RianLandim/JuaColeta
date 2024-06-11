import { makeCompany } from '@test/factories/company.factory';
import { PrismaService } from '../prisma.service';
import { PrismaCompanyRepository } from './prisma.company.repository';
import { Test } from '@nestjs/testing';
import { Company } from '@app/entities/company';

describe.skip('Prisma integration test for companies', () => {
  let prismaService: PrismaService;
  let prismaCompanyRepository: PrismaCompanyRepository;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [PrismaService, PrismaCompanyRepository],
    }).compile();

    prismaService = moduleRef.get(PrismaService);
    prismaCompanyRepository = moduleRef.get(PrismaCompanyRepository);
  });

  afterAll(async () => {
    await Promise.allSettled([
      prismaService.company.deleteMany(),
      prismaService.address.deleteMany(),
    ]);
  });

  describe('add company', () => {
    it('Should be able to create an company on prisma', async () => {
      expect(
        async () => await prismaCompanyRepository.addCompany(makeCompany()),
      ).not.toThrow();
    });
  });

  describe('get company', () => {
    it('Should be able to list companies on prisma', async () => {
      const { companies } = await prismaCompanyRepository.getCompanies({
        searchParams: undefined,
      });

      expect(companies.every((c) => c instanceof Company)).toBeTruthy();
    });
  });
});
