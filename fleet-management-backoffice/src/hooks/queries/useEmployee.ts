import { fetchApi } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { number, string, z } from "zod";

const employeeValidator = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string(),
  cellphone: z.string(),
  license: z.string().nullish(),
  role: z.string(),
  createdAt: z.coerce.date(),
});

type Employee = z.infer<typeof employeeValidator>;

type EmployeeQueryParams = {
  id: string;
  email: string;
  name: string;
  cellphone: string;
  license: string | null;
  role: string;
  createdAt: string;
};

const FETCH_USER_WITH_VEHICLES_KEY = ["fetch-user-with-vehicles"];

const fetchEmployees = async (queryParams?: EmployeeQueryParams) => {
  const [data, _] = await fetchApi("user", {
    method: "GET",
    validator: employeeValidator.array(),
  });

  return data;
};

const useEmployeesList = (queryParams?: EmployeeQueryParams) =>
  useQuery({
    queryKey: FETCH_USER_WITH_VEHICLES_KEY,
    queryFn: () => fetchEmployees(queryParams),
  });

export { useEmployeesList, FETCH_USER_WITH_VEHICLES_KEY, type Employee };
