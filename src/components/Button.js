import { useTheme } from "@react-navigation/native";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";

// const SemiBold = {fontFamily: 'Poppins-SemiBold'};
const Height = Dimensions.get("screen").height;
const Width = Dimensions.get("screen").width;

const Button = (props) => {
  const { colors } = useTheme();

  const {
    onPress,
    text,
    buttonStyle,
    image,
    textColor = colors.background,
    img,
  } = props;

  return (
    <View style={{}}>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.buttonView,
            { backgroundColor: "#004999" },
            buttonStyle,
          ]}
        >
          {img && (
            <View style={{ flex: 0.6, justifyContent: "center" }}>
              <Image style={styles.Img} source={image} />
            </View>
          )}
          <View style={{ flex: 0.4 }}>
            <Text style={[styles.buttonText, { color: textColor }]}>
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
    padding: 8,
    marginVertical: 15,
    marginHorizontal: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    // height:50
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
    paddingVertical: 5,
    fontWeight: "900",
    //  textTransform:'capitalize'
    fontFamily: "Roboto-Bold",
  },
  Img: {
    height: (Height / 100) * 9,
    width: (Height / 100) * 9,
    resizeMode: "contain",
  },
});

export default Button;
