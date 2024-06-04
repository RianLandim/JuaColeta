import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

type CreateQueryStringParams = {
  name: string;
  value?: string;
};

export function useQueryParam() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (params: CreateQueryStringParams[]) => {
      const query = new URLSearchParams(searchParams);

      for (const param of params) {
        if (param.value) {
          query.set(param.name, param.value);
        } else {
          query.delete(param.name);
        }
      }

      router.replace(pathname + "?" + query.toString());
    },
    [searchParams]
  );

  return { searchParams, createQueryString };
}
