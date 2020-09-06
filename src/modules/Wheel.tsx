import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Animated,
  Text as RnText,
} from 'react-native';
import * as GestureHandler from 'react-native-gesture-handler';
import * as d3Shape from 'd3-shape';
import Svg, { Path, G, Text, TSpan } from 'react-native-svg';
import { snap } from '@popmotion/popcorn';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from 'src/core/Colors';
import { globalStyles } from 'src/core/Styles';
import { Button } from 'native-base';

const { PanGestureHandler, State } = GestureHandler;
const { width } = Dimensions.get('screen');

const wheelSize = width * 0.95;
const fontSize = 26;
const oneTurn = 360;
const knobFill = '#c0392b';

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

type Participant = string | number;

const makeWheel = (participants: Participant[]) => {
  const data = Array.from({ length: participants.length }).fill(1);
  const arcs = d3Shape.pie()(data as any);

  return arcs.map((arc: any, index: number) => {
    const instance = d3Shape
      .arc()
      .padAngle(0.01)
      .outerRadius(width / 2)
      .innerRadius(20);

    return {
      path: instance(arc),
      color: getRandomColor(),
      value: participants[index], //[200, 2200]
      centroid: instance.centroid(arc)
    };
  });
};

type Props = {
  onFinish: (winner: Participant) => void;
  participants: Participant[];
  gameOver?: boolean;
  setGameOver?: (gameOver: boolean) => void;
}

export default class Wheel extends React.Component<Props> {
  _wheelPaths = makeWheel(this.props.participants);
  _angle = new Animated.Value(0);
  angle = 0;
  numberOfSegments = this.props.participants.length;
  angleBySegment = oneTurn / this.numberOfSegments;
  angleOffset = this.angleBySegment / 2;

  state = {
    enabled: true,
    finished: false,
    winner: null
  };

  componentDidMount() {
    this._angle.addListener(event => {
      if (this.state.enabled && !this.props.gameOver) {
        this.setState({
          enabled: false,
          finished: false
        });
      }

      this.angle = event.value;
    });
  }

  _getWinnerIndex = () => {
    let rounded = Math.round(this.angle % oneTurn);
    rounded = rounded > 0 ? (rounded - oneTurn) : rounded;
    const deg = Math.abs(rounded);
    return Math.floor(deg / this.angleBySegment);
  };

  _onPan = ({ nativeEvent }: any) => {
    if (nativeEvent.state === State.END) {
      const { velocityY } = nativeEvent;
      if (!velocityY) return;

      Animated.decay(this._angle, {
        velocity: velocityY / 1000,
        deceleration: 0.999,
        useNativeDriver: true
      }).start(() => {
        this._angle.setValue(this.angle % oneTurn);
        const snapTo = snap(oneTurn / this.numberOfSegments);
        Animated.timing(this._angle, {
          toValue: snapTo(this.angle),
          duration: 300,
          useNativeDriver: true
        }).start(() => {
          this.setState({
            enabled: true,
            finished: true
          });
          this.props.onFinish(this._wheelPaths[this._getWinnerIndex()].value)
        });
      });
    }
  };

  _renderKnob = () => {
    const knobSize = 30;
    // [0, this.numberOfSegments]
    const YOLO = Animated.modulo(
      Animated.divide(
        Animated.modulo(Animated.subtract(this._angle, this.angleOffset), oneTurn),
        new Animated.Value(this.angleBySegment)
      ),
      1
    );

    return (
      <Animated.View
        style={{
          width: knobSize,
          height: knobSize * 2,
          justifyContent: 'flex-end',
          zIndex: 1,
          transform: [
            {
              rotate: YOLO.interpolate({
                inputRange: [-1, -0.5, -0.0001, 0.0001, 0.5, 1],
                outputRange: ['0deg', '0deg', '35deg', '-35deg', '0deg', '0deg']
              })
            }
          ]
        }}
      >
        <Svg
          width={knobSize}
          height={(knobSize * 100) / 57}
          viewBox={`0 0 57 100`}
          style={{ transform: [{ translateY: 8 }] }}
        >
          <Path
            d="M28.034,0C12.552,0,0,12.552,0,28.034S28.034,100,28.034,100s28.034-56.483,28.034-71.966S43.517,0,28.034,0z   M28.034,40.477c-6.871,0-12.442-5.572-12.442-12.442c0-6.872,5.571-12.442,12.442-12.442c6.872,0,12.442,5.57,12.442,12.442  C40.477,34.905,34.906,40.477,28.034,40.477z"
            fill={knobFill}
          />
        </Svg>
      </Animated.View>
    );
  };

  _renderSvgWheel = () => {
    return (
      <View style={styles.container}>
        {this._renderKnob()}
        <Animated.View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            transform: [
              {
                rotate: this._angle.interpolate({
                  inputRange: [-oneTurn, 0, oneTurn],
                  outputRange: [`-${oneTurn}deg`, `0deg`, `${oneTurn}deg`]
                })
              }
            ]
          }}
        >
          <Svg
            width={wheelSize}
            height={wheelSize}
            viewBox={`0 0 ${width} ${width}`}
            style={{ transform: [{ rotate: `-${this.angleOffset}deg` }] }}
          >
            <G y={width / 2} x={width / 2}>
              {this._wheelPaths.map((arc, i) => {
                const [x, y] = arc.centroid;
                const number = arc.value.toString();

                return (
                  <G key={`arc-${i}`}>
                    <Path d={arc.path as any} fill={arc.color} />
                    <G
                      rotation={(i * oneTurn) / this.numberOfSegments + this.angleOffset}
                      origin={`${x}, ${y}`}
                    >
                      <Text
                        x={x}
                        y={y - 70}
                        fill="white"
                        textAnchor="middle"
                        fontSize={fontSize}
                      >
                        {Array.from({ length: number.length }).map((_, j) => {
                          return (
                            <TSpan
                              x={x}
                              dy={fontSize}
                              key={`arc-${i}-slice-${j}`}
                            >
                              {number.charAt(j)}
                            </TSpan>
                          );
                        })}
                      </Text>
                    </G>
                  </G>
                );
              })}
            </G>
          </Svg>
        </Animated.View>
      </View>
    );
  };

  render() {
    return (
      <>
        {this.props.gameOver && (
          <View style={[{ position: 'absolute', zIndex: 9, width: '100%', height: '100%' }, globalStyles.flexCenter]}>
            <View>
              <RnText style={{ color: Colors.light.white, fontWeight: '700' }}>{'GAME OVER'}</RnText>
              <Button transparent icon onPress={() => this.props.setGameOver && this.props.setGameOver(false)}>
                <MaterialCommunityIcons name='refresh' color={Colors.light.white} size={24} />
                <RnText style={{ color: Colors.light.white, fontWeight: '700' }}>{'Restart'}</RnText>
              </Button>
            </View>
          </View>
        )}
        <PanGestureHandler
          onHandlerStateChange={this._onPan}
          enabled={this.state.enabled}
        >
          <View style={styles.container}>
            {this._renderSvgWheel()}
          </View>
        </PanGestureHandler>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  }
});
