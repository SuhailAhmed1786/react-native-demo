import React from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";


const Header = () => {

    return(
      <View >
        <View>
        <Text style={styles.heading}>sonic eSolution</Text>
                    {/* <Text style={{color: "#fff", marginBottom: 10, marginLeft: 80,padding: 5}}>more innovative solutions</Text> */}
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