import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight, imageUrl  } from "../_helper/config";
const SoftwareDevelopment = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
            
          
            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={{uri: imageUrl + '/services/software-development.jpg'}}
            />
                <Text style={styles.heading}>Software Development</Text>
            <Text style={styles.Content}>
            Software’s plays a key role in day to day work and transactions of your company and when the software you are working with is not compatible with your company's work culture, the need of custom Application Development comes in. At Sonic eSolution, we take care of your application software requirements with professional Application Development Services. With our well-organized and competent application development team, we develop quality software applications meet to your requirements, which are timely delivered, bug free, within budget and based on specifications and are easy to operate and maintain.
            </Text>
            <Text style={styles.Content}>
            We offer a wide range of software development solutions that are optimized for pioneering excellence, innovative, accurateness and cost-effective. Our software development and web design team solely focuses on high qualitative design and user friendly software development services. We have never compromised with our quality and innovative development. Our Software developers have all the abilities and experience to develop applications with complex functionalities and have achieved commercial success. We have Web Application, Desktop Applications, E-Commerce Portal, CMS Portal Programming experts to develop and support clients till end of project completion and afterwards. We always keep our eyes on targeted segment of people which helps our clients to achieve enormous growth and success in their business.
            </Text>

            <Text style={styles.Content}>
            We offer Web Designing, Web Application development, Software Application development, Mobile Application development, Search Engine Optimization (SEO), Competitive software solutions, Shopping Cart development with maintenance and more..
            </Text>
           

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default SoftwareDevelopment



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