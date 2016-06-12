import AnimatedRatingStars from './Helpers/AnimatedRatingStars';
import Separator from './Helpers/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
} from 'react-native';

let styles = StyleSheet.create({
  container: {
   flex: 1,
   backgroundColor: '#53D1E5',
   flexDirection: 'column',
  },
  hero: {
    flex: 3.25,
    flexDirection: 'column',
    backgroundColor: '#53D1E5'
  },
  history: {
    flex: 4,
    backgroundColor: '#43C6C6',
    flexDirection: 'column',
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
    backgroundColor: 'transparent',
    marginTop: 10,
    marginRight: 5,
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
  },
  starBackground: {
    paddingTop: 60,
  },
  titleContainer: {
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 20,
    justifyContent: 'center',
    flexDirection: 'row'
  },

  // comments

  commentContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 5,
    borderStyle: "solid",
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  commenterInfo: {
    flexDirection: 'row',
  },
  commenterAvatar: {
    margin: 7,
    width: 50,
    height: 50,
  },
  timeStamp: {
    marginTop: 8,
    marginLeft: 130,
  },
  commenterNameContainer: {
    flexDirection: 'column'
  },
  commenterName: {
    fontWeight: 'bold',
    marginTop: 10,
  },
  commentRating: {
    flexDirection: 'row',
    margin: 8,
  },
  commentContent: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
  },
})

let mockedUser = [
  {
    name: 'Molly S.',
    email: 'mollys@gmail.com',
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

class TeacherProfile extends Component {
  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: this.ds.cloneWithRows(mockedUser[0].reviews),
      name: 'Test User'
    }
  }

  renderReviews(rowData) {
   return (
      <View style={styles.commentContainer}>

        <View style={styles.commenterInfo}>
          <Image
          style={styles.commenterAvatar}
          source={{uri:'http://1.bp.blogspot.com/-I2aPA52ms38/VcqtGNT0-9I/AAAAAAAAGQ8/QTuHSROZl2c/s1600/abby-circular-profile.png'}}/>
          <View style={styles.commenterNameContainer}>
            <Text style={styles.commenterName}>{rowData.teacher}</Text>
            <View flexDirection='row' marginTop={5}>
              <View>
                <Icon name="md-star" size={20} color="#daa520" />
              </View>
              <View marginLeft={2}>
                <Text>33</Text>
              </View>
              <View marginLeft={5}>
                <Icon name="md-pin" size={19} color="#dc143c" marginLeft={5}/>
              </View>
              <View marginLeft={2}>
                <Text>0</Text>
              </View>
              <View marginLeft={5}>
                <Icon name="md-camera" size={19} color="#8fbc8f" marginLeft={5}/>
              </View>
              <View marginLeft={2}>
                <Text>2</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.timeStamp}>6 days ago</Text>
          </View>
        </View>

        <Separator />

        <View style={styles.commentRating}>
          <View marginLeft={3}>
            <Icon name="md-star" size={20} color="#daa520" />
          </View>
          <View marginLeft={3}>
            <Icon name="md-star" size={20} color="#daa520" />
          </View>
          <View marginLeft={3}>
            <Icon name="md-star" size={20} color="#daa520" />
          </View>
          <View marginLeft={3}>
            <Icon name="md-star" size={20} color="#daa520" />
          </View>
          <View marginLeft={3}>
            <Icon name="md-star" size={20} color="#daa520" />
          </View>
        </View>

        <View style={styles.commentContent}>
          <Text>{rowData.summary}</Text>
        </View>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.hero}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{this.state.name}</Text>
        </View>
          <Image
          style={styles.profilePic}
          source={{uri:'http://1.bp.blogspot.com/-I2aPA52ms38/VcqtGNT0-9I/AAAAAAAAGQ8/QTuHSROZl2c/s1600/abby-circular-profile.png'}}/>
        </View>

        <View style={styles.starBackground}>
          <AnimatedRatingStars />
        </View>

        <View style={styles.titleWrapper}>
          <Text style={styles.title}>Surf Instructor</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.leftButton}
          underlayColor="transparent"
          onPress={() => this._onClassesButton(this.props.id)}>
          <Text style={styles.buttonText}>
            Classes
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.history}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderReviews} />
        </View>
      </View>
    )
  }

  _onClassesButton() {
  }
}

export default TeacherProfile;




