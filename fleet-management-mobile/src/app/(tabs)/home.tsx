import { ImageBackground } from "react-native";
import Navbar from "../components/navbar";
import {
  requestBackgroundPermissionsAsync,
  getCurrentPositionAsync,
  LocationObject,
} from "expo-location";
import MapView, {Marker} from "react-native-maps";
import { useEffect, useState } from "react";



export default function Home() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requesLocationdPermissions() {
    const { granted } = await requestBackgroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requesLocationdPermissions();
  }, []);

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
          <Marker coordinate={{latitude: location.coords.latitude,
            longitude: location.coords.longitude}} />
        </MapView>
      )}
    </ImageBackground>
  );
}
