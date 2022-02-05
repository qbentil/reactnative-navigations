import * as React from 'react';

import { Button, StyleSheet, Text, View } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { createSwitchNavigator } from 'react-navigation';

const AppNavigator = createSwitchNavigator({
  RouteNameOne: ScreenOne,
  RouteNameTwo: ScreenTwo,
})

class ScreenOne extends React.Component {
  render()
  {
    return (
      <View style = {[styles.container, {borderColor: 'orange'}]}>
        <Button 
          title = "Switch to Screen 2" 
          onPress={() => {this.props.navigation.navigate('RouteNameTwo')}}
         />
      </View>
    );
  }
}
class ScreenTwo extends React.Component {
  render(){
    return (
      <View style = {[styles.container, {borderColor: 'real'}]}>
        <Button 
          title = "Switch to Screen 1"
          onPress={() => {this.props.navigation.navigate('RouteNameOne')}}
        />
      </View>
    );
  }
}

export default class App extends React.Component {
  render()
  {
    return <AppNavigator />
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 25,
  },
});