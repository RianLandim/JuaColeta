import { fetchApi } from "@/utils/api";
import { EditTruckValidatorProps } from "@jua/validators/truck";
import { useMutation } from "@tanstack/react-query";

const editVehicle = async (body: EditTruckValidatorProps) => {
  const [data, error] = await fetchApi("vehicle", {
    method: "PUT",
    body,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useEditVehicleMutation = () =>
  useMutation({
    mutationKey: ["edit-vehicle"],
    mutationFn: (body: EditTruckValidatorProps) => editVehicle(body),
  });

export { useEditVehicleMutation };
