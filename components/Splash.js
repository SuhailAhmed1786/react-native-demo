import React, { Component } from 'react';  
 import { Platform, StyleSheet, View, Text,  
TouchableOpacity, Alert } from 'react-native';  
 import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from './DrawerNavigator'
import Home from './Home';
import About from './About';
import TabNavigator from './TabNavigator';
// import App from '.App'

 export default class Splash extends Component 
{  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                 {/* <Image style={{ width: 50, marginRight: 20, padding: 10, margin: 5, height: 50 }} source={require('./img/logo.png')} /> */}
                </View>  
             </View> )  
             
         return(  
           
            // <NavigationContainer><DrawerNavigator/></NavigationContainer>,
             <View style = { styles.MainContainer }>
                   
                    
                   
                   
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : null  
                }  


            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center',  
        paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 10,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
});