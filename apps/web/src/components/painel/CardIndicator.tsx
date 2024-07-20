import { Card, CardContent, CardHeader, CardTitle } from "@jua/ui/card";
import { Notification } from "iconsax-react";

type CardIndicatorProps = {
  title: string;
  value: string | number;
};

export function CardIndicator({ title, value }: CardIndicatorProps) {
  return (
    <Card className="bg-main-dark border-none text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>{title}</CardTitle>
        <Notification />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-sm text-slate-300">
          +20.1% comparado ao mês anterior
        </p>
      </CardContent>
    </Card>
  );
}
