import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/components/ui/use-toast";
import { useDeleteVehicleMutation } from "@/hooks/mutations/useDeleteVehicle";
import { FETCH_VEHICLES_KEY } from "@/hooks/queries/useTruck";
import { useQueryParam } from "@/hooks/useQueryParam";
import { useQueryClient } from "@tanstack/react-query";

export function DeleteTruckDialog() {
  const { createQueryString, searchParams } = useQueryParam();
  const { toast } = useToast();

  const apiUtils = useQueryClient();
  const deleteVehicleMutation = useDeleteVehicleMutation();

  return (
    <AlertDialog
      open={!!searchParams.has("delete")}
      onOpenChange={(open) => {
        if (!open) {
          createQueryString([{ name: "delete", value: undefined }]);
        }
      }}
    >
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Ao deletar você não poderá mais visualizar ou editar o caminhão!
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction
            onClick={() =>
              deleteVehicleMutation.mutate(searchParams.get("delete") ?? "", {
                onSuccess: () => {
                  toast({
                    title: "Sucesso",
                    description: "Caminhão removido com sucesso",
                  });
                  apiUtils.invalidateQueries({ queryKey: FETCH_VEHICLES_KEY });
                },
              })
            }
          >
            Aceitar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
