import React , {Component, useState,  } from "react"
import { StyleSheet, Text, View , Button, Image, TouchableOpacity, TextInput} from 'react-native';
import firebase from "firebase";



export default function EditProfileScreen({ navigation }){



  var user = firebase.auth().currentUser;
  const [nickname, setNickname] = useState("");

  
  const confirmEdit = () => {
    user.updateProfile({
      displayName: nickname,
    }).then(function() {
      // Update successful.
    }).catch(function(error) {
      // An error happened.
    });
  }
 

  const backBtn = () => {
    navigation.push('Profile')
  }
    return(
        <View style={styles.container}>
        <Text style={styles.emailName}>EditProfileScreen</Text>

        <TextInput
            style={styles.input}
            placeholder="Edit Display Name:"
            onChangeText={(nickname) => setNickname(nickname)}
            value={nickname}
          />
        <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={confirmEdit}>
            <Text style={styles.buttonText}>Confirm Changes</Text>
          </TouchableOpacity>  

        <TouchableOpacity 
        style={styles.buttonContainer} 
        onPress={backBtn}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>      
        </View>
        );
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
  }
});