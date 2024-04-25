import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import Colors from '../components/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Spinner} from '../components/Spinner';
import LinearGradient from 'react-native-linear-gradient';
import User from 'react-native-vector-icons/FontAwesome6';
import {icons} from '../components/Assets';
const MainScreen = props => {
  const navigation = useNavigation();

  const onClickBuildingAdmin = () => {
    AsyncStorage.setItem('@MySuperStore:key', 'Admin');
    navigation.navigate('Login');
  };
  const onClickSuperAdmin = () => {
    AsyncStorage.setItem('@MySuperStore:key', 'SuperAdmin');
    navigation.navigate('Login');
  };
 
  const onClickSecurity = () => {
    AsyncStorage.setItem('@MySuperStore:key', 'Security');
    navigation.navigate('Login');
  };
  const [spin, setPin] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setPin(false);
  //   }, 2000);
  // }, []);

  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 2,
      useNativeDriver: true,
    }).start();
  }, []);

  const DATA = [
    {
      id: '1',
      title: 'Building Admin',
      image: icons.admin,
    },
    {
      id: '2',
      title: 'Super Admin',
      image: icons.superadmin,
    },
    {
      id: '3',
      title: 'Visitor',
      image: icons.visitor,
    },
    {
      id: '4',
      title: 'Security',
      image: icons.security,
    },
  ];

  const renderItem = item => (
    <View
      style={{
        height: 200,
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Animated.View style={[{transform: [{scale: scaleAnim}]}]}>
        <LinearGradient
          colors={['#0C001D', '#1E024E', '#593C6A']}
          style={{
            height: 150,
            width: 150,
            borderRadius: 7,
            borderColor: 'red',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              item.id == '1'
                ? onClickBuildingAdmin()
                : item.id == '2'
                ? onClickSuperAdmin()
                : item.id == '3'
                ? navigation.navigate('QRScanner')
                : item.id == '4'
                ? onClickSecurity()
                : null;
            }}
            style={{
              height: 150,
              width: 150,
              borderRadius: 7,
              // backgroundColor: 'grey',
              borderColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              style={{height: 60, width: 60, tintColor: '#fff'}}></Image>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                marginTop: 10,
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
       <StatusBar
          barStyle={'dark-content'}
          backgroundColor={Colors.white}
        />
      <LinearGradient
        colors={['#0C001D', '#1E024E', '#593C6A']}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}> */}
        <View style={styles.topview}>
          <Text style={styles.selecttext}> Select Your Role</Text>
        </View>

        <View style={styles.bottomview}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={({item, index}) => renderItem(item, index)}
            keyExtractor={item => item.id}
          />
        </View>
        {/* </View> */}
      </LinearGradient>
    </SafeAreaView>
    // <SafeAreaView style={styles.container}>
    //   {spin ? <Spinner /> : null}
    //   <StatusBar
    //     barStyle={'light-content'}
    //     backgroundColor={Colors.dark_button}
    //   />
    //     <LinearGradient
    //       colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
    //       style={styles.subbutton}>
    //   <View
    //     style={{
    //       flex: 1,
    //       margin: 10,
    //       alignItems: 'center',
    //       justifyContent: 'center',
    //     }}>
    //     <Text
    //       style={{
    //         fontWeight: 'bold',
    //         fontSize: 24,
    //         marginVertical: 10,
    //         color: Colors.white,
    //       }}>
    //       Select Your Role
    //     </Text>
    //     <Button
    //       text={'Building Admin'}
    //       onPress={() => onClickBuildingAdmin()}
    //     />
    //     <Button text={'Super Admin'} onPress={() => onClickBuildingAdmin()} />
    //     <Button
    //       text={'Visitor'}
    //       onPress={() => navigation.navigate('QRScanner')}
    //     />
    //     <Button text={'Security Staff'} onPress={() => onClickSecurity()} />
    //   </View>
    //   </LinearGradient>
    // </SafeAreaView>
  );
};
export default MainScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  topview: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomview: {
    flex: 0.7,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // borderWidth:1
  },
  selecttext: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  bottombox: {
    flex: 0.6,
    width: '90%',
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
    alignItems: 'center',
  },
});
