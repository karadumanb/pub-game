import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Dimensions, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import Colors from "src/core/Colors";
import FadeInScaleUp from "../animations/FadeInScaleUp";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  circle: {
    backgroundColor: Colors.light.danger,
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    alignItems: "center",
    justifyContent: "center"
  },
  circleSuccess: {
    backgroundColor: Colors.light.success
  },
  icon: {
    fontSize: 50,
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
  }
});

export const Alert: React.FC<{ success: boolean, visible: boolean }> = ({ success, visible }) => {
  if (!visible) return null;

  const icon = React.useMemo(() => {
    return success
      ? <MaterialCommunityIcons name='check' />
      : <MaterialCommunityIcons name='close' />;
  }, [success]);

  const circleStyles: StyleProp<ViewStyle> = [styles.circle];

  if (success) {
    circleStyles.push(styles.circleSuccess);
  }

  return (
    <View style={styles.container}>
      <FadeInScaleUp factor={0.2}>
        <View style={circleStyles}>
          {React.cloneElement(icon, { style: styles.icon })}
        </View>
      </FadeInScaleUp>
    </View>
  );
};
