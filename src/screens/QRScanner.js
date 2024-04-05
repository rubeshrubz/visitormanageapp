import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  Alert,
} from 'react-native';
import {Backbutton} from '../components/headerbackbutton';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import {icons} from '../components/Assets/index';
import Colors from '../components/Colors';
import { Spinner } from '../components/Spinner';
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

  // const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 2000);
  // }, []);

  const CustomMarker = () => (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Image
        style={{
          width: (width / 30) * 8,
          height: (height / 15) * 2,
          tintColor: '#2B8ADD',
        }}
        source={icons.focus}
      />
    </View>
  );

  const [register, setRegister] = useState('');

  useEffect(() => {
    setRegister('');
    setActivateQR(true);
  }, [activateQR, register]);

  const onSuccess = e => {
    console.log('data===>', register);
    try {
      setActivateQR(false);
      setRegister(e.data);

      if (e.data === 'Register') {
        navigation.navigate('VisitorRegisterScreen');
      } else {
        Alert.alert('QR Code is invalid');
      }
      //navigation.navigate('AttachFile');
    } catch (e) {
      global.functions.ShowAlert('Invalid qr code', global.const.warning);

      scanner.current.reactivate();
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
       {/* {spin ? <Spinner /> : null} */}
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
          bottomContent={
            <Text style={styles.text}>Scanned QR Code: {register}</Text>
          }
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
    color: Colors.dark_button,
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
