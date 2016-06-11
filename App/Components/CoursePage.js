var Button = require('./Common/button');
import Separator from './Helpers/Separator'
import communication from './Helpers/Communication'

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  TextInput,
  TouchableHighlight,
  Image,
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginBottom: 30,
    color: 'black',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#6600ff',
    borderColor: '#6600ff',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  label: {
    fontSize: 14,
    color: 'black',
    flex: 1
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginTop: 25,
  },
  headerbar: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 20,
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'visible',
    borderWidth: 2,
    borderColor: 'black',
  },
  rowText: {
    flex: 1,
    fontSize: 14,
    color: 'black',
  },
});

class CoursePage extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.rowContainer}>
          <Text style={styles.title}> Introduction to Surfing {'\n'} Time: June 18, 2016 @ 9AM </Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.label}> Course Info{'\n'} This course is an individual surf lesson that focuses technique and skill.</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>0 out of 1 spots filled</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>$120 for 2 hours</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.rowText}>Description</Text>
        </View>

        <TouchableHighlight style={styles.button} onPress={() => communication.email(['gumerlockdown@gmail.com'],null,null,'Introduction to Surfing Lessons', 'Looking forward to our lesson on Saturday, June 18 @ 9AM.')} underlayColor='#17A66C'>
          <Text style={styles.buttonText}>Enroll</Text>
        </TouchableHighlight>

      </View>
    )
  }
};

export default CoursePage;