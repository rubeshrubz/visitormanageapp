import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  props,
  TouchableOpacity,
} from 'react-native';
import IntlPhoneInput from 'react-native-intl-phone-input';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const InputText = props => {
  const [number, setshow] = useState(null);
  const {
    mobile,
    date,
    secureText,
    secureTextEntry,
    visible,
    onPress,
    editable,
    style,
    keyboardType,
    onChangeText,
    name,
    visibles,
    value,
    onChangeNumber,
    placeholder,
  } = props;
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {mobile ? (
        <IntlPhoneInput
          containerStyle={{
            height: (Height / 50) * 3,
            width: (Width / 3.3) * 3,
            backgroundColor: '#f0f0f0',
          }}
          value={number}
          defaultCountry={'IN'}
          placeholder={placeholder}
          onChangeText={onChangeNumber}
          flagStyle={{fontSize: 25}}
          dialCodeTextStyle={{color: '#000'}}
          keyboardType="numeric"
          phoneInputStyle={{color: '#000'}}
          placeholderTextColor="#9CA3AF"
          editable
        />
      ) : (
        <View
          style={{
            borderWidth: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: (Height / 50) * 3,
            width: (Width / 3.3) * 3,
            borderRadius: 10,
            backgroundColor: '#f0f0f0',
          }}>
          <TextInput
            {...props}
            style={[
              {
                height: (Height / 50) * 3,
                width: (Width / 3.52) * 3,
                // borderWidth: 1,
                fontSize: 15,
                fontWeight: 'bold',
                elevation: 0,
                backgroundColor: '#f0f0f0',
                borderRadius: 15,
                marginVertical: 10,
              },
            ]}
            secureTextEntry={secureTextEntry}
            editable={editable}
            keyboardType={keyboardType}
          />
          {secureText && (
            <TouchableOpacity
              style={{
                borderWidth: 0,
                alignItems: 'center',
                height: (Height / 50) * 3,
                backgroundColor: '#f0f0f0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={onPress}
              keyboardType={keyboardType}>
              {visible == true ? (
                <Icon name={'eye-off'} size={22} color={'#4f81bd'} />
              ) : (
                <Icon name={'eye-check'} size={23} color={'#4f81bd'} />
              )}
            </TouchableOpacity>
          )}
          {date && (
            <TouchableOpacity
              style={{
                borderWidth: 0,
                alignItems: 'center',
                height: (Height / 50) * 3,
                backgroundColor: '#f0f0f0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
              }}
              onPress={onPress}
              editable={editable}
              keyboardType={keyboardType}>
              {visibles == true ? (
                <Icon name={'chevron-up'} size={23} color={'#4f81bd'} />
              ) : (
                <Icon name={'chevron-down'} size={22} color={'#4f81bd'} />
              )}
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};
export default InputText;
