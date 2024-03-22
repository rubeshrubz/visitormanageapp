import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Button from '../components/Button'
import { useNavigation } from '@react-navigation/native'

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <TouchableOpacity onPress = {()=>navigation.navigate('VisitorRegisterScreen')}>
        <Text style={{color:'#000',fontSize:16}}>Click here to <Text style={{fontSize:16,textDecorationLine:'underline',color:'#004999'}}>Register</Text></Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  }
})