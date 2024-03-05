import { makeCompany } from '@test/factories/company.factory';
import { PrismaService } from '../prisma.service';
import { PrismaCompanyRepository } from './prisma.company.repository';
import { Test } from '@nestjs/testing';

describe('Prisma integration test for companies', () => {
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
    await prismaService.company.deleteMany();
  });

  describe('add company', () => {
    it('Should be able to create an company on prisma', async () => {
      expect(
        async () => await prismaCompanyRepository.addCompany(makeCompany()),
      ).rejects.not.toThrow();
    });
  });

  describe('get company', () => {
    it('Should be able to list companies on prisma', async () => {
      expect(
        async () =>
          await prismaCompanyRepository.getCompanies({
            searchParams: undefined,
          }),
      ).rejects.not.toThrow();
    });
  });
});
