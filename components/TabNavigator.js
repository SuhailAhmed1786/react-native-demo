import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome';
// import { MainStackNavigator, ContactStackNavigator} from "./StackNavigator";r
import Home from "./Home";
import About from './About'
import Contact from './Contact'
import Services from './Services'
import TopNavigation from './TopNavigation'
// import { NavigationContainer } from "@react-navigation/native";
const Tab = createBottomTabNavigator();


const TabNavigator = () => {
  return (

    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#2E86C1',
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
      }} />
      <Tab.Screen name="Product" component={TopNavigation} options={{
        tabBarIcon: () => <Icon name="product-hunt" size={22} color="#fff" />
      }} />
      <Tab.Screen name="About" component={About}
        options={{
          tabBarIcon: () => <Icon name="book" size={22} color="#fff" />

        }} />

      {/* <Tab.Screen name="Services" component={Services} options={{
        tabBarIcon: () => <Icon name="server" size={22} color="#fff" />
      }} /> */}


      <Tab.Screen name="Contact" component={Contact}
        options={{
          tabBarIcon: () => <Icon name="phone" size={22} color="#fff" />

        }} />

    </Tab.Navigator>
    
  );
};

export default TabNavigator;