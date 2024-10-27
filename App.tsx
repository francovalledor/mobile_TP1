import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { COIN_API_KEY } from "./config";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>key is {COIN_API_KEY}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
