import React , {Component, useState } from "react"
import { StyleSheet, Text, View , Button, Image, TouchableOpacity, TextInput, Alert} from 'react-native';
import firebase from "firebase";


export default function RegistrationScreen({ navigation }){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = () => {
    if(email === '' && password === '') {
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
      .catch(error => setError(error.message ))      
    }
  }




    return(
<View style={styles.container}>
<View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/Logo.png")}
        />
      </View>

      <View style={styles.emailAndPassword}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="email"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />

        <TextInput
          placeholder="password"
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
    backgroundColor: "#2e2f60",

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
    width: 70,
    height: 50,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,.5)",
    paddingLeft: 10,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 15,
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
    borderRadius: 8,
  },
});
