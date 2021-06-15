import React, { useState, useCallback } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { toggleFavourite } from "../redux/actions/moviesAction";
const MovieDetail = (props) => {
  const movieId = props.route.params.movieId;

  const [favourite, setfavourite] = useState(false);

  const selectedMovie = useSelector((state) =>
    state.movie.movies.Search.find((movies) => movies.imdbID === movieId)
  );

  const FavMovie = useSelector((state) => state.movie.favMovie);

  const isFavorite = FavMovie.some(
    (movie) => movie.imdbID === selectedMovie.imdbID
  );

  const dispatch = useDispatch();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        backgroundColor: "black",
        alignItems: "center",
      }}
    >
      <Image
        source={{ uri: selectedMovie.Poster }}
        style={{ width: "90%", height: "60%" }}
      ></Image>
      <View style={{ flexDirection: "row",alignItems: "center",justifyContent:"space-around"}}>
      <Text
        style={{
          margin: 25,
          fontWeight: "20px",
          fontSize: 20,
          color: "white",
        }}
      >
        {selectedMovie.Title}
      </Text>
   
      <TouchableOpacity
        onPress={() => {
          dispatch(toggleFavourite(selectedMovie.imdbID)),
            setfavourite(!favourite);
        }}
      >
        {isFavorite ? (
          <Ionicons name="star" size={32} color="red" />
        ) : (
          <Ionicons name="star-outline" size={32} color="red" />
        )}
      </TouchableOpacity>

      
      </View>

      <View style={{ flexDirection:"row",justifyContent:"space-between",overflow:"hidden"}}>
        
          <Text style={{color: "white",marginRight:20}}>{selectedMovie.Type}</Text>
          <Text style={{color: "white"}}>{selectedMovie.Year}</Text>
          </View>     
    </View>
  );
};

export default MovieDetail;
