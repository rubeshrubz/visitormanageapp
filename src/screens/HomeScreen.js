import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Button, View,StyleSheet, Text, TouchableOpacity ,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicon from 'react-native-vector-icons/Ionicons'

const HomeScreen=() =>{
  const navigation = useNavigation()
  return (
    <View style={{ flex: 1, alignItems: 'center',backgroundColor:'#fff'}}>
       <LinearGradient
      colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
      style={{  alignItems: 'center',flexDirection:'row',width:'100%',height:80}}>
         <TouchableOpacity style={{margin:25,flex:0.2}}  onPress={() => navigation.openDrawer()}>
           <Image source={require('../components/Assets/menu.png')} style={{height:30,width:30}}/>
         </TouchableOpacity>
         <Text style={{flex:0.7,color:'#fff',fontSize:20,fontWeight:'bold',alignSelf:'center'}}>Visitor's Management</Text>
         <Ionicon  name ={'notifications-outline'} size={20} color={'#fff'}/>
      </LinearGradient>
    </View>
  )
}

export default HomeScreen;
