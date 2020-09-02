import React, { memo } from 'react';
import { Animated, ViewStyle } from 'react-native';

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  factor?: number;
};

const FadeUp: React.FC<Props> = ({
  style = {},
  children,
  factor = 4
}) => {
  const fadeAnim = new Animated.Value(0)
  const translateAnim = new Animated.Value(factor * 10)

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: factor * 250,
        useNativeDriver: true
      }
    ).start();
    Animated.timing(
      translateAnim,
      {
        toValue: 0,
        duration: factor * 250,
        useNativeDriver: true
      }
    ).start();
  }, [])

  return (
    <Animated.View
      style={{
        ...style,
        width: '100%',
        opacity: fadeAnim,
        transform: [
          { translateY: translateAnim },
        ]
      }}
    >
      {children}
    </Animated.View>
  );
}

export default memo(FadeUp)
