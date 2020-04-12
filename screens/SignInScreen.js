import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { appColor } from "../setting/SettingColor";
import { AuthBtn } from "../components/AuthBtn";

export function SignInScreen({ navigation }) {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="メールアドレス"
        value={mail}
        onChangeText={(text) => setMail(text)}
      />
      <TextInput
        style={styles.textInput}
        placeholder="パスワード"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <AuthBtn btnName="ログイン" />
      <TouchableHighlight onPress={() => navigation.navigate("SignUp")}>
        <Text style={styles.addAcountText}>新規アカウント作成</Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    padding: 18,
    backgroundColor: appColor.subColor,
  },
  textInput: {
    margin: 9,
    padding: 9,
    backgroundColor: "white",
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  addAcountText: {
    color: "#999",
    margin: 9,
  },
});
