"use client";

import {
  HydrationBoundary,
  MutationCache,
  Query,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, ReactNode, useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import SessionProvider from "./SessionProvider";

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        mutationCache: new MutationCache({
          onSuccess: (_data, _variables, _context, mutation) => {
            const nonStaticQueries = (query: Query) => {
              const defaultStaleTime =
                queryClient.getQueryDefaults(query.queryKey).staleTime ?? 0;
              const staleTimes = query.observers
                .map((observer) => observer.options.staleTime)
                .filter((staleTime) => staleTime !== undefined);

              const staleTime =
                query.getObserversCount() > 0
                  ? Math.min(...staleTimes)
                  : defaultStaleTime;

              return staleTime !== Number.POSITIVE_INFINITY;
            };

            queryClient.invalidateQueries({
              queryKey: mutation.options.mutationKey,
              predicate: nonStaticQueries,
            });
          },
        }),
        defaultOptions: {
          queries: {
            retry: 3,
          },
        },
      }),
  );

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary>{children}</HydrationBoundary>
        <ReactQueryDevtools
          initialIsOpen={process.env.NODE_ENV === "development"}
        />
      </QueryClientProvider>
    </SessionProvider>
  );
};
