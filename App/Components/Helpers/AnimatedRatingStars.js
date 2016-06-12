import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Image,
} from 'react-native';

class AnimatedRatingStars extends Component {
  constructor() {
    super();
    this.state = {
      anims: [1,2,3,4,5].map(() => new Animated.Value(320))
    }
  }

  componentDidMount() {
    this.animateStarter();
  }

  animateStarter() {
    var timing = Animated.timing;
    Animated.sequence([ // One after the other

      Animated.stagger(200,
        this.state.anims.map((anim) => timing(anim, {
          toValue: 0,
          easing: Easing.bounce, // Like a ball
          duration: 1000,
        })),
      )
    ]).start();
  }

  render() {
    return (
      <View style={styles.startContainer}>
        {[1, 2, 3, 4, 5].map(
          (text, ii) => (
            <Animated.View
              key={text}
              style={[{
                left: this.state.anims[ii]
              }]}>
              <Image style={styles.starImg} source={require('./star.png')}></Image>
            </Animated.View>
          )
        )}
      </View>
    );
  }

}

const styles = StyleSheet.create({
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
  },
  starImg: {
    width: 20,
    height: 20
  }
});

export default AnimatedRatingStars;
