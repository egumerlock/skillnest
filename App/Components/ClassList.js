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
   backgroundColor: '#43C6C6'
  },
  courseCell: {
    flex:1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 4,
    borderBottomWidth: .5,
    borderColor: 'lightgray'
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
})

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

  renderCourses(course) {
    return (
      <CourseCell course={course} />
    )
  }

  render() {
    return(
      <View style={styles.container}>
        <ListView
        dataSource={this.state.dataSource1}
        renderRow={this.renderCourses}/>
      </View>
    )
  }
}




var CourseCell = React.createClass({
  render() {
    return(
      <View>
        <View style={styles.courseCell}>
           <View style={styles.rightContainer}>
             <View>
               <Text style={styles.whiteText}>
                {this.props.course.title}
               </Text>
               <Text style={styles.lightText}>
                 Instructor: {this.props.course.teacher}
               </Text>
               <Text style={styles.lightText}>
                 Summary: {this.props.course.summary}
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
