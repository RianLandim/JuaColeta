import { fetchApi } from "@/utils/api";
import { dashboardValidator } from "@jua/validators/dashboard/index";
import { useQuery } from "@tanstack/react-query";

type DashboardParams = {
  startDate: string;
  endDate: string;
};

const fetchDashboard = async (params: DashboardParams) => {
  const [data, error] = await fetchApi("dashboard/info", {
    method: "GET",
    validator: dashboardValidator,
    queryParams: {
      startDate: params.startDate,
      endDate: params.endDate,
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};

export const useDashboard = (params: DashboardParams) =>
  useQuery({
    queryKey: ["dashboard-info"],
    queryFn: () => fetchDashboard(params),
  });
