import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Page2Component({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ImagensComponent")}
      >
        <Text>MUDAR PARA IMAGENS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121212",
    margin: 20,
    borderRadius: 10,
    height: "8%",
    width: "95%",
  },
  titulo: {
    backgroundColor: "#262626",
    padding: 5,
    fontSize: 20,
    fontWeight: "bold",
    color: "#f4a100",
    marginBottom: 15,
  },
});
