import { useMe } from "@/hooks/queries/me";
import { match } from "ts-pattern";

export async function Sidebar() {
  const meQuery = useMe();

  return (
    <aside>
      {match(meQuery)
        .with({ isLoading: true }, () => <></>)
        .with({ isError: true }, () => <></>)
        .otherwise(({ data }) => (
          <></>
        ))}
    </aside>
  );
}
