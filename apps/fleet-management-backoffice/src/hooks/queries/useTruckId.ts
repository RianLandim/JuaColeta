import { useQuery } from "@tanstack/react-query";
import { fetchApi } from "../../utils/api";
import { truckValidator } from "@fleet/validators";

const FETCH_TRUCK_ID_KEY = ["FETCH_TRUCK_ID_KEY"];

const UseTruckId = async (id: string) => {
  const [data, error] = await fetchApi(`vehicle/${id}/list`, {
    method: "GET",
    validator: truckValidator,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useTruckIdList = (id: string) =>
  useQuery({
    queryKey: [...FETCH_TRUCK_ID_KEY, id],
    queryFn: ({ queryKey }) => UseTruckId(queryKey[1]),
  });

export { useTruckIdList, FETCH_TRUCK_ID_KEY };
