import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Spinner from 'react-native-spinkit';
import React, { Component } from 'react';
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View
} from 'react-native';

const myButton = (
  <Icon.Button name="logo-facebook" backgroundColor="#3b5998" >
    Login with Facebook
  </Icon.Button>
);

class MainMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'GoogleMap',
      type: 'Bounce',
      size: 80,
      color: "#32cd32",
      isVisible: true,
      loadAll: false
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({isVisible: false, loadAll: true});
    }, 2500);
  }

  render() {
    let everything = this.state.loadAll ? (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        followUserLocation={true}>
      </MapView>
    ) : (
      <View style={styles.mainContainer}>
        <Spinner style={styles.spinner} isVisible={this.state.isVisible} size={this.state.size} type={this.state.type} color={this.state.color}/>
      </View>
    );
    return (
      <TabBarIOS
        unselectedTintColor="white"
        tintColor="green"
        barTintColor="white">
        <Icon.TabBarItemIOS
          iconName={"ios-text-outline"}
          style={styles.wrapper}
          selected={this.state.selectedTab === 'GoogleMap'}
          onPress={() => {
            this.setState({
              selectedTab: 'GoogleMap'
            });
          }} >

         {everything}

        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName={"md-pin"}
          style={styles.wrapper}
          selected={this.state.selectedTab === 'Something'}
          onPress={() => {
            this.setState({
              selectedTab: 'Something'
            });
          }} >
          <Text>dgfdfsdfssdfsdfsdgdfkgksdhkj</Text>
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName={"md-heart-outline"} >
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          iconName={"ios-paper-plane"} >
        </Icon.TabBarItemIOS>
      </TabBarIOS>
    );
  }
}


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  spinner: {
    marginTop: 250,
  },
  wrapper: {
    flex: 1
  },
  map: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }

});

export default MainMapView

