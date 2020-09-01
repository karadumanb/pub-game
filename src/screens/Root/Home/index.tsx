import React from "react";
import { ScrollView, StatusBar } from "react-native";

import spaceQuestions from "src/lib/data/space";
import westernsQuestions from "src/lib/data/westerns";
import computerQuestions from "src/lib/data/computers";

import { RowItem } from "src/components/general/RowItem";
import { NavigationProp } from "@react-navigation/native";

const HomeIndex = ({ navigation }: { navigation: NavigationProp<any> }) => (
  <ScrollView>
    <StatusBar barStyle="dark-content" />
    <RowItem
      name="Space"
      color="#36b1f0"
      onPress={() =>
        navigation.navigate("Quiz", {
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
        navigation.navigate("Quiz", {
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
        navigation.navigate("Quiz", {
          title: "Computers",
          questions: computerQuestions,
          color: "#49475B"
        })
      }
    />
  </ScrollView>
);

export default HomeIndex;