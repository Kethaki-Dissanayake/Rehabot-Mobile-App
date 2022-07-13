
import {View,Text, Image} from "react-native";
//import React,{useEffect, useState} from "react";
//import {useNavigation} from "react-navigation/core";
import { useNavigation } from '@react-navigation/native';


const Splash = ()=>{

    //const [isGo, setIsGo]=useState(true);
    const Navigation = useNavigation();

    /*useEffect(()=>{
        if(isGo==true){
            setTimeout(()=>{
                Navigation.navigate("Login");
                setIsGo(false);
            },2000);

            
        }
    }
    );*/


    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#070e45'}} >
            <Image source={require('../../images/Rehabot.png')}  style={{width:150, height:150, justifyContent:'center'}}/>
            <Text style={{alignItems:'center', fontWeight:"bold",fontSize:15,color:'gray'}} onPress={()=>{Navigation.navigate("Login")}}>MEDICARE - Telerehabilitation Service</Text>
        </View>
    )
}

export default Splash;