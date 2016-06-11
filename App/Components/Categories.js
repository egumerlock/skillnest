import Icon from 'react-native-vector-icons/Ionicons';
import Separator from './Helpers/Separator'

import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  ScrollView,
  ListView,
  Image,
  View
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
// header section
  headerContainer: {
    flex: 0.3,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 5,
    marginBottom: 5,
  },
  paddingView: {
    paddingTop: 0,
  },
  SearchInputContainer: {
    flexDirection: 'row',
  },
  searchInput: {
    height: 30,
    padding: 2,
    width: 330,
    marginLeft: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: '#262626',
    borderRadius: 8,
    color: '#4d4d4d',
    backgroundColor: '#f2f2f2',
  },
  SearchInputIcon: {
    color: "#000000",
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

const categoryData = [
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
  )}
]

class Categories extends Component{

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(categoryData),
      searchInputText: 'Search...',
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
              onChange={this.handleChange.bind(this)} />
          </View>

        </View>
        <View style={styles.paddingView}>
          <Separator />
        </View>

        <View style={styles.rowsContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.category} />
        </View>
      </View>
    );
  }
}



module.exports = Categories;



