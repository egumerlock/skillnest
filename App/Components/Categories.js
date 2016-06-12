'use strict'

import Icon from 'react-native-vector-icons/Ionicons';
var Slider = require('react-native-slider');

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  ScrollView,
  ListView,
  Image,
  TouchableOpacity,
  navigator,
  View
} from 'react-native';

import Topics from './Topics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
// header section
  headerContainer: {
    paddingTop: 20,
    flex: 0.2,
    backgroundColor: '#43C6C6',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 1,
    marginBottom: 1,
  },
  paddingView: {
    paddingTop: 0,
  },
  SearchInputContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },
  searchInput: {
    height: 30,
    width: 330,
    marginLeft: 5,
    fontSize: 23,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 8,
    color: '#4d4d4d',
    backgroundColor: '#f2f2f2',
    marginTop: 5
  },
  SearchInputIcon: {
    color: "white",
    marginTop: 5
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
    color: 'white',
    justifyContent: 'center',
  },
  sliderTextStyle: {
    paddingTop: 10,
    fontSize: 20,
    color: 'white',
    marginLeft: 50,
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
  Slider: {
    flex: 0.2,
    padding: 10,
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: '#43C6C6'
  }
});



class Categories extends Component{

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.categoryData = [
        {data: (
          <Image
            source={require('./category/Art.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Art"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
        {data: (
          <Image
            source={require('./category/Automotive.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Automotive"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
        {data: (
          <Image
            source={require('./category/Craft.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Craft"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
        {data: (
          <Image
            source={require('./category/Dance.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Dance"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
        {data: (
          <Image
            source={require('./category/Drama.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Drama"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Food.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Food"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Games.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Games"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Martial.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Martial"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Mental.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Mental"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Music.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Music"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <Image
            source={require('./category/Outdoors.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Outdoors"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>
        )},
          {data: (
          <TouchableOpacity
            onPress={this._onButton.bind(this)}
            underlayColor="gray">

          <Image
            source={require('./category/Sports.png')}
            style={styles.img}>
            <View style={styles.rowContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.textStyle}>{"Sports"}</Text>
              </View>
              <View style={styles.arrowContainer}>
                <Icon name="ios-arrow-forward" size={30} color="white" />
              </View>
            </View>
          </Image>

          </TouchableOpacity>
        )}
      ];
    this.state = {
      dataSource: this.ds.cloneWithRows(this.categoryData),
      searchInputText: ' Search...',
      imgLink: '',
    }
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

    _onButton(){
    this.props.navigator.push({
      component: Topics,
      name: "Topics"
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Categories</Text>
        <View style={styles.SearchInputContainer}>
          <Icon name="ios-search" style={styles.SearchInputIcon} size={30} />
          <TextInput
            style={styles.searchInput}
            value={this.state.searchInputText}
            onChange={this.handleChange.bind(this)}>

          </TextInput>
        </View>
        </View>

        <View style={styles.Slider}>
        <Text style={styles.sliderTextStyle}>Price Range: Up to ${this.state.value} / hour</Text>
          <Slider
          value={10}
          onValueChange={(value) => this.setState({value})}
          step={5}
          maximumValue={100}
          minimumValue={10}
          minimumTrackTintColor='gray'
          maximumTrackTintColor='white'/>
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



module.exports = Categories;
