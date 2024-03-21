import React, {useState,useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import InputText from '../components/InputText';
import {Backbutton} from '../components/headerbackbutton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export default function VisitorDetailsScreen() {
  const [firstname, setfirstname] = React.useState('');
  const [mobilenumber, setmobilenumber] = React.useState('');
  const [civilid, setcivilid] = React.useState('');
  const [visit, setvisit] = React.useState('');
  const [meet, setmeet] = React.useState('');
  const [comapny, setcompany] = React.useState('');
  const [intime, setintime] = React.useState('');
  const [demo, setdemo] = useState('');
  // const asyncc = '@MySuperStore:key'
  // var retrieveData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem(asyncc);
  //     if (value !== null) {
  //       // We have data!!
  //       console.log(value);
  //     }
  //     setdemo(value)
  //   } catch (error) {
  //     // Error retrieving data
  //     alert('hiiii....')
  //   }
  // }

  // useEffect(() => {
  //   if (!demo) {
  //     retrieveData();
  //   }
  // }, [demo])

  return (
    <SafeAreaView style={styles.container}>
      {/* <KeyboardAwareScrollView> */}
      <View style={styles.button_cover}>
        <Backbutton onPress={() => null} />
        <Text style={styles.profile_text}>Visitor's Details</Text>
      </View>
      <View style={styles.inputcover}>
        <Text style={styles.text}>Name</Text>
        <InputText
          onChangeText={text => setfirstname(text)}
          value={firstname}
          name={'Name'}
        />
        <Text style={styles.text}>Moblie Number</Text>
        <InputText
          onChangeText={text => setmobilenumber(text)}
          value={mobilenumber}
          placeholder={'Moblie Number'}
          mobile={true}
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
      </View>
      <TouchableOpacity style={styles.subbutton}>
        <Text style={styles.subtext}>Submit</Text>
      </TouchableOpacity>

      {/* </KeyboardAwareScrollView> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop:10,
  },
  text: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginLeft: 20,
    marginBottom: 20,
  },
  inputcover: {
    height: '85%',
    width: '100%',
    marginTop: 10,
  },
  button_cover: {
    height: 50,
    width: '100%',
    backgroundColor:'lightgrey',
    // borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: 85,
  },
  subtext: {
    fontSize:18,
    fontWeight:'bold',
    color:'#fff',
  },
  subbutton:{
    height:45,
    width:'90%',
    borderRadius:10,
    alignSelf:'center',
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
    
  }
});
