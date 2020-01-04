import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import Card from "../components/Card";
import Input from "../components/Input";
import Colors from "../constants/Colors";

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState("");

  // Function that drops any non-numbered characters
  function numberInputHandler(inputText) {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  }

  // Function to dismiss keyboard
  function dismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={() => {}} color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                onPress={() => {}}
                color={Colors.primary}
              />
            </View>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: "80%",
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  button: {
    width: "40%"
  },
  input: {
    width: "15%",
    textAlign: "center"
  }
});

export default StartGameScreen;
