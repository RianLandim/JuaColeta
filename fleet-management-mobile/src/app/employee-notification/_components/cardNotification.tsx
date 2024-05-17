import { View, Text } from "react-native";

interface backgroundColorInterface {
  color: "red" | "green" | "yellow";
}

export default function EmployeeCardNotification({
  color,
}: backgroundColorInterface) {
  let mainText = "";
  let textExample = "";
  let textColor = "";
  let borderColor = "";

  switch (color) {
    case "red":
      mainText = "Impossibilidade de continuar";
      textExample = "Ex: Problema técnico no caminhão/colega ferido";
      textColor = "text-redApp";
      borderColor = "border-redApp";
      break;
    case "green":
      mainText = "Pequeno Imprevisto";
      textExample = "Ex: Engarrafamento";
      textColor = "text-LightGrayApp";
      borderColor = "border-LightGrayApp";
      break;
    case "yellow":
      mainText = "Médio imprevisto";
      textExample = "Ex: Mudança de rota (acidente)";
      textColor = "text-yellowApp";
      borderColor = "border-yellowApp";
      break;
  }

  return (
    <View
      className={`h-28 max-h-42 w-full space-x-4 items-center flex flex-row rounded-md px-3 py-3 relative border-2 ${borderColor}`}
    >
      <View className="flex w-5/6 justify-center items-center">
        <Text className={`${textColor} font-bold text-xl`}>{mainText}</Text>

        <Text className={`${textColor}`}>{textExample}</Text>
      </View>
    </View>
  );
}
