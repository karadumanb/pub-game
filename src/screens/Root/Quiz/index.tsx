import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "src/lib/data/space";
import westernsQuestions from "src/lib/data/westerns";
import computerQuestions from "src/lib/data/computers";

import { RowItem } from "src/components/general/RowItem";
import { NavigationProp } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const QuizIndex = ({ navigation }: { navigation: NavigationProp<any> }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <RowItem
        name="Space"
        color="#36b1f0"
        onPress={() =>
          navigation.navigate("QuizShow", {
            title: "Space",
            questions: spaceQuestions,
            color: "#36b1f0"
          })
        }
      />
      <RowItem
        name="Westerns"
        color="#799496"
        onPress={() =>
          navigation.navigate("QuizShow", {
            title: "Westerns",
            questions: westernsQuestions,
            color: "#799496"
          })
        }
      />
      <RowItem
        name="Computers"
        color="#49475B"
        onPress={() =>
          navigation.navigate("QuizShow", {
            title: "Computers",
            questions: computerQuestions,
            color: "#49475B"
          })
        }
      />
    </SafeAreaView>
  </ScrollView>
);

export default QuizIndex;
