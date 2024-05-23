import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../../utils/api";
import { number, string, z } from "zod";

const truckIdValidator = z.object({
  idTruck: number(),
});

type TruckId = z.infer<typeof truckIdValidator>;

const FETCH_TRUCK_ID_KEY = ["FETCH_TRUCK_ID_KEY"];

const UseTruckId = async () => {
  const [data, _] = await fetchApi("vehicle/", {
    method: "GET",
    validator: truckIdValidator.array(),
  });

  return data;
};

const useTruckIdList = () =>
  useQuery({
    queryKey: FETCH_TRUCK_ID_KEY,
    queryFn: () => UseTruckId(),
  });

export { useTruckIdList, FETCH_TRUCK_ID_KEY, type TruckId };
