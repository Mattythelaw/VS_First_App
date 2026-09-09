import React from 'react';
import {useRef, useEffect} from 'react'
import {Animated} from 'react-native'

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
export default FadeInView;