import React from "react";
import { TouchableHighlight } from "react-native-gesture-handler";
import { StyleSheet, View, Text, Image } from "react-native";

export function PostCard() {
  return (
    <TouchableHighlight>
      <View style={styles.listItem}>
        <Image
          source={{ uri: "https://source.unsplash.com/random" }}
          style={styles.userImg}
          resizeMode="cover"
        />
        <Image
          source={{ uri: "https://source.unsplash.com/random" }}
          style={styles.postImg}
          resizeMode="cover"
        />

        <View style={styles.messageView}>
          <Text style={styles.messageText}>綺麗な場所で寝ました</Text>
          <Text style={styles.createdDay}>2020/04/05</Text>
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
