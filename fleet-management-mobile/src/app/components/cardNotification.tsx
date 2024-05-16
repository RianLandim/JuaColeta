import { View, Image, Text } from "react-native";

interface backgroundColorInterface {
  color: "light" | "dark";
  text: string;
  isNew?: boolean;
}

export default function CardNotification({
  color,
  text,
  isNew,
}: backgroundColorInterface) {
  const imagePath =
    color !== "light"
      ? require("@/assets/Buttons/BellLight.png")
      : require("@/assets/Buttons/BellDark.png");
  return (
    <View
      className={`min-h-20 max-h-42  ${
        color === "light" ? "bg-LightGrayApp" : "bg-DarkGrayApp"
      } w-[85%] space-x-4 items-center flex flex-row rounded-md px-3 py-3 relative`}
    >
      <View
        className={`${
          isNew ? "rounded-full w-4 h-4 bg-redApp absolute -top-2 right-3" : ""
        }`}
      ></View>
      <Image source={imagePath} />

      <View className="flex w-5/6">
        <Text
          className={`${
            color === "light"
              ? "bg-LightGrayApp"
              : "bg-DarkGrayApp text-whiteApp"
          } font-bold`}
        >
          Aviso
        </Text>
        <Text
          className={`${
            color === "light"
              ? "bg-LightGrayApp"
              : "bg-DarkGrayApp text-whiteApp"
          } flex-shrink`}
        >
          {text}
        </Text>
      </View>
    </View>
  );
}
