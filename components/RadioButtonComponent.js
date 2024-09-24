import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const RadioButtonComponent = ({
  label,
  value,
  selectedValue,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={() => onPress(value)}
      style={styles.radioContainer}
    >
      <View
        style={
          selectedValue === value
            ? styles.selectedCircle
            : styles.unselectedCircle
        }
      />
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    // marginVertical: 8,
    marginBottom:15,
  },
  selectedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#007AFF", // Selected color
    marginRight: 10,
  },
  unselectedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#007AFF", // Unselected color
    marginRight: 10,
  },
  label: {
    fontSize: 16,
  },
});
