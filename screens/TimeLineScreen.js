import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { PostCard } from "../components/PostCard";

export function TimeLineScreen() {
  return (
    <View style={styles.container}>
      <FlatList data={DATA} renderItem={({ item }) => <PostCard />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#000",
  },
});

const DATA = [
  {
    user: {
      userName: "togamin",
      userImage: "../assets/togamin.JPG",
    },
    feed: {
      postImg: "../assets/post01.jpg",
      postMessage: "綺麗な場所で寝ました",
      created_at: "2020/04/05",
      updated_at: "2020/04/06",
    },
  },
  {
    user: {
      userName: "togamin",
      userImage: "../assets/togamin.JPG",
    },
    feed: {
      postImg: "../assets/post02.jpg",
      postMessage: "綺麗な場所で寝たいなぁ",
      created_at: "2020/05/05",
      updated_at: "2020/06/06",
    },
  },
  {
    user: {
      userName: "togamin",
      userImage: "../assets/togamin.JPG",
    },
    feed: {
      postImg: "../assets/post02.jpg",
      postMessage: "綺麗な場所で寝たいなぁ",
      created_at: "2020/05/05",
      updated_at: "2020/06/06",
    },
  },
];
