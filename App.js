import Constants from "expo-constants";
import { StyleSheet, View, Text } from "react-native";
import SearchBox from "./components/SearchBar";
import { colors } from "./utils/colors";
import CarouselComponent from "./components/CarouselComponent";
import CustomButton from "./components/CustomButton";
import Titulo from "./components/Titulo";
import FavoriteMark from "./components/FavoriteMark";
import { ScrollView } from "react-native-web";
import MovieCard from "./components/MovieCard";
import AccesoChat from "./components/AccesoChat";
import SeccionUser from "./components/SeccionUser";
import MovieHorizontalList from "./components/MovieHorizontalList";
import UserCard from "./components/UserCard";
import Mensaje from "./components/Mensaje";
import MenuFooter from "./components/MenuFooter";
import SearchFilter from "./components/SearchFilter";

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
    <ScrollView>
      <View style={styles.allComponents}>
        <Text style={styles.componentsTitle}>
          <h2>Aqui estan tots els components:</h2>
        </Text>

        <View style={styles.container}>
          <ShowComponent>
            <SeccionUser
              iconLeft="person"
              texto="Nombre sección"
              containerColor="#373246"
            />
            <SeccionUser
              iconLeft="chatbox-ellipses-outline"
              texto="Nombre sección"
              containerColor="#373246"
            />
          </ShowComponent>
          <ShowComponent>
            <AccesoChat
              firstLineText="Título del chat"
              secondLineText="Último mensaje enviado"
              containerBackgroundColor="#A09BB0"
            />
            <AccesoChat
              firstLineText="Título del chat"
              secondLineText="Último mensaje enviado"
              containerBackgroundColor="#777189"
            />
          </ShowComponent>
          <ShowComponent>
            <Titulo text="Título de la página" showIcon={true} />
            <Titulo text="Título de la página" showIcon={false} />
          </ShowComponent>
          <ShowComponent>
            <CustomButton
              iconSource="chatbox-ellipses-outline"
              width={50}
              height={50}
              defaultColor={"#777189"}
              pressedColor={"#373246"}
              borderRadius={50}
            />
            <CustomButton
              iconSource="funnel-outline"
              width={50}
              height={50}
              defaultColor={"#E92348"}
              pressedColor={"#373246"}
              borderRadius={50}
            />
          </ShowComponent>
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

          <ShowComponent name="Search">
            <SearchBox />
          </ShowComponent>

          <ShowComponent name="Search Filter">
            <SearchFilter 
              showIconLeft={true}
              showIconRight={true}
            />
          </ShowComponent>


          <ShowComponent>
            <CarouselComponent
              image={require("./assets/dune_poster.jpg")}
              description={
                "Duis in tempor fugiat minim non. Et ex minim laborum eu reprehenderit amet exercitation Lorem minim esse eiusmod duis. Velit id irure pariatur dolore Lorem minim reprehenderit laborum non pariatur. Elit excepteur tempor in nulla est. Deserunt Lorem et aliqua magna qui."
              }
            />
          </ShowComponent>
          <ShowComponent>
            <FavoriteMark />
          </ShowComponent>
          <ShowComponent>
            <MovieCard
              isBigCard={true}
              image={require("./assets/dune_poster.jpg")}
              title={"Dune 2"}
            />
            <MovieCard
              isBigCard={false}
              image={require("./assets/dune_poster.jpg")}
              title={"Dune 2"}
            />
          </ShowComponent>
          <ShowComponent>
            <MovieHorizontalList
              isBigCard={true}
              lenght={5}
              title={"Acción"}
              image={require("./assets/dune_poster.jpg")}
            />
          </ShowComponent>
          <ShowComponent>
            <MovieHorizontalList isBigCard={false} lenght={7} title={"Terror"} image={require("./assets/dune_poster.jpg")}/>
          </ShowComponent>
          <ShowComponent>
            <UserCard
            image={require("./assets/user_image.jpg")}
            title={"Nombre Usuario"}
            />
          </ShowComponent>
          <ShowComponent>
            <Mensaje
            isSender={true}
            UserName={"User x"}
            TextoMensaje={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna augue, gravida sit"}
            />
            <Mensaje
            isSender={false}
            UserName={"User x"}
            TextoMensaje={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum magna augue, gravida sit"}
            />
          </ShowComponent>
          <ShowComponent>
            <MenuFooter>
            </MenuFooter>
          </ShowComponent>
        </View>
      </View>
    </ScrollView>
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
