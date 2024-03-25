import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import {Backbutton} from '../components/headerbackbutton';

export default function ViewerScreen({route}) {
  const files = route?.params;
  console.log('files==>', files?.image1);
  console.log('files==>', files?.image2);

  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={{flex: 0.1, backgroundColor: '#fff', flexDirection: 'row'}}>
        <View
          style={{
            flex: 0.12,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {/* <Image
            source={require('../components/Assets/left.png')}
            style={{height: '45%', width: '45%'}}
          /> */}
          <Backbutton onPress={() => navigation.goBack()} />
        </View>
        <View
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
        </View>
        {/* <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Register</Text> */}
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
            height: '40%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: files?.image1}}
            style={{height: '95%', width: '95%'}}
          />
        </View>

        <View
          style={{
            borderRadius: 10,
            borderWidth: 1,
            height: '40%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={{uri: files?.image2}}
            style={{height: '95%', width: '95%'}}
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
        <TouchableOpacity style={styles.subbutton}>
          <Text style={styles.subtext}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
