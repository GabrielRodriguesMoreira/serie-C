import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';

const App = () => {
  const data = [
    { id: '1', text: 'Item 1' },
    { id: '2', text: 'Item 2' },
    { id: '3', text: 'Item 3' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>React Native Example</Text>

      <Image
        source={require('./zumbi.png')}
        style={styles.image}
      />

      <Button
        title="Press Me"
        onPress={() => alert('Button Pressed')}
      />

      <TouchableOpacity onPress={() => alert('Touchable Opacity Pressed')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable Opacity</Text>
        </View>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="Type something..."
      />

      <ScrollView style={styles.scrollView}>
        <Text>Scroll View Content</Text>
      </ScrollView>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item.text}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
  },
  input: {
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    margin: 10,
  },
  scrollView: {
    height: 100,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default App;
