var Button = require('./Common/button');
import Separator2 from './Helpers/Separator2'
import communication from './Helpers/Communication'
import AnimatedRatingStars from './Helpers/AnimatedRatingStars'

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
    height: null
  },
  title: {
    fontSize: 18,
    alignSelf: 'flex-start',
    color: '#658D9F',
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
    backgroundColor: 'white',
    paddingVertical: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    overflow: 'visible',
    borderColor: 'white',
    width: null,
    height: null
  },
  nameContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingVertical: 10,
    padding: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
    borderColor: 'white',
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    color: '#658D9F'
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
    borderColor: 'white',
  },
  profilePic:{
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'transparent'
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
            <Image
            style={styles.profilePic}
            source={{uri:'https://beautifulinnovation.files.wordpress.com/2015/06/circular-profile-pic.png?w=450&h=450&crop=1'}}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.title}> Jeanne Renault </Text>
            </View>
          </View>
          <Separator2/>

          <View style={styles.rowContainer}>
            <Text style={styles.title}> Introduction to Surfing </Text>
          </View>
          <Separator2/>

          <View style={styles.mapContainer}>
            <MapView style={styles.map} followUserLocation={true} showsUserLocation={true}> <MapView.Marker coordinate={this.state.coordinate}/> </MapView>
          </View>

          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Time: June 18, 2016 @ 9AM </Text>
          </View>
          <Separator2/>
          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Course Description: This is a individual surf lesson {'\n'} that focuses on technique and skill.</Text>
          </View>
          <Separator2/>
          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Availability: 0/1</Text>
          </View>
          <Separator2/>
          <View style={styles.rowContainer}>
            <Text style={styles.rowText}> Pricing: $60/hour</Text>
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
