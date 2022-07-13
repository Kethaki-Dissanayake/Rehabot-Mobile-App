import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import Register from "../auth/Register";
import Forget from "../auth/Forget";
import Splash from "../splash/splash";
import Login from "../auth/Login";
import Appointments from "../Components/Appointments";
import Patients from "../Components/Patients";
import Sheduled_Meetings from "../Components/Sheduled_meetings";
import Profile from "../Components/Profile";
import Mirror_Mode from "../Components/Mirror_Mode";


const Drawer = createDrawerNavigator();

const AppRouter = ()=> {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Splash">
                
                <Drawer.Screen options={{headerShown:false}} name="Home" component={Splash}/>
                <Drawer.Screen  name="Login" component={Login}/>
                <Drawer.Screen  name="Forget Password" component={Forget}/>
                <Drawer.Screen name="Register" component={Register}/>
                <Drawer.Screen name="Appointments" component={Appointments}/>
                <Drawer.Screen name="Profile" component={Profile}/>
                <Drawer.Screen name="Sheduled Meetings" component={Sheduled_Meetings}/>
                <Drawer.Screen name="Patients" component={Patients}/>
                <Drawer.Screen name="Mirror Mode" component={Mirror_Mode}/>
                
                
            

            
            </Drawer.Navigator>
        </NavigationContainer>

    )
}

/*<Drawer.Screen options={{headerShown:false}} name="Splash" component={Splash}/>*/

export default AppRouter;