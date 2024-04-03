import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from './Colors'

export default function Card(props) {

    const {
        Date,
        Number,
        Time,
      } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Date: {Date}</Text>
      <Text style={styles.text}>Time: {Time}</Text>
      <Text style={styles.text}>Visitor Number: {Number}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        width:'90%',
        alignSelf:'center',
        backgroundColor:Colors.button_text,
        borderRadius:10,
        padding:20
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:Colors.white,
        marginVertical:10,
        textAlign:'center'
    }
})