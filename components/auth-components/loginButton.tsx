import React from "react";
import { useAuth0 } from "react-native-auth0";
import { Alert, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const LoginButton = () => {
  const { authorize, getCredentials } = useAuth0();

  const onLogin = async () => {
    try {
      await authorize(
        { scope: "openid profile email" },
        { customScheme: "mynativeapp" }
      );
      let credentials = await getCredentials();
      Alert.alert("AccessToken: " + credentials.accessToken);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Button mode="contained" onPress={onLogin} style={styles.button}>
      Login
    </Button>
  );
};

export default LoginButton;

const styles = StyleSheet.create({
  button: {
    margin: 10,
    width: "100%",
  },
});
