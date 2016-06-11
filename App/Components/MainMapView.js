import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Spinner from 'react-native-spinkit';
import React, { Component } from 'react';
var CustomCallout = require('./CustomCallout.js')
import {
  TabBarIOS,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

var { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const SPACE = 0.01;

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
      loadAll: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: .15,
        longitudeDelta: .15,
      },
      markers: [
        {
          coordinate: {
            latitude: 37.8324,
            longitude: -122.4795,
          },
          name: "Tina Fey"
        },
      ]

    };
  }

  onRegionChange(region) {
    this.state.region = region;
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({isVisible: false, loadAll: true});
    }, 0);
  }


  render() {
    const { region, markers } = this.state;
    var markersList = this.state.markers.map((item, index) => {
    return (
      <MapView.Marker
        ref="m3"
        key={index}
        image={this.state.iconLoaded ? 'markerLoaded' : 'marker'}
        showsUserLocation={true}
        followUserLocation={true}
        coordinate={markers[index].coordinate}
        calloutAnchor={{ x: 0.1, y: 0.1 }}
        calloutOffset={{ x: -7, y: 29 }}
      >
        <Image source={require('./Helpers/mapicon.png')} onLoadEnd={() => {if (!this.state.iconLoaded) this.setState({iconLoaded: true});}}/>
        <MapView.Callout tooltip>
          <TouchableOpacity>
            <CustomCallout style={styles.calloutOpacity}>
              <View style={styles.wrapper}>
                <Text style={styles.calloutHeader}>{markers[index].name}</Text>
              </View>
              <Text style={styles.calloutText}> </Text>
              <Image style={styles.calloutImage} source={require('./Helpers/star.png')}/>
            </CustomCallout>
          </TouchableOpacity>
        </MapView.Callout>
      </MapView.Marker>

      )
    });
    let everything = this.state.loadAll ? (
      <MapView
        style={styles.map}
        showsUserLocation={true}
        initialRegion={region}
        followUserLocation={true}
        >
        {markersList}
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
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'red',
  },
  bubble: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)',
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  latlng: {
    width: 200,
    alignItems: 'stretch',
  },
  button: {
    height: height * .08,
    width: width * .20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'transparent',

  },
  calloutHeader: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 5,
    flex: 1
  },
  calloutText: {
    color: '#fff',
    flex: 1
  },
  calloutOpacity: {
    borderRadius: 8,
    opacity: .8
  },
  icon: {
    height: 25,
    width: 25,
  },
  icongood: {
    height: 32,
    width: 32,
  },
  middleicon: {
    height: 33,
    width: 33
  },
  calloutImage: {
    height: height * .15,
    width: width * .25,
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 3,
    borderWidth: 1,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  likebutton: {
    marginTop: -10,
    flex: 1,
    height: 32,
    width: 22
  }

});

export default MainMapView
