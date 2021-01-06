import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
const WebDesign = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>

            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={require('../img/web-design.jpg')}
            />
            
                 
                <Text style={styles.heading}>Web Designing</Text>
            <Text style={styles.Content}>
            Websites play a vital role, similar to that of advertisements. No matter, if you are a small or a large company, our web design team can help you to get an online presence that delivers the best for you and your clients. We assure full satisfaction with our services and ideas. A good design compels your website visitors to explore.
            </Text>
            <Text style={styles.Content}>
            We are backed by years of experience in creating websites using the latest technology such as HTML5, Wordpress, DotNet, CSS3, jQuery and other technologies. Our designers are simply well-skilled in graphics as well as other aspects of web designing, full of high standards of creativity and innovation.
            </Text>

            <Text style={styles.Content}>
            Mobile and Responsive Design With smartphones and tablets on the rise, more than half of all internet users access websites from their mobile devices. If your website is not optimized to be viewed on mobile devices, then you are on the edge of losing customers. Websites designed by us can be viewed on desktops as well as mobile devices, or at the same time we can design a dedicated mobile site that your customers can access while on-the-go. To make a website compatible and adaptable to optimize it to be viewed on devices with different resolutions and sizes, the responsive design plays an integral part in developing any web application or site.
            </Text>
            <Text style={styles.Content}>
            We offer a wide-range of service from the basics like domain registration and hosting to the design of logos, photographic images, layout, programming and deployment and unlike many of our competitors everything is handled under one roof. Let us combine great design, creativity and innovation to create the perfect website for your business..!
            </Text>
            <Text style={styles.Content}>
            Let us combine great design, creativity and innovation to create the perfect website for your business..!
            </Text>

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default WebDesign



const styles = StyleSheet.create( 
    
    {
     
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