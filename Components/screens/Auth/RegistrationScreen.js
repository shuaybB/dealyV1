import React, { Component, useState } from "react"
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import firebase from "firebase";


export default function RegistrationScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    if (email === '' && password === '') {
      Alert.alert('Enter details to signup!')
    } else {
      setLoading({
        isLoading: true,
      })
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User registered successfully!')
          navigation.navigate('Login')
        })
        .catch(error => setError(error.message))
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/DealyLogo.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.emailAndPassword}>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />

          <TextInput
            placeholder="Enter your password"
            style={styles.input}
            secureTextEntry
            onChangeText={(password) => setPassword(password)}
            value={password}
          />
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={registerUser}
          >
            <Text style={styles.buttonText}>Sign Up!</Text>
          </TouchableOpacity>

          <Text style={styles.errorText}>{error}</Text>
        </View>
      </View>
    </View>
  );
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e5e5e5",
    alignItems: "center",
  },

  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emailAndPassword: {
    flex: 2,
  },
  tinyLogo: {
    width: 225,
    height: 300,
  },
  input: {
    height: 50,
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    borderColor: "#fca311",
    borderWidth: 2,
    fontSize: 18,
    marginBottom: 20,
    paddingLeft: 10,
  },
  errorText: {
    fontSize: 25,
    color: "red",
    alignSelf: "center",
    marginTop: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    backgroundColor: "#2e2f60",
    padding: 15,
    marginBottom: 12,
    width: "85%",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#fca311",
    borderWidth: 2
  },
});
