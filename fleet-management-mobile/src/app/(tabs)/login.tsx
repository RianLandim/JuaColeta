import { View, Text, ImageBackground, Image, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View >
      <ImageBackground
      className="text-white h-full w-full"
        source={require("../../../assets/bgimage.png")}
        // style={{ width: "100%", height: "100%" }}
      >
        <Image source={require("../../../assets/logos/logo1.png")} />

        <Text> Bem Vindo ao Aplicativo oficial da</Text>
        <Text>JUAColeta</Text>
        <Text>O Futuro da coleta coletiva em suas mãos</Text>

        <Button title="Entrar" color={"#8CC63F"} />
        <Text>Trabalha usando o app? Cadastre-se Aqui!</Text>
      </ImageBackground>
    </View>
  );
}
