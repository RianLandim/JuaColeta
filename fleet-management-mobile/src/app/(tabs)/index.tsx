import { View, Text, ImageBackground, Image, Button } from "react-native";

export default function LoginScreen() {
  return (
    <ImageBackground
      className="h-full w-full items-center justify-center flex space-y-5"
      source={require("../../../assets/bgimage.png")}
    >
      <View >
        <Image
          source={require("../../../assets/logos/logo1.png")}
          
        />
      </View>

      <Text className="text-white"> Bem Vindo ao Aplicativo oficial da</Text>
      <Text className="text-white">JUAColeta</Text>
      <Text className="text-white">
        O Futuro da coleta coletiva em suas mãos
      </Text>

      <Button title="Entrar" color={"#8CC63F"} />

      <Text className="text-white">
        Trabalha usando o app? Cadastre-se Aqui!
      </Text>
    </ImageBackground>
  );
}
