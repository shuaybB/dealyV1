import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image} from 'react-native';

export default function HomeScreen ({ navigation }){
    return(
        <View style={styles.container}>
        <Text>HomeScreen</Text>
        <Button
          title="React Native by Example"
          onPress={() =>
            navigation.push("Profile")
          }
        />       
        </View>
    )    
}
     

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#2e2f60',
      justifyContent: 'center'
  }
  });