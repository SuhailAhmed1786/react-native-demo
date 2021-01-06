import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
const MobileAppDevelopment = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
            
            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={require('../img/mobile-application.jpg')}
            />
                <Text style={styles.heading}>Mobile Apps Development</Text>
            <Text style={styles.Content}>
            Smartphones and communication has become an important part of our society as the computing industry is going through a revolution phase and becoming more mobile. Mobile devices are the future of communication technology and keeping this in mind mobile applications are very crucial for online presence of your business. Mobile is the new market place for buyers and sellers, in order to keep up with the changing world mobile applications and mobile sites are very necessary.
            </Text>
            <Text style={styles.Content}>
            In the present technologically advancing era Mobile apps plays a key role in giving boom to your business. People are accessing way more content as compared to few years ago due to the inheritance of smartphones in their lives. We are a full-service mobile solutions provider that delivers strategy, design, development, and integration expertise to build engaging apps that truly increase the mobile experience.
            </Text>
           

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default MobileAppDevelopment



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