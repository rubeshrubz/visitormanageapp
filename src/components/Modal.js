import * as React from "react";
import { View, StyleSheet, Pressable, Dimensions } from "react-native";
import { useTheme } from "@react-navigation/native";
import Modal from "react-native-modal";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
function Modals(props) {
  const {
    data,
    contentContainers,
    container,
    isVisible,
    BackPress,
    onBackdropPress,
  } = props;

  return (
    <View style={contentContainers}>
      <Modal
        avoidKeyboard
        onBackButtonPress={BackPress}
        onBackdropPress={onBackdropPress}
        isVisible={isVisible}
        deviceWidth={deviceWidth}
        deviceHeight={deviceHeight}
      >
        <View style={[container, { backgroundColor: "#fff" }]}>
          {props.children}
        </View>
      </Modal>
    </View>
  );
}
const LocalStyle = StyleSheet.create({
  textStyle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    marginVertical: deviceHeight / 10,
    borderRadius: 10,
    padding: 10,
  },
  contentContainers: {
    padding: 14,
    borderRadius: 20,
  },
});
export default Modals;
