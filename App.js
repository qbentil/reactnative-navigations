import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';

export default class App extends React.Component {
  render()
  {
    return (
      <View style={styles.container}>
        <Text>Hurraaayyyyy!</Text>
        <Text>REACT NAVIGATIONS</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});