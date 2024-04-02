import {StyleSheet, Text, View, Image,TouchableOpacity,Animated} from 'react-native';
import React,{useState,useEffect} from 'react';
import Colors from '../components/Colors';
import {icons} from '../components/Assets';
import Button from '../components/Button';
export default function GetStart(props) {

    const [scaleAnim] = useState(new Animated.Value(0)) 

    useEffect(() => {
        Animated.spring(
          scaleAnim,
          {
            toValue: 1,
            friction: 3,
            useNativeDriver: true
          }
        ).start();
      }, [])


  return (
    <Animated.View               
      style={[
        styles.container,
        {transform: [{scale: scaleAnim}]}         
      ]}
    >
    <View style={styles.container}>
      <View style={styles.logoview}>
        <Image source={icons.getstart} style={styles.logo} />
      </View>
      <View style={styles.logoview}>
      <TouchableOpacity onPress={() => null} style={styles.subbutton}>
        <Text style={styles.subtext}>Get Start</Text>
      </TouchableOpacity>
      </View>
    </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.button_text,
    // alignItems:'center',
    // justifyContent:'center'
  },
  logoview: {
    flex: 0.5,
    width: '100%',
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '40%',
    width: '50%',
    borderRadius: 70,
  },
  subtext: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4f81bd',
  },
  subbutton: {
    height: 60,
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:30
  },
});
