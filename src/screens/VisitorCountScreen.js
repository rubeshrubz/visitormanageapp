import { StyleSheet, Text, View, ScrollView ,TouchableOpacity,SafeAreaView } from 'react-native'
import React from 'react'
import Pie from 'react-native-pie'


const VisitorCountScreen = ()=> {

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <Text style={styles.titleText}>Visitor's Chart</Text>
    <View style={{alignItems: 'center' }}>
      <Pie
        radius={80}
        sections={[
          {
            percentage: 5,
            color: '#5ca9e9',
          },
          {
            percentage: 15,
            color: '#0043ae',
          },
          {
            percentage: 21,
            color: '#008fff',
          },
          {
            percentage: 59,
            color: '#223bc9',
          },
        ]}
        strokeCap={'butt'}
      />
  <View style={styles.mainView}>
    <View style={styles.descView}>
        <View style={[styles.circle,{backgroundColor:'#5ca9e9'}]}></View>
        <Text style={{marginLeft:10}}>Current Visitors percentage</Text>
    </View>
    <View style={styles.descView}>
        <View style={[styles.circle,{backgroundColor:'#0043ae'}]}></View>
        <Text style={{marginLeft:10}}>Daily visitors percentage</Text>
    </View>
    <View style={styles.descView}>
        <View style={[styles.circle,{backgroundColor:'#008fff'}]}></View>
        <Text style={{marginLeft:10}}>This week visitors percentage</Text>
    </View>
    <View style={styles.descView}>
        <View style={[styles.circle,{backgroundColor:'#223bc9'}]}></View>
        <Text style={{marginLeft:10}}>This month visitors percentage</Text>
    </View>
    </View>
    </View>
    <TouchableOpacity style={styles.subbutton}>
        <Text style={styles.subtext}>Click Here to view Today's Visitors</Text>
      </TouchableOpacity>
  </View>

  
  </SafeAreaView>
  )
}
export default VisitorCountScreen;
const styles = StyleSheet.create({
  container: { 
    alignItems: 'center', 
    height: 1000 
  }, 
  titleText:{
    fontSize:20,fontWeight:'bold',margin:20
  },
  descView: {
    flexDirection:'row',justifyContent:'center',alignItems:'center'
  },
  mainView: {
    marginVertical:25,alignSelf:'flex-start'
  },
  circle:{
    borderRadius:25,height:10,width:10
  },
  subtext: {
    fontSize:13,
    fontWeight:'bold',
    color:'#fff',
  },
  subbutton:{
    height:45,
    width:'62%',
    borderRadius:10,
    backgroundColor:'#000',
    alignItems:'center',
    justifyContent:'center'
    
  }
})