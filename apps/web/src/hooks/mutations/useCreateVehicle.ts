import { fetchApi } from "@/utils/api";
import { CreateTruckValidatorProps } from "@jua/validators/truck";
import { useMutation } from "@tanstack/react-query";

const createVehicle = async (body: CreateTruckValidatorProps) => {
  const [data, error] = await fetchApi("vehicle", {
    method: "POST",
    body,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useCreateVehicleMutation = () =>
  useMutation({
    mutationKey: ["create-vehicle"],
    mutationFn: (body: CreateTruckValidatorProps) => createVehicle(body),
  });

export { useCreateVehicleMutation };
