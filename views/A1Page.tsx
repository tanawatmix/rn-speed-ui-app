import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

function A1Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <ImageBackground
      source={require("../assets/imageBg2.png")}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: 400 }}></View>

        <Image
          style={{ width: 160, height: 160, resizeMode: "contain" }}
          source={require("../assets/img1.png")}
        ></Image>
        <View style={{ height: 30 }}></View>

        <TouchableOpacity style={styles.button1} onPress={() => navigation.navigate("A2Page")}>
          <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
            Log in
          </Text>
        </TouchableOpacity>
        <View style={{ height: 20 }}></View>
        <TouchableOpacity style={styles.button2}>
          <Text style={{ color: "black", fontSize: 15, fontWeight: "bold" }}>
            Register
          </Text>
        </TouchableOpacity>
        <View style={{ height: 50 }}></View>
      <TouchableOpacity>
        <Text style={{ color: "#35C2C1", fontSize: 15, fontWeight: "bold" }}>
        Continue as a guest
        </Text>
      </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  button1: {
    width: 300,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E232C",
    borderRadius: 10,
  },
  button2: {
    width: 300,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#1E232C",
  },
});

export default A1Page;