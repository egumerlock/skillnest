import Icon from 'react-native-vector-icons/Ionicons';

import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  LayoutAnimation,
  Animated,
  Easing,
  Image,
} from 'react-native';

  var CustomLayoutAnimation = {
    duration: 200,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      type: LayoutAnimation.Types.curveEaseInEaseOut,
    },
  };

class AnSpring extends Component {
  constructor() {
    super();
    this.state = {
      index: 0,
      anims: [1,2,3,4,5].map(() => new Animated.Value(320)),
      topText: ['Bio', 'Background', 'Philosophy'],
    }
  }

  componentDidMount() {
    this.animateStarter();
  }

  onPress(index) {

    // Uncomment to animate the next state change.
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    // Or use a Custom Layout Animation
    // LayoutAnimation.configureNext(CustomLayoutAnimation);
    this.setState({index: index});
  }

  renderCircle(key) {
    var size = 50;
    return (
      <View key={key} style={{width: size, height: size, borderRadius: size / 2.0, backgroundColor: 'sandybrown', margin: 20}}/>
    );
  }

  animateStarter() {
    var timing = Animated.timing;
    Animated.sequence([ // One after the other
      Animated.stagger(300,
        this.state.anims.map((anim) => timing(anim, {
          toValue: 0,
          easing: Easing.bounce, // Like a ball
          duration: 200,
        })),
      )
    ]).start();
  }

  forwardArrow() {
    if(this.state.index === 0 || this.state.index === 1) {
      this.onPress(this.state.index + 1);
    }
  }
  backwardArrow() {
    if(this.state.index === 1 || this.state.index === 2) {
      this.onPress(this.state.index - 1);
    }
  }

  render() {

    let leftStyle = this.state.index === 0 ? {flex: 1} : {flex: 0.04};
    let middleStyle = this.state.index === 1 ? {flex: 1} : {flex: 0.04};
    let rightStyle = this.state.index === 2 ? {flex: 1} : {flex: 0.04};
    let starsDisplay = this.state.index === 0 ? (
      <View style={styles.startContainer}>
        {[1,2,3,4,5].map(
          (text, ii) => (
            <Animated.View
              key={text}
              style={[styles.starPosition, {
                left: this.state.anims[ii]
              }]}>
              <Image
                source={require('./Helpers/star.png')}
                style={styles.stars}></Image>
            </Animated.View>
          )
        )}
      </View>
    ) : <View></View>;

    return (
      <View style={styles.container}>
        <View style={styles.topButtons}>
         <Icon.Button name="ios-arrow-back" style={styles.arrowButtonForward} color="black" backgroundColor="transparent" underlayColor='transparent' onPress={() => this.backwardArrow()}>
          </Icon.Button>
          <View style={styles.topTextContainer}>
            <Text style={styles.topTextStyle}>{this.state.topText[this.state.index]}</Text>
          </View>
          <Icon.Button name="ios-arrow-forward" style={styles.arrowButtonBackward} color="black" backgroundColor="transparent" underlayColor='transparent' onPress={() => this.forwardArrow()}>
          </Icon.Button>
        </View>

        <View style={styles.content}>
          <View style={{flexDirection: 'row', height: 300}}>

            <View style={[styles.BioPage, leftStyle, {backgroundColor: '#658D9F'}]}>
              <Text style={styles.sliderText}>
              Jeanne grew up on Reunion Island, France where she picked up surfing from her Uncle beginning at the age of four. Her surfing development continued on family trips to Australia, Hawaii, and different regions of Europe. After finishing her undergraduate studies at the University of Hawaii in 2007, Jeanne quickly decided to turn professional and competed in the Billabong Pipeline Masters in Hawaii.
              </Text>
            </View>

            <View style={[middleStyle, {backgroundColor: '#5388e5'}]}>
              <Text style={styles.sliderText}>
              She was named surfing rookie of the year in 2007 and continued to compete professionally for 7 years in tournaments around the world. In 2014, she decided to settle down with her husband Thibault in the city of San Francisco, where she now teaches introductory, intermediate, and advanced surfing lessons to students of all ages.
              </Text>
            </View>
            <View style={[rightStyle, {backgroundColor: '#53D1E5'}]}>
              <Text style={styles.sliderTextPhilo}>
               "Take on the wave of life and ride every wave like it is your last."
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
  topTextContainer: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'center',
  },
  topTextStyle: {
    fontSize: 18,
    color: '#658D9F',
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  startContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  stars: {
    width: 25,
    height: 25,
  },
  starPosition: {
    height: 240,
  },
  arrowButtonForward: {
    marginRight: 80,
  },
  arrowButtonBackward: {
    marginLeft: 80,
  },
  sliderText: {
    color: 'white',
    fontSize: 16,
    margin: 20
  },
  sliderTextPhilo: {
    color: 'white',
    fontSize: 22,
    margin: 20
  }
});

export default AnSpring;



