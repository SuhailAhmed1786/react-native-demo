import React from "react";
import { View, Image, Button, Text, StyleSheet } from "react-native";


const FancyItem = () => {

    return(
      <View>
        <Text style={styles.heading}> Fancy Item category</Text>
        <Text style={styles.Content}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </Text>
      </View>
  
    )
  }


  export default FancyItem


  const styles = StyleSheet.create(  
    {  
        Content:  
        {  
            padding: 5,
            margin: 5,
            textAlign: 'justify',
            lineHeight: 25,
            fontSize: 15
           
        }, 
        
    heading: {

        fontSize: 20,
        marginLeft: 5,
        
    }    
       
       
    });