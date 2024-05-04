import React from "react";
import { View, Text, ImageBackground, Image, Button } from "react-native";

export default function MainScreen() {
  return (
    <ImageBackground
      source={require("../../assets/bgimage.png")}
      // style={{ width: "100%", height: "100%" }}
      className="text-white w-full h-full">

      <Image source={require("../../assets/logos/logo1.png")}/>

      <Text> Bem Vindo ao Aplicativo oficial da</Text>
      <Text>JUAColeta</Text> 
      <Text>O Futuro da coleta coletiva em suas mãos</Text>

      <Button title="Entrar" color={"#8CC63F"}/>

      <Text>Trabalha usando o app? Cadastre-se Aqui!</Text>

    </ImageBackground>
  );
}
