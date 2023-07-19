import React from "react";
import { useAuth0 } from "react-native-auth0";
import { Button } from "react-native";

const LoginButton = () => {
  const { authorize } = useAuth0();

  const onPress = async () => {
    try {
      const test = await authorize(
        { scope: "openid profile email" },
        { customScheme: "mynativeapp" }
      );
      console.log("test");
    } catch (e) {
      console.log(e);
    }
  };

  return <Button onPress={onPress} title="Login" />;
};

export default LoginButton;
