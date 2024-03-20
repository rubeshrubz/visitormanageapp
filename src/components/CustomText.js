import * as React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import IntlPhoneInput from "react-native-intl-phone-input";
import Icon from "react-native-vector-icons/Entypo";
const height = Dimensions.get("screen").height;
function CustomText(props) {
  const { colors } = useTheme();
  const {
    styles,
    name,
    multilines,
    ContainerStyle,
    inputStyles,
    keyboardType,
    value,
    onChangeText,
    placeholder,
    enableIcon,
    editable,
    secureTextEntry,
    secureText,
    onPress,
    TextInputStyle,
    isAboutUs,
    mobile,
    onChangeNumber,
    maxLength,
    info,
    infoModal,
  } = props;
  const [secure, setSecure] = React.useState(true);

  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS == "ios" ? 5 : 10,
        justifyContent: "center",
      }}
    >
      {info ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text {...props} style={[LocalStyle.textStyle, styles]}>
              {name}
            </Text>
          </View>
          <TouchableOpacity onPress={infoModal}>
            <View style={{ paddingRight: 5 }}>
              <Icon name="info-with-circle" color={"#004999"} size={18} />
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <Text {...props} style={[LocalStyle.textStyle, styles]}>
          {name}
        </Text>
      )}
      <TouchableOpacity disabled={!enableIcon} onPress={onPress}>
        <View style={[LocalStyle.inputStyle, inputStyles]}>
          {mobile ? (
            <IntlPhoneInput
              containerStyle={LocalStyle.countrycodeInputStyle}
              flagStyle={{ fontSize: 25 }}
              phoneInputStyle={{ marginLeft: 10 }}
              onBlur={() => alert("hi")}
              onChangeText={onChangeNumber}
              defaultCountry={"US"}
              placeholderTextColor="grey"
              dialCodeTextStyle={{ color: "#000" }}
              phoneInputStyle={{ color: "#000" }}
              modalCountryItemCountryNameStyle={{ color: "#000" }}
              filterInputStyle={{ color: "#000" }}
              modalCountryItemCountryDialCodeStyle={{ color: "#000" }}
            />
          ) : (
            <TextInput
              onChangeText={onChangeText}
              value={value}
              keyboardType={keyboardType}
              style={[LocalStyle.textInputStyle, TextInputStyle]}
              placeholder={placeholder}
              editable={editable}
              secureTextEntry={secureTextEntry ? secure : false}
              numberOfLines={multilines ? 1 : null}
              multiline={false}
              maxLength={maxLength}
              theme={{
                colors: {
                  placeholder: "#000",
                  text: "#000",
                  primary: "#004999",
                  background: "#fbfbfb",
                },
              }}
            />
          )}
          {secureTextEntry && (
            <TouchableOpacity onPress={() => setSecure(!secure)}>
              <Text
                style={{
                  color: "#004999",
                  flex: 1,
                  marginHorizontal: -40,
                  top: 10,
                }}
              >
                {secure ? "Show" : "Hide"}{" "}
              </Text>
            </TouchableOpacity>
          )}
          {enableIcon && (
            <Icon icon={"downarrow"} style={[LocalStyle.imageStyle]} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
const LocalStyle = StyleSheet.create({
  textStyle: {
    fontSize: 13,
    color: "#727272",
    fontWeight: "900",
    textAlign: "left",
    letterSpacing: 0.03,
  },
  inputStyle: {
    borderRadius: 5,
    borderStyle: "solid",
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: Platform.OS === "ios" ? 15 : 0,
  },
  textInputStyle: {
    color: "#141416",
    backgroundColor: "#fbfbfb",
    fontSize: 16,
    height: 40,
    fontWeight: "500",
    fontStyle: "normal",
    textAlign: "left",
    width: "100%",

    borderBottomColor: "#000",
  },
  countrycodeInputStyle: {
    backgroundColor: "#fbfbfb",
    fontSize: 16,
    fontStyle: "normal",
    textAlign: "left",
    width: "100%",
    borderBottomWidth: 0.7,
    marginHorizontal: -8,
    paddingBottom: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    resizeMode: "contain",
    height: 15,
    width: 15,
    marginHorizontal: 10,
  },
});
export default CustomText;
