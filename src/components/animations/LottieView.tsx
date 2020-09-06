import Lottie from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { Platform, StyleProp, ViewStyle } from 'react-native';

// OR find more Lottie files @ https://lottiefiles.com/featured
const LottieView = ({ source, style, trigger, ...others }: { source: string, style?: StyleProp<ViewStyle>, trigger?: any; } & React.ComponentProps<typeof Lottie>) => {
  if (Platform.OS !== 'ios' && Platform.OS !== 'android') {
    return null;
  }

  const animation = useRef<Lottie>(null)

  useEffect(() => {
    trigger && animation?.current?.play();
  }, [trigger])

  return (
    <Lottie
      ref={animation}
      style={style}
      source={source}
      autoPlay
      loop={false}
      {...others}
    />
  );
};

export default LottieView;
