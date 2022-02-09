import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function Page1({ navigation }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity 
      onPress={() => navigation.navigate('Home')}
      style={styles.button}>
      <Text style={{ fontSize: 20, color: '#fff' }}>Return to Home</Text>
    </TouchableOpacity>
  </View>
  ); 
}

export default Page1