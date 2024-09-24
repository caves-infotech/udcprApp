import React from "react";
import { Text, View, TextInput, StyleSheet } from "react-native";
import { isMobile } from "@/constants/Size";
import Styles from "../app/Styles";

export const InputComponent = ({
  label,
  value,
  onChange,
  editable = true,
  containerStyle,
  labelStyle,
  inputStyle,
  placeholder,
}) => {
  return (
    <View style={[styles.inputContainer, containerStyle]}>
      <Text style={[Styles.label, styles.inputLabel, labelStyle]}>{label}</Text>
      {editable ? (
        <TextInput
          value={value}
          onChangeText={onChange}
          style={[Styles.input, inputStyle]}
          keyboardType="default"
          placeholder={placeholder}
          placeholderTextColor="#848383"
        />
      ) : (
        <View style={[styles.inputContainer, containerStyle]}>
          <Text style={[Styles.input, inputStyle]}>{value}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: isMobile ? 15 : 20,
    width: "100%",
  },
  inputLabel: {
    textAlign: "left",
  },
});
