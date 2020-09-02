import React, { memo } from 'react';
import { Animated, ViewStyle } from 'react-native';

type Props = {
  style?: ViewStyle;
  children: React.ReactNode;
  factor?: number;
};


class FadeInScaleUp extends React.Component<Props> {
  fadeAnim: any;

  constructor(props: Props) {
    super(props);
    this.fadeAnim = new Animated.Value(0)
  }

  componentDidMount() {
    Animated.timing(
      this.fadeAnim,
      {
        toValue: 1,
        duration: 1000 * (this.props.factor || 0.5),
        useNativeDriver: true
      }
    ).start();
  }

  render() {

    const {
      style = {},
      children,
    } = this.props;

    return (
      <Animated.View
        style={{
          ...style,
          opacity: this.fadeAnim,
          transform: [
            {
              translateX: this.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            },
            {
              translateY: this.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            },
            {
              scaleX: this.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            },
            {
              scaleY: this.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1]
              })
            }
          ]
        }}
      >
        {children}
      </Animated.View>
    );
  }
};

export default FadeInScaleUp
