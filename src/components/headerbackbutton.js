import React from "react";
import { View, Text,TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Colors from "./Colors";

export const Backbutton = (props) => {
    const {
        text,
        onPress
    } = props
    return (
        <TouchableOpacity onPress={onPress}
            style={{
                // height: 50,
                // width: 50,
                // borderWidth: 0.5,
                borderRadius: 10,
                backgroundColor: 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft:10,

            }}>
            <Icon name='arrowleft' size={30} color={Colors.dark_button} backgroundColor={"lightgrey"} />

        </TouchableOpacity>
)}