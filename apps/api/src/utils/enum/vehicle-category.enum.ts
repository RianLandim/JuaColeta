import { z } from 'zod';

const vehicleCategoryEnum = z.enum(['A', 'B', 'C', 'D', 'E']);

type VehicleCategoryProps = z.infer<typeof vehicleCategoryEnum>;

export { vehicleCategoryEnum, VehicleCategoryProps };
