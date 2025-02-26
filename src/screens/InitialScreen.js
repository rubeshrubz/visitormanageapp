import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {icons} from '../components/Assets';
import SplashScreen from 'react-native-splash-screen';
import { useNavigation } from '@react-navigation/native';

const InitialScreen = () => {

const navigation = useNavigation();

  useEffect(() => {
    SplashScreen.hide();
    setTimeout(()=>{
      navigation.navigate('MainScreen');
    },1000)
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={icons.splash} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    height: '100%',
    width: '100%',
  },
});
export default InitialScreen;
