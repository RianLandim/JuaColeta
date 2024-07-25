import { fetchApi } from "@/utils/api";
import { useMutation } from "@tanstack/react-query";
import { type CreateBilling } from "@jua/validators/billing/index";
import { z } from "zod";

const createBilling = async (body: CreateBilling) => {
  const [data, error] = await fetchApi("billing", {
    method: "POST",
    body,
    validator: z.object({ url: z.string().url() }),
  });

  if (error) {
    throw new Error("Something get wrong");
  }

  return data;
};

const useCreateBillingMutation = () =>
  useMutation({
    mutationKey: ["create-billing"],
    mutationFn: (body: CreateBilling) => createBilling(body),
  });

export { useCreateBillingMutation };
