import React from 'react';
import { View, StyleSheet } from 'react-native';
import MainScreen from './screens/Mainscreen/Index';

export default function App() {
  return (
    <View style={stylesapp.background}>
      <MainScreen/>
    </View>
  );
}


const stylesapp = StyleSheet.create({
  background: {
    alignItems: "center",
    padding: -100
  }
})
