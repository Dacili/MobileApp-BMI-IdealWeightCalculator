import * as React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import Constants from 'expo-constants';
import { CheckBox } from 'react-native-elements'
// You can import from local files
import AssetExample from './components/AssetExample';
import BMI from './BMI.js';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <BMI></BMI>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   
    backgroundColor: 'black',
    padding: 8,
  }
});
