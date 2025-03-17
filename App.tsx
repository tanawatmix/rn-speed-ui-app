import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeUI from "./views/HomeUI";
import A1Page from "./views/A1Page";
import A2Page from "./views/A2Page";
import A3Page from "./views/A3Page";
import A4Page from "./views/A4Page";
import B1Page from "./views/B1Page";
import B2Page from "./views/B2Page";
import B3Page from "./views/B3Page";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false, // ซ่อน Header
        }}
        initialRouteName="HomeUI"
      >
        <Stack.Screen name="HomeUI" component={HomeUI} />
        <Stack.Screen name="A1Page" component={A1Page} />
        <Stack.Screen name="A2Page" component={A2Page} />
        <Stack.Screen name="A3Page" component={A3Page} />
        <Stack.Screen name="A4Page" component={A4Page} />
        <Stack.Screen name="B1Page" component={B1Page} />
        <Stack.Screen name="B2Page" component={B2Page} />
        <Stack.Screen name="B3Page" component={B3Page} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
