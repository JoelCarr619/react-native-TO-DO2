import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Auth0Provider, useAuth0 } from "react-native-auth0";

import LoginButton from "./components/auth-components/loginButton";
import SignUpButton from "./components/auth-components/signUpButton";

export default function App() {
  const { authorize } = useAuth0();
  return (
    <Auth0Provider
      domain={"dev-vvrqmgyuo32hrxjv.us.auth0.com"}
      clientId={"spRwq1puC5ZPeZ0q5BqEhEJm4zhmwvHF"}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Panelize</Text>
        <Text style={styles.textSub}>Your one and only to-do list app</Text>
        <View style={styles.homeButtonsContainer}>
          <LoginButton />
          <SignUpButton />
        </View>
        <StatusBar style="auto" />
      </View>
    </Auth0Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2568",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    top: 0,
    fontSize: 24,
    fontWeight: 800,
    color: "white",
    marginTop: 100,
  },
  textSub: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    paddingBottom: 20,
  },
  homeButtonsContainer: {
    position: "absolute",
    bottom: 0,
    // borderWidth: 2,
    // borderStyle: "solid",
    // borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    paddingBottom: 50,
  },
});
