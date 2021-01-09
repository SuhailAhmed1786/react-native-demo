import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight, imageUrl } from "../_helper/config";
const WebApplication = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
        
             <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={{uri: imageUrl + '/services/web-application.jpg'}}
            />
                <Text style={styles.heading}>Web Application Development</Text>
            <Text style={styles.Content}>
            At Sonic eSolution our web development team will add new flows into your everyday site operation routines and improve the efficiency of your activities online. Our expertise in complex corporate/enterprise web development and sophisticated portal development helps our clients to build robust, scalable, flexible and effective web projects through custom web development solutions that we provide.
            </Text>
            <Text style={styles.Content}>
            We offer custom and versatile web development services to organizations of any size, across all industries: High Tech, Retail, Services, Real Estate, Finance and Healthcare etc.
            </Text>

            <Text style={styles.Content}>
            We provide professional full-cycle services in custom software development, website designing, web application development, and more. We fulfill our work with cutting edge IT solutions and always keep our promises. Based on transparency, scalability and high expertise, our solutions will give a substantive boost to your projects so you can achieve your goal. Cost-effectiveness and high performance are the principals of our professional web development teams. We pride ourselves on being able to bring individual solutions to every client, as the needs are always unique, especially when it comes to complex areas like professional web development.
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