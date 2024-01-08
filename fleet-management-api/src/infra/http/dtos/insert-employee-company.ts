import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const insertEmployeeSchema = z.object({
  userId: z.string().cuid2(),
});

export class InsertEmployeeCompanyDto extends createZodDto(
  insertEmployeeSchema,
) {}
