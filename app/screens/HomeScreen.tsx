import * as React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function HomeScreen({ navigation }: RootTabScreenProps<"Home">) {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 36 }}>Falu Vella</Text>
      <Pressable
        onPress={() => {
          navigation.navigate("Dates");
        }}
      >
        <Text>Go to</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#faaee2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
