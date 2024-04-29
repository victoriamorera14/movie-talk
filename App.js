import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import Avatar from "./components/Avatar";
import Mark from "./components/Mark";
import SearchBox from "./components/SearchBar";
import { colors } from "./utils/colors";
import CarouselComponent from "./components/CarouselComponent";
import CustomButton from "./components/CustomButton";

function ShowComponent({ name, children }) {
  return (
    <View style={styles.showContainer}>
      <Text style={styles.showTitle}>{name}</Text>
      <View style={styles.showRow}>{children}</View>
    </View>
  );
}

export default function App() {
  return (
    <View style={styles.allComponents}>
      <Text style={styles.componentsTitle}>
        <h2>Aqui estan tots els components:</h2>
      </Text>
      <View style={styles.container}>
        <ShowComponent>
          <CustomButton
            text="Open chat"
            width={300}
            height={50}
            borderRadius={45} 
            defaultColor={"#84C38D"}
            pressedColor={"#373246"}
          />
          <CustomButton
            text="Apply filter"
            width={200}
            height={50}
            borderRadius={15} 
            defaultColor={"#E92348"}
            pressedColor={"#373246"}
          />
        </ShowComponent>
        <ShowComponent name="Avatar">
          <Avatar name="Paula Rodriguez" />
          <Avatar name="Joan Roca" color="#B255DE" />
          <Avatar image={require("./assets/user.jpg")} />
        </ShowComponent>
        <ShowComponent name="Mark">
          <Mark unread={true} />
          <Mark unread={false} />
          <Mark double={true} />
          <Mark unread={true} size={32} />
          <Mark unread={false} size={32} />
          <Mark double={true} size={32} />
        </ShowComponent>
        <ShowComponent name="Search">
          <SearchBox />
        </ShowComponent>
        <ShowComponent>
          <CarouselComponent
            image={require("./assets/dune_poster.jpg")}
            description={
              "mmemmemmemememeemmeemememmmeememmemeemeememememeemememmeemmeemme"
            }
          ></CarouselComponent>
        </ShowComponent>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  allComponents: {
    maxWidth: "3500px",
    border: "2px solid black",
    alignContent: "center",
  },
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#f1f1f1",
    gap: 10,
    padding: 100,
  },

  showContainer: {},

  componentsTitle: {
    textAlign: "center",
  },

  showTitle: {},

  showRow: {
    flexDirection: "row",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 8,
  },
});
