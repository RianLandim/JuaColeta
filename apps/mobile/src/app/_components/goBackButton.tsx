import { useRouter } from "expo-router";
import { ArrowCircleLeft } from "iconsax-react-native";
import { TouchableWithoutFeedback } from "react-native";

interface GoBackButtonProps {
  css?: string;
}

export default function GoBackButton({ css }: GoBackButtonProps) {
  const navigation = useRouter();

  return (
    <TouchableWithoutFeedback onPress={() => navigation.push("/home")}>
      <ArrowCircleLeft
        className={`bg-LightGreenApp rounded-full px-2 py-2 shadow-md 
                  ${css}`}
        size={46}
        color="#000"
      />
    </TouchableWithoutFeedback>
  );
}
