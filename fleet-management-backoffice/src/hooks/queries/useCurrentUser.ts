import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

import { z } from "zod";

const currentUserValidator = z.object({
  id: z.string().cuid2(),
  email: z.string().email(),
  name: z.string(),
  cellphone: z.string(),
  license: z.string().nullish(),
  role: z.enum(["ADMIN", "COMPANY_ADMIN", "DRIVER"]),
  createdAt: z.coerce.date(),
});

type CurrentUser = z.infer<typeof currentUserValidator>;

const FETCH_CURRENT_USER_KEY = ["fetch-current-user"];

const fetchCurrentUser = async () => {
  const response = await api.get("user/current-user");

  const parsedResponse = currentUserValidator.parse(response);

  return parsedResponse;
};

const useCurrentUser = () =>
  useQuery({
    queryKey: FETCH_CURRENT_USER_KEY,
    queryFn: () => fetchCurrentUser(),
  });

export { useCurrentUser, type CurrentUser, FETCH_CURRENT_USER_KEY };
