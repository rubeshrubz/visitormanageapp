import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
  Dimensions,
  StatusBar,
  ImageBackground,
} from 'react-native';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../components/Colors';
import {Spinner} from '../components/Spinner';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {icons} from '../components/Assets';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function VisitorRegisterScreen(props) {
  const navigation = useNavigation();
  const [mobilenumber, setmobilenumber] = useState('');
  const [show, setshow] = useState(true);
  const [password, setpassword] = React.useState('');
  const [eye, setEye] = useState(true);
  const [username, setusername] = React.useState('');
  const [dialCode, Setdialcode] = React.useState('');

  const secureText = () => {
    setEye(!eye);
  };

  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 500);
  // }, []);

  const onChangeNumber = ({dialCode, phoneNumber}) => {
    Setdialcode(dialCode);
    const num = dialCode + username;
    setusername(phoneNumber);
  };

  // const _vaildate = () => {
  //   if (global.functions.isNullOrEmpty(username)) {
  //     global.functions.ShowAlert(
  //       'Please Enter mobilenumber',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(password)) {
  //     global.functions.ShowAlert('Please Enter Password', global.const.warning);
  //   } else if (password.length < 8) {
  //     global.functions.ShowAlert(
  //       ' Password Should be Minimum 8 char',
  //       global.const.warning,
  //     );
  //   } else {
  //     navigation.navigate('HomeScreen');
  //   }
  // };

  return (
    <KeyboardAwareScrollView>
      <SafeAreaView style={styles.container}>
        {/* {spin ? <Spinner /> : null} */}
        <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
        <ImageBackground source={icons.img_back} resizeMode="cover">
          <LinearGradient
            colors={['#0C001D', '#1E024E', '#593C6A']}
            style={{
              height: 250,
              width: 250,
              borderBottomRightRadius: 250,
              justifyContent: 'center',
              // marginTop:50,
              // marginLeft:-40
            }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: '#fff',
                marginLeft: 20,
                // textAlign: 'center',
              }}>
              Login
            </Text>
          </LinearGradient>
          {/* <View style={styles.inputview}> */}

          <View style={styles.container}>
            <View style={{height: '12%', justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: '#411350',
                  // textAlign: 'center',
                  margin: 20,
                }}>
                Welcome Back!
              </Text>
            </View>
            <Text style={styles.text}>Mobile Number</Text>
            <InputText
              onChangeNumber={text => onChangeNumber(text)}
              value={username}
              mobile={true}
            />
            <Text style={styles.text}>Password</Text>
            <InputText
              onChangeText={text => setpassword(text)}
              value={password}
              placeholder={'Password'}
              visible={show}
              secureText={secureText}
              onPress={() => setshow(!show)}
              secureTextEntry={show}
            />
            <TouchableOpacity style={{width:'95%',alignItems:'flex-end',margin:5}}>
            <Text style={{fontWeight: '500', color: '#411350'}}>
              Forgot Password ?
            </Text>
            </TouchableOpacity>
            <LinearGradient
              colors={['#0C001D', '#1E024E', '#593C6A']}
              style={styles.subbutton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={styles.subbutton}>
                <Text style={styles.subtext}>Login</Text>
              </TouchableOpacity>
            </LinearGradient>
            {/* </View> */}
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.registertext}>Don’t have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('RegisterScreen')}>
                <Text style={styles.registertext2}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: (Height / 3) * 3,
    // backgroundColor: 'green',
    // justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1E024E',
    marginLeft: 22,
    marginVertical: 10,
  },

  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    // backgroundColor: '#4f81bd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  registertext: {
    fontFamily: 'Gilroy',
    fontWeight: '500',
    // marginVertical: 10,
    fontSize: 15,
    color: 'black',
  },
  registertext2: {
    fontFamily: 'Gilroy',
    fontWeight: 'bold',
    // marginVertical: 10,
    fontSize: 16,
    color: '#1E024E',
  },
});
