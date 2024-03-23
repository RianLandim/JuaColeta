"use client";

import { LayoutProps } from "@/utils/types/layoutProps";
import { Metadata } from "next";
import Image from "next/image";
import foto from "../../../public/landingPage/foto.png";
import Navbar from "./_components/Navbar";

export default function LandingPage({ children }: LayoutProps) {
  return (
    <div className="bg-[#1E1E1E] w-full h-full">
      <Navbar />
      <Image
        className="pb-9"
        src="/landingPage/foto.png"
        width={1920}
        height={350}
        alt="Imagem Coleta de Lixo"
      />
      <div className="max-w-80 m-auto text-white text-center text-base pb-10">
        <p>
          Bem-vindo ao <span className="text-main">JUA</span>Coleta, um app que
          facilitará a comunicação entre o
          <span className="text-main"> cidadão</span> e a{" "}
          <span className="text-main"> prefeitura</span> de{" "}
          <span className="text-main"> Juazeiro do Norte</span> acerca da{" "}
          <span className="text-main"> coleta de lixo</span>. Saiba onde o
          caminhão está, há quanto tempo ele está da sua casa e se haverá atraso
          na coleta hoje.
        </p>
        <p className="pt-3">
          Esse é o<span className="text-main"> JUA</span>Coleta!
        </p>
      </div>
    </div>
  );
}
