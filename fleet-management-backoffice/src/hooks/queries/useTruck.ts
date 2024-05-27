import { fetchApi } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const truckValidator = z.object({
  model: z.string(),
  fabricator: z.string(),
  plate: z.string(),
  color: z.string().nullish(),
  year: z.string(),
  renavam: z.string(),
  category: z.string(),
  averageConsume: z.number().nullish(),
  capacity: z.number().nullish(),
  isSecured: z.boolean(),
  companyId: z.string(),
  driverId: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
});

type Truck = z.infer<typeof truckValidator>;

const FETCH_VEHICLES_KEY = ["fetch-vehicle"];

const fetchTrucks = async () => {
  const [data, _] = await fetchApi("vehicle/x9unlf5rw4hhm15npwjkl5g4", {
    method: "GET",
    validator: truckValidator.array(),
  });

  return data;
};

const useTruckList = () =>
  useQuery({
    queryKey: FETCH_VEHICLES_KEY,
    queryFn: () => fetchTrucks(),
  });

export { useTruckList, FETCH_VEHICLES_KEY, type Truck };
