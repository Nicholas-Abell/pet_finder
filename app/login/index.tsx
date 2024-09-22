import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function Login() {
  return (
    <View style={{flex: 1}}>
      <Link href={'/login'}>
      <Text>Login Screen</Text>
      </Link>
    </View>
  )
}