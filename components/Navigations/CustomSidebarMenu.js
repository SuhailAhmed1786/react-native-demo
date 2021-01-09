import React from 'react'
import { SafeAreaView, View, StyleSheet, Image, Text, Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import onShare from '../pages/ShareApp';
import Icon from 'react-native-vector-icons/FontAwesome';
import { PRIMARY_COLOR } from "../_helper/config";
import {SocialIcon} from 'react-native-elements';
const CustomSidebarMenu = (props) => {
  const facebook = 'https://www.facebook.com/SoniceSolution'
  const twitter = 'https://twitter.com/sonicesolution'
  const insta = 'https://www.instagram.com/'
  const whatsapp = 'https://wa.me/9928736111'
  const proileImage = '../img/sonic-esolution.png';

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: "#2E86C1" }}>
          <View>
          <Image
            source={require(proileImage)}
            style={styles.sideMenuProfileIcon}
            />

      </View>
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

                  <View>
                  <View style={{ marginTop: 10, height: 0.4, backgroundColor: "white" }}></View>
                  <Text style={{color:'#fff', fontSize:15, marginLeft:16, marginTop: 10}}>Follow Us</Text>
                  </View>
                  <View style={{flex: 1, marginTop: 5, flexDirection: 'row' }}>

                  
                  <SocialIcon
                  type="facebook"
                  fontSize="10"
                  onPress={() => Linking.openURL(facebook)}

                  
		              />

                <SocialIcon
                  type="twitter"
                  onPress={() => Linking.openURL(twitter)}
		              />
                  <SocialIcon
                  type="instagram"
                  onPress={() => Linking.openURL(insta)}
		              />
                  <SocialIcon
                  type="whatsapp"
                  onPress={() => Linking.openURL(whatsapp)}
		              />
                    </View>
                
          </View>
               
                
      </DrawerContentScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    // resizeMode: 'center',
    marginTop: 5,
    width: 250, height: 50,
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