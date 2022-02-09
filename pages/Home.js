import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { styles } from './Styles'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>To test this app, just press the button below!</Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={styles.button}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Press this button</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Page1')}
        style = {styles.button}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Go to Page1</Text>
      </TouchableOpacity>
    </View>
  );
}

export default HomeScreen