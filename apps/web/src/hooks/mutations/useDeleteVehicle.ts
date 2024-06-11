import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

const deleteVehicle = async (id: string) => {
  const [data, error] = await fetchApi(`vehicle/${id}`, {
    method: "PUT",
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useDeleteVehicleMutation = () =>
  useMutation({
    mutationKey: ["delete-vehicle"],
    mutationFn: (id: string) => deleteVehicle(id),
  });

export { useDeleteVehicleMutation };
