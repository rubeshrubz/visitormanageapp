import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {Backbutton} from '../components/headerbackbutton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {icons} from '../components/Assets/index';
import Colors from '../components/Colors';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

export default function QRScanner() {
  const scanner = React.useRef(null);
  const navigation = useNavigation();
  const [activateQR, setActivateQR] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
    // setTimeout(() => {
    //   navigation.navigate('Login');
    // }, 2500);
  }, []);

  const onSuccess = e => {
    try {
      setActivateQR(false);
      navigation.navigate('VisitorRegisterScreen');
    } catch (e) {
      global.functions.ShowAlert('Invalid qr code', global.const.warning);
      setTimeout(() => {
        scanner.current.reactivate();
      }, 3000);
    }
  };

  const CustomMarker = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{width: (width /30) *8, height: (height / 15) *2,tintColor:'#2B8ADD'}}
        source={icons.focus}
      />
    </View>
  );

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 0.1, backgroundColor: '#fff', flexDirection: 'row'}}>
        <View style={styles.button_cover}>
          <Backbutton onPress={() => navigation.goBack()} />
          <Text style={styles.profile_text}>QR Scanner</Text>
        </View>
      </View>

      <View style={{flex: 0.9}}>
        <QRCodeScanner
          ref={scanner}
          onRead={onSuccess}
          
          // cameraStyle={{height: SCREEN_HEIGHT}}
          customMarker={<CustomMarker />}
          cameraProps={{
            // flashMode: RNCamera.Constants.FlashMode.torch,
            captureAudio: false,
          }}
          containerStyle={{height: 300}}
          cameraStyle={[{height: 300}]}
          showMarker={true}
          reactivate={activateQR}></QRCodeScanner>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button_cover: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color:Colors.dark_button,
    marginHorizontal: 120,
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
