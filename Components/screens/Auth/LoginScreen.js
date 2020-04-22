import React, { Component, useState } from "react";
import firebase from "firebase";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { set } from "react-native-reanimated";
import { Keyboard } from "react-native";
import { Icon } from "react-native-vector-icons/FontAwesome"
import { Input } from "react-native-elements"

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  onBottomPress = () => {
    Keyboard.dismiss();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(onLoginSuccess)
      .catch((err) => {
        setError(err.message);
      });
  };
  onLoginSuccess = () => {
    setError("");
    setLoading(false);
    navigation.push("App");
  };

  onBtnSignup = () => {
    navigation.push("Registration")
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
            onPress={onBottomPress}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={onBtnSignup}
          >
            <Text style={styles.buttonText}>Dont have an account? Sign Up here!</Text>
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
