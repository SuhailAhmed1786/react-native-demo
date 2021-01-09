import React, {useEffect} from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {TouchableOpacity, Button, View, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';
// import { MainStackNavigator, ContactStackNavigator} from "./StackNavigator";r
import Home from "../pages/Home";
import News  from '../pages/News'
import About from '../pages/About'
import Contact from '../pages/Contact'
import TopNavigation from './TopNavigation'
import { PRIMARY_COLOR } from "../_helper/config";
import call from 'react-native-phone-call';
const Tab = createBottomTabNavigator();

const triggerCall = () => {
  return null
}

const TabNavigator = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
       
        style: {
          backgroundColor: PRIMARY_COLOR,
        },
        labelStyle: {
          textAlign: 'center',
          marginBottom: 7,
          fontSize: 12
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2
        },
      }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: () => <Icon name="home" size={22} color="#fff" />
      }} 
      
      />
      <Tab.Screen name="About" component={About}
        options={{
          tabBarIcon: () => <Icon name="book" size={22} color="#fff" />

        }} />
      <Tab.Screen name="Services" component={TopNavigation} options={{
        tabBarIcon: () => <Icon name="server" size={22} color="#fff" />
      }} />

      <Tab.Screen name="News" component={News}
        options={{
          tabBarIcon: () => <Icon name="ad" size={22} color="#fff" />

        }} />


      <Tab.Screen name="Enqiry" component={Contact}
        options={{
          tabBarIcon: () => <Icon name="id-badge" size={22} color="#fff" />

        }} />

        
      <Tab.Screen name="Call" component={triggerCall}
        options={{
          tabBarIcon: () => <Icon name="phone" size={22} color="#fff" />
        }}
        listeners={()=>({
          tabPress:e=>{
            const args = {
              number: '9928736111',
              prompt: true,
            };
            // Make a call
            call(args).catch(console.error);
           
          }
        })}
        />

    </Tab.Navigator>
  );
};

export default TabNavigator;