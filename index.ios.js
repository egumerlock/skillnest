import StartSlider from './App/Components/StartSlider'
import MainMapView from './App/Components/MainMapView'
import Categories from './App/Components/Categories'

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from 'react-native';

class skillnest extends Component {
  render() {
    return (
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'Categories' }}
          renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'Categories') {
       return <Categories navigator={navigator} />
     }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('skillnest', () => skillnest);
