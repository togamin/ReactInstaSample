import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { appColor } from "../setting/SettingColor";
import { AuthBtn } from "../components/AuthBtn";

export function SignUpScreen() {
  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="ユーザー名"
        value={mail}
        onChangeText={(text) => setMail(text)}
      />
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
      <AuthBtn btnName="新規作成" />
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
