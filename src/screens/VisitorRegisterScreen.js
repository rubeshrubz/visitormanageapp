import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import InputText from '../components/InputText';
import {Backbutton} from '../components/headerbackbutton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function VisitorRegisterScreen() {
  const [firstname, setfirstname] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [civilid, setcivilid] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, Setdialcode] = useState('');
  const navigation = useNavigation();

  const onChangeNumber = ({ dialCode, phoneNumber, }) => {
    Setdialcode(dialCode);
    const num = dialCode + mobilenumber;
    setmobilenumber(phoneNumber);

};

  const _vaildate = () => {
    if (global.functions.isNullOrEmpty(firstname)) {
      global.functions.ShowAlert(
        'Please Enter First Name',
        global.const.warning,
      );
    } else if (global.functions.isNullOrEmpty(mobilenumber)) {
      global.functions.ShowAlert(
        'Please Enter mobilenumber',
        global.const.warning,
      );
    }else if (global.functions.isNullOrEmpty(civilid)) {
        global.functions.ShowAlert(
          'Please Enter civilid',
          global.const.warning,
        );
      }else if (global.functions.isNullOrEmpty(visit)) {
        global.functions.ShowAlert(
          'Please Enter Purpose Of Visit',
          global.const.warning,
        );
      }else if (global.functions.isNullOrEmpty(meet)) {
        global.functions.ShowAlert(
          'Please Enter Person Of Meet',
          global.const.warning,
        );
      }else if (global.functions.isNullOrEmpty(comapny)) {
        global.functions.ShowAlert(
          'Please Enter Company Name',
          global.const.warning,
        );
      }else if (global.functions.isNullOrEmpty(intime)) {
        global.functions.ShowAlert(
          'Please Enter In Time',
          global.const.warning,
        );
      }else {
       navigation.navigate('VisitorDetailsScreen')
      }

  };

//   var storeData = async () => {
//     try {
//         await AsyncStorage.setItem(
//             '@MySuperStore:key',
//             firstname,
//             mobilenumber,
//             civilid,
//             visit,
//             meet,
//             comapny,
//             intime
//         );
//     } catch (error) {
//         // Error saving data
//     }
// };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.button_cover}>
        <Backbutton onPress={() => null} />
        <Text style={styles.profile_text}>Visitor's Register</Text>
      </View>
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text style={styles.text}>Name</Text>
          <InputText
            onChangeText={text => setfirstname(text)}
            value={firstname}
            name={'Name'}
          />
          <Text style={styles.text}>Moblie Number</Text>
          <InputText
            value={mobilenumber}
            placeholder={'Moblie Number'}
            mobile={true}
            onChangeNumber={text => onChangeNumber(text)}
          />
          <Text style={styles.text}>Civil ID</Text>
          <InputText
            onChangeText={text => setcivilid(text)}
            value={civilid}
            name={'Civil ID'}
          />
          <Text style={styles.text}>Purpose Of Visit</Text>
          <InputText
            onChangeText={text => setvisit(text)}
            value={visit}
            name={'Purpose Of Visit'}
          />
          <Text style={styles.text}>Person To Meet</Text>
          <InputText
            onChangeText={text => setmeet(text)}
            value={meet}
            name={'Person To Meet'}
          />
          <Text style={styles.text}>company Name</Text>
          <InputText
            onChangeText={text => setcompany(text)}
            value={comapny}
            name={'Company Name'}
          />
          <Text style={styles.text}>In Time</Text>
          <InputText
            onChangeText={text => setintime(text)}
            value={intime}
            name={'In Time'}
          />
          <TouchableOpacity
            onPress={() => {_vaildate()}}
            style={styles.subbutton}>
            <Text style={styles.subtext}>Submit</Text>
          </TouchableOpacity>
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
    color: '#4f81bd',
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
    color: '#4f81bd',
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
    backgroundColor:'#4f81bd',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
});
