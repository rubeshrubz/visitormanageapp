import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {icons} from '../components/Assets';

import LottieView from 'lottie-react-native';
import {Backbutton} from '../components/headerbackbutton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppHeader from '../components/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { Spinner } from '../components/Spinner';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function ViewerScreen() {
  const [files, setFile] = useState('');
  const [modal, setModal] = useState(false);
  const [load, setload] = useState('No Choosen file');
  const [loadx, setloadx] = useState('No Choosen file');
  useEffect(() => {
    valid();
  }, []);

  const valid = async () => {
    const pho1 = await AsyncStorage.getItem('Image1');
    setload(pho1);
    console.log('Image1=>', pho1);
    const pho2 = await AsyncStorage.getItem('Image2');
    console.log('Image2=>', pho2);
    setloadx(pho2);
  };

  console.log('lklkk', load);
  console.log('ixixi', loadx);

  const navigation = useNavigation();

  const _validate = async () => {
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('photo');
      console.log('Data removed');
      navigation.navigate('Login');
    } catch (exception) {
      console.log(exception);
    }
  };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 2000);
  // }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      {/* {spin ? <Spinner /> : null} */}
      <View style={{flex: 0.1, backgroundColor: '#fff', flexDirection: 'row'}}>
        {/* <View
          style={{
            flex: 0.12,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
      
          <Backbutton onPress={() => navigation.goBack()} />
        </View> */}
        {/* <View
          style={{
            flex: 0.88,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#4f81bd',
              marginHorizontal: 85,
            }}>
            {' '}
            Document Preview
          </Text>
        </View> */}
        <AppHeader title={'Document Preview'} />
      </View>
      <View
        style={{
          flex: 0.75,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor:'#411350',
            height: '40%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: load}}
            style={{height: '95%', width: '95%', borderRadius: 10}}
          />
        </View>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            borderColor:'#411350',
            height: '40%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: loadx}}
            style={{height: '95%', width: '95%', borderRadius: 10}}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.1,
          backgroundColor: '#fff',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <LinearGradient
          colors={['#0C001D', '#1E024E', '#593C6A']}
          style={styles.subbutton}>
          <TouchableOpacity
            style={styles.subbutton}
            onPress={() => setModal(true)}>
            <Text style={styles.subtext}>Submit</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modal}
        onRequestClose={() => {
          setModal(!modal);
        }}>
        {/* <TouchableWithoutFeedback
      onPress={()=>setVisible(!visible)}
      > */}
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <LottieView
              source={icons.success}
              autoPlay
              loop
              style={{
                height: (Height / 20) * 4,
                width: (Width / 8) * 4,
                backgroundColor: '#fff',
                color: 'green',
              }}
            />

            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#000'}}>
              Details Uploaded Successfully{' '}
            </Text>

            <TouchableOpacity
              style={{
                top: 10,
                height: (Height / 80) * 3.5,
                width: (Width / 80) * 9,
                borderColor: '#357AB4',
                borderRadius: 6,
                // borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#411350',
              }}
              onPress={() => {
                setModal(false), navigation.navigate('VisitorNumber');
              }}>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: '#fff',
                  textAlign: 'center',
                }}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* </TouchableWithoutFeedback> */}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  subtext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    height: (Height / 25) * 8,
    width: (Width / 10) * 8,
    borderRadius: 30,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  subbutton: {
    height: 45,
    width: '90%',
    borderRadius: 10,
    alignSelf: 'center',
    // backgroundColor: '#2D2B89',
    alignItems: 'center',
    justifyContent: 'center',
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
    color: '#2D2B89',
    marginHorizontal: 85,
  },
});
