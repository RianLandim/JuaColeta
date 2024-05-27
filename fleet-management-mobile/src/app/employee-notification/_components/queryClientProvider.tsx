import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}


export default function QueryClientProviderComponent({ children }: Props) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
