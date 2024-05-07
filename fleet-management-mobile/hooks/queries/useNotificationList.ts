// import { fetchApi } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

type NotificationQueryParams = {
  text: string;
  isNew: boolean;
};

const FETCH_NOTIFICATION = ["fetch-notification"];

// TO DO: PUT THE ROUTE!
const fetchNotification = async (queryParams?: NotificationQueryParams) => {
  // const [data, _] = await fetchApi(``, {
  //   method: "GET",
  // });
  // return data;
};

const useNotificationList = (queryParams?: NotificationQueryParams) => {
  useQuery({
    queryKey: FETCH_NOTIFICATION,
    queryFn: () => fetchNotification(queryParams),
  });
};
export { useNotificationList, FETCH_NOTIFICATION };
