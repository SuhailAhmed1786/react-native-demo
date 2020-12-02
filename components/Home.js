import React from "react";
import { View, Image, Button, Text, ScrollView, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import {DarkTheme as PaperDarkTheme, Provider as PaperProvider, } from 'react-native-paper';
import Slider from './Slider';
import GoogleLogin from './GoogleLogin'

const Home = () => {
  return (


    <View >


      <ScrollView>


        <Slider />

        <Text style={styles.center}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Text>
        <Text style={styles.center}>

        </Text>
        <GoogleLogin/>
        
      </ScrollView>

    </View>



  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    textAlign: "justify",
    lineHeight: 30,
    padding: 5,
    margin: 5
  }



});

export default Home;