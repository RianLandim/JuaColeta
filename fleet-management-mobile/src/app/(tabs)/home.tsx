import { ImageBackground } from "react-native";
import Navbar from "../components/navbar";
import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
  useForegroundPermissions,
  requestForegroundPermissionsAsync,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requesLocationdPermissions() {
    const { status } = await requestForegroundPermissionsAsync();

    console.log({ status });

    if (status !== "granted") {
      console.log("nothing");
    }
    const currentPosition = await getCurrentPositionAsync({});
    console.log("aqui");
    console.log(currentPosition);
    setLocation(currentPosition);
  }

  useEffect(() => {
    (async () => {
      let { status } = await requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  console.log({ location });
  return (
    <ImageBackground
      className="w-full h-full"
      source={require("../../../assets/bgimage.png")}
    >
      <Navbar />

      {location && (
        <MapView
          className="flex-1 w-full"
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      )}
    </ImageBackground>
  );
}
