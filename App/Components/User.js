import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';

let styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#ffffff'
  },
  hero: {
    flex: 3,
    flexDirection: 'column',
    backgroundColor: '#53D1E5'
  },
  history: {
    flex: 5,
    backgroundColor: '#43C6C6'
  },
  titleWrapper: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#658D9F',
    padding: 15
  },
  profile_pic:{
    width: 175,
    height: 175,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  }

})

class User extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.hero}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Mandy S.</Text>
        </View>
          <Image
          style={styles.profile_pic}
          source={{uri:'http://1.bp.blogspot.com/-I2aPA52ms38/VcqtGNT0-9I/AAAAAAAAGQ8/QTuHSROZl2c/s1600/abby-circular-profile.png'}}
          />
        </View>
        <View style={styles.history}>

        </View>
      </View>
    )
  }
}

export default User;
