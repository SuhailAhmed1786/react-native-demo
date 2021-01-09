import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight, imageUrl  } from "../_helper/config";
const BpoService = () => {

    return (
        
        <ScrollView>
        <View>
            
            <View>
            <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={{uri: imageUrl + '/services/bpo.jpg'}}
            />
                <Text style={styles.heading}>Industrial Training</Text>
            <Text style={styles.Content}>
            Bpo is the process of providing voice and non voice support to the customers. 24*7 support and quality are the core of this industry. Bpo will flourish by as the Clientbase of the companies demands the babkend support.
            </Text>
            <Text style={styles.Content}>
            Corporate training is the part of the initiative where industry empowers human resource and provide solutions to the society. Corporate training encourages employees to perform and motivate them to do better.
            </Text>

            
           

            </View>  
            
           
           

        </View>
        </ScrollView>
    )
}

export default BpoService



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