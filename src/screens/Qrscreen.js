import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import QRCode from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
export default function Qrscreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
     <QRCode
      value={navigation.navigate('Login')} 
      size={100}
      logoSize={30}
      logoBackgroundColor='transparent'
    />
    </View>
)}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center'
    }
})