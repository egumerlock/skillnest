import React, { Component } from 'react';
import CoursePage from './CoursePage';
import Icon from 'react-native-vector-icons/Ionicons';

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
   backgroundColor: 'white'
  },
  courseCell: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: .5,
    borderColor: 'lightgray'
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 10,
    alignItems: 'center'
  },
  whiteText: {
    fontSize: 18,
    color: '#658D9F'
  },
  lightText: {
    color: '#658D9F'
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
  classIcon: {
    padding: 0,
    width: 125,
    height: 125,
    backgroundColor: 'transparent'
  },
  SearchInputIcon: {
    color: "#5388e5",
    marginLeft: 15,

  },
  titleWrapper: {
    flexDirection: 'row',
    textAlign: 'center'
  },
  title: {
    marginLeft: 107,
    marginTop: 5,
    color: "#658D9F",
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 20
  }
})

var mockTeacher = [
  {
    name: 'Mock Teacher',
    email: 'test@gmail',
    profilePic: '',
    courses: [
      {
        imgLink: 'http://surfboardsoceanside.com/wp-content/uploads/2014/03/Take-off.jpg',
        title: 'Beginners Surfing I',
        date: 'Saturday, July 2nd, 2016',
        time: '9:00 am',
        duration: '4 hours',
        price: '$100',
        open_spots: '3/7',
      },
      {
        imgLink: 'http://surfboardsoceanside.com/wp-content/uploads/2014/03/Take-off.jpg',
        title: 'Beginners Surfing II',
        date: 'Saturday, July 2nd, 2016',
        time: '1:00 pm',
        duration: '4 hours',
        price: '$200',
        open_spots: '2/7',
      },
      {
        imgLink: 'http://images.wisegeek.com/surfer-in-red-shirt-on-surf-board-on-the-water.jpg',
        title: 'Intermediate Surfing I',
        date: 'Sunday, July 3rd, 2016',
        time: '11:00 am',
        duration: ' 5 hours',
        price: '$200',
        open_spots: '2/5',
      },
      {
        imgLink: 'http://images.wisegeek.com/surfer-in-red-shirt-on-surf-board-on-the-water.jpg',
        title: 'Intermediate Surfing II',
        date: 'Sunday, July 10th, 2016',
        time: '11:00 am',
        duration: ' 5 hours',
        price: '$80',
        open_spots: '2/5',
      },
      {
        imgLink: 'http://www.evangelicalendtimemachine.com/wp-content/uploads/2014/05/waarom-God-problemen-toelaat-in-uw-leven1.jpg',
        title: 'Advanced Surfing I',
        date: 'Sunday, July 3rd, 2016',
        time: '5:00 pm',
        duration: '3 hours',
        price: '$80',
        open_spots: '1/1',
      },
      {
        imgLink: 'http://www.evangelicalendtimemachine.com/wp-content/uploads/2014/05/waarom-God-problemen-toelaat-in-uw-leven1.jpg',
        title: 'Advanced Surfing II',
        date: 'Sunday, July 10th, 2016',
        time: '5:00 pm',
        duration: '3 hours',
        price: '$40',
        open_spots: '1/1',
      },
    ]
  }
]

class ClassList extends Component {
  constructor(props) {
    super(props);
    this.state= {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
      loaded: false,
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(mockTeacher[0].courses),
      loaded: true
    })
  }

  _onSurfingButton() {
    this.props.navigator.push({
      component: CoursePage,
      name: "CoursePage"
    })
  }

  onBackPress () {
    this.props.navigator.pop({
      component: ClassList,
      name: "ClassList"

    })
  }
  
  renderCourses(course) {
    return (
      <TouchableOpacity style={styles.leftButton}
      underlayColor="transparent"
      onPress={this._onSurfingButton.bind(this)}>
      <CourseCell course={course} />
      </TouchableOpacity>
    )
  }

  render() {
    return(
      <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <TouchableOpacity onPress={this.onBackPress.bind(this)}>
          <Icon name="ios-undo" style={styles.SearchInputIcon} size={30} />
        </TouchableOpacity>
        <Text style={styles.title}>Class List</Text>
      </View>
        <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCourses.bind(this)}/>
      </View>
    )
  }
}



var CourseCell = React.createClass({
  render() {
    return(
      <View>

        <View style={styles.courseCell}>
        <Image
           style={styles.classIcon}
           source={{uri:this.props.course.imgLink}} />
          <View style={styles.rightContainer}>
            <View style={styles.separator}/>
            <View>
              <Text style={styles.whiteText}>
               {this.props.course.title}
              </Text>
              <Text style={styles.lightText}>
                Date: {this.props.course.date}
              </Text>
              <Text style={styles.lightText}>
                Time: {this.props.course.time}
              </Text>
              <Text style={styles.lightText}>
                Duration: {this.props.course.duration}
              </Text>
              <Text style={styles.lightText}>
                Price: {this.props.course.price}
              </Text>
              <Text style={styles.lightText}>
                Open Spots: {this.props.course.open_spots}
              </Text>
            </View>
       </View>
       </View>
      <View style={styles.separator}/>

      </View>
    )
  }
})


export default ClassList;
