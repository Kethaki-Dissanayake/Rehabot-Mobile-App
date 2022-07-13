import { StatusBar } from 'expo-status-bar'
import React from 'react';
import {View,Text,Image,StyleSheet,SafeAreaView,ImageBackground,TouchableOpacity, Button,} from 'react-native';

import Login from './src/auth/Login';
import Register from './src/auth/Register';
import Forget from './src/auth/Forget';
import AppRouter from './src/router/router';
import Splash from './src/splash/splash';





const App = (props) => {
  return (
    <AppRouter/>    
  );
};



export default App;


