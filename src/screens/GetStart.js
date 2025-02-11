import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Animated,
  StatusBar
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Colors from '../components/Colors';
import {icons} from '../components/Assets';
import Button from '../components/Button';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
export default function GetStart(props) {
  const [scaleAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  }, []);

  const navigation = useNavigation();
  return (
    <LinearGradient
      colors={['#0C001D' , '#1E024E', '#593C6A']}
      style={{flex: 1}}>
          <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.dark_button}
      />
      <Animated.View
        style={[styles.container, {transform: [{scale: scaleAnim}]}]}>
        <View style={styles.container}>
          <View style={styles.logoview}>
            <Image source={icons.getstart} style={styles.logo} />
          </View>
          <View style={styles.logoview}>
            <TouchableOpacity
              onPress={() => navigation.navigate('MainScreen')}
              style={styles.subbutton}>
              <Text style={styles.subtext}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoview: {
    flex: 0.5,
    width: '100%',
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
    color: '#2E44A2',
  },
  subbutton: {
    height: 60,
    width: '90%',
    borderRadius: 15,
    alignSelf: 'center',
    backgroundColor: '#531955',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
});
