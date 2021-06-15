import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { moviesPosts, searchMovies } from "../redux/actions/moviesAction";
import { Ionicons } from "@expo/vector-icons";
export default function MoviesOverviewScreen(props) {
  const [page, setpage] = useState(1)
  console.log(page);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(moviesPosts(page));
  }, [dispatch,page]);
  const [search, setsearch] = useState([]);
  const [searchstring, setsearchstring] = useState("");

  let movies = useSelector((state) => state.movie.movies.Search);
  console.log(movies, "movies");
  useEffect(() => {
    if (movies) {
      if (searchstring === "") {
        setsearch(movies);
      } else {
        const filtered_movies = movies.filter((movie) =>
          movie.Title.toLowerCase().includes(searchstring.toLowerCase().trim())
        );
        setsearch(filtered_movies);
      }
    }
  }, [movies, searchstring]);

  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity
        style={styles.gridItem}
        onPress={() => {
          props.navigation.navigate("MovieDetails", {
            movieId: itemData.item.imdbID,
          });
        }}
      >
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
        style={{
          margin: 30,
          backgroundColor: "#202020",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 10,
        }}
      >
        <Ionicons name="search" size={18} color="white" />

        <TextInput
          style={{ width: 100, margin: 10, color: "white" }}
          value={searchstring}
          onChangeText={(text) => {
            setsearchstring(text);
          }}
        ></TextInput>
      </View>
      {search && (
        <FlatList
          data={search}
          keyExtractor={({ Poster }, index) => Poster}
          renderItem={renderGridItem}
          onEndReached={()=>{setpage(page+1)}}
          onEndReachedThreshold={1}
         
        ></FlatList>
      )}
    </View>
  );
}

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
