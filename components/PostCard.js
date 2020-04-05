import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { StyleSheet, View, Text, Image } from "react-native";

export function PostCard(props) {
  return (
    <TouchableHighlight>
      <View style={styles.listItem}>
        <Image
          source={{ uri: props.userImg }}
          style={styles.userImg}
          resizeMode="cover"
        />
        <Text>{props.userName}</Text>
        <Image
          source={{ uri: props.postImg }}
          style={styles.postImg}
          resizeMode="cover"
        />

        <View style={styles.messageView}>
          <Text style={styles.messageText}>{props.postMessage}</Text>
          <Text style={styles.createdDay}>{props.createdDay}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}
const styles = StyleSheet.create({
  listItem: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 3,
    marginTop: 3,
    borderRadius: 3,
  },
  postImg: {
    width: "100%",
    height: 270,
    borderRadius: 3,
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: "50%",
    borderWidth: 3,
    borderColor: "#6a5fad",
  },
  messageView: {
    padding: 9,
  },
  messageText: {
    padding: 3,
  },
  createdDay: {
    color: "#777",
  },
});
