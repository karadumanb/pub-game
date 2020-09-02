import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import NotFoundScreen from 'src/screens/NotFoundScreen';
import QuizIndex from './index';
import Quiz from '../Quiz';

type RootStackParamList = {
  Index: undefined,
  NotFound: undefined,
  Show: undefined,
}
// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

export function QuizNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Index">
      <Stack.Screen name="Index" component={QuizIndex} options={{ headerTitle: 'Quizesss' }} />
      <Stack.Screen name="Show" component={QuizIndex} options={({ navigation, route }) => {
        console.log({navigation, route})
        return {
          headerTitle: route.params?.["title"],
          headerTintColor: "#fff",
          headerStyle: {
            backgroundColor: route.params?.["color"],
            borderBottomColor: route.params?.["color"]
          }
        }
      }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
