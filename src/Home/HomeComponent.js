import React from "react";

import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeComponent({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Page2Component")}
      >
        <Text>MUDAR PARA A PAGINA 2</Text>
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
