import Icon from 'react-native-vector-icons/Ionicons';
var MainMapView = require('./MainMapView.js')

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  ScrollView,
  ListView,
  Image,
  View,
  TouchableOpacity
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
// header section
  headerContainer: {
    flex: 0.3,
    backgroundColor: '#43C6C6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    marginBottom: 5
  },
  paddingView: {
    paddingTop: 0,
  },
  SearchInputContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    height: 30,
    padding: 4,
    width: 330,
    marginLeft: 5,
    fontSize: 23,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    color: '#4d4d4d',
    backgroundColor: '#f2f2f2',
  },
  SearchInputIcon: {
    color: "white",
  },

// row section
  rowsContainer: {
    flex: 2,
  },
  rowContainer: {
    flexDirection: 'row',

  },
  textContainer: {
    flex: 1,
  },
  textStyle: {
    fontSize: 20,
    marginTop: 2,
    color: 'white',
  },
  arrowContainer: {
    marginRight: 15,
  },
  img: {
    flex: 1,
    alignItems: 'stretch',
    marginBottom: 1,
    padding: 20,
    width: null,
    height: null
  },
});


class Topics extends Component{

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.categoryData = [
      {data: (
        <Image
          source={require('./Topics/Badminton.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Badminton"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
      {data: (
        <Image
          source={require('./Topics/Basketball.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Basketball"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
        {data: (
        <Image
          source={require('./Topics/Golf.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Golf"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
        {data: (
        <Image
          source={require('./Topics/hokey.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Hockey"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
        {data: (
        <Image
          source={require('./Topics/pingpong.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Ping Pong"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
        {data: (
        <TouchableOpacity
          onPress={this.onSurfingPress.bind(this)}
          underlayColor="gray">
          <Image
            source={require('./Topics/surfing.png')}
            style={styles.img}>
              <View style={styles.rowContainer}>
                <View style={styles.textContainer}>
                  <Text style={styles.textStyle}>{"Surfing"}</Text>
                </View>
                <View style={styles.arrowContainer}>
                  <Icon name="ios-arrow-forward" size={30} color="white" />
                </View>
              </View>
          </Image>
          </TouchableOpacity>
      )},
        {data: (
        <Image
          source={require('./Topics/swimming.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Swimming"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
        {data: (
        <Image
          source={require('./Topics/tennis.png')}
          style={styles.img}>
          <View style={styles.rowContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle}>{"Tennis"}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <Icon name="ios-arrow-forward" size={30} color="white" />
            </View>
          </View>
        </Image>
      )},
    ],
    this.state = {
      dataSource: this.ds.cloneWithRows(this.categoryData),
      searchInputText: 'Search...',
      imgLink: '',
    }
  }

  onSurfingPress() {
    this.props.navigator.push({
      component: MainMapView,
      name: "MainMapView"
    })
  }

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    })
  }

  category(rowData) {
    return (
      <View>
        {rowData.data}
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Sports</Text>

          <View style={styles.SearchInputContainer}>
            <Icon name="ios-search" style={styles.SearchInputIcon} size={30} />
            <TextInput
              style={styles.searchInput}
              value={this.state.searchInputText}
              onChange={this.handleChange.bind(this)} />
          </View>

        </View>
        <View style={styles.paddingView}>
        </View>

        <View style={styles.rowsContainer}>

          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.category.bind(this)} />

        </View>
      </View>
    );
  }
}

export default Topics;
