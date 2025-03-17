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

function A2Page({ navigation }: { navigation: NavigationProp<any> }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={{ alignItems: "flex-start" }}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <View style={{ height: 30 }}></View>
        <Text style={styles.Text}>Welcome back! Glad </Text>
        <View style={{ height: 5 }}></View>
        <Text style={styles.Text}>to see you, Again!</Text>
        <View style={{ height: 30 }}></View>
        <View style={{ height: 10 }}></View>
        <TextInput style={styles.input} placeholder="Enter your email" />
        <View style={{ height: 10 }}></View>
        <View style={styles.container}>
          <TextInput
            style={styles.input2}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setPasswordVisible(!passwordVisible)}
          >
            <Ionicons
              name={passwordVisible ? "eye-off-outline" : "eye-outline"}
              size={24}
              color="#888"
            />
          </TouchableOpacity>
        </View>
        <View style={{ height: 15 }}></View>
        <View
          style={{
            justifyContent: "flex-end",
            flexDirection: "row",
            width: 350,
          }}
        >
          {/* เปลี่ยน alignItems เป็น flex-end */}
          <TouchableOpacity onPress={() => navigation.navigate("A3Page")}>
            <Text style={{ color: "#6A707C", fontSize: 15 }}>
              Forgot password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 25 }}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Log in
        </Text>
      </TouchableOpacity>
      <View style={{ height: 30 }}></View>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.line}></View>
        <Text style={{ fontSize: 15, color: "#6A707C" }}>Or Login with</Text>
        <View style={styles.line}></View>
      </View>
      <View style={{ height: 30 }}></View>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity style={styles.buttonSocial}>
          <Image
            source={require("../assets/facebook.png")}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSocial}>
          <Image
            source={require("../assets/google.png")}
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
      <View style={{ height: 200 }}></View>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 15, color: "#1E232C" }}>
          Don't have an account?
        </Text>
        <TouchableOpacity>
          <Text style={{ color: "#35C2C1", fontSize: 15 }}>
            &nbsp;Register now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    width: 10,
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginHorizontal: 30,
  },

  button: {
    width: 350,
    height: 60,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1E232C",
    borderRadius: 10,
  },
  buttonSocial: {
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    width: 100,
    height: 60,
  },
  socialIcon: {
    resizeMode: "center",
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
  input2: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    color: "#333",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E8ECF4",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F4F4F4",
    width: 350,
    height: 60,
  },
  eyeButton: {
    padding: 10,
  },
});

export default A2Page;