import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import { Button, ButtonContainer } from "src/components/general/Button";
import { useNotifier } from "src/contexts/NotifyContext";
import Colors from "src/core/Colors";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#36B1F0",
    flex: 1,
    paddingHorizontal: 20
  },
  text: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    letterSpacing: -0.02,
    fontWeight: "600"
  },
  safearea: {
    flex: 1,
    marginTop: 100,
    justifyContent: "space-between"
  },
  textDanger: {
    color: Colors.light.danger,
    fontSize: 14,
    textAlign: "center",
    marginTop: 10
  }
});

const Quiz = (props: any) => {
  const navigation = useNavigation();
  const { showAlert } = useNotifier();

  const { questions, color } = props.route.params;

  const totalCount = questions.length;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(1);
  const [isSecondTrial, setIsSecondTrial] = useState(false);

  const answer = (correct: boolean) => {
    if (correct) {
      showAlert(true, nextQuestion);
    } else {
      showAlert(false);
      if(isSecondTrial) {
        nextQuestion();
      } else {
        setIsSecondTrial(true);
      }
    }
  };

  const nextQuestion = () => {
    if (activeQuestionIndex + 1 > totalCount) {
      navigation.dispatch(StackActions.popToTop())
    } else {
      setActiveQuestionIndex(activeQuestionIndex + 1);
      setIsSecondTrial(false);
    }
  };

  const question = questions[activeQuestionIndex - 1];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: color }
      ]}
    >
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.safearea}>
        <View>
          <Text style={styles.text}>{question.question}</Text>

          <ButtonContainer>
            {question.answers.map((ans: any) => (
              <Button
                key={ans.id}
                text={ans.text}
                onPress={() => answer(ans.correct)}
                disableOnPress
              />
            ))}
          </ButtonContainer>
          {isSecondTrial && (
            <Text style={styles.textDanger}>
              This is your last chance, be careful!
            </Text>
          )}
        </View>

        <Text style={[styles.text, { marginBottom: 10 }]}>
          {`${activeQuestionIndex}/${totalCount}`}
        </Text>
      </SafeAreaView>
    </View>
  );
}

export default Quiz;
