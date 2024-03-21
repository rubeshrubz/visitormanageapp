import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {useTheme} from '@react-navigation/native';
function TextLabel(props) {
  const {colors} = useTheme();
  const {styles, name, secondname, ContainerStyle,textstyle} = props;
  return (

    <View style={ContainerStyle}>
      {!textstyle? <Text {...props} style={[LocalStyle.textStyle, styles]}>
        {name} {secondname}
      </Text>:<Text {...props} style={styles}>
        {name} {secondname}
      </Text>}
     
    </View>

  );
}
const LocalStyle = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    color:'#919191',
  },
});
export default TextLabel;