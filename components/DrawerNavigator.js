import React from "react";
import { View, Text, Button, Image, StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TabNavigator from "./TabNavigator";
import About from "./About";
import Contact from "./Contact";
import Logo from './Logo';
import Services from "./Services";
import CustomSidebarMenu from './CustomSidebarMenu'
import TopNavigation from './TopNavigation'
import Mens from './Categories/Mens'
import Header from './Header'
import Home from './Home'


const Drawer = createDrawerNavigator();
const screenOptionStyle = {

  headerStyle: {

    backgroundColor: "#2E86C1"
  },
  headerTintColor: "white"
}


const DrawerNavigator = () => {



  return (






    <Drawer.Navigator screenOptions={screenOptionStyle}
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#fff',
        itemStyle: { marginVertical: 5 },
        activeBackgroundColor: "#2E86C1",
        // inactiveBackgroundColor: '#808B96',
        style: {
          backgroundColor: '#2874A6'


        },

        labelStyle: {
          fontSize: 15,
          color: "#fff",

        },

      }} drawerContent={(props) => <CustomSidebarMenu {...props} />}>

      <Drawer.Screen name="Home" component={TabNavigator}




        options={{
          drawerIcon: () => <Icon name="home" size={22} color="#fff" />,
          headerTitle: () => <Header />,
          headerRight: () => (


            <Logo />


          )

        }}
      />





      <Drawer.Screen name="About" component={About}

        options={{
          headerTitle: () => <Header />,
          drawerIcon: () => <Icon name="book" size={22} color="#fff" />,
          headerRight: () => (
            <Logo />


          )
        }}
      />

      <Drawer.Screen name="Services" component={Services}
        options={{
          headerTitle: () => <Header />,
          drawerIcon: () => <Icon name="server" size={22} color="#fff" />,
          headerRight: () => (
            <Logo />


          )
        }}
      />

      <Drawer.Screen name="Contact" component={Contact}
        options={{
          headerTitle: () => <Header />,
          drawerIcon: () =>
            <Icon name="phone" size={25} color="#fff" />,

          headerRight: () => (
            <Logo />


          )
        }}
      />


    </Drawer.Navigator>



  )
}

export default DrawerNavigator