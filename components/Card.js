import React from "react";
import { StyleSheet, View } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.3,
    elevation: 3,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 9
  }
});

export default Card;
