import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { FlatGrid, SectionGrid } from "react-native-super-grid"

export default function HomeScreen({ navigation }) {

  const items = [{ name: "Clothes", pic: require("../../../assets/clothes.png") },
  { name: "Bracelet", pic: require("../../../assets/bracelet-1.png") },
  { name: "Shoes", pic: require("../../../assets/shoe.png") },
  { name: "Pants", pic: require("../../../assets/trousers.png") },
  { name: "Watch", pic: require("../../../assets/watch.png") },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.tinyLogo}
          source={require("../../../assets/DealyLogo.png")}
          resizeMode="contain"
        />
      </View>
      <FlatGrid
        itemDimension={130}
        items={items}
        style={styles.gridView}
        renderItem={({ item, index }) => (
          <View style={[styles.itemContainer]}>
            <Image source={item.pic} style={{ width: 150, height: 100, }} resizeMode="contain" />
            <Text style={styles.itemName}>{item.name}</Text>
          </View>
        )}
      />
    </View>

  )
}


const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#2a3750",
    justifyContent: 'center',
  },
  logoContainer: {
    flex: -1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -25,
    marginBottom: -85
  },
  tinyLogo: {
    width: 75,
    height: 200,
  },
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-start',
    borderRadius: 5,
    borderColor: "#e8c309",
    borderWidth: 2,
    padding: 10,
    height: 150,
    alignItems: "center",
    backgroundColor: "#e5e5e5"
  },
  itemName: {
    fontSize: 16,
    color: '#fca311',
    fontWeight: '600',
    paddingTop: 7
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
  },
});