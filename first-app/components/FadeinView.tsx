import React from 'react';
import {useRef, useEffect} from 'react';
import {Animated, Easing} from 'react-native';
import { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';

interface FadeInViewProps{
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

interface SlideinProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

const FadeInView = ({children, style}: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current


useEffect(() => {
  Animated.timing(
    fadeAnim,
    {
      toValue: 1,
      duration: 4000,
      useNativeDriver: false
    }
  ).start();
}, [fadeAnim])

return(
  <Animated.View style = {{
    ...(style as object),
    opacity: fadeAnim
  }}>
    {children}
  </Animated.View>
  );

}

const Slidein = ({children, style}: FadeInViewProps) => {
  const t = useRef(new Animated.Value(40)).current;
  const o = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(t, { toValue: 0, duration: 450, easing: Easing.out(Easing.cubic), useNativeDriver: true }),

      Animated.timing(o, { toValue: 1, duration: 350, useNativeDriver: true })
    ]).start();
  }, []);  
    
  return <Animated.View style={{ transform: [{ translateY: t }], opacity: o }}>
    {children}
  </Animated.View>;
  }


export default FadeInView;