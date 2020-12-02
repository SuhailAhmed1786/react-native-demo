import * as React from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
// import Divider from 'react-native-divider'
import { Divider } from 'react-native-paper';

// import Api from './Api'
const Services = () => {

    return (
        
        <ScrollView>
        <View>
        {/* <Button
                onPress={() => navigation.navigate('Mens')}
                title="Go to notifications"
    /> */}
            <View>
            <Text style={styles.heading}>Our Services</Text>
            <Text style={styles.Content}>
            
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </Text>

            </View>
            <Text style={styles.heading}>Where can I get some?</Text>
            <View  >
            <Text style={styles.Content}>
                   
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
            </Text>
            </View>
           
           

        </View>
        </ScrollView>
    )
}

export default Services



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
        
    }    
       
       
    });