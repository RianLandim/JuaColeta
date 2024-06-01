import { z } from 'zod';

const vehicleCategoryEnum = z.enum(['A', 'B', 'C', 'D', 'E']);

type VehicleCategoryProps = 'A' | 'B' | 'C' | 'D' | 'E';

export { vehicleCategoryEnum, VehicleCategoryProps };
