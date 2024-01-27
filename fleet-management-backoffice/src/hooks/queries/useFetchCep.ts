"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

const cepSchemaValidator = z.object({
  cep: z.string(),
  state: z.string(),
  city: z.string(),
  neighborhood: z.string().nullish(),
  street: z.string().nullish(),
});

interface UseFetchCep {
  cep: string;
  enabled: boolean;
}

const FETCH_CEP_KEY = ["fetch-cep-info"];

const fetchCep = async (cep: string) => {
  const cepFormmated = cep.match(/^\d{8}$/);

  const unformmatedCep = cepFormmated ? cep : cep.replace(/\D/g, "");

  const response = await axios.get(
    `https://brasilapi.com.br/api/cep/v2/${unformmatedCep}`
  );

  const parsedResponse = cepSchemaValidator.safeParse(response.data);

  if (!parsedResponse.success) {
    console.log("erro");
    throw new Error("Erro ao validar resposta do serviço de cep");
  }

  return parsedResponse.data;
};

const useFetchCep = ({ cep, enabled }: UseFetchCep) =>
  useQuery({
    queryKey: FETCH_CEP_KEY,
    queryFn: () => fetchCep(cep),
    enabled,
    retry: 3,
  });

export { useFetchCep };
