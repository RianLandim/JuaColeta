import { useState, useEffect } from "react";
import { View, Image, TouchableOpacity, Animated } from "react-native";
import { Link } from "expo-router";

export default function ActionButton() {
  const [noti] = useState(new Animated.Value(-40));
  const [cal] = useState(new Animated.Value(-40));
  const [timer] = useState(new Animated.Value(-40));
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (pop) {
      Animated.parallel([
        Animated.timing(noti, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(cal, {
          toValue: 30,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(timer, {
          toValue: 60,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      Animated.parallel([
        Animated.timing(noti, {
          toValue: -40,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(cal, {
          toValue: -40,
          duration: 500,
          useNativeDriver: false,
        }),
        Animated.timing(timer, {
          toValue: -40,
          duration: 500,
          useNativeDriver: false,
        }),
      ]).start();
    }
  }, [pop]);

  return (
    <View style={{ position: "absolute", bottom: 25, right: 25 }}>
      <Animated.View style={{ marginBottom: noti }}>
        <Link href="/(tabs)/notification" asChild>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/ActionButton/notiButton.png")}
              style={{ width: 50, height: 50, bottom: -35, right: -25 }}
            />
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View style={{ marginBottom: cal }}>
        <Link href="/(tabs)/calendar" asChild>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/ActionButton/calButton.png")}
              style={{ width: 50, height: 50, bottom: -35, right: -25 }}
            />
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <Animated.View style={{ marginBottom: timer }}>
        <Link href="/(tabs)/timer" asChild>
          <TouchableOpacity>
            <Image
              source={require("../../../assets/ActionButton/timerButton.png")}
              style={{ width: 50, height: 50, bottom: -35, right: -25 }}
            />
          </TouchableOpacity>
        </Link>
      </Animated.View>

      <TouchableOpacity onPress={() => setPop(!pop)}>
        <Image
          source={require("../../../assets/ActionButton/Abutton.png")}
          style={{ width: 90, height: 90 }}
        />
      </TouchableOpacity>
    </View>
  );
}
