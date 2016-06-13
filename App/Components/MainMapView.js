import Icon from 'react-native-vector-icons/Ionicons';
import MapView from 'react-native-maps';
import Spinner from 'react-native-spinkit';
import AnimatedRatingStars from './Helpers/AnimatedRatingStars'
import TeacherProfile from './TeacherProfile'
import User from './User'
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
      color: "#4598ff",
      isVisible: true,
      loadAll: false,
      region: {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0821,
      },
      markers: [
        {
          coordinate: {
            latitude: 37.7824,
            longitude: -122.4995,
          },
          name: "Jim Hadley",
          field: "Surf Instructor",
          capacity: "8/8",
          pricing: "$30-$50 / hour",
          avatar: 'https://www.shoptab.net/blog/wp-content/uploads/2014/07/profile-circle.png'
        },
        {
          coordinate: {
            latitude: 37.8324,
            longitude: -122.4795,
          },
          name: "Megan Dudley",
          field: "Surf Instructor",
          capacity: "10/17",
          pricing: "$40-$50 / hour",
          avatar: 'http://1.bp.blogspot.com/-I2aPA52ms38/VcqtGNT0-9I/AAAAAAAAGQ8/QTuHSROZl2c/s1600/abby-circular-profile.png'
        },
        {
          coordinate: {
            latitude: 37.7524,
            longitude: -122.4795,
          },
          name: "Jeanne Renault",
          field: "Surf Instructor",
          capacity: "11/26",
          pricing: "$25-$40 / hour",
          avatar: 'http://i.imgur.com/gKOpj8v.png'
        },
        {
          coordinate: {
            latitude: 37.7924,
            longitude: -122.3995,
          },
          name: "Jacques LeMans",
          field: "Surf Instructor",
          capacity: "16/24",
          pricing: "$40 / hour",
          avatar: 'http://static1.squarespace.com/static/526839d5e4b0a6ea6c312276/526ef8b1e4b0aa6f78f3f614/5271642ce4b03e61739879b6/1383162937731/tim+in+India+profile_circle.png'
        },
        {
          coordinate: {
            latitude: 37.7424,
            longitude: -122.3995,
          },
          name: "Thomas Linea",
          field: "Surf Instructor",
          capacity: "2/4",
          pricing: "$50 / hour",
          avatar: 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/6083/profile/profile-512_1.jpg'
        },
        {
          coordinate: {
            latitude: 37.7484,
            longitude: -122.4395,
          },
          name: "Sochie Lee",
          field: "Surf Instructor",
          capacity: "2/4",
          pricing: "$20-$25 / hour",
          avatar: 'https://www.sochiie.com/wp-content/uploads/2014/04/facebook-teerasej-profile-ball-circle.png'
        },
        {
          coordinate: {
            latitude: 37.7724,
            longitude: -122.4395,
          },
          name: "Doug Bodder",
          field: "Surf Instructor",
          capacity: "8/8",
          pricing: "$35-$45 / hour",
          avatar: 'http://dynamicinfluence.com/wp-content/uploads/2014/06/Robert-Circle-Profile-Pic.png'
        },
      ],
    };
  }
  onProfilePress () {
    this.props.navigator.push({
      component: TeacherProfile,
      name: "TeacherProfile"
    })
  }
  onRegionChange(region) {
    this.state.region = region;
  }
  componentWillMount() {
    setTimeout(() => {
      this.setState({isVisible: false, loadAll: true});
    }, 2500);
  }
  startTrigger() {
      this.setState({
        startIndicator: true
      })
      setTimeout(() => {
      this.setState({startIndicator: false});
    }, 10000);

  }


  render() {
    var starHolder = this.state.startIndicator ? <AnimatedRatingStars /> : <View></View>;
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
        onPress={this.startTrigger.bind(this)}
      >
        <Image source={require('./Helpers/mapicon.png')} onLoadEnd={() => {if (!this.state.iconLoaded) this.setState({iconLoaded: true});}}/>
        <MapView.Callout tooltip>
          <TouchableOpacity>
            <CustomCallout style={styles.calloutOpacity}>
            <View style={styles.container}>

                <View style={styles.hero}>
                <View style={styles.titleWrapper}>
                  <Text style={styles.title}>{markers[index].name} </Text>
                </View>
                  <Image
                  style={styles.profilePic}
                  source={{uri: markers[index].avatar}}
                  />
                  <View style={styles.footerWrapper}>
                    <Text style={styles.footerHeader}>{markers[index].field} </Text>
                    {starHolder}
                    <Text style={styles.footerText}>Availability: {markers[index].capacity} </Text>
                    <Text style={styles.footerTextBottom}>{markers[index].pricing} </Text>
                  </View>
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
                onPress={this.onProfilePress.bind(this)}>
                <Text style={styles.buttonText}>
                  Profile
                </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.history}>

              </View>
            </View>
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
        initialRegion={this.state.region}
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
        tintColor='#53D1E5'
        barTintColor="white">
        <Icon.TabBarItemIOS
          iconName={"md-pin"}
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
          iconName={"md-person"}
          style={styles.wrapper}
          selected={this.state.selectedTab === 'Something'}
          onPress={() => {
            this.setState({
              selectedTab: 'Something'
            });
          }} >
          <User />
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
    opacity: .90
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
  },
  container: {
   flex: 1,
   backgroundColor: '#ffffff'
  },
  hero: {
    flex: 3.25,
    flexDirection: 'column',
    backgroundColor: '#658D9F',
  },
  history: {
    flex: 4,
    backgroundColor: '#43C6C6'
  },
  titleWrapper: {
    justifyContent: 'center',
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
    width: 125,
    height: 125,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginVertical: 40,
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
    backgroundColor: '#4598ff',
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
  field: {
    color: 'white',
    margin: 5
  },
  footerWrapper: {
    backgroundColor: 'white',
    flexDirection: 'column',
    alignItems: 'center'
  },
  footerHeader: {
    textAlign: 'center',
    fontSize: 15,
    color: '#658D9F',
    marginTop: 10,
    marginBottom: 6,
  },
  footerText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#658D9F',
    justifyContent: 'center',
    marginBottom: 6,
    marginTop: 10,
  },
  footerTextBottom: {
    textAlign: 'center',
    fontSize: 12,
    color: '#658D9F',
    justifyContent: 'center',
    marginBottom: 6,
  },
  spinner: {
    marginLeft: 152,
    marginBottom: 20
  }

});

export default MainMapView
