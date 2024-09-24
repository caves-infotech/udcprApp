import React from 'react';
import { Text, View, StyleSheet, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { isMobile } from '@/constants/Size';
import Styles from '../app/Styles';

const PickerComponent = ({
  label,
  selectedValue,
  setSelectedValue,
  items = [], 
  placeholder = "Select an option",
}) => (
  <View style={styles.dropdownContainer}>
    <Text style={Styles.label}>{label}</Text>
    <View style={styles.pickerWrapper}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={setSelectedValue}
        style={[
          styles.picker,
          { color: selectedValue === "" ? "#848383" : "#000" } // Change color based on selection
        ]}
        mode={Platform.OS === 'android' ? 'dropdown' : 'dialog'}
      >
        <Picker.Item label={placeholder} value="" />
        {items.length > 0 ? (
          items.map((item) => (
            <Picker.Item key={item.ind} label={item.label} value={item.value} />
          ))
        ) : (
          <Picker.Item label="No items available" value="" />
        )}
      </Picker>
    </View>
  </View>
);

const styles = StyleSheet.create({
  dropdownContainer: {
    marginBottom: isMobile ? 12 : 18,
    width: '100%',
  },
  pickerWrapper: {
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    width: '100%',
  },
  picker: {
    height: isMobile ? 40 : 50,
    width: '100%',
    paddingHorizontal: 10,
  },
});

export default PickerComponent;
