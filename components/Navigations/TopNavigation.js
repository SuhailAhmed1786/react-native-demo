import * as React from 'react';
import { View, Text, Button, Image, ScrollView, SafeAreaView} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WebDesign from '../Categories/WebDesign'
import SoftwareDevelopment from '../Categories/SoftwareDevelopment'
import WebApplication from '../Categories/WebApplication'
import Seo from '../Categories/Seo'
import EcommerceSolution from '../Categories/EcommerceSolution'
import MobileAppDevelopment from '../Categories/MobileAppDevelopment'
import BpoService from '../Categories/BpoService'
import CorporateTraining from '../Categories/CorporateTraining'

import { PRIMARY_COLOR } from "../_helper/config";
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
          backgroundColor: PRIMARY_COLOR,
        },
        labelStyle: {
          textAlign: 'center',
          marginBottom: 7,
          fontSize: 12,
          fontFamily: 'sans-serif'  
        },
        indicatorStyle: {
          borderBottomColor: '#1A5276',
          borderBottomWidth: 4
        },
    
      
      }}>
      
      <Tab.Screen name="Web Design" component={WebDesign} />
      <Tab.Screen name="Software Development" component={SoftwareDevelopment} />      
      <Tab.Screen name="Web Application" component={WebApplication} />
      <Tab.Screen name="Ecommerce Solution" component={EcommerceSolution} />      
      <Tab.Screen name="Mobile App Development" component={MobileAppDevelopment} />
      <Tab.Screen name="Seo & Sem" component={Seo} />
      <Tab.Screen name="Bpo Service" component={BpoService} />
      <Tab.Screen name="Corporate Training" component={CorporateTraining} />
      
      
      
      
    </Tab.Navigator>
    
    
      
  );
}


export default MyTabs;