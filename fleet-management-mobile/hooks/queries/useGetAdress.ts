// import { fetchApi } from "../../utils/api";
import { useQuery } from "@tanstack/react-query";

// type AdressQueryParams = {
//   text: string;
//   isNew: boolean;
// };

const FETCH_ADRESS= ["fetch-adress"];

// TO DO: PUT THE ROUTE!
const fetchAdress = async () => {
  // const [data, _] = await fetchApi(`userAdress`, {
  //   method: "GET",
  // });
  // return data;
};

const useNotificationList = () => {
  useQuery({
    queryKey: FETCH_ADRESS,
    queryFn: () => fetchAdress(),
  });
};

export { useNotificationList, FETCH_ADRESS};
