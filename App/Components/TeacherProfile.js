import AnimatedSpring from './AnimatedSpring';
import AnimatedRatingStars from './Helpers/AnimatedRatingStars';
import Separator from './Helpers/Separator';
import Icon from 'react-native-vector-icons/Ionicons';
import ClassList from './ClassList';
var { width, height } = Dimensions.get('window');
import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableOpacity,
  Dimensions
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
    backgroundColor: '#658D9F'
  },
  history: {
    flex: 3,
    backgroundColor: '#53D1E5',
    flexDirection: 'column',
  },
  titleWrapper: {
    paddingTop: 20,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: '#658D9F',
    padding: 15,
    paddingBottom: 3,
  },
  titleTop: {
    textAlign: 'center',
    fontSize: 18,
    color: '#658D9F',
    padding: 15,
    marginLeft: 70
  },
  profilePic:{
    width: 175,
    height: 175,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginVertical: 30,
    marginRight: 5,
  },
  buttonWrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  leftButton: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5388e5',
    padding: 13,
    borderWidth: 1,
    borderColor: 'white',
  },

  buttonText: {
    fontSize: 20,
    color: 'white'
  },
  starBackground: {
    paddingBottom: 5,
  },
  titleContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#658D9F',
    justifyContent: 'center',
    marginBottom: 6,
  },
  footerTextBottom: {
    textAlign: 'center',
    fontSize: 12,
    color: '#658D9F',
    justifyContent: 'center',
    marginBottom: 5,
  },
  // comments

  commentContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    marginTop: 5,

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
  SearchInputIcon: {
    color: "#658D9F",
    marginTop: 10,
    marginLeft: 15
  },
  pieChartWrapper: {
    backgroundColor: "white",
    height: 180,
  },
  pieChart: {
    height: 150,
    width: 270,
    marginLeft: 40,
    marginTop: 30,
    marginBottom: -25

  }
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
        daysAgo: '6 hours ago',
        patient: true,
        friendly: true,
        starCount: 33,
        technical_expertise: 4,
        passion: 5,
        course_difficulty: 3,
        imageLink: 'http://marianna.im/images/avatar-circle.jpg',
        summary: 'Jeanne is an awesome teacher, you can tell she really loves his work!',
        stars: (
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
          </View>
        )
      },
      {
        title: 'Print Making',
        teacher: 'Joe B.',
        knowlegeable: true,
        daysAgo: '1 day ago',
        patient: false,
        friendly: false,
        starCount: 21,
        technical_expertise: 5,
        passion: 2,
        course_difficulty: 5,
        imageLink: 'http://3.bp.blogspot.com/--koKBfSrRo8/U7pnK943rwI/AAAAAAAAAmg/Rx9Q8K2e7xw/s1600/umer%2Bcircle.png',
        summary: 'I wouldnt recommend this class it is really hard & Jeanne is not very friendly',
        stars: (
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
        )
      },
      {
        title: 'EL Wire Workshop',
        teacher: 'Matt F.',
        daysAgo: '1 month ago',
        knowlegeable: false,
        patient: true,
        friendly: true,
        starCount: 2,
        technical_expertise: 2,
        passion: 5,
        course_difficulty: 1,
        imageLink: 'https://fedoraproject.org/w/uploads/9/93/Oddshocks_avatar_tails_circle.png',
        summary: "Jeanne's enthusiasium for EL wire is great but I dont think I learned much in this class",
        stars: (
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
          </View>
        )
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
      name: 'Jeanne Renault'
    }
  }

  renderReviews(rowData) {
   return (
      <View style={styles.commentContainer}>
        <View style={styles.commenterInfo}>
          <Image
          style={styles.commenterAvatar}
          source={{uri: rowData.imageLink}}/>
          <View style={styles.commenterNameContainer}>
            <Text style={styles.commenterName}>{rowData.teacher}</Text>
            <View flexDirection='row' marginTop={5}>
              <View>
                <Icon name="md-star" size={20} color="#daa520" />
              </View>
              <View marginLeft={2}>
                <Text>{rowData.starCount}</Text>
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
            <Text style={styles.timeStamp}>{rowData.daysAgo}</Text>
          </View>
        </View>

        <Separator />

        {rowData.stars}

        <View style={styles.commentContent}>
          <Text>{rowData.summary}</Text>
        </View>
      </View>
    )
  }

  render(){
    return(
      <View style={styles.container}>
      <ScrollView>
        <View style={styles.hero}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity onPress={this.onBackPress.bind(this)}>
            <Icon name="ios-undo" style={styles.SearchInputIcon} size={30} />
          </TouchableOpacity>
          <Text style={styles.titleTop}>{this.state.name}</Text>
        </View>
          <Image
          style={styles.profilePic}
          source={{uri:'http://i.imgur.com/gKOpj8v.png'}}/>
        </View>



        <View style={styles.titleContainer}>
          <Text style={styles.title}>Surf Instructor</Text>
          <View style={styles.starBackground}>
            <AnimatedRatingStars/>
          </View>
          <Text style={styles.footerText}>Availability: 11/26</Text>
          <Text style={styles.footerTextBottom}>$25-$40 / hour</Text>
        </View>

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.leftButton}
          underlayColor="transparent"
          onPress={this._onClassesButton.bind(this)}>
          <Text style={styles.buttonText}>
            Classes
          </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pieChartWrapper}>
          <Image style={styles.pieChart} source={require("./Helpers/pie.png")} />
        </View>

        <AnimatedSpring />



        <View style={styles.history}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderReviews} />
        </View>
        </ScrollView>
      </View>
    )
  }

  _onClassesButton() {
    this.props.navigator.push({
      component: ClassList,
      name: "ClassList"
    })
  }

  onBackPress() {
    this.props.navigator.pop ({ })
  }
}

export default TeacherProfile;
