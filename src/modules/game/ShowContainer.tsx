import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Button, Text } from 'native-base';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import FadeUp from 'src/components/animations/FadeUp';
import LottieView from 'src/components/animations/LottieView';
import Colors from 'src/core/Colors';
import { globalStyles } from 'src/core/Styles';

type Props = {
  dataSource: string[];
  tip: string,
  lottieFile: string
}

function ShowContainer({ dataSource = [], tip = '', lottieFile = '', }: Props) {
  const [statement, setStatement] = useState<string | undefined>(undefined);

  const setRandomStatement = () => {
    const random = Math.floor(Math.random() * dataSource.length);
    setStatement(undefined);
    setTimeout(() => {
      setStatement(dataSource[random]);
    }, 750);
  };

  useEffect(setRandomStatement, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <LottieView
          source={lottieFile}
        />
        {statement ? (
          <FadeUp>
            <Text style={styles.text}>{statement}</Text>
          </FadeUp>
        ) : (
            <Text style={styles.text}>{'Ready...'}</Text>
          )}
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
              {tip}
            </Text>
          </View>
          <Button block icon onPress={setRandomStatement} disabled={!Boolean(statement)}>
            <MaterialCommunityIcons name='fast-forward' color={Colors.light.white} size={24} />
            <Text>Next</Text>
          </Button>
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

export default ShowContainer;
