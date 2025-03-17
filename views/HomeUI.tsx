import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

function HomeUI({ navigation }: { navigation: NavigationProp<any> }) {
  // เพิ่ม navigation prop
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#390050" }}>
      <Image
        style={{ width: 250, height: 300, marginTop: 50 }}
        source={require("../assets/mina3.png")}
      />
      <View style={{ height: 100 }}></View>
      <TouchableOpacity
        style={styles.buttonA}
        onPress={() => navigation.navigate("A1Page")} // ใช้ navigation.navigate()
      >
        <Image 
        style={{ width: 100, height: 100, marginTop: 5 }} 
        source={require("../assets/Fuzz.png")} />
      </TouchableOpacity>
      <View style={{ height: 60 }}></View>
      <TouchableOpacity
        style={styles.buttonB}
        onPress={() => navigation.navigate("B1Page")} // ใช้ navigation.navigate()
      >
        <Image
        style={{ width: 50, height: 50, marginTop: 5 }} 
        source={require("../assets/H.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonA: {
    width: 280, // ปรับขนาดปุ่ม
    height: 120, // ปรับขนาดปุ่ม
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
  },
  buttonB: {
    width: 280, // ปรับขนาดปุ่ม
    height: 120, // ปรับขนาดปุ่ม
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#35C2C1",
    borderRadius: 10,
  },
});

export default HomeUI;