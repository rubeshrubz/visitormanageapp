import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Backbutton} from '../components/headerbackbutton';
import Colors from '../components/Colors';
import Button from '../components/Button';

export default function AttachFile() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.button_text}
      />
      <View style={styles.button_cover}>
        <Backbutton onPress={() => navigation.goBack()} />
        <Text style={styles.profile_text}>Visitor's Civil Id Details</Text>
      </View>
      <Text style={styles.civilidtext}> Civil Id Picture Front Side</Text>
      <View style={styles.choosefilecover}>
        <TouchableOpacity style={styles.choosefile}>
          <Text style={styles.chooseText}>Choose File</Text>
        </TouchableOpacity>
        <View style={styles.imgtext}>
          <Text style={styles.nochoosetext}>No File Choosen </Text>
        </View>
      </View>
      <Text style={styles.civilidtext}> Civil Id Picture Back Side</Text>
      <View style={styles.choosefilecover}>
        <TouchableOpacity style={styles.choosefile}>
          <Text style={styles.chooseText}>Choose File</Text>
        </TouchableOpacity>
        <View style={styles.imgtext}>
          <Text style={styles.nochoosetext}>No File Choosen </Text>
        </View>
      </View>
      <Button buttonStyle={styles.button} text={'Submit'} onPress={null} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button_cover: {
    height: 50,
    width: '100%',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    flexDirection: 'row',
  },
  profile_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.button_text,
    marginHorizontal: 70,
  },
  civilidtext: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Colors.button_text,
    marginLeft: 15,
    marginVertical: 15,
  },
  choosefilecover: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    // borderWidth: 1,
    borderColor: Colors.button_text,
    borderRadius: 10,
    padding: 7,
    backgroundColor: Colors.white,
  },
  choosefile: {
    height: 35,
    width: '25%',
    backgroundColor: Colors.button_text,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  chooseText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: Colors.white,
  },
  imgtext: {
    // borderWidth: 1,
    width: '75%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nochoosetext: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'lightgrey',
  },
  button: {
    alignSelf: 'center',
  },
});
