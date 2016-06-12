var Button = require('./Common/button');
import Separator from './Helpers/Separator'
import communication from './Helpers/Communication'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView,
  MapView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    marginTop: -100
  },
  title: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    flex: 1,
    height: 36,
    borderWidth: 2,
    borderColor: 'white',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    width: 150,
    borderRadius: 10,
    marginBottom: 10
  },
  label: {
    fontSize: 14,
    color: 'black',
    flex: 1
  },
  rowContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'visible',
    borderWidth: 2,
    borderColor: 'white',
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    color: 'white'
  },
  map: {
    flex: 1,
    height: 150,
    width: null,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'visible',
    borderWidth: 2,
    borderColor: 'white',
  },
});

class CoursePage extends Component {
  constructor() {
    super();
    this.state = {
      coordinate: {
        latitude: 37.8324,
        longitude: -122.4795
      },
    };
  }
  render() {
    return (
      <Image style={styles.container} source={require('./Helpers/background-gradient-custom.png')}>

        <View>
          <View style={styles.rowContainer}>
            <Text style={styles.title}> Introduction to Surfing </Text>
          </View>

          <View style={styles.mapContainer}>
            <MapView style={styles.map} followUserLocation={true} showsUserLocation={true}> <MapView.Marker coordinate={this.state.coordinate}/> </MapView>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Time: June 18, 2016 @ 9AM </Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Course Description: This is a 2-hour individual surf {'\n'} lesson that focuses on technique and skill.</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Availability: 1/1 Spots</Text>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Pricing: $120</Text>
          </View>

          <TouchableHighlight style={styles.button} onPress={() => communication.email(['jeannerenault@gmail.com'],null,null,'Introduction to Surfing Lessons', 'Looking forward to our lesson on Saturday, June 18 @ 9AM.')} underlayColor='#17A66C'>
            <Text style={styles.buttonText}>Enroll</Text>
          </TouchableHighlight>
        </View>

      </Image>
    )
  }
};

export default CoursePage;
