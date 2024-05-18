import { View, Text, FlatList, StyleSheet } from "react-native";
import { favorites } from "../utils/favorites";
import { observer } from "mobx-react-lite";
import FavoriteMark from "../components/FavoriteMark";

export default observer(function Favorites() {
  return (
    <View style={styles.container}>
      <FlatList
        data={favorites.favoriteList}
        renderItem={({ item }) => <FavoriteMark movieId={item} />}
        contentContainerStyle={styles.columnWrapper}
        keyExtractor={(item) => item}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  columnWrapper: {
    gap: 10,
  },
});