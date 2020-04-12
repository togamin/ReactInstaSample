import React from "react";
import { StyleSheet, View, Text, TouchableHighlight } from "react-native";

export function AuthBtn(props) {
  return (
    <TouchableHighlight>
      <View>
        <Text style={styles.authBtn}>{props.btnName}</Text>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  authBtn: {
    width: "50%",
    marginTop: 18,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 3,
    padding: 12,
    color: "white",
    backgroundColor: "#1e90ff",
  },
});
