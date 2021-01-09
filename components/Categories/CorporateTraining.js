import * as React from 'react';
import { View, Text, Image, StyleSheet, Button, ScrollView } from "react-native";
import { headerImageWidth, headerImageHeight, imageUrl  } from "../_helper/config";
const CorporateTraining = () => {

 
  return (

    <ScrollView>
      <View>

        <View>
             <Image style={{width: headerImageWidth, height: headerImageHeight}}
            source={{uri: imageUrl + '/services/industrial-training.jpg'}}
            />
            

          <Text style={styles.heading}>Corporate Training</Text>
          <Text style={styles.Content}>
            Sonic eSolution is one of the best IT company in Udaipur provides solutions for Software Development, SEO, Offshore Website Development, Internet Marketing, Outsourcing . Our training structure includes Industrial, Live Project, Corporate, PHP, Asp.Net, Web & Graphics Design Trainings.
            </Text>
          <Text style={styles.Content}>
            If you are looking for an excellent combo having exposure on live projects and industrial training Sonic eSolution is the best solution for you. We will give students opportunity to work on live projects of the company. Each student will be provided expertise assistance to handle their projects. Unlike training institutes where students are provided with classroom studies, here we offer a live atmosphere to the students where all developers complete their job. It is a big opportunity to work in a company where education leads to quality.
            </Text>
          <Text style={styles.heading}>Objectives of Our Industrial Training:</Text>

          <View style={{paddingTop: 2}}>
            <Text style={styles.list}>
            Exposure to practical knowledge and experience apart from classroom study
            Providing live working environment
            To develop skills in the application of theory to practical work situations
            Exposure to responsibilities and code ethics followed in our organization
            To expose students to real work environment experience gain knowledge in writing report in technical works/projects
            Placing the best candidates in our organization
            To develop skills in the application of theory to practical work situations
            To develop skills and techniques directly applicable to their careers
            Internships will increase a student's sense of responsibility and good work habits
            To build the strength, teamwork spirit and self-confidence in students life


            </Text>
          </View>
          <View>
           
          </View>




        </View>




      </View>
    </ScrollView>
  )
}

export default CorporateTraining



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

    list:
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