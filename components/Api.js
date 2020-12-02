import React from 'react'
import axios from 'axios'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'


export default class Api extends React.Component {
    state = {
      persons: []
    }
  
    componentDidMount() {
      axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })
    }
  
    render() {
      return (
        <View>
          { this.state.persons.map(person => <Text>{person.name}</Text>)}

          </View>
      )
    }
  }