import { View, Text, FlatList, StyleSheet } from "react-native";
import { favorites } from "../utils/favorites";
import { observer } from "mobx-react-lite";
import MovieFavorites from "../components/MovieFavorites";
import { colors } from "../utils/colors";

export default observer(function Favorites() {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites.favoriteList}
        renderItem={({ item }) => <MovieFavorites movieId={item} />}
        contentContainerStyle={styles.columnWrapper}
        keyExtractor={(item) => item}
        numColumns={2}
      />
    </View>
  );
  
});

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor:colors.mainColors.primary,
    padding: 10,
  },
  columnWrapper: {
    gap: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});