import React , {Component } from "react"
import { StyleSheet, Text, View , Button, Image} from 'react-native';


export default class SplashScreen extends Component{

    constructor(props){
        super(props)
        this.state={
            
        }
    }
    render(){
        return(
            <View style={{flex:1,justifyContent: "center",alignItems: "center", backgroundColor:'#2e2f60'}}>

                <Image style={{width:70, height:50}} source={require('../../assets/Logo.png')}/>

                <Button title="Get Started!" color="#ffffff"/>

            </View>
        )

    }
}