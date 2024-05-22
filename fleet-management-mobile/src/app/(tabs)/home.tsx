import { ImageBackground } from "react-native";
import Navbar from "../components/navbar";
import {
  getCurrentPositionAsync,
  LocationObject,
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  LocationAccuracy,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from "react";

export default function Home() {
  const [location, setLocation] = useState<LocationObject | null>(null);

  async function requesLocationdPermissions() {
    const { status } = await requestForegroundPermissionsAsync();

    if (status === "granted") {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }

  useEffect(() => {
    requesLocationdPermissions();
  }, []);

  useEffect(() => {
    watchPositionAsync(
      {
        accuracy: LocationAccuracy.Highest,
        timeInterval: 1000,
        distanceInterval: 1,
      },
      (response) => {
        // console.log("New Location: ", response);
        setLocation(response);
      }
    );
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
