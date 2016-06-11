import StartSlider from './App/Components/StartSlider'
import User from './App/Components/User'
import MainMapView from './App/Components/MainMapView'
import CoursePage from './App/Components/CoursePage'
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

const SCREEN_WIDTH = require('Dimensions').get('window').width;

/**
 * Overwrite the default navigator scene config.
 * to use a wider area for back swiping.
 */
const FloatFromRight = {
  ...Navigator.SceneConfigs.FloatFromRight,
  gestures: {
    pop: {
      ...Navigator.SceneConfigs.FloatFromRight.gestures.pop,
      edgeHitWidth: SCREEN_WIDTH / 2,
    },
  },
};


class skillnest extends Component {
  render() {
    return (
        <Navigator
          style={{ flex:1 }}
          initialRoute={{ name: 'CoursePage' }}
          renderScene={ this.renderScene } />
          configureScene={ () => FloatFromRight }
          />
    );
  }

  renderScene(route, navigator) {
     if(route.name == 'CoursePage') {
       return <CoursePage navigator={navigator} />
     if(route.name == 'Categories') {
       return <Categories navigator={navigator} />
     }
     if(route.name == 'User') {
       return <User navigator={navigator} />
     }
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('skillnest', () => skillnest);
