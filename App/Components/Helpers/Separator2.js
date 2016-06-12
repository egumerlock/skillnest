import React, { Component } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';

let styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    flex: 1,
    marginLeft: 15,
    marginRight: 15
  }
});


class Separator2 extends Component {
  render() {
    return (
      <View style={styles.separator} />
    )
  }
};

export default Separator2
