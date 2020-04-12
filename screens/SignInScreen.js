import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight,
} from "react-native";
import { appColor } from "../setting/SettingColor";

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
      <TouchableHighlight>
        <View>
          <Text style={styles.loginBtn}>ログイン</Text>
        </View>
      </TouchableHighlight>
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
  loginBtn: {
    width: "50%",
    marginTop: 18,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 3,
    padding: 12,
    color: "white",
    backgroundColor: "#1e90ff",
  },
  addAcountText: {
    color: "#999",
    margin: 9,
  },
});
