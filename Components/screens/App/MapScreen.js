import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';


export default function MapScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.tinyLogo}
                    source={require("../../../assets/DealyLogo.png")}
                    resizeMode="contain"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#2a3750",
        justifyContent: 'center',
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
});