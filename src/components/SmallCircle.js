import React from 'react';
import {View, StyleSheet} from 'react-native';


 const SmallCircle = ({ color })=>{
  return (
    <View style={[styles.circle,{backgroundColor:color}]}>

    </View>
  );
};
export default SmallCircle;
const styles = StyleSheet.create({
    circle:{ 
        width: 6, 
        height: 5, 
        borderRadius: 5 / 2, 
        backgroundColor: '#fff'
    },
})

