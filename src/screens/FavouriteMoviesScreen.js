// import React from "react";
// import { View, Text, FlatList } from "react-native";
// import { useSelector } from "react-redux";

// export default function FavouriteMoviesScreen(props) {
//   const FavMovies = useSelector((state) => state.movie.favMovie);

//   return (
//     <View>
//       {FavMovies && (
//         <FlatList
//           data={FavMovies}
//           keyExtractor={({ Poster }, index) => Poster}
//           renderItem={({ item }) => <Text>{item.Title}</Text>}
//         ></FlatList>
//       )}
//     </View>
//   );
// }

import React, { useState, useCallback } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  FlatList,
  StyleSheet

} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { toggleFavourite } from "../redux/actions/moviesAction";
const FavouriteMoviesScreen = (props) => {
  const FavMovies = useSelector((state) => state.movie.favMovie);
  console.log();
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity style={styles.gridItem}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#202020",

            margin: 5,
          }}
        >
          <Text style={{ padding: 10, color: "white" }}>
            {itemData.item.Title}
          </Text>
          <Image
            source={{ uri: itemData.item.Poster }}
            style={{ width: "100%", height: "100%" }}
          ></Image>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View
       
        
      ></View>
      {FavMovies && (
        <FlatList
          data={FavMovies}
          keyExtractor={({ Poster }, index) => Poster}
          renderItem={renderGridItem}
        ></FlatList>
      )}
    </View>
  );
};

export default FavouriteMoviesScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
    height: 150,
  },
});
