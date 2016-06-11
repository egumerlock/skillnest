import AnimatedRatingStars from './AnimatedRatingStars';

import React, { Component } from 'react';

import {
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
      anims: [1,2,3,4,5].map(() => new Animated.Value(320))
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

  renderButton(index) {
    return (
      <TouchableOpacity key={'button' + index} style={styles.button} onPress={() => this.onPress(index)}>
        <Text>{index}</Text>
      </TouchableOpacity>
    );
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

  render() {

    var leftStyle = this.state.index === 0 ? {flex: 1} : {flex: 0.04};
    var middleStyle = this.state.index === 1 ? {flex: 1} : {flex: 0.04};
    var rightStyle = this.state.index === 2 ? {flex: 1} : {flex: 0.04};

    var whiteHeight = this.state.index * 80;

    var circles = [];
    for (var i = 0; i < (5 + this.state.index); i++) {
      circles.push(this.renderCircle(i));
    }

    return (
      <View style={styles.container}>
        <View style={styles.topButtons}>
          {this.renderButton(0)}
          {this.renderButton(1)}
          {this.renderButton(2)}
        </View>
        <View style={styles.content}>
          <View style={{flexDirection: 'row', height: 300}}>
            <View style={[leftStyle, {backgroundColor: 'firebrick'}]}/>
            <View style={[middleStyle, {backgroundColor: 'seagreen'}]}/>
            <View style={[rightStyle, {backgroundColor: 'steelblue'}]}/>
          </View>
          <View style={{height: whiteHeight, justifyContent: 'center', alignItems: 'center', overflow: 'hidden'}} removeClippedSubviews={true}>
            <View>
              <Text>Stuff Goes Here</Text>
            </View>
          </View>
            <View style={styles.startContainer}>
              {[1,2,3,4,5].map(
                (text, ii) => (
                  <Animated.View
                    key={text}
                    style={[{
                      left: this.state.anims[ii]
                    }]}>
                    <Image source={require('./star.png')}></Image>
                  </Animated.View>
                )
              )}
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
    backgroundColor: '#F5FCFF',
  },
  topButtons: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'lightblue',
  },
  button: {
    flex: 1,
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  content: {
    flex: 1,
    alignSelf: 'stretch',
  },
  circleContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startContainer: {
    flexDirection: 'row',
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default AnSpring;




