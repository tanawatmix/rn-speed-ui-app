import { NavigationProp } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CheckBox from "expo-checkbox";

function B3Page({ navigation }: { navigation: NavigationProp<any> }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
      }}
    >
      <View></View>
      <Image source={require("../assets/image.png")} style={styles.Image} />
      <View style={{ height: 60 }}></View>

      <Text style={{ fontSize: 27, fontWeight: "bold" }}>
        Create your account
      </Text>
      <View style={{ height: 30 }}></View>
      <View style={{ alignItems: "flex-start" }}>
        {/* ป้อน */}
        <Text style={styles.Text}>Name</Text>
        <View style={{ height: 10 }}></View>
        <TextInput style={styles.input} placeholder="ex: jon smith" />
        <Text style={styles.Text}>Email</Text>
        <View style={{ height: 10 }}></View>
        <TextInput style={styles.input} placeholder="ex: jon.smith@email.com" />
        {/* เพิ่ม style ให้ TextInput */}
        <Text style={styles.Text}>Password</Text>
        <View style={{ height: 10 }}></View>
        <TextInput
          style={styles.input}
          placeholder="**********"
          secureTextEntry={true}
        />
        <Text style={styles.Text}>Confirm password</Text>
        <View style={{ height: 10 }}></View>
        <TextInput
          style={styles.input}
          placeholder="**********"
          secureTextEntry={true}
        />
        <View style={{ height: 20 }}></View>

        {/* เพิ่ม style ให้ TextInput */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          />

          <Text>
            &nbsp;&nbsp;&nbsp;I understood the&nbsp;
            <Text
              style={{ color: "#00B140" }}
              onPress={() => {
                /* handle press event */
              }}
            >
              terms & policy.
            </Text>
          </Text>
        </View>
      </View>
      <View style={{ height: 30 }}></View>
      <TouchableOpacity style={styles.button}>
        <Text style={{ color: "white", fontSize: 15, fontWeight: "bold" }}>
          Sign in
        </Text>
      </TouchableOpacity>
      <View style={{ height: 20 }}></View>
      <Text style={{ fontSize: 15,color: "#888888" }}>or sign in with</Text>
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
        <Text style={{ fontSize: 15,color: "#888888" }}>have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("B2Page")}>
          <Text style={{ color: "#00B140", fontSize: 15  }}> Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "center",
    borderColor: "#00B140",
  },

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
    position: "absolute",
    top: 70, // ปรับค่าตามต้องการ
    right: 70, // ปรับค่าตามต้องการ
    width: 30,
    height: 30,
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

export default B3Page;