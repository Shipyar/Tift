import React, { useRef } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { interpolateColor, useScrollHandler } from 'react-native-redash';
import Animated, { multiply, divide } from 'react-native-reanimated';

import Slide from './Slide';
import SubSlide from './SubSlide';
import Dot from './Dot';

const { width, height } = Dimensions.get('window');
const BORDER_RADIUS = 75;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  slider: {
    height: 0.61 * height,
    backgroundColor: 'cyan',
    borderBottomRightRadius: BORDER_RADIUS,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: BORDER_RADIUS,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: BORDER_RADIUS,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

const slides = [
  {
    title: "Relaxed",
    subTitle: "Find Your Workouts",
    description: "Confused about your workouts? We are here to help",
    color: "#BFEAF5",
  },
  {
    title: "Playful",
    subTitle: "Share Your Workouts",
    description:
      "Have you got an ab busting workout? Share it with the community",
    color: "#BEECC4",
  },
  {
    title: "Exentric",
    subTitle: "Keep on Track",
    description: "Keep your workouts in an easy to view plan.",
    color: "#FFE4D9",
  },
  {
    title: "Funky",
    subTitle: "Look Good, Feel Good",
    description: "When you stick to your goals you will feel great!",
    color: "#FFDDDD",
  },
];

const Onboarding = () => {
  const scrollRef = useRef<Animated.ScrollView>(null);
  const { scrollHandler, x } = useScrollHandler()
  const backgroundColor = interpolateColor(x, {
    inputRange: slides.map((_, i) => i * width),
    outputRange: slides.map(slide => slide.color)
  })

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, { backgroundColor }]}>
        <Animated.ScrollView
          ref={scrollRef}
          horizontal
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          {...scrollHandler}
        >
          {slides.map(({ title }, index) => (
            <Slide key={index} {...{ title }} right={!!(index % 2)} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View
          style={{
            ...StyleSheet.absoluteFillObject,
            backgroundColor,
          }}
        />
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
            {slides.map((_, index) => (
              <Dot key={index} currentIndex={divide(x, width)} {...{ index }} />
            ))}
          </View>
          <Animated.View
            style={{
              flex: 1,
              transform: [{ translateX: multiply(x, -1) }],
              width: width * slides.length,
              flexDirection: 'row',
            }}>
            {slides.map(({ subTitle, description }, index) => (
              <SubSlide
                key={index}
                last={index === slides.length - 1}
                {...{ subTitle, description }}
                onPress={() => {
                  if (scrollRef.current) {
                    scrollRef.current
                      .getNode()
                      .scrollTo({ x: width * (index + 1), animated: true });
                  }
                }}
              />
            ))}
          </Animated.View>
        </View>
      </View>
    </View>
  );
};

export default Onboarding;
