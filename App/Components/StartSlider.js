import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/Ionicons';

import Categories from './Categories'
var MainMapView = require('./MainMapView.js')
import User from './User'
import ClassList from './ClassList'
// import MainMapView from './MainMapView'


import React, { Component } from 'react';

import {
  StyleSheet,
  TouchableOpacity,
  Navigator,
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
  },
  navButton: {
    height: 60,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    opacity: 50
  },
  navText: {
    fontSize: 18,
    color: 'white'
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
              <Text style={styles.text}>Lets get started!</Text>
            </View>
            <View style={styles.teachertButton}>
              <TouchableOpacity
                style={styles.navButton}
                underlayColor="transparent"
                onPress={this._onTeacherButton.bind(this)}>
                <Text
                  style={styles.navText}>
                  Teacher
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.studentButton}>
              <TouchableOpacity
                style={styles.navButton}
                underlayColor="transparent"
                onPress={this._onStudentButton.bind(this)}>
                <Text
                  style={styles.navText}>
                  Student
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Image>
      </Swiper>
    )
  }


  _onTeacherButton(){
    this.props.navigator.push({
      component: ClassList,
      name: "ClassList"
    })
  }

  _onStudentButton(){
    this.props.navigator.push({
      component: Categories,
      name: "Categories"
    })
  }


}


export default StartSlider
