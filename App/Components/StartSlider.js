import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

let styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  teachertButton: {
    marginTop: 100,
  },
  studentButton: {
    marginTop: 10,
  },
  startText: {
    marginTop: 320,
  }
})

class StartSlider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Hello There</Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Welcome to...</Text>
        </View>
        <View style={styles.slide3}>
          <View style={styles.startText}>
            <Text style={styles.text}>SkillNest</Text>
          </View>
          <View style={styles.teachertButton}>
            <Icon.Button name="ios-arrow-dropright-outline" backgroundColor="#3b5998" >
              I'm a teacher
            </Icon.Button>
          </View>
          <View style={styles.studentButton}>
            <Icon.Button name="ios-arrow-dropright-outline" backgroundColor="#3b5998" >
              I'm a student
            </Icon.Button>
          </View>
        </View>
      </Swiper>
    )
  }
}

export default StartSlider;
