import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
// import Divider from 'react-native-divider'
import { Divider } from 'react-native-paper';
import { headerImageWidth, headerImageHeight  } from "../_helper/config";
// import Api from './Api'
const About = () => {

    return (

        <ScrollView>
            <View>
                <View>
                    <Text style={styles.heading}>About us</Text>
                    <Image style={{ width: headerImageWidth, height: headerImageHeight, marginTop: 15 }}
                        source={require('../img/home.jpg')}
                    />
                    <Text style={styles.Content}>

                        Our set internal processes for analysis, development and quality assurance helps us to deliver high quality solutions to our clients. Our dedicated, knowledgeable and diligent engineers make it possible to accurately transform client's requirements into technical solutions. We give high priority to consistent and effective communication with our clients. We keep our clients involved during the process through chats, emails and periodical reviews, which in turn, enables us to express and deliver feasible and cost effective solutions in set period of time. Time lines are sacred to us.
            </Text>

                </View>




            </View>
        </ScrollView>
    )
}

export default About



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