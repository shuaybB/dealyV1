import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image, TouchableOpacity,} from 'react-native';


export default function RegistrationScreen({ navigation }){

    return(
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
          onPress={onBottomPress}
        >
          <Text style={styles.buttonText}>Sign Up!</Text>
        </TouchableOpacity>

        <Text style={styles.errorText}>{error}</Text>
      </View>
    </View>
        );
}