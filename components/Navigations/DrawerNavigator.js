import React from "react";
import { View, Text, Button, Image, StatusBar } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from "./TabNavigator";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Logo from '../Navigations/Logo';
import { PRIMARY_COLOR } from "../_helper/config";
import CustomSidebarMenu from './CustomSidebarMenu'
import TopNavigation from './TopNavigation'
import Header from '../pages/Header'



const Drawer = createDrawerNavigator();
const screenOptionStyle = {

  headerStyle: {

    backgroundColor: PRIMARY_COLOR
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
        activeBackgroundColor: "#4EA6FE",
        // inactiveBackgroundColor: '#808B96',
        style: {
          backgroundColor: PRIMARY_COLOR


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

<Drawer.Screen name="Service" component={TopNavigation}

options={{
  headerTitle: () => <Header />,
  drawerIcon: () => <Icon name="server" size={22} color="#fff" />,
  headerRight: () => (
    <Logo />


  )
}}
/>

      <Drawer.Screen name="Enquiry" component={Contact}
        options={{
          headerTitle: () => <Header />,
          drawerIcon: () =>
            <Icon name="id-badge" size={25} color="#fff" />,

          headerRight: () => (
            <Logo />


          )
        }}
      />


    </Drawer.Navigator>



  )
}

export default DrawerNavigator