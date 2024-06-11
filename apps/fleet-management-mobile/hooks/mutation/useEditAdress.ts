import { z } from "zod";
// import { fetchApi } from "@/utils/api";

// import { useMutation } from "@tanstack/react-query";

const editAdressValidator = z.object({
  street: z.string().min(1),
  neighborhood: z.string().min(1),
  number: z.string().min(1),
});

type EditAdressProps = {
  street: string;
  neighborhood: string;
  number: string;
};

const editEmployee = async (body: EditAdressProps) => {
  // const [data, _] = await fetchApi(``, {
  //   method: "PUT",
  //   body,
  //   validator: editAdressValidator,
  // });
  // return data;
};

const UseEditAdressMutation = () => {
  // useMutation({
  //   mutationKey: ["edit-employee"],
  //   mutationFn: (body: EditAdressProps) => editEmployee(body),
  // });
};

export { UseEditAdressMutation };
