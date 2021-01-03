import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import CarsList from './components/CarsList/CarsList';


//*Car Images
import ModelX from './assets/images/ModelX.jpeg'

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />
      <StatusBar style="auto" color="orange" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
