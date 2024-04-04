import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {Backbutton} from '../components/headerbackbutton';
import Colors from '../components/Colors';
import Button from '../components/Button';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AttachFile() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(async () => {
    const pho1 = await AsyncStorage.getItem('Image1');
    console.log('Image1=>', pho1);
    const pho2 = await AsyncStorage.getItem('Image2');
    console.log('Image2=>', pho2);
  }, [isFocused]);

  const send1 = async () => {
    await AsyncStorage.removeItem('Image1');

    navigation.navigate('UploadCamera', {
      image: 'Image1',
    });
  };

  const send2 = async () => {
    await AsyncStorage.removeItem('Image2');

    navigation.navigate('UploadCamera', {
      image: 'Image2',
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.dark_button}
      />
      <View style={{flex: 0.25}}>
        <View style={styles.button_cover}>
          <Backbutton onPress={() => navigation.goBack()} />
          <Text style={styles.profile_text}>Visitor's Civil Id Details</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.45,
          justifyContent: 'space-evenly',
        }}>
        <View style={{flex: 0.65}}>
          <Text style={styles.civilidtext}> Civil Id Picture Front Side</Text>
          <View style={styles.choosefilecover}>
            <TouchableOpacity style={styles.choosefile} onPress={() => send1()}>
              <Text style={styles.chooseText}>Choose File</Text>
            </TouchableOpacity>
            <View style={styles.imgtext}>
              <Text style={styles.nochoosetext}>No File Choosen </Text>
            </View>
          </View>
          <Text style={styles.civilidtext}> Civil Id Picture Back Side</Text>
          <View style={styles.choosefilecover}>
            <TouchableOpacity style={styles.choosefile} onPress={() => send2()}>
              <Text style={styles.chooseText}>Choose File</Text>
            </TouchableOpacity>
            <View style={styles.imgtext}>
              <Text style={styles.nochoosetext}>No File Choosen </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'flex-start',
            alignSelf: 'center',
            flex: 0.35,
          }}>
          <Button buttonStyle={styles.button} text={'Submit'} onPress={null} />
        </View>
      </View>
      <View style={{flex: 0.3}}></View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginHorizontal: 70,
  },
  civilidtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.dark_button,
    marginLeft: 15,
    marginVertical: 15,
  },
  choosefilecover: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    // borderWidth: 1,
    borderColor: Colors.button_text,
    borderRadius: 10,
    padding: 7,
    backgroundColor: Colors.white,
  },
  choosefile: {
    height: 35,
    width: '25%',
    backgroundColor: Colors.dark_button,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  chooseText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
  },
  imgtext: {
    // borderWidth: 1,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nochoosetext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
  button: {
    alignSelf: 'center',
  },
});
