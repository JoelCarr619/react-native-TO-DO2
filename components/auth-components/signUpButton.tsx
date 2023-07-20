import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet } from "react-native";

const SignUpButton = () => {
  return (
    <Button mode="contained-tonal" style={styles.button}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: "100%",
  },
});
