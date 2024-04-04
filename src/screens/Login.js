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
} from 'react-native';
import InputText from '../components/InputText';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={Colors.dark_button}
        />
        {/* <View style={styles.inputview}> */}
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
        <LinearGradient
          colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
          style={styles.subbutton}>
          <TouchableOpacity
            onPress={() => 
              navigation.navigate('HomeScreen')}
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
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: (Height / 3) * 3,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: Colors.dark_button,
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
    color: Colors.dark_button,
  },
});
