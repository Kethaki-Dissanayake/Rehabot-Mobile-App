import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacityBase } from "react-native";
import { SafeAreaView,StyleSheet,TouchableOpacity, ScrollView, View, Text, ImageBackground, TextInput} from "react-native";

const Mirror_Mode = ()=>{

    const navigation=useNavigation();
    return(

        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../images/bg2.jpeg')}/>
                    
                </View>
                <View>
                    <Text style={styles.title}>
                            Mirror Mode
                    </Text>
                </View>
                
            </ScrollView>

        </SafeAreaView>
         

    )
}

const styles= StyleSheet.create({
    container:{
        flex:1
    },
    defaultBg:{
        width:'100%',
        height:130
        
    },
    formInput:{
        marginTop:10,
        padding:10,
        
    },
    textInput:{
        
        padding:10,
        fontSize:16,
        borderWidth:1,
        borderColor:'black',
        borderRadius:10,
    },
    title:{
        fontSize:22,
        paddingTop:15,
        textAlign:"center",
        fontWeight:"bold",
        color:'darkblue'
    },
     defaultButton:{
        padding:12,
        backgroundColor:'blue',
        borderRadius:10,
        
     }


});


export default Mirror_Mode;