import { NavigationProp } from "@react-navigation/native";

import React from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  Image,
  ActivityIndicator,
} from "react-native";

function B1Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <ImageBackground
      source={require("../assets/imageBg.png")} // ตำแหน่งรูปภาพ
      style={styles.backgroundImage} // กำหนดสไตล์
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ height: 150 }}></View>
        <TouchableOpacity onPress={() => navigation.navigate("B2Page")}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../assets/img2.png")}
          />
        </TouchableOpacity>
        <View style={{ height: 20 }}></View>
        <Text style={styles.Text}>Hope for</Text>
        <Text style={[styles.Text, { fontWeight: "bold" }]}>Humanity</Text>
        <View style={{ height: 100 }}></View>
        <Text style={styles.Text2}>Welcome to </Text>
        <Text style={styles.Text2}>hope for humanity</Text>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1, // ขยายเต็มหน้าจอ
    resizeMode: "cover", // ปรับขนาดรูปภาพ
  },
  Text: {
    fontSize: 40, // ขนาดตัวอักษร
    color: "white", // สีตัวอักษร
  },
  Text2: {
    fontSize: 30, // ขนาดตัวอักษร
    fontWeight: "bold", // ตัวหนา
    color: "#005014", // สีตัวอักษร
  },
});

export default B1Page;