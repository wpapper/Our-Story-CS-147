/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ListViewHome from './ListViewHome';
import MapStanford from './MapStanford';

export default class Home extends Component {
  render() {
    console.log("home navigator")
    console.log(this.props.navigator)
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            Stories
          </Text>
        </View>
        <View style={styles.body}>
          <ListViewHome
            parentNavigator={this.props.navigator}
            >
          </ListViewHome>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#29313f',
  },
  header: {
    width: 360,
    marginTop: 0,
    flex: 0,
    backgroundColor: '#293240',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    marginTop: 80,
    color: '#4ECDC4',
    fontFamily: 'Montserrat-ExtraBold'
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tempMargin: {
    marginTop: 200,
  }
});

AppRegistry.registerComponent('OurStory', () => OurStory);
