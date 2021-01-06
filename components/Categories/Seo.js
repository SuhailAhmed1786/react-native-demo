import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
const Seo = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
            
            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={require('../img/seo.jpg')}
            />
                <Text style={styles.heading}>Search Engine Optimization</Text>
            <Text style={styles.Content}>
            Search Engine Optimization (SEO) is the important process for the promotion of a website. Search engine optimization is the process to make a site visible in topmost order of a search engine result. The leading search engines are like Google, Yahoo, and Bing etc.
            </Text>
            <Text style={styles.Content}>
            We are delivering effective seo service by our dedicated seo specialists. By optimizing the keywords and adding knowledge rich contents, we are providing an effective seo service to you. Many companies are not aware of the importance of keywords and contents in a website. These are the two major things which can provide a good ranking for your site. We are with experienced seo technicians to achieve maximum result in our each seo projects.
            </Text>

            <Text style={styles.Content}>
            Our key services in seo process are, link building, on page and off page optimization, directory submission, article submission, pay per click, SEM, adwords, adsense and press releases etc… for a site seo is the important fact to promote it, unless following a proper seo, it is impossible to earn a good search rank result as well as the traffic. We offers different packages to boost your business and web traffic, you can choose the appropriate seo package according to your business needs. Our professional service in Search engine optimization will be a great experience for you. Let’s make some positive changes in your business graph.
            </Text>
           

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default Seo



const styles = StyleSheet.create( 
    
    {
        img: {
            width: 400,
            height: 240,
            padding: 5,
            margin: 5,
            alignSelf: "center"
        
          },  
        Content:  
        {  
            padding: 5,
            margin: 5,
            textAlign: 'justify',
            lineHeight: 25
           
        }, 
        
    heading: {

        fontSize: 20,
        marginLeft: 5,
        marginTop: 5
        
    }    
       
       
    });