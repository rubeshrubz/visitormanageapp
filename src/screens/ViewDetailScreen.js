import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function ViewDetailScreen() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>ViewDetailScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})