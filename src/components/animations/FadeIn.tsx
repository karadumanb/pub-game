import React, { memo } from 'react';
import { Animated, ViewStyle } from 'react-native';

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  factor?: number;
};

const FadeIn: React.FC<Props> = ({
  style = {},
  children,
  factor = 0.5
}) => {
  const fadeAnim = new Animated.Value(0)

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000 * factor,
        useNativeDriver: true
      }
    ).start();
  }, [])

  return (
    <Animated.View
      style={{
        ...style,
        width: '100%',
        opacity: fadeAnim
      }}
    >
      {children}
    </Animated.View>
  );
}

export default memo(FadeIn)
