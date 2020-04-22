import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function HotDealScreen({ navigation }) {
    return (
        <View>
            <Text>ProfileScreen</Text>
            <Button
                title="This is the hot deals page"
                onPress={() =>
                    navigation.push("EditProfile")
                }
            />
        </View>
    )
}