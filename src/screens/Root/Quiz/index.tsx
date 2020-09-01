import React, { useState } from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView } from "react-native";

import { Button, ButtonContainer } from "src/components/general/Button";
import { Alert } from "src/components/feedback/Alert";

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
  }
});

const Quiz = (props: any) => {
  const [quizState, setQuizState] = useState({
    correctCount: 0,
    totalCount: props.route.params["questions"].length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
  })

  const answer = (correct: boolean) => {
    if (correct) {
      setQuizState({
        ...quizState,
        correctCount: quizState.correctCount + 1,
        answerCorrect: true
      });
      setTimeout(() => nextQuestion(), 750)
    }
  };

  const nextQuestion = () => {
    if (quizState.activeQuestionIndex + 1 >= quizState.totalCount) {
      props.navigation.popToTop()
    } else {
      setQuizState({
        ...quizState,
        activeQuestionIndex: quizState.activeQuestionIndex + 1,
        answered: false,
      })
    }
  };

  const questions = props.route.params["questions"];
  const question = questions[quizState.activeQuestionIndex];

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: props.route.params["color"] }
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
              />
            ))}
          </ButtonContainer>
        </View>

        <Text style={styles.text}>
          {`${quizState.correctCount}/${quizState.totalCount}`}
        </Text>
      </SafeAreaView>
      <Alert
        correct={quizState.answerCorrect}
        visible={quizState.answered}
      />
    </View>
  );
}

export default Quiz;
