import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Arrow from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

export default function AppHeader(props) {
    const navigation = useNavigation()
  return (
    <LinearGradient
    colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
    style={{  alignItems: 'center',flexDirection:'row',width:'100%',height:80}}>
       <TouchableOpacity style={{margin:25,flex:0.2}}  onPress={() => navigation.goBack()}>
          <Arrow name={'arrowleft'} size={30} color={'#fff'}/>
       </TouchableOpacity>
       <Text style={styles.titleText}>{props.title}</Text>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
    titleText:{
        fontSize:20,fontWeight:'bold',margin:20,color:"#fff",alignSelf:'center',flex:0.7
      },
})