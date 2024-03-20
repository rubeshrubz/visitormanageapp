import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  TextInput,
} from 'react-native';
import {themesColor} from '../Utils/themes';
import {EventRegister} from 'react-native-event-listeners';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
function SnackBar(props) {
  const animatedValue = new Animated.Value(100);
  const textref = React.useRef();
  const snakcBarstyle = React.useRef();
  React.useEffect(() => {
    let open = EventRegister.addEventListener(
      global.event.openSnackbar,
      data => {
        console.log('data', data);
        textref.current.setNativeProps({text: data?.message});
        snakcBarstyle.current.setNativeProps(themesColor[data?.type]);
        snakcBarstyle.current.setNativeProps({height: data?.big ? 100 : 60});
        openSnack(data);
      },
    );
    let close = EventRegister.addEventListener(
      global.event.closeSnackbar,
      () => {
        closeinstant();
      },
    );
    return () => {
      EventRegister.removeEventListener(open);
      EventRegister.removeEventListener(close);
    };
  }, []);

  const openSnack = data => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => closeSnackbar());
  };
  const closeSnackbar = () => {
    const timerID = setTimeout(() => {
      Animated.timing(animatedValue, {
        toValue: 100,
        duration: 600,
        useNativeDriver: true,
      }).start(() => {
        clearTimeout(timerID);
      });
    }, 2000);
  };
  const closeinstant = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 600,
      useNativeDriver: true,
    }).start();
  };
  return (
    <Animated.View
      ref={snakcBarstyle}
      style={[
        {
          transform: [{translateY: animatedValue}],
          backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
        },
        LocalStyle.animatedView,
      ]}>
      <TextInput
        multiline={true}
        style={{color: '#fff'}}
        editable={false}
        ref={textref}></TextInput>
    </Animated.View>
  );
}
const LocalStyle = StyleSheet.create({
  animatedView: {
    position: 'absolute',
    width: '95%',
    left: 10,
    bottom: 2,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 100,
  },
});

export default SnackBar;
