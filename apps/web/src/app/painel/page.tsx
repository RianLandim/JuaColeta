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
import { Button } from "@jua/ui/button";
import { useCreateBillingMutation } from "@/hooks/mutations/billing/useCreateBilling";
import { useToast } from "@jua/ui/use-toast";
import { subDays } from "date-fns";

export default function Dashboard() {
  const [value, setValue] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const { toast } = useToast();

  const dashboardQuery = useDashboard({
    startDate: value?.from?.toISOString() ?? new Date().toISOString(),
    endDate: value?.to?.toISOString() ?? new Date().toISOString(),
  });

  const createBillingMutation = useCreateBillingMutation();

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
            <CardContent>
              <Button
                isLoading={createBillingMutation.isPending}
                onClick={() =>
                  void createBillingMutation.mutate(
                    {
                      companyId: "x9unlf5rw4hhm15npwjkl5g4",
                      dueIn: 30,
                      priceId: "price_1PamB3RtOsJLAH9zWjO8tyJb",
                      status: "SUBSCRIBED",
                    },
                    {
                      onSuccess: (data) => {
                        window.location.href = data.url;
                      },
                      onError: (error) => {
                        toast({
                          title: "Ocorreu um erro",
                          description: error.message,
                          variant: "destructive",
                        });
                      },
                    },
                  )
                }
              >
                Testar Checkout
              </Button>
            </CardContent>
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
