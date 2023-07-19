import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Auth0Provider, useAuth0 } from "react-native-auth0";

import LoginButton from "./components/login/loginButton";

export default function App() {
  const { authorize } = useAuth0();
  return (
    <Auth0Provider
      domain={"dev-vvrqmgyuo32hrxjv.us.auth0.com"}
      clientId={"spRwq1puC5ZPeZ0q5BqEhEJm4zhmwvHF"}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to Panelize!</Text>
        <LoginButton />
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
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
