import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './Components/MainNavigator'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loggedIn: null
    }
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDcLfVLwzlhXk17mb4SicCXmOkH-kN4DJ0",
      authDomain: "dealyv1.firebaseapp.com",
      databaseURL: "https://dealyv1.firebaseio.com",
      projectId: "dealyv1",
      storageBucket: "dealyv1.appspot.com",
      messagingSenderId: "681737230908",
      appId: "1:681737230908:web:733459240809398c5cc139",
      measurementId: "G-194ZTGQDZV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          loggedIn: true
        })
      }
      else {
        this.setState({
          loggedIn: false
        })
      }

    })
  }


  render() {
    return (
      <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

