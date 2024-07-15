import { CardIndicator } from "@/components/painel/CardIndicator";

export default async function Dashboard() {
  return (
    <div className="min-w-full h-full flex items-start justify-center">
      <div className="grid grid-cols-4 gap-4 w-full">
        <CardIndicator />
      </div>
    </div>
  );
}
