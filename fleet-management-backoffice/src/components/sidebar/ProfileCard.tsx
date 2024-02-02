"use client";

import { useCurrentUser } from "@/hooks/queries/useCurrentUser";
import { Skeleton } from "../ui/skeleton";
import { match } from "ts-pattern";
import { useEffect } from "react";

export default function ProfileCard() {
  const currentUserQuery = useCurrentUser();

  useEffect(() => {
    if (currentUserQuery.isError) {
      console.log("current user query error", currentUserQuery.error);
    }
  }, [currentUserQuery.isError, currentUserQuery.error]);

  return (
    <div>
      {match(currentUserQuery)
        .with({ isLoading: true }, () => <Skeleton className="h-12 w-full" />)
        .with({ isError: true }, () => <></>)
        .otherwise(({ data }) => (
          <div className="bg-white w-full rounded-md p-2 flex items-center justify-center flex-col">
            <p>{data?.name}</p>
            <p>{data?.email}</p>
          </div>
        ))}
    </div>
  );
}
