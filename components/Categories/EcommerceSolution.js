import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
const WebApplication = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
            
            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={require('../img/eCommerce.jpg')}
            />
                <Text style={styles.heading}>eCommerce Solutions</Text>
            <Text style={styles.Content}>
            eCommerce is the process of selling & purchasing of products and services over the internet, effectively by creating a web store. Here at Sonic eSolution we offer a best e-commerce solution, using design, layout, functionality and expert industry knowledge to build a purely performance oriented e-commerce website that attracts visitors and converts them from browsers into buyers.
            </Text>
            <Text style={styles.Content}>
            We thrive on providing best possible e-commerce solutions to boost your web presence, weather you’re a passionate new bee for startup of a new business or are well established, our eCommerce shopping solutions will make it a smooth transit for you to manage and run your business website. We develop an e-commerce site, which is secure, professional and efficient giving you an online shop, which is good for business!
            </Text>

            <Text style={styles.Content}>
            We develop scalable, reliable, customized and fast ecommerce solutions for small and medium size enterprises. Most small and midsize businesses face challenges while moving to online business. We help you at every step to make this happen for you. Right from development of ecommerce portal, managing customers, inventory, payment gateways to planning and executing cost effective marketing solutions, you can count on us at every step.
            </Text>
           

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default WebApplication



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