import Icon from 'react-native-vector-icons/Ionicons';
import Separator from './Separator'

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
    flex: 0.44,
    backgroundColor: '#008000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
    marginTop: 30,
    marginBottom: 23,
  },
  paddingView: {
    paddingTop: 20,
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
    marginTop: 5,
    marginBottom: 5,
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
    marginBottom: 5,
    padding: 20,
    width: null,
    height: null
  },
});

const categoryData = [
  {data: (
    <Image
      source={require('./run.png')}
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


