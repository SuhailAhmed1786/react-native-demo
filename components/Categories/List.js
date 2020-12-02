import React from 'react'
import { View, Text, FlatList, TouchableWithoutFeedback } from 'react-native'

export default class List extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      exampleData: [
        {name: 'Mens'},
        {name: 'Womens'},
        {name: 'shoes'},
        {name: 'Fancy Item'},
        {name: 'Watch'},
        {name: 'Sandel'},
        {name: 'Mens'},
        {name: 'Womens'},
        {name: 'shoes'},
        {name: 'Fancy Item'},
        {name: 'Watch'},
        {name: 'Sandel'}
        
      ]
    }
  }

  render(){
    return(
      <View>
        {/* <Text style = {{fontWeight: 'bold', textAlign: "center"}}>Category</Text> */}
        <FlatList 
          horizontal
          data = {this.state.exampleData}
          renderItem = {({item}) => 
          <TouchableWithoutFeedback onPress={ () => this.actionOnRow(item)}>
            <View style = {{padding: 20, backgroundColor: "#3498DB"}}>
              <View />
              <Text style={{color: "#fff", fontSize: 16}}>{item.name}</Text>
              {/* <Text>{item.price}</Text> */}
            </View>
            </TouchableWithoutFeedback>
            }
          />
      </View>
    )
  }


actionOnRow(item) {
    console.log('Selected Item :',item);
 }
}

