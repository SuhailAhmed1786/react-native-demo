import React, { useEffect, useState } from "react";
import { View, Image, ActivityIndicator, Button, ScrollView, Text, StyleSheet } from "react-native";
import axios from 'axios'

const url = 'http://newsapi.org/v2/everything?q=news&sortBy=publishedAt&apiKey=d358363cd87040ccad7eeb9ee4191540'

const News = () => {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        axios.get(url)
            .then(result => {
                if (result.status == 200) {
                    setNewsData(result.data)
                    
                }
                   
            });

            

    }, []);

    console.log("news data", newsData)

    return (
        <View>
            <Text style={styles.topnews}>Top News</Text>
            <ScrollView>
                {newsData.articles && newsData.articles.map((item, index) => {
                    return (
                       
                        <View style={styles.container}>
                            <View style={styles.card}>
                            <Text style={{textAlign: "center", padding: 5, fontSize: 16}}>{item.author}</Text>
                            <Image style={{ width: 400, height: 200 }} source={{ uri: item.urlToImage }} />
                            
                            <Text style={styles.newsContent}>{item.title}</Text>
                            <Text style={styles.newsContent}>{item.description}</Text>
                           
                            </View>
                            
                        </View>
                       
                    )
                })
                }
            </ScrollView>
        </View>
    )
}


export default News


const styles = StyleSheet.create(
    {
        topnews: {
            fontSize: 20,
            height: 50,
            color: "#fff",
            textAlignVertical: "center",
            textAlign: "center",
            backgroundColor: "#1689C3"


        },
        
        newsContent: {
            textAlign: "left",
            fontSize: 14,
            padding: 5,
            lineHeight:20,
            color: "#555"
        },

        container: {
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#ecf0f1',
            padding: 8,
            alignItems: "center"
        },
        card: {
            height: 420,
            width: 420,
            backgroundColor: "#fff",
            borderRadius: 15,
            elevation: 20,
            padding: 10
        },

        // card1: {
        //     height: 100,
        //     width: 420,
        //     backgroundColor: "white",
        //     borderRadius: 5,
        //     elevation: 20,
        //     padding: 10
        // },


    });