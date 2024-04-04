import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import Lottie from 'lottie-react-native';

export const Spinner = () => {
    return (
        <Modal animationType="slide"
            transparent={true}
            onRequestClose={() => { }}>
            <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)", }}>
                <View style={{
                    flex: 1, alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Lottie source={require('../../src/components/Assets/animation.json')}
                        autoPlay
                        loop
                        style={{ height: 200, width: 250 }} />
                </View>
            </View>
        </Modal>

    )
}