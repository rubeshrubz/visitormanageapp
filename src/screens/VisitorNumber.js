import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import Card from '../components/card';
import Colors from '../components/Colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {icons} from '../components/Assets';
import { Spinner } from '../components/Spinner';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
export default function VisitorNumber() {
  const [modal, setModal] = useState(false);
  const navigation = useNavigation();
  const [spin, setPin] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPin(false);
    },2000)
    
  }, []);
  return (
    <SafeAreaView style={styles.container}>
         {spin ? <Spinner /> : null}
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.dark_button}
      />
      <View style={styles.cardview}>
        <Card Date={'23/06/2024'} Time={'10:00 AM'} Number={'01'} />
        <Button text={'Save Record'} onPress={() => setModal(!modal)} />
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
              Your Record Saved Successfully{' '}
            </Text>

            <TouchableOpacity
              style={{
                top: 10,
                height: (Height / 80) * 3.5,
                width: (Width / 80) * 9,
                borderColor: '#357AB4',
                borderRadius: 6,
                borderWidth: 1,
                justifyContent: 'center',
                backgroundColor: '#357AB4',
              }}
              onPress={() => {
                setModal(false), navigation.navigate('MainScreen');
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardview: {
    flex: 1,
    marginTop: 10,
    // borderWidth:1 ,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
});
