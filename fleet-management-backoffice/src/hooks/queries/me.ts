import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

type MeProps = {
  userId: string;
  username: string;
};

const fetchMe = () => api.get<MeProps>("authentication/me");

const useMe = () =>
  useQuery({
    queryKey: ["me"],
    queryFn: () => fetchMe(),
  });

export { fetchMe, useMe };
