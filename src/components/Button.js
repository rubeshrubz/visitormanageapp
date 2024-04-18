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
import Colors from "./Colors";
import LinearGradient from 'react-native-linear-gradient';

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
   // textColor = colors.background,
    img,
  } = props;

  return (
    <View>
    
      <TouchableOpacity onPress={onPress}>
      <LinearGradient
      colors={['#0C001D', '#1E024E', '#593C6A']}
      style={styles.buttonView}>
        <View
          style={[
            styles.buttonView,
            buttonStyle,
          ]}
        >
          {img && (
            <View style={{ justifyContent: "center" }}>
              <Image style={styles.Img} source={image} />
            </View>
          )}
          <View>
            <Text style={[styles.buttonText, { color:Colors.white }]}>
              {text}
            </Text>
          </View>
        </View>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  buttonView: {
     width:(Height / 100) * 25,
     padding: 10,
     marginVertical: 15,
     marginHorizontal: 30,
     borderRadius: 10,
     justifyContent: "center",
     alignItems: "center",
     height: 50,
   
  },
  buttonText: {
    fontSize: 16,
    textAlign: "center",
    color: Colors.white,
    // paddingVertical: 5,
    
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
