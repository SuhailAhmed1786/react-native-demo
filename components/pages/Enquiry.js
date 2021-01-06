import React, {useEffect, useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

// import Call API
import call from 'react-native-phone-call';

const App = () => {
  // const [inputValue, setInputValue] = useState('');

  const triggerCall = () => {
    // Check for perfect 10 digit length
    // if (inputValue.length != 10) {
    //   alert('Please insert correct contact number');
    //   return;
    // }

    const args = {
      number: '9928736111',
      prompt: true,
    };
    // Make a call
    call(args).catch(console.error);
  };

  // useEffect(()=>{
  //   triggerCall()
  // },[])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.buttonStyle}
          onPress={triggerCall}>
          <Text style={styles.buttonTextStyle}>
            Call Now
          </Text>
        </TouchableOpacity>

        <View>
                  <Text style={styles.nameOffice}>Sonic eSolution</Text>
                  <View >
                   <Text style={styles.address}>
                   434, 4th Floor, Emerald Tower, Ashwini Bazaar, 
                   Udaipur, Rajasthan - 313001 - INDIA
                  
                   </Text>
                   <Text style={styles.address}>Contact No.: +91 99287-36111
                   Email: info@sonicesolution.com
                     </Text>
                   
                  </View>
               
                </View>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 0,
    textAlign: 'center',
  },
  // titleText: {
  //   fontSize: 22,
  //   textAlign: 'center',
  //   fontWeight: 'bold',
  // },
  // titleTextsmall: {
  //   marginVertical: 8,
  //   fontSize: 0,
  // },
  buttonStyle: {
    justifyContent: 'center',
    marginTop: 20,
    padding: 10,
    backgroundColor: '#37B5F5',
  },
  buttonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
  // textInput: {
  //   height: 40,
  //   borderColor: 'gray',
  //   borderWidth: 1,
  //   width: '100%',
  //   paddingHorizontal: 10,
  // }

  nameOffice :
  {
    color:"black",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20
    
    },

    address :
    {
      color:"black",
      fontSize: 14,
      marginTop: 10,
      marginLeft: 20
      
      
   },
});