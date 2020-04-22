import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function MapScreen({ navigation }) {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button
                title="This is the Map page"
                onPress={() =>
                    navigation.push("EditProfile")
                }
            />
        </View>
    )
}