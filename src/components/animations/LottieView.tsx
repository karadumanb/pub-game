import Lottie from 'lottie-react-native';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';

// OR find more Lottie files @ https://lottiefiles.com/featured
const LottieView = ({ source, style }: { source: string | { uri: string; }; style?: StyleProp<ViewStyle> }) => {
  return (
    <Lottie
      style={style}
      source={source}
      autoPlay
    />
  );
};

export default LottieView;
