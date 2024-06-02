import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

const deleteEmployee = async (id: string) => {
  const [data, _] = await fetchApi(`user/${id}`, {
    method: "DELETE",
  });

  return data;
};

const useDeleteEmployeeMutation = () =>
  useMutation({
    mutationKey: ["edit-employee"],
    mutationFn: (id: string) => deleteEmployee(id),
  });

export { useDeleteEmployeeMutation };
