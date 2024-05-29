import { useState } from "react";
import { View, Pressable, TextInput, StyleSheet, Text } from "react-native";
import { supabase } from "../utils/supabaseClient";
import { colors } from "../utils/colors";

export default function SignForm() {
  const [userCredentials, setUserCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState(null);

  const handleSignUp = async () => {
    const { name, email, password } = userCredentials;
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: name,
        },
      },
    });
    !error ? console.log(data) : setErrorMsg(error.message);
  };

  const handleSignIn = async () => {
    const { email, password } = userCredentials;
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      setErrorMsg(error.message);
    } else {
      console.log(data);
    }
  };

  const handleChange = (text, name) => {
    setUserCredentials((prev) => {
      const newCred = { ...prev, [name]: text };
      console.log(newCred);
      return newCred;
    });
  };

  return (
    <View style={styles.container}>
      {errorMsg && <View style={styles.error}>{errorMsg}</View>}
      <TextInput
        style={styles.userInput}
        placeholder="Username"
        placeholderTextColor={"#FFFFFFC2"}   
        onChangeText={(text) => handleChange(text, "name")}        
      />
      <TextInput
        style={styles.userInput}
        placeholder="Email"
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => handleChange(text, "email")}
      />
      <TextInput
        style={styles.userInput}
        placeholder="password"
        placeholderTextColor={"#FFFFFFC2"}
        onChangeText={(text) => handleChange(text, "password")}
      />
      <Pressable onPress={handleSignIn}>
        <Text>Sign In</Text>
      </Pressable>
      <Pressable onPress={handleSignUp}>
        <Text>Sign Up</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.mainColors.primary },
  image: {
    height: 300,
    width: "100%",
    position: "absolute",
  },
  detailsHeader: {
    height: 300,
    width: "100%",
    position: "relative",
    marginBottom: 20,
  },
});
