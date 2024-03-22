import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
const MainScreen = props => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{flex:1,margin:10,alignItems:'center',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:24,marginVertical:10}} >Select your role</Text>
        <Button
        text={'Building Admin'}
         onPress={()=>navigation.navigate('Login')}
        />
        <Button
        text={'Super Admin'}
        onPress={()=>navigation.navigate('Login')}
        />
        <Button
        text={'Visitor'}
        // onPress={()=>}
        />
        <Button
        text={'Security Staff'}
        onPress={()=>navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  )
}
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})