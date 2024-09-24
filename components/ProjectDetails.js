import React from "react";
import { View, Button, Text, ScrollView } from "react-native";
import { InputComponent } from "./InputComponent";
import PickerComponent from "./PickerComponent";
import Styles from "../app/Styles";
import HorizontalLine from "./HorizontalLine";
import { Colors } from "react-native/Libraries/NewAppScreen";

const ProjectDetails = ({
  name,
  buildingType,
  plotNumber,
  district,
  taluka,
  village,
  setName,
  setBuildingType,
  setPlotNumber,
  setDistrict,
  setTaluka,
  setVillage,
  buildingTypes = [],
  districts = [],
  talukas = [],
  handleNext,
}) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <Text style={Styles.pageTitle}>I. Project Details</Text>
      <HorizontalLine />
      
      <InputComponent
        label="1. Proposed Project Name"
        placeholder="Enter project name"
        value={name}
        onChange={setName}
      />

      <PickerComponent
        label="2. Building Type"
        placeholder="Select building type"
        selectedValue={buildingType}
        setSelectedValue={setBuildingType}
        items={buildingTypes}
      />

      <InputComponent
        label="3. Plot Number"
        placeholder="Enter plot number"
        value={plotNumber}
        onChange={setPlotNumber}
      />

      <PickerComponent
        label="4. District"
        placeholder="Select district"
        selectedValue={district}
        setSelectedValue={setDistrict}
        items={districts.map((dist) => ({
          label: dist[1],
          value: dist[1],
          ind: dist[0],
        }))}
      />

      <PickerComponent
        label="5. Taluka"
        placeholder="Select taluka"
        selectedValue={taluka}
        setSelectedValue={setTaluka}
        items={talukas.map((tal, ind) => ({ label: tal, value: tal, ind: ind }))}
      />

      <InputComponent
        label="6. Village"
        placeholder="Enter village"
        value={village}
        onChange={setVillage}
      />
    </ScrollView>

    <View style={styles.buttonContainer}>
      <Button title="Next" onPress={handleNext} />
    </View>
  </View>
);

export default ProjectDetails;

const styles = {
  container: {
    flex: 1,
    backgroundColor:Colors.Light,
  },
  scrollViewContent: {
    paddingBottom: 100, 
    paddingHorizontal: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20, 
    left: 0,
    right: 0,
    paddingHorizontal: 20, 
  },
};
