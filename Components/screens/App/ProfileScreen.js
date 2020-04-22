import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="This is the profile page"
        onPress={() =>
          navigation.push("EditProfile")
        }
      />
    </View>
  )
}