import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import Colors from 'src/core/Colors';
import NeverHave from 'src/screens/Root/Games/NeverHave';
import GameIndex from 'src/screens/Root/Games';
import { GameParamList } from 'src/navigation/types';

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
          headerShown: false
        }}
      />
    </GameStack.Navigator>
  );
}
