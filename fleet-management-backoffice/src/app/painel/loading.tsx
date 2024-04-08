import { ReactElement } from "react";
import { LoadingIndicator } from "../../components/ui/loadingIndicator";

export default function DashboardLoading(): ReactElement {
  return (
    <section className="w-full h-full flex-col flex text-white font-medium text-3xl pl-52 justify-center">
      <div className="flex-col space-y-4 flex w-fit items-center">
        <p>Carregando, por favor aguarde!</p>
        <LoadingIndicator color={"primary"} thickness={"normal"} size={"2xl"} />
      </div>
    </section>
  );
}

// <div className="w-full h-screen bg-gray-500 flex items-center justify-center">
//   <span className="text-red-500 text-3xl font-bold">Carregando...</span>
// </div>

interface error {
  errorMessage: string;
}

export function DashboardError({ errorMessage }: error): ReactElement {
  return (
    <section className="w-full h-full flex-col flex text-red-600 text-3xl font-medium pl-52 justify-center">
      <div className="flex-col space-y-4 flex w-fit items-center">
        <p className=" ">Ocorreu um erro: {errorMessage}</p>
        <p>Por favor contate a administração para obter ajuda.</p>
      </div>
    </section>
  );
}
