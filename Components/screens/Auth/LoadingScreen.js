import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image} from 'react-native';


export default function LoadingScreen({ navigation }){

    return(
        <View>
        <Text>LoadingScreen</Text>
        <Button
          title="React Native by Example"
          onPress={() =>
            navigation.push("Profile")
          }
        />       
        </View>
        );
}