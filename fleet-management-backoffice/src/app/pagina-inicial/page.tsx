"use client";

import Image from "next/image";
import Navbar from "./_components/Navbar";

export default function LandingPage() {
  return (
    <div className="w-full h-screen bg-[#1E1E1E] ">
      <Navbar />
      <Image
        className="pb-9"
        src="/landingPage/foto.png"
        width={1920}
        height={1}
        alt="Imagem Coleta de Lixo"
      />

      <div className="text-white text-base w-full bg-[#1E1E1E]">
        <p className="max-w-80 m-auto text-center">
          Bem-vindo ao <span className="text-main">JUA</span>Coleta, um app que
          facilitará a comunicação entre o
          <span className="text-main"> cidadão</span> e a{" "}
          <span className="text-main"> prefeitura</span> de{" "}
          <span className="text-main"> Juazeiro do Norte</span> acerca da{" "}
          <span className="text-main"> coleta de lixo</span>. Saiba onde o
          caminhão está, há quanto tempo ele está da sua casa e se haverá atraso
          na coleta hoje.
        </p>
        <p className="max-w-80 m-auto text-center pt-3 pb-10">
          Esse é o<span className="text-main"> JUA</span>Coleta!
        </p>
      </div>
    </div>
  );
}
