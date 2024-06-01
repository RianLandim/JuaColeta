import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";

type CreateEmployeeProps = {
  email: string;
  name: string;
  password: string;
  role: string;
};

const createEmployee = async (body: CreateEmployeeProps) => {
  const [data, error] = await fetchApi("user", {
    method: "POST",
    body,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

const useCreateEmployeeMutation = () =>
  useMutation({
    mutationKey: ["create-company"],
    mutationFn: (body: CreateEmployeeProps) => createEmployee(body),
  });

export { useCreateEmployeeMutation };
