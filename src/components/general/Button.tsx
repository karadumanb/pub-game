import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 10,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    width: "46%",
    marginTop: 20
  },
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "space-between"
  }
});

type Props = {
  text: string;
  onPress: () => void;
  disableOnPress?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<Props> = ({
  text,
  onPress = () => { },
  disableOnPress = false,
  disabled: disabledProp
}) => {
  const [disabled, setDisabled] = useState(false);

  const handlePress = () => {
    disableOnPress && setDisabled(true);
    onPress();
  };

  const disabledButton = disabledProp || disabled;

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, disabledButton && { opacity: .5 }]}
      disabled={disabledButton}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export const ButtonContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.buttonContainer}>{children}</View>
);
