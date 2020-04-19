import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image} from 'react-native';
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import LoginScreen from "./screens/Auth/LoginScreen"
import RegistrationScreen from "./screens/Auth/RegistrationScreen"
import HomeScreen from "./screens/App/HomeScreen";
import ProfileScreen from "./screens/App/ProfileScreen";
import EditProfileScreen from "./screens/App/EditProfileScreen";



const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
<AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Registration" component={RegistrationScreen} />
</AuthStack.Navigator>
);

const ProfileStack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const ProfileStackScreen = () => (
<ProfileStack.Navigator initialRouteName='Profile'>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfileScreen} />
</ProfileStack.Navigator>
);



const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Home" component={HomeScreen} />
    <Tabs.Screen name="ProfilePage" component={ProfileStackScreen} />
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

export default function MainNavigator(){
  return(
<NavigationContainer>
    <RootStackScreen />
  </NavigationContainer>
  )
}
  
