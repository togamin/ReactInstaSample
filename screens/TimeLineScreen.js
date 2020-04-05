import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";

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
];

export function TimeLineScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <View>
            <Text>{item.feed.postMessage}</Text>
            <Image
              source={{ uri: "https://source.unsplash.com/random" }}
              style={{ width: 66, height: 58 }}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
