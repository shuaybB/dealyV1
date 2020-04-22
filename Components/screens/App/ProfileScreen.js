import React, { Component , useEffect, useState} from "react"
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity } from 'react-native';
import { Avatar } from "react-native-elements"
import firebase from "firebase";
import { useFocusEffect } from '@react-navigation/native';

export default function ProfileScreen({ navigation }) {
  const [{ currentUser }, setUser] = useState(firebase.auth())

  const signOutUser = async () => {
    try {
        await firebase.auth().signOut();
        navigation.navigate('Auth');
    } catch (e) {
        console.log(e);
    }
}
  
  const onBtnEdit = () => {
    navigation.navigate('EditProfile')
  }
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

        <Text style={styles.emailName}>{currentUser.email}</Text>
        <Text style={styles.emailName}>{currentUser.displayName}</Text>

      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={onBtnEdit}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonContainer} onPress={signOutUser}>
            <Text style={styles.buttonText}>Log out</Text>
          </TouchableOpacity>
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
  emailName: {
    padding: 20,
    fontSize: 30,
    color: '#fff',
    fontWeight: '600',
  },
  buttonContainer: {
    backgroundColor: "#E5E5E5",
    padding: 15,
    marginBottom: 12,
    width: "85%",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#fca311",
    borderWidth: 2
  },
});
