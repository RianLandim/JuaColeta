import { useMutation } from "@tanstack/react-query";
import { api } from "../../utils/api";

interface NotificationType {
  type: "red" | "green" | "yellow";
}

const sendNotification = async (
  notification: NotificationType
): Promise<any> => {
  const response = await api.post("", notification);

  return response.data;
};

export const UseSendNotification = () =>
  useMutation({
    mutationKey: ["send-notification"],
    mutationFn: (body: NotificationType) => sendNotification(body),
  });
