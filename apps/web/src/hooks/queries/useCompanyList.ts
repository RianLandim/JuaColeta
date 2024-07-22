import { fetchApi } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { companyValidator } from "@jua/validators/company/index";

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

export { useCompaniesList, FETCH_COMPANIES_KEY };
