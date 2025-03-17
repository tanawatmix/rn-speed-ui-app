import React from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";

function HomeUI({ navigation }: { navigation: NavigationProp<any> }) {
  // เพิ่ม navigation prop
  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "#390050" }}>
      <Image
        style={{ width: 250, height: 250, marginTop: 120 }}
        source={require("../assets/img3.png")}
      />
      <View style={{ height: 100 }}></View>
      <TouchableOpacity
        style={styles.buttonA}
        onPress={() => navigation.navigate("A1Page")} // ใช้ navigation.navigate()
      >
        <Image source={require("../assets/img1.png")} />
      </TouchableOpacity>
      <View style={{ height: 60 }}></View>
      <TouchableOpacity
        style={styles.buttonB}
        onPress={() => navigation.navigate("B1Page")} // ใช้ navigation.navigate()
      >
        <Image source={require("../assets/img2.png")} />
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