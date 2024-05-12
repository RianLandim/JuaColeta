import { Link } from "expo-router";
import { View, Text, ImageBackground, Image, TouchableOpacity, TextInput} from "react-native";

export default function WorkerLogin() {

    return(
        <ImageBackground
        className="h-full w-full items-center justify-center flex space-y-5"
        source={require("../../../assets/bgimage.png")} >

        <View >
          <Image
            source={require("../../../assets/logos/logo1.png")}         
         />
        </View>

        <View>
          <Text className="w-90 h-10 text-white text-center">
            Você está entrando no <Text className="text-juaGreen font-semibold">JUAColeta</Text> para funcionários!</Text>
          <Text className="w-80 h-10 text-white text-center"> 
            Bem vindo à equipe!</Text>
      </View>

      <View>
        <Text className=" text-juaGreen">Insira abaixo o código mostrado na tela do administrador</Text>
      </View>

      <View>
        <TextInput
          maxLength={6}
          keyboardType="numeric"
          placeholder="Ignore o tracinho do código!"
          placeholderTextColor="hwb(0, 100%, 100%)" 
          className="border-solid border-2 border-juaGreen w-80 py-2 rounded-lg text-center text-white mb-10"

          />
      </View>

      <Link href="/(tabs)/home" asChild>
        <TouchableOpacity>
          <Text className="text-juaGreen underline text-center">
          Caiu aqui de paraquedas? Continuar como usuário
          </Text>
        </TouchableOpacity>
      </Link>

        </ImageBackground>
  
    )
}