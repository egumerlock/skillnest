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
        <BrowseClassesView />
      </View>
    )
  }
}



export default ClassList;
