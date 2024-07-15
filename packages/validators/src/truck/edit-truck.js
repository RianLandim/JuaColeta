import { z } from "zod";
const EditTruckValidator = z.object({
    id: z.string(),
    model: z.string().optional(),
    fabricator: z.string().optional(),
    plate: z.string().optional(),
    color: z.string().optional(),
    year: z.string().optional(),
    renavam: z.string().optional(),
    category: z.enum(["A", "B", "C", "D", "E"]).optional(),
    isSecured: z.boolean().optional(),
    companyId: z.string().optional(),
    averageConsume: z.number().nullish().optional(),
});
export { EditTruckValidator };
