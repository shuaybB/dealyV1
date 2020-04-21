import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function LoadingScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/Logo.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2f60",
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tinyLogo: {
    width: 70,
    height: 50,
  }
});
