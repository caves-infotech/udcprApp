import React from "react";
import { View, Button, StyleSheet, Text, ScrollView } from "react-native";
import { InputComponent } from "./InputComponent"; // Ensure the path is correct
import PickerComponent from "./PickerComponent"; // Ensure the path is correct
import Styles from "../app/Styles";
import HorizontalLine from "../components/HorizontalLine";
import { RadioButtonComponent } from "./RadioButtonComponent";
import { Colors } from "../constants/Colors";

const PlotDetails = ({
  areaType,
  ulb,
  zone,
  plotType,
  plotArea,
  proRataFactor,
  builtUpArea,
  roadWidth,
  setAreaType,
  setUlb,
  setZone,
  setPlotType,
  setPlotArea,
  setProRataFactor,
  setBuiltUpArea,
  setRoadWidth,
  roadWidthOptions,
  handleNext,
  handlePrevious,
}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={Styles.pageTitle}>Plot Details & FSI</Text>
      <HorizontalLine />

      <View>
        <Text style={Styles.label}>1. Area Type</Text>
        <View style={styles.radioContainer}>
          <RadioButtonComponent
            label="Congested"
            value="Congested"
            selectedValue={areaType}
            onPress={setAreaType}
          />
          <View style={styles.spacer} />
          <RadioButtonComponent
            label="Non-Congested"
            value="Non-Congested"
            selectedValue={areaType}
            onPress={setAreaType}
          />
        </View>
      </View>

      <View>
        <Text style={Styles.label}>2. ULB</Text>
        <View style={styles.radioContainer}>
          <RadioButtonComponent
            label="Municipal Corporation"
            value="Municipal Corporation"
            selectedValue={ulb}
            onPress={setUlb}
          />
          <View style={styles.spacer} />
          <RadioButtonComponent
            label="Other/Rp"
            value="Other/Rp"
            selectedValue={ulb}
            onPress={setUlb}
          />
        </View>
      </View>

      <View>
        <Text style={Styles.label}>3. Zone</Text>
        <View style={styles.radioContainer}>
          <RadioButtonComponent
            label="Green"
            value="Green"
            selectedValue={zone}
            onPress={setZone}
          />
          <View style={styles.spacer} />
          <RadioButtonComponent
            label="Yellow"
            value="Yellow"
            selectedValue={zone}
            onPress={setZone}
          />
        </View>
      </View>

      <View>
        <Text style={Styles.label}>4. Plot Type</Text>
        <View style={styles.radioContainer}>
          <RadioButtonComponent
            label="Agriculture"
            value="Agriculture"
            selectedValue={plotType}
            onPress={setPlotType}
          />
          <View style={styles.spacer} />
          <RadioButtonComponent
            label="N/A"
            value="N/A"
            selectedValue={plotType}
            onPress={setPlotType}
          />
        </View>
      </View>

      <InputComponent
        label="5. Plot Area"
        placeholder="Enter plot area"
        value={plotArea}
        onChange={setPlotArea}
      />

      <InputComponent
        label="6. Pro Rata Factor"
        placeholder="Enter pro-rata factor"
        value={proRataFactor}
        onChange={setProRataFactor}
      />

      <InputComponent
        label="7. Built Up Area"
        placeholder="Enter built-up area"
        value={builtUpArea}
        onChange={setBuiltUpArea}
      />

      <PickerComponent
        label="8. Road Width"
        selectedValue={roadWidth}
        setSelectedValue={setRoadWidth}
        items={roadWidthOptions}
      />
    </ScrollView>

    <View style={Styles.buttonContainer}>
      <View style={Styles.buttonSpacing}>
        <Button title="Previous" onPress={handlePrevious} />
      </View>
      <View style={Styles.buttonSpacing}>
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.Light,
  },
  scrollViewContent: {
    paddingBottom: 60, 
    paddingHorizontal: 20, 
  },
  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 0,
  },
  spacer: {
    flex: 1, 
  },
});

export default PlotDetails;
