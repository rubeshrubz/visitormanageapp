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
} from 'react-native';
import InputText from '../components/InputText';
import {Backbutton} from '../components/headerbackbutton';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import LinearGradient from 'react-native-linear-gradient';
import { Spinner } from '../components/Spinner';
import AppHeader from '../components/AppHeader';
export default function VisitorDetailsScreen() {
  const navigation = useNavigation();
  const [firstname, setfirstname] = useState('');
  const [names, setName] = useState('');
  const [mobilenumber, setmobilenumber] = useState('');
  const [civilid, setcivilid] = useState('');
  const [visit, setvisit] = useState('');
  const [meet, setmeet] = useState('');
  const [comapny, setcompany] = useState('');
  const [intime, setintime] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dialcode, Setdialcode] = useState('');
  const [date, setdate] = useState('');

  useEffect(() => {
    display();
  }, []);

  const display = async () => {
    try {
      let user = await AsyncStorage.getItem('user');
      let data = JSON.parse(user);
      console.log('user==>', data);
      setName(data);
    } catch (error) {
      Alert.alert(error);
    }
  };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   },2000)
    
  // }, []);

  return (
    <SafeAreaView style={styles.container}>
        {/* {spin ? <Spinner /> : null} */}
      <View style={styles.button_cover}>
      <AppHeader title={'Visitors Details'} />
        {/* <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Details</Text> */}
      </View>
      <ScrollView>
        <KeyboardAvoidingView style={{flex: 1}}>
          <Text style={styles.text}>Name</Text>
          <InputText
            onChangeText={text => setfirstname(text)}
            value={names?.firstname}
            placeholder={'Name'}
          />
          <Text style={styles.text}>Mobile Number</Text>
          <InputText
            onChangeText={text => setfirstname(text)}
            value={names?.mobilenumber}
            placeholder={'Mobile Number'}
          />
          <Text style={styles.text}>Civil ID</Text>
          <InputText
            onChangeText={text => setcivilid(text)}
            value={names?.civilid}
            placeholder={'Civil ID'}
          />
          <Text style={styles.text}>Purpose Of Visit</Text>
          <InputText
            onChangeText={text => setvisit(text)}
            value={names?.visit}
            placeholder={'Purpose Of Visit'}
          />
          <Text style={styles.text}>Person To Meet</Text>
          <InputText
            onChangeText={text => setmeet(text)}
            value={names?.meet}
            placeholder={'Person To Meet'}
          />
          <Text style={styles.text}>Company Name</Text>
          <InputText
            onChangeText={text => setcompany(text)}
            value={names?.comapny}
            placeholder={'Company Name'}
          />
          <Text style={styles.text}>In Time</Text>
          <InputText
            onChangeText={text => setintime(text)}
            value={names?.intime}
            placeholder={'In Time'}
          />
          <Text style={styles.text}>Visited Date</Text>
          <InputText
            onChangeText={text => setdate(text)}
            value={names?.date}
            placeholder={'Visited Date'}
          />
           <LinearGradient
          colors={['#0C001D', '#1E024E', '#593C6A']}
          style={styles.subbutton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ViewerScreen');
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
    // height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.dark_button,
    marginHorizontal: 100,
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
