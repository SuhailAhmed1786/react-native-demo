import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./Home";
import Mens from './Categories/Mens'
import Women from './Categories/Women'
import Shoes from './Categories/Shoes'
import FancyItem from './Categories/FancyItem'
import Toys from './Categories/Toys'
import Wallet from './Categories/Wallet'
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
   
    <Tab.Navigator
    
      initialRouteName="Mens"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        scrollEnabled: true,
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#2E86C1',
        },
        labelStyle: {
          textAlign: 'center',
          marginBottom: 7,
          fontSize: 13,
          fontFamily: 'sans-serif'
        },
        indicatorStyle: {
          borderBottomColor: '#1A5276',
          borderBottomWidth: 4
        },
    
      
      }}>
       
      {/* <Tab.Screen name="Home" component={Home} /> */}
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Mens" component={Mens} />
      <Tab.Screen name="Women" component={Women} />      
      <Tab.Screen name="Shoes" component={Shoes} />
      <Tab.Screen name="Toys" component={Toys} />      
      <Tab.Screen name="Wallet" component={Wallet} />
      <Tab.Screen name="Fancy Item" component={FancyItem} />
      
      
      
      
    </Tab.Navigator>
    
    
      
  );
}


export default MyTabs;