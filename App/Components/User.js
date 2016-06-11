import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';

let styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#ffffff'
  },
  hero: {
    flex: 3.25,
    flexDirection: 'column',
    backgroundColor: '#53D1E5'
  },
  history: {
    flex: 4,
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
  profilePic:{
    width: 175,
    height: 175,
    alignSelf: 'center',
    backgroundColor: 'transparent'
  },
  buttonWrapper: {
    flex: .75,
    flexDirection: 'row',
  },
  leftButton: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5388e5',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  rightButton: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#53e5b0',
    padding: 15,
    borderWidth: 1,
    borderColor: 'white'
  },
  buttonText: {
    fontSize: 20,
    color: 'white'
  }
})

var mockedUser = [
  {
    name: 'Molly S.',
    email: 'mollys@gmail.com'
    classes: [
      {
        title: 'Ombre Watercolor Workshop',
        teacher: 'Jack J.',
        imgLink: 'http://ih1.redbubble.net/image.58824777.0188/flat,1000x1000,075,f.u2.jpg',
        lastContacted: 'June 11th, 2016'
      },
      {
        title: 'Brush Lettering',
        teacher: 'Bettie P.',
        imgLink: 'http://static1.squarespace.com/static/540fd39ae4b01475ae2448ee/t/5448713fe4b0d7fec27158cf/1414033731198/',
        lastContacted: 'June 1st, 2016'
      },
      {
        title: 'Print Making',
        teacher: 'Tanya B.',
        imgLink: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Hokusai-fuji7.png',
        lastContacted: 'May 28th, 2016'
      },
      {
        title: 'EL Wire Workshop',
        teacher: 'Matt F.',
        imgLink: 'http://overyonderlust.com/wp-content/uploads/2014/01/EL_Wire.jpg',
        lastContacted: 'May 15th, 2016'
      }
    ],
    reviews: [
      {
        title: 'Ombre Watercolor Workshop',
        teacher: 'Jack J.',
        knowlegeable: true,
        patient: true,
        friendly: true,
        technical_expertise: 4,
        passion: 5,
        course_difficulty: 3,
        summary: 'Jack is an awesome teacher, you can tell he really loves his work!'
      },
      {
        title: 'Print Making',
        teacher: 'Tanya B.',
        knowlegeable: true,
        patient: false,
        friendly: false,
        technical_expertise: 5,
        passion: 2,
        course_difficulty: 5,
        summary: 'I wouldnt recommend this class it is really hard & Tanya is not very friendly'
      },
      {
        title: 'EL Wire Workshop',
        teacher: 'Matt F.',
        knowlegeable: false,
        patient: true,
        friendly: true,
        technical_expertise: 2,
        passion: 5,
        course_difficulty: 1,
        summary: 'Matts enthusiasium for EL wire is great but I dont think I learned much in this class'
      }
    ]
  }
]

class User extends Component {
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.hero}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>mockedUser.name</Text>
        </View>
          <Image
          style={styles.profilePic}
          source={{uri:'http://1.bp.blogspot.com/-I2aPA52ms38/VcqtGNT0-9I/AAAAAAAAGQ8/QTuHSROZl2c/s1600/abby-circular-profile.png'}}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.leftButton}
          underlayColor="transparent"
          onPress={() => this._onClassesButton(this.props.id)}>
          <Text style={styles.buttonText}>
            Classes
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}
          underlayColor="transparent"
          onPress={() => this._onReviewsButton(this.props.id)}>
          <Text style={styles.buttonText}>
            Reviews
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.history}>

        </View>
      </View>
    )
  }
}

export default User;
