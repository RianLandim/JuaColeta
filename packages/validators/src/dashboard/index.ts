import { z } from "zod";

export const dashboardValidator = z.object({
  companies: z.array(
    z.object({ socialName: z.string(), createdAt: z.coerce.date() }),
  ),
  companiesCount: z.number(),
});
