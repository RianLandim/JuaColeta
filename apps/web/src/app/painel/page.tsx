"use client";

import { CardIndicator } from "@/components/painel/CardIndicator";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@jua/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@jua/ui/avatar";
import { DatePickerWithRange } from "@jua/ui/range-datepicker";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { useDashboard } from "@/hooks/queries/useDashboard";

export default function Dashboard() {
  const [value, setValue] = useState<DateRange | undefined>();

  const dashboardQuery = useDashboard({
    startDate: value?.from?.toISOString() ?? new Date().toISOString(),
    endDate: value?.to?.toISOString() ?? new Date().toISOString(),
  });

  return (
    <div className="min-w-full h-full flex flex-col items-center justify-start gap-4">
      <div id="header" className="flex w-full items-center justify-between">
        <h1 className="font-bold text-2xl text-white">Painel Administrativo</h1>

        <DatePickerWithRange
          value={value}
          onChange={(value) => setValue(value as DateRange)}
        />
      </div>
      <div id="indicators" className="grid grid-cols-4 gap-4 w-full">
        <CardIndicator
          title="Empresas"
          value={dashboardQuery.data?.companiesCount ?? 0}
        />
        <CardIndicator title="Notificações" value={32} />
        <CardIndicator title="Notificações" value={45} />
        <CardIndicator title="Notificações" value={23} />
      </div>
      <div
        id="panels"
        className="w-full justify-between flex items-center gap-8"
      >
        <Card className="w-2/3">
          <CardHeader>
            <CardTitle>Grafíco</CardTitle>
          </CardHeader>
        </Card>
        <Card className="p-2 w-2/5">
          <CardHeader>
            <CardTitle>Novas Empresas</CardTitle>
            <CardDescription>23 novas empresas</CardDescription>
            <CardContent className="p-0">
              <div className="w-full flex items-center justify-center gap-4">
                <Avatar>
                  <AvatarImage />
                  <AvatarFallback>BR</AvatarFallback>
                </Avatar>
                <div className="w-full ">
                  <p>Prefeitura Barbalha</p>
                  <p className="text-sm text-slate-300">
                    rianlandim222@gmail.com
                  </p>
                </div>
              </div>
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
