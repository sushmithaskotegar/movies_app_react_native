import * as React from "react";
import { View, Text,Button,TouchableOpacity } from "react-native";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MoviesOverviewScreen from "./src/screens/MoviesOverviewScreen";
import MovieDetail from "./src/screens/MovieDetail";
import moviesReducer from "./src/redux/reducers/moviesReducer";
import thunk from "redux-thunk";
import FavouriteMoviesScreen from "./src/screens/FavouriteMoviesScreen";
import { Ionicons } from "@expo/vector-icons";
const rootReducer = combineReducers({
  movie: moviesReducer,
});
// const composeEnhancers = composeWithDevTools({
//   // Specify name here, actionsBlacklist, actionsCreators and other options if needed
// });
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const Stack = createStackNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen
            name="MoviesOverview"
            component={MoviesOverviewScreen}
            options={{ title: 'Anime' }}
          />
          <Stack.Screen name="MovieDetails" component={MovieDetail} 
           options={({ navigation }) => ({
            title: 'Anime',
           
           
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.navigate('FavouriteMovie')}
               title="edit"
                type="material"

              >
                 <Ionicons name="star" size={28} color="black" />
              </TouchableOpacity>
            ),
          })}
         
          
          />
          <Stack.Screen name="FavouriteMovie" component={FavouriteMoviesScreen} options={{ title :"Favourites"}}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
