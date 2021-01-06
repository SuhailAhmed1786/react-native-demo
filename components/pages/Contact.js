import React, { Component, isValidElement } from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { TextInput, Button } from 'react-native-paper';
import AnimatedInput from "react-native-animated-input";
class Contact extends Component {

   state = {
      username: '',
      nameError: '',
      email: '',
      emailError: '',
      password: '',
      passwordError: '',
      phone: '',
      phoneError: '',
      message: '',
      messageError: ''
   }


   

   Validation() {
     
      // let rjx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      // let isValid = rjx.test(this.state.email)
      // console.log("valid:", isValid)
    

      if (this.state.username == '') {
         // console.log("username", this.state.username)
         this.setState({ nameError: "" })
         
         

      }
      if (this.state.email == '') {
         this.setState({ emailError: '' })
         console.log(this.state.email)
         
      }
      if (this.state.password == '') {
         this.setState({ passwordError: "" })

      }
      if (this.state.phone == '') {
         this.setState({ phoneError: "" })

      }
      if (this.state.message == '') {
         this.setState({ messageError: "" })

       }




   }

   Submit() {

      // let rjx = /^[A-Za-z]+$/;
      // let isValid = rjx.test(this.state.username)
      
      
      
      
      }











   render() {
      return (
         <ScrollView>
         <View style={styles.container} >

            <Text style={{ marginLeft: 15, fontSize: 20 }}>Fill Form</Text>
            
            <TextInput style={styles.input}
               onBlur={() => this.Validation()}
               underlineColorAndroid="transparent"
               placeholder="Username"
               maxLength={15}
               placeholderTextColor="#000"
               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ nameError: 'Please fill username' }) }} />

            <Text style={{ color: 'red', marginLeft: 12 }}>{this.state.nameError}</Text>
             <TextInput style={styles.input}
               onBlur={() => this.Validation()}

               underlineColorAndroid="transparent" r
               placeholder="Email"
               placeholderTextColor="#000"
               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ emailError: 'Please fill Valid email address' }) }}
            />
            <Text style={{ color: 'red', marginLeft: 12 }}>{this.state.emailError}</Text>
            <TextInput style={styles.input}
               onBlur={() => this.Validation()}
               underlineColorAndroid="transparent"
               placeholder="Password"
               secureTextEntry={true}
               placeholderTextColor="#000"
               autoCapitalize="none"
               maxLength={10}

               onChangeText={(text) => { this.setState({ passwordError: 'Please fill password' }) }}
            />
            <Text style={{ color: 'red', marginLeft: 12 }}>{this.state.passwordError}</Text>
            <TextInput style={styles.input}
               onBlur={() => this.Validation()}
               
               underlineColorAndroid="transparent"
               placeholder="Phone"
               placeholderTextColor="#000"
               keyboardType="numeric"
               maxLength={10}

               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ phoneError: 'Please fill valid Number' }) }} />
            <Text style={{ color: 'red', marginLeft: 12 }}>{this.state.phoneError}</Text>

            <TextInput style={styles.input}
               onBlur={() => this.Validation()}
               underlineColorAndroid="transparent"
               placeholder="Message"
               placeholderTextColor="#000"
               autoCapitalize="none"
               onChangeText={(text) => { this.setState({ messageError: 'Please fill description' }) }}
            /> 
            <Text style={{ color: 'red', marginLeft: 12 }}>{this.state.messageError}</Text>

            <Button style={styles.submitButtonText} onPress={() => this.Submit()} >
               <Text style={{ color: 'white' }}>Submit</Text>
            </Button>



         </View>
         </ScrollView>
      )
   }
}
export default Contact

const styles = StyleSheet.create({
   container: {
      paddingTop: 2,
      paddingHorizontal: 15
   },
   input: {
      margin: 8,
      height: 45,
      borderColor: '#555',
      borderWidth: 0.5,
      fontFamily: 'sans-serif',

   },

   submitButtonText: {
      backgroundColor: '#2E86C1',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 16,
      padding: 5,
      height: 45,
      margin: 10,
      fontFamily: 'sans-serif',
      color: 'white',

   },

   message: {
      marginLeft: 17,

   }
})



