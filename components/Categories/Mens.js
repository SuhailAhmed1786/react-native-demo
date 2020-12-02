import * as React from 'react';
import { SafeAreaView, View, Image, FlatList, StyleSheet, Text, StatusBar, Button } from 'react-native';
import Logo from '../Logo';

const myimg = './mens/1.jpeg';

const DATA = [
  {
    id: '1',
    name: 'Jeans',
    img: <View><Image style={{ width: 400, height: 400 }} source={require(myimg)} /></View>
  },
  {
    id: '2',
    name: 'Shirt',
    img: <View><Image style={{ width: 400, height: 400 }} source={require(myimg)} /></View>
  },
  {
    id: '3',
    name: 'T-Shirt',
    img: <View><Image style={{ width: 400, height: 400 }} source={require(myimg)} /></View>
  },
  {
    id: '4',
    name: 'Paint',
    img: <View><Image style={{ width: 400, height: 400 }} source={require(myimg)} /></View>
  }

];

const Item = ({img}) => (
  <View>
    <Text style={styles.title}>{img}</Text>
  

  </View>
);



const Mens = () => {
  const renderItem = ({ item}) => (
    
   <View>
      <Item img={item.img} />
    <Item img={item.name} />
   </View>,
   <View>
   <Item img={item.img} />
 <Item img={item.name} />
</View>
  

  );



  return (
    <View style={{
      flex: 2,
      margin: 5,       
      backgroundColor: '#61BEFC'
      }}
      >

      <FlatList contentContainerStyle={styles.list}
        data={DATA}
        renderItem={renderItem}      
        keyExtractor={item => item.id}
       
      />
     
    </View>
   

  );

}

const styles = StyleSheet.create({

  list: {
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: "center"
  },
  // item: {
  //   backgroundColor: '#23A3F9',
  //   padding: 40,
  //   marginVertical: 5,
  //   marginHorizontal: 10,

  // },
  title: {
    // fontSize: 14,

  },
});

export default Mens;