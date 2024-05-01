import React from "react";
import { View, Text, Button, ImageBackground, Image } from "react-native";
import { styles } from "./styles";

export default function MainScreen() {
  return (
    <View>
      <ImageBackground
        source={require("../../assets/bgimage.png")}
        // style={styles.image}
        resizeMode="cover"
        className="flex-1 justify-center h-screen w-full"
      >
        <Image
          source={require("../../assets/logos/logo1.png")}
          style={{ width: 200, height: 200, marginBottom: 100 }}
          resizeMode="contain"
        />
        <Text style={styles.texto}> Bem-vindo ao aplicativo oficial da</Text>
        <Text style={styles.vtexto}> JUAColeta</Text>
        <Text style={styles.texto}>
          {" "}
          O futuro da coleta de lixo em suas mãos{" "}
        </Text>
        <Button color={"#8CC63F"} title="Entrar" />

        <Text style={styles.work}>Trabalha usando o app? Cadastre aqui!</Text>
      </ImageBackground>
    </View>
  );
}
