import { Card, CardContent, CardHeader, CardTitle } from "@jua/ui/card";
import { Notification } from "iconsax-react";

export function CardIndicator() {
  return (
    <Card className="bg-main-dark border-none text-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle>Notificações</CardTitle>
        <Notification />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">55</div>
        <p className="text-sm text-slate-300">+20.1% do mês anterior</p>
      </CardContent>
    </Card>
  );
}
