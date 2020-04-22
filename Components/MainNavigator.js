import React, { Component } from "react"
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import LoginScreen from "./screens/Auth/LoginScreen"
import RegistrationScreen from "./screens/Auth/RegistrationScreen"
import HomeScreen from "./screens/App/HomeScreen";
import ProfileScreen from "./screens/App/ProfileScreen";
import EditProfileScreen from "./screens/App/EditProfileScreen";
import LoadingScreen from "./screens/Auth/LoadingScreen";
import MapScreen from "./screens/App/MapScreen";
import HotDealScreen from "./screens/App/HotDealScreen"


const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Registration" component={RegistrationScreen} />
  </AuthStack.Navigator>
);

const ProfileStack = createStackNavigator();
const ProfileStackScreen = () => (
  <ProfileStack.Navigator initialRouteName='Profile'>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
  </ProfileStack.Navigator>
);

const Tabs = createMaterialBottomTabNavigator();
const TabsScreen = () => (
  <Tabs.Navigator activeColor="#fca311" barStyle={{ backgroundColor: "#14213d", marginBottom: -5 }} >
    <Tabs.Screen name="Home" component={HomeScreen} options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="home" color={color} size={26} />), }} />
    <Tabs.Screen name="Hot Deals" component={HotDealScreen} options={{ tabBarLabel: "Hot Deals", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="fire" color={color} size={26} />), }} />
    <Tabs.Screen name="Map" component={MapScreen} options={{ tabBarLabel: "Home", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="map-marker" color={color} size={26} />), }} />
    <Tabs.Screen name="Settings" component={ProfileStackScreen} options={{ tabBarLabel: "Profile", tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="account" color={color} size={26} />), }} />
  </Tabs.Navigator>
);

const RootStack = createStackNavigator();

const RootStackScreen = () => (
  <RootStack.Navigator initialRouteName='Auth' headerMode="none">

    <RootStack.Screen
      name="App"
      component={TabsScreen}
      options={{
        animationEnabled: false
      }}
    />

    <RootStack.Screen
      name="Auth"
      component={AuthStackScreen}
      options={{
        animationEnabled: false
      }}
    />
  </RootStack.Navigator>
);

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

