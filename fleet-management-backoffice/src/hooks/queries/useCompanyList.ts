import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const companyValidator = z.object({
  id: z.string(),
  cnpj: z.string(),
  socialName: z.string(),
  address: z.object({
    id: z.string(),
    number: z.string(),
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

const FETCH_COMPANIES_KEY = ["fetch-companies-list"];

const fetchCompanies = async () => {
  const response = await api.get("company");

  const parsedResponse = z.array(companyValidator).safeParse(response.data);

  if (!parsedResponse.success) {
    throw new Error("Erro ao validar empresas");
  }

  return parsedResponse.data;
};

const useCompaniesList = () =>
  useQuery({
    queryKey: FETCH_COMPANIES_KEY,
    queryFn: fetchCompanies,
  });

export { useCompaniesList, FETCH_COMPANIES_KEY, type Companies };
