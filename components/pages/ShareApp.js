import React from 'react';
import { Share, View, Button, Text} from 'react-native';

// const ShareApp = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        // message:
        //   'React Native | A framework for building native apps using React',

          title: 'App link',
          message: 'Please install this app', 
          // url: 'https://play.google.com/store/apps/details?id=nic.goi.aarogyasetu&hl=en'  
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  // };
  return (

  
    <View>
      
     {/* <Button onPress={onShare} title="Share" /> */}
      
          
    </View>
  );

  }


export default onShare;