import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, FlatList, useWindowDimensions, Text, ScrollView, StyleSheet, Button } from "react-native";
import Slider from './Slider';
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
// import { WebView } from 'react-native-webview';
import service from '../json/service.json'
// import apiConfig from '../api'
// import { API_URL } from '../_helper/config';
import axios from 'axios'

const Home = ({ navigation, title }) => {
  url = 'http://ieiudaipur.org/wp-json/wp/v2/pages/252'
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(url)
      .then(result => setData(result.data));
  }, []);
  // console.log("set Data:", data)
  const contentWidth = useWindowDimensions().width;

  return (
    <View>

      <ScrollView >

        <Slider />



        <View>

          <Text style={styles.heading}>Welcome to Sonic eSolution</Text>
          <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={require('../img/home.jpg')}
            />
          <Text style={styles.TopContent}>
            Sonic eSolution initiated with a mass of experts in computer & technical skills with an object to build technology as an inexpressible assets for your trade. "Sonic eSolution" is an innovative group of individuals providing web services & IT solutions in Udaipur (India). Since its introduction, Sonic eSolution has achieved a status of giving valuable services by the time complicated solutions & it’s all possible because of our devoted mass of experts. We deal in software development, web application development, SEO, mobile apps development and many other IT related solutions.
            
          </Text>
          <View style={{width:150, padding: 5}}>
          <Button  title="Read more..." onPress={()=> navigation.navigate('About')} />
          </View>
        


          <View>
            <Text style={styles.heading}>Our Services</Text>



            <FlatList
              // pagingEnabled={true}
              // showsHorizontalScrollIndicator={false}
              // contentContainerStyle={styles.list}
              keyExtractor={item => item.id}
              horizontal
              data={service.data}

              renderItem={itemData => (
                <View style={{ flex: 1, flexDirection: "row", marginBottom: 10 }}>
                  <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Services', { name: title })}>
                      <Text style={styles.title}>{itemData.item.heading}</Text>
                     
                        <Image style={styles.productImg} source={{ uri: itemData.item.image }} />                      

                    </TouchableOpacity>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View>
        </View>
        {/* <View>
          <HTML source={{ html: data && data.content && data.content.rendered }}
            contentWidth={contentWidth} />
        </View> */}
      </ScrollView>




    </View>



  );
};

const styles = StyleSheet.create({

  heading: {
    textAlign: "center",
    fontSize: 22,
    padding:6,
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: "#077DB9"

  },

  subheading: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",

  },

  TopContent: {
    margin: 5,
    padding: 2,
    fontSize: 14,
    lineHeight: 26,
    // alignItems: "justify"
    textAlign: "left"
  },

  img: {
    width: 400,
    height: 200,
    padding: 5,
    margin: 5,
    alignSelf: "center"

  },

  productImg: {
    width: 400,
    height: 200,
    margin: 2,
    padding: 2

  },

  title: {

    textAlign: "left",
    fontSize: 15, color: "black",
    padding: 5,
    fontWeight: "bold"
  },

  content: {
    color: "#000",
    fontSize: 14,
    width: 200,
    textAlign: "justify",
    fontFamily: "calibri",
    padding: 4

  },




  center: {
    flex: 1,
    textAlign: "justify",
    lineHeight: 30,
    padding: 5,
    margin: 5
  }



});

export default Home;