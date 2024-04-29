import Image from "next/image";
import { Button } from "../../../../components/ui/button";

interface ChangeEmail {
  email: string;
}

export default function CardFuncionario({ email }: ChangeEmail) {
  return (
    <main className="bg-[#181D1A]/60 border-2 border-[#8CC63F] pb-[18%] px-[7%] rounded-xl text-main text-center">
      <h1 className="font-medium">E-mail</h1>
      <Image
        src="/settingsIcons/pencil-email.svg"
        alt="Editar e-mail"
        width={50}
        height={50}
      />
      <div className="font-light">
        <p>
          Vamos precisar verificar seu antigo e-mail, {email}, para podermos
          mudá-lo.
        </p>
        <p>
          Perdeu o acesso ao seu e-mail, por favor, entre em contato com o
          provedor do e-mail.
        </p>
      </div>
      <Button className="bg-main rounded-full text-black font-normal w-[30%]">
        Enviar código de verificação
      </Button>
    </main>
  );
}
