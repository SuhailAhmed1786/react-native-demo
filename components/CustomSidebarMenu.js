import React from 'react'
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import onShare from './ShareApp';
import Icon from 'react-native-vector-icons/FontAwesome';
const CustomSidebarMenu = (props) => {

  const proileImage = './img/logo.jpg';

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#2E86C1" }}>
      <Image

        source={require(proileImage)}
        style={styles.sideMenuProfileIcon}
      />

      <DrawerContentScrollView {...props} >
        <DrawerItemList {...props}

        />
        {/* <Icon name="share" size={22} color="#fff" />
        <DrawerItem  
          label="Share Link"
          onPress={() => onShare()}
        /> */}

        <View>
          <View style={{ height: 0.4, backgroundColor: "white" }}></View>

          <Text style={styles.customItem} onPress={() => onShare()}>
            <Icon name="share" size={22} color="#fff" />

            <View><Text style={{ marginLeft: 34, color: "#fff" }}>Share</Text></View>
          </Text>


          {/* <Image
            // source={{uri: BASE_PATH + 'star_filled.png'}}
            style={styles.iconStyle}
          /> */}
        </View>

        

        <View style={{
          borderBottomColor: '#fff',          
          borderBottomWidth: 0.4
        }} />

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
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 70,
    height: 70,
    // borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },

  nameOffice :
  {
    color:"#fff",
    fontSize: 20,
    marginTop: 10,
    marginLeft: 20
    
    },

    address :
    {
      color:"#fff",
      fontSize: 14,
      marginTop: 10,
      marginLeft: 20
      
      
      },  
  customItem: {
    padding: 16,
    color: "#fff"
  },
});

export default CustomSidebarMenu;