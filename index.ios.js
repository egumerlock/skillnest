import StartSlider from './App/Components/StartSlider'
import MainMapView from './App/Components/MainMapView'


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
          initialRoute={{ name: 'StartSlider' }}
          renderScene={ this.renderScene } />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'StartSlider') {
       return <MainMapView navigator={navigator} />
     }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('skillnest', () => skillnest);
