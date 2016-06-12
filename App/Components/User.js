import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ListView,
  ScrollView
} from 'react-native';

let styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 20,
   backgroundColor: '#ffffff',
   marginTop: 95
  },
  hero: {
    flex: 3.25,
    flexDirection: 'column',
    backgroundColor: '#53D1E5'
  },
  history: {
    flex: 4,
    backgroundColor: '#43C6C6',
    margin: 0
  },
  titleWrapper: {
    justifyContent: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingTop: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    color: '#658D9F',
    padding: 15
  },
  profilePic:{
    width: 175,
    height: 175,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginVertical: 30
  },
  buttonWrapper: {
    flex: .75,
    flexDirection: 'row',
    marginBottom: 0
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
  contactCell: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    // padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  },
  classIcon: {
    padding: 0,
    width: 100,
    height: 100,
    backgroundColor: 'transparent'
    // marginRight: 20
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 25,
    alignItems: 'center'
  },
  whiteText: {
    fontSize: 18,
    color: 'white'
  },
  lightText: {
    color: 'white'
  },
  descContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seperator: {
    height: 1,
    backgroundColor: 'white'
  },
  listView: {

  }
})

var mockUser = [
  {
    name: 'Tommy Cardonas',
    email: 'tommyc@gmail.com',
    profilePic: 'https://beautifulinnovation.files.wordpress.com/2015/06/circular-profile-pic.png?w=450&h=450&crop=1',
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
        title: 'Ombre Watercolor',
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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      profilePic: '',
      dataSource1: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      dataSource2: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
      this.fetchData();
  }

  fetchData() {
    // return mocked data for now
    this.setState({
      name: mockUser[0].name,
      email: mockUser[0].email,
      profilePic: mockUser[0].profilePic,
      dataSource1: this.state.dataSource1.cloneWithRows(mockUser[0].classes),
      dataSource2: this.state.dataSource2.cloneWithRows(mockUser[0].reviews),
      loaded: true,
    });
  }

  renderClasses(contact) {
    return (
      <ContactCell contact={contact}/>
    );
  }

  renderReviews(review) {
    return (
      <ReviewCell review={review}/>
    );
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
          source={{uri:'https://beautifulinnovation.files.wordpress.com/2015/06/circular-profile-pic.png?w=450&h=450&crop=1'}}
          />
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.leftButton}
          underlayColor="transparent"
          onPress={() => this._onClassesButton(this.props.id)}>
          <Text style={styles.buttonText}>
            My Classes
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rightButton}
          underlayColor="transparent"
          onPress={() => this._onReviewsButton(this.props.id)}>
          <Text style={styles.buttonText}>
            My Reviews
          </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.history}>
        <ListView
        dataSource={this.state.dataSource1}
        renderRow={this.renderClasses}
        style={styles.listView}/>
        </View>
      </View>
    )
  }

  _onClassesButton() {

  }

  _onReviewsButton() {

  }
}

var ContactCell = React.createClass({
  render() {
    return(
      <View>
        <View style={styles.contactCell}>
        <Image
           style={styles.classIcon}
           source={{uri:this.props.contact.imgLink}} />
           <View style={styles.rightContainer}>
             <View>
               <Text style={styles.whiteText}>
                {this.props.contact.title}
               </Text>
               <Text style={styles.lightText}>
                 Instructor: {this.props.contact.teacher}
               </Text>
               <Text style={styles.lightText}>
                 Contacted:
               </Text>
             </View>
        </View>
      </View>
      <View style={styles.separator}/>
      </View>
    )
  }
})

var ReviewCell = React.createClass({
  render() {
    return(
      <View>
        <View style={styles.contactCell}>

           <View style={styles.rightContainer}>
             <View>
               <Text style={styles.whiteText}>
                {this.props.review.title}
               </Text>
               <Text style={styles.lightText}>
                 Instructor: {this.props.review.teacher}
               </Text>
               <Text style={styles.lightText}>
                 Summary: {this.props.review.summary}
               </Text>
             </View>
        </View>
      </View>
      <View style={styles.separator}/>
      </View>
    )
  }
})

export default User;
