import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from 'src/core/Colors';
import NeverHave from 'src/screens/Root/Games/NeverHave';
import TruthOrDrink from 'src/screens/Root/Games/TruthOrDrink';
import GameIndex from 'src/screens/Root/Games';
import { GameParamList } from 'src/navigation/types';
import DareOrDrink from './DareOrDrink';
import MostLikelyTo from './MostLikelyTo';
import ShotOfFortune from './ShotOfFortune';

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const GameStack = createStackNavigator<GameParamList>();

export function GameNavigator() {
  return (
    <GameStack.Navigator>
      <GameStack.Screen
        name="Game"
        component={GameIndex}
        options={{
          headerTitle: 'Let the game start!',
          headerTintColor: Colors.light.primary
        }}
      />
      <GameStack.Screen
        name="never_have"
        component={NeverHave}
        options={{
          headerTitle: '',
        }}
      />
      <GameStack.Screen
        name="truth_or_drink"
        component={TruthOrDrink}
        options={{
          headerTitle: '',
        }}
      />
      <GameStack.Screen
        name="dare_or_drink"
        component={DareOrDrink}
        options={{
          headerTitle: '',
        }}
      />
      <GameStack.Screen
        name="most_likely_to"
        component={MostLikelyTo}
        options={{
          headerTitle: '',
        }}
      />
      <GameStack.Screen
        name="shot_of_fortune"
        component={ShotOfFortune}
        options={{
          headerTitle: '',
        }}
      />
    </GameStack.Navigator>
  );
}
