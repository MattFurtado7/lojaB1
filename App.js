import React from 'react';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';  


import Home from './src/pages/Home';
import Loja from './src/pages/Loja';
import brigChoco from './src/pages/brigChoco';

const Stack = createNativeStackNavigator();



export default function App() {

 return(

   <NavigationContainer>
     <Stack.Navigator initialRouteName='Home'>
       <Stack.Screen 
       name='Home' 
       component={Home} 
       options={{
        title: 'Loja do Matheus', 
        headerStyle: {
          backgroundColor: '#0070c0'
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
       }}
       />
       <Stack.Screen 
       name='Loja'
       component={Loja}
       options={{
        title: 'Loja do Matheus', 
        headerStyle: {
          backgroundColor: '#0070c0'
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
       }}       
       />
       <Stack.Screen 
       name='brigChoco'
       component={brigChoco}
       options={{
        title: 'Loja do Matheus', 
        headerStyle: {
          backgroundColor: '#0070c0'
        },
        headerTintColor: '#FFF',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 25
        }
       }}       
       />
     </Stack.Navigator>
   </NavigationContainer>
 ) 
}


