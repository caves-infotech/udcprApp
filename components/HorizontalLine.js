import React from "react";
import { View, StyleSheet } from "react-native";

const HorizontalLine = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    width: "100%",
    backgroundColor: "#000",
    marginVertical: 10,
  },
});

export default HorizontalLine;
