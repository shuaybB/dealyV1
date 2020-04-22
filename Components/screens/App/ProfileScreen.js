import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements"


export default function ProfileScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/DealyLogo.png")}
          resizeMode="contain"
        />
        <Avatar source={{
          uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }} size="xlarge" rounded showEditButton containerStyle={{ marginTop: -50 }} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a3750",
    justifyContent: 'center',
    alignItems: "center"
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -25
  },
  tinyLogo: {
    width: 75,
    height: 200,
  },
});
