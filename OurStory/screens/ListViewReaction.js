import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, Image, TouchableHighlight, Alert } from 'react-native';

export default class ListViewReaction extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const images = ['https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/pexels-photo-147460.jpg', 'https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/viewing.jpg', 'https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/home-portrait-bw-eva.jpg', 'https://raw.githubusercontent.com/wpapper/Our-Story-CS-147/master/OurStory/assets/grid/home/faces/pexels-photo-58020.jpg']
    const titles = ['A Buddy System', 'Fueling My Campus', 'Me', 'What I Saw']
    const miles = ['0.1', '0.3', '0.4', '0.6']
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
                  <Text style={styles.rowTextLarge}>{rowData.title}</Text>
                  <View>
                    <Text style={styles.rowTextLarge}>{rowData.miles}</Text><Text style={styles.rowTextSmall}>miles</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>
            }
        />
      </View>
    );
  }
  onPressButton(title) {
    this.props.parentNavigator.push({
      screen: 'ourstory.ViewVideo',
      title: title,
    })
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 0,
    backgroundColor: '#293240'
  },
  rowImage: {
    width: 360,
    height: 100,
  },
  rowText: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  rowTextLarge: {
    flex: 1,
    fontSize: 18,
    color: '#4ECDC4',
    alignItems: 'center',


  },
  rowTextSmall: {
    fontSize: 12,
    color: '#4ECDC4',
  },
});

// App registration and rendering
AppRegistry.registerComponent('ListViewReaction', () => ListViewReaction);
