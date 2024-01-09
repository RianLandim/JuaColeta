"use client";

import { useCurrentUser } from "@/hooks/queries/me";
import { match } from "ts-pattern";

export function Sidebar() {
  const currentUserQuery = useCurrentUser();

  return (
    <aside className="bg-slate-400 w-1/5 p-4 flex items-center justify-evenly flex-col h-screen">
      {match(currentUserQuery)
        .with({ isLoading: true }, () => <></>)
        .with({ isError: true }, () => <></>)
        .otherwise(({ data }) => (
          <div className="bg-white w-full rounded-md p-2 flex items-center justify-center flex-col">
            <p>{data?.name}</p>
            <p>{data?.email}</p>
          </div>
        ))}
    </aside>
  );
}
