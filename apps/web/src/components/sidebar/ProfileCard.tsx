"use client";

import { useCurrentUser } from "@/hooks/queries/useCurrentUser";
import { Skeleton } from "../ui/skeleton";
import { match, P } from "ts-pattern";
import { useEffect } from "react";

export default function ProfileCard() {
  const currentUserQuery = useCurrentUser();

  useEffect(() => {
    if (currentUserQuery.isError) {
      console.log("current user query error", currentUserQuery.error);
    }
  }, [currentUserQuery.isError, currentUserQuery.error]);

  const avatarName = (name: string) => {
    const hasSurname = name.split(" ");

    if (hasSurname.length > 1) {
      return hasSurname[0][0] + hasSurname[1][0];
    }

    return name[0] + name[1];
  };

  return (
    <>
      {match(currentUserQuery)
        .with({ isLoading: true }, () => (
          <Skeleton className="h-12 w-full bg-main-dark-active" />
        ))
        .with({ isError: true }, () => <></>)
        .with({ data: P.not(undefined).and(P.not(null)) }, ({ data }) => (
          <div className="w-full rounded-md p-2 flex items-center justify-start mb-4 gap-2">
            <div className="bg-green-500 rounded-md py-2 px-3 uppercase">
              {avatarName(data.name)}
            </div>
            <div className="w-full flex flex-col">
              <span className="text-white">{data.name}</span>
              <span className="text-white text-sm">JuaColeta</span>
            </div>
          </div>
        ))
        .otherwise(() => (
          <></>
        ))}
    </>
  );
}
