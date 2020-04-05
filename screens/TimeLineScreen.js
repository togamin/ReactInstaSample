import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { PostCard } from "../components/PostCard";

export function TimeLineScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <PostCard
            userImg={item.user.userImg}
            userName={item.user.userName}
            createdDay={item.feed.created_at}
            postImg={item.feed.postImg}
            postMessage={item.feed.postMessage}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#000",
    padding: 6,
  },
});

const DATA = [
  {
    user: {
      userName: "togamin",
      userImg: "https://source.unsplash.com/random",
    },
    feed: {
      postImg: "https://source.unsplash.com/random",
      postMessage: "綺麗な場所で寝ました",
      created_at: "2020/04/05",
      updated_at: "2020/04/06",
    },
  },
  {
    user: {
      userName: "togamin",
      userImg: "https://source.unsplash.com/random",
    },
    feed: {
      postImg: "https://source.unsplash.com/random",
      postMessage: "綺麗な場所で寝たいなぁ",
      created_at: "2020/05/05",
      updated_at: "2020/06/06",
    },
  },
  {
    user: {
      userName: "togamin",
      userImg: "https://source.unsplash.com/random",
    },
    feed: {
      postImg: "https://source.unsplash.com/random",
      postMessage:
        "綺麗な場所で寝たいなぁと思った日々ですぅぅぅぅぅぅぅぅぅぅぅぅぅぅぅぅぅ",
      created_at: "2020/05/05",
      updated_at: "2020/06/06",
    },
  },
];
