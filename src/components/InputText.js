import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { useTheme } from "@react-navigation/native";
import IntlPhoneInput from "react-native-intl-phone-input";
import { fontSize, fontFamily } from "../Assets/Constant/FontandSize";
import { icons } from "../Assets";
import Receipient from "../Screens/ManualReceipient/Receipient";
const height = Dimensions.get("screen").height;
function InputText(props) {
  const { colors } = useTheme();
  const {
    secureText,
    visible,
    mobile,
    onChangeNumber,
    container,
    onPress,
    name,
    nameColor,
    infoModal,
    info,
    secureTextEntry,
    editable,
  } = props;
  const [borderColor, setBorderColor] = React.useState(false);
  const [number, onChangeNum] = React.useState(null);
  return (
    <View
      style={[
        container,
        {
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        },
      ]}
    >
      <View style={{ flex: 0.9 }}>
        <View
          style={{
            flex: 0.1,
            height: (height / 100) * 5,
            flexDirection: "row",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            {mobile ? (
              <IntlPhoneInput
                containerStyle={LocalStyle.countrycodeInputStyle}
                onChangeText={onChangeNumber}
                value={number}
                placeholder={name}
                defaultCountry={"US"}
                paddingHorizontal={10}
                maxLength={10}
                flagStyle={{ fontSize: 25 }}
                dialCodeTextStyle={{ color: "#000" }}
                keyboardType="numeric"
                phoneInputStyle={{ color: "#000" }}
                placeholderTextColor="#9CA3AF"
                editable
              />
            ) : (
              <View style={LocalStyle.searchSection}>
                <TextInput
                  {...props}
                  secureTextEntry={secureTextEntry}
                  style={LocalStyle.input1}
                  placeholder={name}
                  placeholderTextColor="#9CA3AF"
                  paddingHorizontal={10}
                  editable={editable}
                  // secureTextEntry={true}
                />
                {secureText && (
                  <TouchableOpacity
                    onPress={onPress}
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      paddingRight: 13,
                    }}
                  >
                    {visible == true ? (
                      <Image
                        source={icons.Group}
                        style={{
                          height: (height / 100) * 2.5,
                          width: (height / 100) * 2.5,
                          resizeMode: "contain",
                        }}
                      />
                    ) : (
                      <Image
                        source={icons.Vector}
                        style={{
                          height: (height / 100) * 2.5,
                          width: (height / 100) * 2.5,
                          resizeMode: "contain",
                        }}
                      />
                    )}
                  </TouchableOpacity>
                )}
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
}
const LocalStyle = StyleSheet.create({
  input: {
    height: (height / 100) * 5,
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "red",
  },
  searchSection: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  searchIcon: {
    padding: 10,
  },
  input1: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    color: "#000",
    fontFamily: "Roboto-Medium",
  },
  countrycodeInputStyle: {
    backgroundColor: "#f0f0f0",
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "left",
    width: "100%",
    padding: 0,
    color: "#000",

    // marginHorizontal: -8,
    //  paddingBottom:-5,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default InputText;
