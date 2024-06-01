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

type CompaniesQueryParams = {
  page: string;
  offset: string;
  name: string;
  cnpj: string;
};

const FETCH_COMPANIES_KEY = ["fetch-companies-list"];

const fetchCompanies = async (queryParams?: CompaniesQueryParams) => {
  const [data, _] = await fetchApi("company", {
    method: "GET",
    validator: companyValidator.array(),
    queryParams,
  });

  return data;
};

const useCompaniesList = (queryParams?: CompaniesQueryParams) =>
  useQuery({
    queryKey: FETCH_COMPANIES_KEY,
    queryFn: () => fetchCompanies(queryParams),
  });

export { useCompaniesList, FETCH_COMPANIES_KEY, type Companies };
