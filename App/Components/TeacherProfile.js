var Button = require('./Common/button');
import Separator from './Helpers/Separator'
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
  ScrollView
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'flex-start',
    marginBottom: 30,
    marginTop: 48,
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

class TeacherProfile extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>

        <View style={styles.headerbar}>
          <Image style={styles.image} source={require('./Common/sbpete.png')}/>
          <Text style={styles.title}> Eric Gumerlock </Text>
        </View>
        <AnimatedRatingStars />

        <Text style={styles.label}> Introduction to Surfing </Text>
        <View style={styles.rowContainer}>
          <Text style={styles.label}> Course Description </Text>
          <Text style={styles.rowText}>This course is an individual surf lesson that focuses technique and skill.</Text>
        </View>

        <View style={styles.rowContainer}>
          <Text style={styles.label}> Teacher Bio </Text>
          <Text style={styles.rowText}>Certified Surfing Professional. 10 Years Experience </Text>
        </View>

        <View>
          <View>
            <Text>Reviews</Text>
          </View>
          <Separator />
          <View>
            <Image style={styles.image} source={require('./Common/sbpete.png')}/>
            <Text> Eric is a great experienced surfer and instructor. I appreciated his paticence, knowledge, and overall passion for surfing. </Text>
          </View>
          <Separator />
          <View>
            <Image style={styles.image} source={require('./Common/sbpete.png')}/>
            <Text> He was very considerate of letting me learn at my own pace. </Text>
          </View>
          <Separator />
          <View>
            <Image style={styles.image} source={require('./Common/sbpete.png')}/>
            <Text> I had an awesome experience this weekend and look forward to scheduling my next lesson. </Text>
          </View>
        </View>

      </ScrollView>
    )
  }
};

export default TeacherProfile;
