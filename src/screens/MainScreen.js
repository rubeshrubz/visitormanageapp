import {StyleSheet, Text, View, StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MainScreen = props => {
  const navigation = useNavigation();

  const onClickBuildingAdmin= () => {
    AsyncStorage.setItem( '@MySuperStore:key', 'Admin')
   navigation.navigate('Login')
  }

  const onClickSecurity = () => {
    AsyncStorage.setItem( '@MySuperStore:key', 'Security')
   navigation.navigate('Login')
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.dark_button}
      />
      <View
        style={{
          flex: 1,
          margin: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 24, marginVertical: 10,color:Colors.dark_button}}>
          Select Your Role
        </Text>
        <Button
          text={'Building Admin'}
          onPress={() => onClickBuildingAdmin()}
        />
        <Button
          text={'Super Admin'}
          onPress={() => onClickBuildingAdmin()}
        />
        <Button
          text={'Visitor'}
          onPress={() => navigation.navigate('QRScanner')}
        />
        <Button
          text={'Security Staff'}
          onPress={() => onClickSecurity()}
        />
      </View>
    </SafeAreaView>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
