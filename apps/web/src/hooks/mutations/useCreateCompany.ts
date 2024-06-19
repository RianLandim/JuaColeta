import { fetchApi } from "@/utils/api";
import { CreateCompany } from "@jua/validators";
import { useMutation } from "@tanstack/react-query";

const createCompany = async (body: CreateCompany) => {
  const [data, error] = await fetchApi("company", {
    method: "POST",
    body,
  });

  return data;
};

const useCreateCompanyMutation = () =>
  useMutation({
    mutationKey: ["create-company"],
    mutationFn: (body: CreateCompany) => createCompany(body),
  });

export { useCreateCompanyMutation };
