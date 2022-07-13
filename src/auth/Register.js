import { useNavigation } from "@react-navigation/core";
import React from "react";
import { TouchableOpacityBase } from "react-native";
import { SafeAreaView,StyleSheet,TouchableOpacity, ScrollView, View, Text, ImageBackground, TextInput} from "react-native";

const Register = ()=>{
    const navigation=useNavigation();
    return(

        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../../images/bg2.jpeg')}/>
                    
                </View>
                <View>
                    <Text style={styles.title}>
                            Doctor Sign In
                    </Text>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter your Name"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter your email address"/>
                </View>
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Enter your Password" secureTextEntry={true}/>
                </View >
                <View style={styles.formInput}>
                    <TextInput style={styles.textInput} placeholder="Confirm Password" secureTextEntry={true}/>
                </View >

                

                <View style={styles.formInput}>
                
                    <TouchableOpacity style={styles.defaultButton}>
                        <Text style={{textAlign:'center',color:'white', fontSize:18 }}> Register</Text>
                    </TouchableOpacity>
                </View>

                <View>
                <Text style={{textAlign:'center',color:'#3250a8', fontSize:16 }}> If you already have an account?</Text>
                    <TouchableOpacity onPress={()=>{navigation.navigate("Login")}}>
                        <Text style={{textAlign:'center',color:'#3250a8', fontSize:18, fontWeight:'bold' }}> Login Here</Text>
                    </TouchableOpacity>
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
        height:160
        
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


export default Register;