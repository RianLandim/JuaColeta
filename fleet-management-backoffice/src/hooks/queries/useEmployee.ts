import { fetchApi } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

const employeeValidator = z.object({
  name: z.string(),
  phone: z.string(),
  plate: z.string(),
  idTruck: z.number(),
  id: z.string(),
});

type Employee = z.infer<typeof employeeValidator>;

type EmployeeQueryParams = {
  page: string;
  offset: string;
  name: string;
  idTruck: string;
};

const FETCH_USER_WITH_VEHICLES_KEY = ["fetch-user-with-vehicles"];

const fetchEmployees = async (queryParams?: EmployeeQueryParams) => {
  const [data, _] = await fetchApi(`user/user-with-vehicles/`, {
    method: "GET",
    validator: employeeValidator.array(),
    queryParams,
  });

  return data;
};

const useEmployeesList = (queryParams?: EmployeeQueryParams) =>
  useQuery({
    queryKey: FETCH_USER_WITH_VEHICLES_KEY,
    queryFn: () => fetchEmployees(queryParams),
  });

export { useEmployeesList, FETCH_USER_WITH_VEHICLES_KEY, type Employee };
