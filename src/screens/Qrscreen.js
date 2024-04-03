import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

export default function Qrscreen() {
  const navigation = useNavigation();
  useEffect(() => {
    SplashScreen.hide();
    // setTimeout(() => {
    //   navigation.navigate('Login');
    // }, 2500);
  }, []);


  return (
    <View style={styles.container}>
      <QRCode
        value={'Register'}
        size={200}
        logoSize={30}
        logoBackgroundColor="transparent"
        onRead={onSuccess}
       
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
