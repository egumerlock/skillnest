import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

let styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null
  },
  slide3: {
    flex: 1,
    alignItems: 'center',
    height: null,
    width: null
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  teachertButton: {
    marginTop: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
  studentButton: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startText: {
    marginTop: 320,
  },
  backgroundimage: {
    flex: 1,
  }
})

class StartSlider extends Component {
  render() {
    return (
      <Swiper style={styles.wrapper} showsButtons={true}>
        <Image style={styles.slide1} source={require('./Helpers/background-gradient.png')}>
          <View>
            <Text style={styles.text}>Welcome to SkillNest{"\n"}Find your passion..</Text>
          </View>
        </Image>

        <Image style={styles.slide2} source={require('./Helpers/background-gradient.png')}>
          <View>
            <Text style={styles.text}>In the central place to {"\n"}find a skilled teacher.</Text>
          </View>
        </Image>
        <Image style={styles.slide3} source={require('./Helpers/background-gradient.png')}>
          <View>
            <View style={styles.startText}>
              <Text style={styles.text}>Let's get started!</Text>
            </View>
            <View style={styles.teachertButton}>
              <Icon.Button name="ios-arrow-dropright-outline" backgroundColor="#107cff" >
                I'm a teacher
              </Icon.Button>
            </View>
            <View style={styles.studentButton}>
              <Icon.Button name="ios-arrow-dropright-outline" backgroundColor="#107cff" >
                I'm a student
              </Icon.Button>
            </View>
          </View>
        </Image>
      </Swiper>
    )
  }
}

export default StartSlider
