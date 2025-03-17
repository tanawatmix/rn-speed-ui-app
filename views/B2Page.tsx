import { NavigationProp } from "@react-navigation/native";
import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

function B2Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <Image source={require("../assets/image.png")} style={styles.Image} />
      <View style={{ height: 60 }}></View>

      <Text style={{ fontSize: 25, fontWeight: "bold" }}>
        Sign in your account
      </Text>
      <View style={{ height: 30 }}></View>
      <View style={{ alignItems: "flex-start" }}>
        {/* ป้อน */}
        <Text style={styles.Text}>Email</Text>
        <View style={{ height: 10 }}></View>
        <TextInput
          style={styles.input}
          placeholder="ex: jon.smith@email.com"
        />
        {/* เพิ่ม style ให้ TextInput */}
        <Text style={styles.Text}>Password</Text>
        <View style={{ height: 10 }}></View>
        <TextInput
          style={styles.input}
          placeholder="**********"
          secureTextEntry={true}
        />
        {/* เพิ่ม style ให้ TextInput */}
      </View>
      <View style={{ height: 30 }}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }}></View>
      <Text>or sign in with</Text>
      <View style={{ height: 20 }}></View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonSocial}>
          <Image
            source={require("../assets/google.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSocial}>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSocial}>
          <Image
            source={require("../assets/twitter.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={{ height: 20 }}></View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 15,color: "#888888" }}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("B3Page")}>
          <Text style={{ color: "#00B140", fontSize: 15 }}> Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSocial: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F4F4F4",
    borderRadius: 10,
    width: 80,
    height: 50,
  },
  socialIcon: {
    resizeMode: "center",
  },
  button: {
    width: 280,
    height: 50,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00B140",
    borderRadius: 10,
  },
  Image: {
    width: 60,
    height: 60,
  },
  Text: {
    fontSize: 15,
    color: "#6F6F6F",
  },
  input: {
    // เพิ่ม style ให้ TextInput
    width: 280, // กำหนด width
    height: 40,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default B2Page;