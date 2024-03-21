import * as React from 'react';
import {View, Dimensions, StyleSheet,Image} from 'react-native';
import {useTheme} from '@react-navigation/native';
import NotificationPopup from 'react-native-push-notification-popup';
import {EventRegister} from 'react-native-event-listeners';
import TextLabel from '../components/TextLabel';
// import {Icon} from '../Components/Icon';
const width = Dimensions.get('window').width;
function CustomNotification(props) {
  const {contentContainers, show} = props;
  const notifiee = React.useRef();
  const {colors} = useTheme();
  React.useEffect(() => {
    let listener = EventRegister.addEventListener(
      global.event.notificationPop,
      (data, propsofOther) => {
        notifiee.current.show({
          onPress: function () {
            EventRegister.emit(global.const.navigation, data);
          },
          appIconSource: require('../Assets/BitLogo.png'),
          appTitle: 'The Big Issue',
          timeText: 'Now',
          title: data?.notification.title,
          body: data?.notification.body,
          slideOutTime: 6000,
        });
      },
    );
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, []);
  const renderCustomPopup = ({
    appIconSource,
    appTitle,
    timeText,
    title,
    body,
  }) => (
    <View
      style={{
        width: width - 20,
        height: 100,
        elevation: 20,
        backgroundColor: colors.background,
        borderRadius: 15,
        justifyContent: 'center',
        paddingHorizontal: 20,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          // alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            flex: 1,
            alignItems: 'center',
          }}>
          {/* <Image
            icon="logo_alone"
            containerStyle={styles.viewcontainer}
            style={[styles.container]}></Image> */}
                 <Image
          source={require('../Assets/BitLogo.png')}
          style={[styles.container]}
        />
          <View style={{paddingHorizontal: 5,marginLeft:5,flex:1}}>
            <TextLabel
              styles={[
                {
                  fontSize: 14,
                  color: '#000',
                },
              ]}
              name={title}></TextLabel>
            <TextLabel
              numberOfLines={2}
              styles={[
                {
                  fontSize: 12,
                  color: '#000',
                },
              ]}
              name={body}></TextLabel>
          </View>
        </View>
      </View>
      {/* <View style={{flex:0.1}}>
          <TextLabel
            styles={[
              {
                fontSize: 12,
                color: colors.lightText,
              },
            ]}
            name={timeText}
          ></TextLabel>
        </View> */}
    </View>
  );
  return (
    <NotificationPopup
      renderPopupContent={renderCustomPopup}
      shouldChildHandleResponderStart={true}
      shouldChildHandleResponderMove={true}
      ref={notifiee}
    />
  );
}
const styles = StyleSheet.create({
  viewcontainer: {},
  container: {
    width: 35,
    resizeMode: 'contain',
    // Without height undefined it won't work
    height: 35,
    borderRadius: 5,
    // tintColor:'#ec3737'
    // figure out your image aspect ratio
  },
});
export default CustomNotification;
