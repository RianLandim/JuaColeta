import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

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

type Companies = z.infer<typeof companyValidator>;

const FETCH_COMPANY_KEY = ["fetch-company"];

const fetchCompany = async (id: string) => {
  const [data, _] = await fetchApi(`company/${id}`, {
    method: "GET",
    validator: companyValidator,
  });

  return data;
};

const useCompanyList = (id: string) =>
  useQuery({
    queryKey: [...FETCH_COMPANY_KEY, id],
    queryFn: () => fetchCompany(id),
    enabled: !!id,
  });

export { useCompanyList, FETCH_COMPANY_KEY, type Companies };
