import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';

const app = () => {
  return(
  <View style={styles.container}>
    <View style={styles.dayGame}>
      <Image style={styles.image} source={require('./zumbi.png')}></Image>
      <Text>Versus</Text>
      <Image style={styles.image} source={require('./zumbi.png')}></Image>
    </View>
  </View>
  )
}

const lightColors = {
  text: '#1c0818',
  background: '#f8e7f5',
  primary: '#2e9e42',
  secondary: '#cce9f0',
  accent: '#36ba4e',
};

const darkColors = {
  text: '#f7e3f3',
  background: '#180715',
  primary: '#61d175',
  secondary: '#0f2c33',
  accent: '#45c95d',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: darkColors.background,
    paddingTop: 40,
    padding: 20,
  },
  dayGame: {
    width: "100%",
    borderRadius: 30,
    height: 200,
    backgroundColor: darkColors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  
  image: {
    width: 100,
    height: "100%",
  },
})

export default app;