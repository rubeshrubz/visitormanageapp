import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Card from '../components/card';
import Colors from '../components/Colors';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
export default function VisitorNumber() {
    const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.dark_button} />
      <View style={styles.cardview}>
      <Card Date={'23/06/2024'} Time={'10:00 AM'} Number={'01'} />
      <Button text={'Save Record'} onPress={null}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardview: {
    flex:1,
    marginTop:10,
    // borderWidth:1 ,
    alignItems:'center',
    justifyContent:'space-evenly'
 }
});
