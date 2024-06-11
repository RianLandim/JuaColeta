import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

type CreateCompanyProps = {
  socialName: string;
  cnpj: string;
  address: {
    number: number;
    street: string;
    city: string;
    state: string;
    country: string;
    district: string;
    zipCode: string;
  };
};

const companyValidator = z.object({
  id: z.string(),
  cnpj: z.string(),
  socialName: z.string(),
  address: z.object({
    id: z.string(),
    number: z.number(),
    street: z.string(),
    district: z.string(),
    city: z.string(),
    state: z.string(),
    country: z.string(),
    zipCode: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const createCompany = async (body: CreateCompanyProps) => {
  const [data, _] = await fetchApi("company", {
    method: "POST",
    body,
    validator: companyValidator,
  });

  return data;
};

const useCreateCompanyMutation = () =>
  useMutation({
    mutationKey: ["create-company"],
    mutationFn: (body: CreateCompanyProps) => createCompany(body),
  });

export { useCreateCompanyMutation };
