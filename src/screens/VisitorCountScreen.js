import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import PieChart from 'react-native-pie-chart';
import LinearGradient from 'react-native-linear-gradient';
import {Backbutton} from '../components/headerbackbutton';
import {useNavigation} from '@react-navigation/native';
import Arrow from 'react-native-vector-icons/AntDesign';
const VisitorCountScreen = () => {
  const navigation = useNavigation();
  const widthAndHeight = 250;
  const series = [123, 321, 123, 789];
  const sliceColor = ['#5ca9e9', '#0043ae', '#008fff', '#223bc9'];
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <LinearGradient
          colors={['#2B8ADD', '#2E44A2', '#2D2B89']}
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            width: '100%',
            height: 80,
          }}>
          <TouchableOpacity
            style={{margin: 25, flex: 0.2}}
            onPress={() => navigation.goBack()}>
            <Arrow name={'arrowleft'} size={20} color={'#fff'} />
            {/* <Image source={require('../components/Assets/menu.png')} style={{height:30,width:30}}/> */}
          </TouchableOpacity>
          <Text style={styles.titleText}>Visitor's Chart</Text>
        </LinearGradient>

        <View style={{alignItems: 'center', marginTop: 20}}>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
            // doughnut={true}
            // coverRadius={0.45}
            // coverFill={'#FFF'}
          />
          <View style={styles.mainView}>
            <View style={styles.descView}>
              <View
                style={[styles.circle, {backgroundColor: '#5ca9e9'}]}></View>
              <Text style={styles.chartext}>
                20% Current Visitors percentage
              </Text>
            </View>
            <View style={styles.descView}>
              <View
                style={[styles.circle, {backgroundColor: '#0043ae'}]}></View>
              <Text style={styles.chartext}>40% Daily visitors percentage</Text>
            </View>
            <View style={styles.descView}>
              <View
                style={[styles.circle, {backgroundColor: '#008fff'}]}></View>
              <Text style={styles.chartext}>
                20% This week visitors percentage
              </Text>
            </View>
            <View style={styles.descView}>
              <View
                style={[styles.circle, {backgroundColor: '#223bc9'}]}></View>
              <Text style={styles.chartext}>
                70% This month visitors percentage
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.subbutton}>
          <Text style={styles.subtext}>
            Click Here to view Today's Visitors
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default VisitorCountScreen;
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: 1000,
    backgroundColor: '#fff',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    color: '#fff',
    alignSelf: 'center',
    flex: 0.7,
  },
  descView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  mainView: {
    marginVertical: 25,
    alignSelf: 'flex-start',
  },
  circle: {
    borderRadius: 25,
    height: 10,
    width: 10,
  },
  subtext: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#fff',
  },
  subbutton: {
    height: 45,
    width: '62%',
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chartext: {
    fontSize: 15,
    fontWeight: '500',
    color: '#000',
    marginLeft: 7,
  },
});
