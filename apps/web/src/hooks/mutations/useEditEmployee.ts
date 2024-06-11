import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

const employeeValidator = z.object({
  name: z.string(),
  phone: z.string(),
  plate: z.string(),
  idTruck: z.number(),
  id: z.string(),
});

type EditEmployeeProps = {
  name: string;
  phone: string;
  idTruck: number;
  id: string
};

const editEmployee = async (body: EditEmployeeProps, id: string) => {
  const [data, _] = await fetchApi(`user/${id}`, {
    method: "PUT",
    body,
    validator: employeeValidator,
  });

  return data;
};

const useEditEmployeeMutation = () => 
  useMutation({
    mutationKey: ["edit-employee"],
    mutationFn: (body: EditEmployeeProps) => editEmployee(body, body.id),
  });

export { useEditEmployeeMutation };
