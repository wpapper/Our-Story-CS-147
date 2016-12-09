/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';
import ListViewHome from './ListViewHome';
import MapStanford from './MapStanford';

export default class ReactionScreen extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const images = ['https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/viewing.jpg']
    const titles = ['Fueling My Campus']
    const miles = ['0.1']
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged : (s1, s2) => s1 !== s2,
      images,
      titles,
      miles
    });
    let rows = [];
    for (let i = 0; i < images.length; i++) {
      rows.push({
        image: images[i],
        title: titles[i],
        miles: miles[i],
      });
    }
    this.state = {
      dataSource: ds.cloneWithRows(rows)
    };
    console.log("ListView navigator")
    console.log(this.props.parentNavigator)
  }
  render() {
    return (
      <View style={{flex: 1, paddingTop: 0}}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableHighlight onPress={() => this.onPressButton(rowData.title)} underlayColor="#DDF8F9">
              <View style={styles.row}>
                <Image source={{uri: rowData.image}} style={styles.rowImage}/>
                <View style={styles.rowText}>

                  <Text style={styles.rowTextTitle}>{rowData.title}</Text>
                  <View>
                    <Text style={styles.rowTextLarge}>{rowData.miles}</Text><Text style={styles.rowTextSmall}>miles</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            }
        />
      <Image source={{uri: 'https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/reactions.png'}} style={styles.image}></Image>
      </View>
    );
  }

  onPressButton(title) {
    this.props.parentNavigator.push({
      screen: 'ourstory.ViewVideo',
      title: title,
      navigatorStyle: viewerNavigatorStyleDefinition,
    })
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0,
    backgroundColor: '#293240',
  },
  rowImage: {
    width: 360,
    height: 100,
    opacity: 1,
  },
  rowText: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'center',

  },
    rowTextTitle: {
    flex: 1,
    fontSize: 18,
    color: '#4ECDC4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 6,

  },
  rowTextLarge: {
    flex: 1,
    fontSize: 18,
    color: '#4ECDC4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  rowTextSmall: {
    fontSize: 12,
    color: '#4ECDC4',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'contain'
  },
});


AppRegistry.registerComponent('ReactionScreen', () => ReactionScreen);
