import React from "react"
import { createDrawerNavigator } from '@react-navigation/drawer';
import SplashScreen from "./screens/splash.screen"
import LoginScreen from "./screens/LoginScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Login">
      <Drawer.Screen
        name="Splash"
        component={SplashScreen}
        options={{ drawerLabel: 'Splash' }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{ drawerLabel: 'Login' }}
      />
      
    </Drawer.Navigator>
  );
}

export default MyDrawer