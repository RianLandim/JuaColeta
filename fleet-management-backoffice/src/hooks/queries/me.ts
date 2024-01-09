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

const fetchCurrentUser = () =>
  api.get<any>("user/current-user").then(({ data }) => {
    const parsedUser = currentUserValidator.safeParse(data);

    if (!parsedUser.success) {
      throw new Error("Erro ao validar informações");
    }

    return parsedUser.data;
  });

const useCurrentUser = () =>
  useQuery({
    queryKey: ["current-user"],
    queryFn: () => fetchCurrentUser(),
  });

export { useCurrentUser };
