import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import InputText from '../components/InputText';
import {Backbutton} from '../components/headerbackbutton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import LinearGradient from 'react-native-linear-gradient';
import AppHeader from '../components/AppHeader';
import { Spinner } from '../components/Spinner';
export default function RegisterScreen() {
  const navigation = useNavigation();
  const [firstname, setfirstname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [companyid, setcompanyid] = useState('');
  const [role, setrole] = useState('');
  const [meet, setmeet] = useState('');
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, Setdialcode] = useState('');

  const onChangeNumber = ({dialCode, phoneNumber}) => {
    Setdialcode(dialCode);
    const num = dialCode + mobilenumber;
    setmobilenumber(phoneNumber);
  };

  // const _vaildate = () => {
  //   if (global.functions.isNullOrEmpty(firstname)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Your Name',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(mobilenumber)) {
  //     global.functions.ShowAlert(
  //       'Please Enter mobilenumber',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(companyid)) {
  //     global.functions.ShowAlert('Please Enter company id', global.const.warning);
  //   } else if (global.functions.isNullOrEmpty(comapny)) {
  //     global.functions.ShowAlert(
  //       'Please Enter Company Name',
  //       global.const.warning,
  //     );
  //   } else if (global.functions.isNullOrEmpty(role)) {
  //       global.functions.ShowAlert(
  //         'Please Enter the role',
  //         global.const.warning,
  //       );
  //     }  else {
  //     const store = {
  //       firstname: firstname,
  //       mobilenumber: mobilenumber,
  //       companyid: companyid,
  //       role: role,
  //       meet: meet,
  //       comapny: comapny,
  //       intime: intime,
  //     };

  //     AsyncStorage.setItem('user', JSON.stringify(store));
  //     console.log('store==>', store);
  //     navigation.navigate('Login');
  //   }
  // };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   },2000)
    
  // }, []);
  const asyncc = '@MySuperStore:key';
  const [demo, setdemo] = useState('');

  var retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem(asyncc);
      if (value !== null) {
        console.log('Result', value, demo);
      }
      setdemo(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!demo) {
      retrieveData();
    }
  }, [demo]);
  return (
    <SafeAreaView style={styles.container}>
     {/* {spin ? <Spinner /> : null} */}
        <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.white}
        />
           {demo === 'Admin' || demo === 'Super Admin'?
       <AppHeader title={'Admin Register'}/>: <AppHeader title={'Security Register'}/>}
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text style={styles.text}>Name</Text>
          <InputText
            onChangeText={text => setfirstname(text)}
            value={firstname}
            placeholder={'Name'}
          />
          <Text style={styles.text}>Mobile Number</Text>
          <InputText
            value={mobilenumber}
            // placeholder={'Moblie Number'}
            mobile={true}
            onChangeNumber={text => onChangeNumber(text)}
          />
          <Text style={styles.text}>Company ID</Text>
          <InputText
            onChangeText={text => setcompanyid(text)}
            value={companyid}
            placeholder={'Company ID'}
          />
          <Text style={styles.text}>Company Name</Text>
          <InputText
            placeholder={'Company Name'}
            onChangeText={text => setcompany(text)}
            value={comapny}
          />
          <Text style={styles.text}>Role</Text>
          <InputText
            onChangeText={text => setrole(text)}
            value={role}
            placeholder={'Enter your role in your company'}
          />
           <LinearGradient
          colors={['#0C001D', '#1E024E', '#593C6A']}
          style={styles.subbutton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login')
            }}
            style={styles.subbutton}>
            <Text style={styles.subtext}>Submit</Text>
          </TouchableOpacity>
          </LinearGradient>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#411350',
    marginLeft: 20,
    marginVertical: 15,
  },
  inputcover: {
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginBottom: 20,
    // borderWidth:1,
  },
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
    marginHorizontal: 85,
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
    marginVertical: 50,
  },
});
