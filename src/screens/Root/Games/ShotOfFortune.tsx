import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'native-base';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import LottieView from 'src/components/animations/LottieView';
import Colors from 'src/core/Colors';
import { globalStyles } from 'src/core/Styles';
import Wheel from 'src/modules/Wheel';

const participants = [1, 2, 3, 4, 5, 6];

function ShotOfFortune() {
  const [shotGlasses, setShotGlasses] = useState(participants.map(i => ({ value: i, filled: false })));
  const [gameOver, setGameOver] = useState(false);

  const onWheelFinish = (winner: number | string) => {
    const newGlassesState = shotGlasses.map(i => i.value == winner ? { ...i, filled: !i.filled } : i);
    setShotGlasses(newGlassesState);
    if (newGlassesState.every(i => !i.filled)) {
      setGameOver(true);
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            width: '100%',
            height: 50
          }}>
          {
            shotGlasses.map((glass, index) => {
              return (
                <View style={{ width: 30, height: '100%', opacity: glass.filled ? 1 : 0.3 }} key={`lottie-${index}`}>
                  <LottieView
                    loop={false}
                    source={require('assets/animations/filling.json')}
                    autoPlay
                    trigger={glass.filled ? JSON.stringify(glass) : undefined}
                  />
                </View>);
            })
          }
        </View>
        <Wheel onFinish={onWheelFinish} participants={participants} gameOver={gameOver} setGameOver={setGameOver} />
        <View>
          <View style={[globalStyles.flexCenter, {
            flexDirection: 'row',
            marginBottom: 20,
          }]}>
            <MaterialCommunityIcons
              name='information'
              color={Colors.light.white}
              size={24} />
            <Text style={styles.tipText}>
              {"You'll need 6 shot glasses to play this game. If the shot glass is empty, fill the glass with alcohol. If not, drink the shot. The game ends when all shots become empty again."}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.neverHave,
    flex: 1,
    padding: 20
  },
  text: {
    color: Colors.light.white,
    fontSize: 20,
    textAlign: "center",
    marginTop: 80
  },
  safearea: {
    flex: 1,
    justifyContent: "space-between",
  },
  footer: {
    position: 'absolute',
    right: 0
  },
  tipText: {
    textAlign: "center",
    color: Colors.light.white,
    marginLeft: 5
  }
});

export default ShotOfFortune;
