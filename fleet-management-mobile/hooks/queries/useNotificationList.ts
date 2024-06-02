import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

type NotificationQueryParams = {
  text: string;
  isNew: boolean;
};

const FETCH_NOTIFICATION = ["fetch-notification"];

// TO DO: PUT THE ROUTE!
const fetchNotification = async () => {
  const response = await api.get(`notification`);
  return response.data;
};

const UseNotificationList = () => {
  return useQuery({
    queryKey: FETCH_NOTIFICATION,
    queryFn: () => fetchNotification(),
  });
};
export { UseNotificationList, FETCH_NOTIFICATION };
