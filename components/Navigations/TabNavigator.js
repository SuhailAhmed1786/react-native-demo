import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {TouchableOpacity, Text} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
// import { MainStackNavigator, ContactStackNavigator} from "./StackNavigator";r
import Home from "../pages/Home";
import About from '../pages/About'
import Contact from '../pages/Contact'
import TopNavigation from './TopNavigation'
import Enquiry from '../pages/Enquiry'
import { PRIMARY_COLOR } from "../_helper/config";
const Tab = createBottomTabNavigator();
const triggerCall = () => {
  // Check for perfect 10 digit length
  // if (inputValue.length != 10) {
  //   alert('Please insert correct contact number');
  //   return;
  // }

  const args = {
    number: '9928736111',
    prompt: true,
  };
  // Make a call
  call(args).catch(console.error);
};


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


      <Tab.Screen name="Enqiry" component={Contact}
        options={{
          tabBarIcon: () => <Icon name="id-badge" size={22} color="#fff" />

        }} />

      <Tab.Screen name="Call" component={Enquiry}
        options={{
          tabBarIcon: () => <Icon name="phone" size={22} color="#fff" />
        }}
        listeners={()=>({
          tabPress:e=>{
            <TouchableOpacity
          activeOpacity={0.7}
          onPress={triggerCall}>
        
        </TouchableOpacity>
          }
        })}
        />

    </Tab.Navigator>

  );
};

export default TabNavigator;