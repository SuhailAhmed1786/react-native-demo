import React from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";


const Header = () => {

    return(
      <View >
        <View>
        
        <Image style={{widht:40, height: 50}} source={{uri : 'http://sonicesolution.com/images/sonic-esolution.png'}} />
                    
        </View>
       
      </View>
  
    )
  }


  export default Header


  const styles = StyleSheet.create(  
    {  
    MainHeader: {
        height: 200,
        // backgroundColor: "red"
    },

    heading: {

        fontSize: 24,
        padding: 5,
        margin: 5,
        
        color: "#fff",
        textAlign: "center"
        
    }    
       
       
    });