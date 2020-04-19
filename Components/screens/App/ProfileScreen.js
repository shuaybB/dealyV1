import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image} from 'react-native';


export default function ProfileScreen({ navigation }){
    return(
        <View>
        <Text>ProfileScreen</Text>
        <Button
          title="React Native by Example"
          onPress={() =>
            navigation.push("EditProfile")
          }
        />       
        </View>
        )
}