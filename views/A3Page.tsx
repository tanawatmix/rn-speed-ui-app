import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

function A3Page({ navigation }: { navigation: NavigationProp<any> }) {
  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{ alignItems: "flex-start", marginLeft: 20, marginRight: 20 }}
      >
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ height: 30 }}></View>
        <Text style={styles.Text}>Forgot Password?</Text>
        <View style={{ height: 20 }}></View>
        <Text style={styles.Text2}>
          Don't worry! It occurs. Please enter the email address linked with
          your account.
        </Text>
        <View style={{ height: 40 }}></View>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <View style={{ height: 30 }}></View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("A4Page")}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Send Code
        </Text>
      </TouchableOpacity>
      <View style={{ height: 400 }}></View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 15, color: "#1E232C" }}>
          Remember password?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("A2Page")}>
          <Text style={{ color: "#35C2C1", fontSize: 15 }}>&nbsp;Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 350,
    height: 60,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E232C",
    borderRadius: 10,
  },

  backButton: {
    width: 50,
    height: 50,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#E8ECF4",
  },
  Text: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1E232C",
  },
  Text2: {
    fontSize: 15,
    color: "#8391A1",
  },
  input: {
    width: 350,
    height: 60,
    backgroundColor: "#F4F4F4",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "#E8ECF4",
  },
});

export default A3Page;