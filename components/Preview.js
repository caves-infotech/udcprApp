import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import HorizontalLine from "./HorizontalLine"; // Ensure you import your horizontal line component
import  Styles  from "../app/Styles";

const Preview = ({
  name,
  buildingType,
  plotNumber,
  district,
  taluka,
  village,
  areaType,
  ulb,
  zone,
  plotType,
  plotArea,
  proRataFactor,
  builtUpArea,
  roadWidth,
  dp,
  reservationArea,
  calculateTotal,
  calculateBalanceArea,
  required,
  adjustment,
  balance,
  calculateNetPlotArea,
  recreationalRequired,
  recreationalProposed,
  roadArea,
  plotableArea,
  calculateBuiltUpArea,
  maxFSI,
  proposedFSI,
  calculateAreaAgainstDP,
  calculateAreaAgainstAmenity,
  tdrArea,
  calculateTotalInSitu,
  paymentCharges,
  maxUtilization,
  existingBuiltUpArea,
  proposedBuiltUpArea,
  fsiConsumed,
  requiredArea,
  proposedArea,
  handlePrevious,
  handleSubmit,
}) => {
  return (
    <>
      <HorizontalLine />
      <Text style={styles1.sectionHeader}>Project Details</Text>

      <View style={styles1.table}>
        {[
          // Alternate background colors for table rows
          { label: "Project Name", value: name },
          { label: "Building Type", value: buildingType },
          { label: "Plot Number", value: plotNumber },
          { label: "District", value: district },
          { label: "Taluka", value: taluka },
          { label: "Village", value: village },
        ].map((row, index) => (
          <View
            key={index}
            style={[
              styles1.tableRow,
              {
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e0e0e0",
              },
            ]}
          >
            <Text style={styles1.tableCellLabel}>{row.label} :</Text>
            <Text style={styles1.tableCell}>{row.value}</Text>
          </View>
        ))}
      </View>

      <HorizontalLine />
      <Text style={styles1.sectionHeader}>Plot Details & FSI</Text>

      <View style={styles1.table}>
        {[
          { label: "Area Type", value: areaType },
          { label: "ULB", value: ulb },
          { label: "Zone", value: zone },
          { label: "Plot Type", value: plotType },
          { label: "Plot Area", value: plotArea },
          { label: "Pro-Rata Factor", value: proRataFactor },
          { label: "Built-up Area (meter^2)", value: builtUpArea },
          { label: "Road Width", value: roadWidth },
        ].map((row, index) => (
          <View
            key={index}
            style={[
              styles1.tableRow,
              {
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e0e0e0",
              },
            ]}
          >
            <Text style={styles1.tableCellLabel}>{row.label} :</Text>
            <Text style={styles1.tableCell}>{row.value}</Text>
          </View>
        ))}
      </View>

      <HorizontalLine />
      <Text style={styles1.sectionHeader}>Performa - I : Area Statement</Text>

      <View style={styles1.table}>
        {[
          { label: "1. Area (meter^2)", value: plotArea },
          { label: "2. Deductions for :", value: "" },
          { label: "a. Proposed D.P.", value: dp },
          {
            label: "b. Any D.P. Reservation Area",
            value: reservationArea,
          },
          { label: "c. Total (a+b)", value: calculateTotal() },
          {
            label: "3. Balance Area of Plot (1-2)",
            value: calculateBalanceArea(),
          },
          { label: "4. Amenity Space (if applicable)", value: "" },
          { label: "a. Required", value: required },
          { label: "b. Adjustment of 2(b), if any", value: adjustment },
          { label: "c. Balance Proposed", value: balance },
          { label: "5. Net Plot Area", value: calculateNetPlotArea() },
          { label: "6. Recreational Open Space :", value: "" },
          { label: "a. Required", value: recreationalRequired },
          { label: "b. Proposed", value: recreationalProposed },
          { label: "7. Internal Road Area", value: roadArea },
          { label: "8. Plotable Area", value: plotableArea },
          {
            label: "9. Built-up Area with Reference to Basic F.S.I.",
            value: calculateBuiltUpArea(),
          },
          {
            label: "10. Addition of FSI on Payment of Premium",
            value: "",
          },
          {
            label: "a. Maximum Permissible Premium FSI",
            value: maxFSI,
          },
          {
            label: "b. Proposed FSI on Payment of Premium",
            value: proposedFSI,
          },
          { label: "11. In-situ FSI / TDR loading", value: "" },
          {
            label: "a. In-situ Area Against D.P.Road",
            value: calculateAreaAgainstDP(),
          },
          {
            label: "b. In-situ Area Against Amenity Space",
            value: calculateAreaAgainstAmenity(),
          },
          { label: "c. TDR area", value: tdrArea },
          {
            label: "d. Total In-situ TDR loading",
            value: calculateTotalInSitu(),
          },
          {
            label: "12. In-situ Area Against Amenity Space",
            value: calculateAreaAgainstAmenity(),
          },
          {
            label: "13. Total Entitlement of FSI in the Proposal",
            value: "",
          },
          {
            label: "a. [9 + 10(b)+ 11(d)] or 12 whichever is applicable",
            value:
              calculateBuiltUpArea() + proposedFSI + calculateTotalInSitu(),
          },
          {
            label:
              "b. Ancillary Area FSI upto 60% or 80% with Payment of charges",
            value: paymentCharges,
          },
          {
            label: "c. Total Entitlement (a+b)",
            value: paymentCharges,
          },
          {
            label: "14. Maximum Utilization Limit of FSI",
            value: maxUtilization,
          },
          {
            label: "15. Total Built-up Area in Proposal",
            value: maxUtilization,
          },
          {
            label: "a. Existing Built-up Area",
            value: existingBuiltUpArea,
          },
          {
            label: "b. Proposed Built-up Area",
            value: proposedBuiltUpArea,
          },
          {
            label: "c. Total (a+b)",
            value: existingBuiltUpArea + proposedBuiltUpArea,
          },
          {
            label: "16. FSI Consumed",
            value: fsiConsumed + proposedBuiltUpArea,
          },
          { label: "17. Area for Inclusive Housing", value: "" },
          { label: "a. Required", value: requiredArea },
          { label: "b. Proposed", value: proposedArea },
        ].map((row, index) => (
          <View
            key={index}
            style={[
              styles1.tableRow,
              {
                backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#e0e0e0",
              },
            ]}
          >
            <Text style={styles1.tableCellLabel}>{row.label} :</Text>
            <Text style={styles1.tableCell}>{row.value}</Text>
          </View>
        ))}
      </View>

      <View style={Styles.buttonContainer}>
        <View style={Styles.buttonSpacing}>
          <Button title="Previous" onPress={handlePrevious} />
        </View>
        <View style={Styles.buttonSpacing}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      </View>
    </>
  );
};

export default Preview;

const styles1 = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  table: {
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  tableCellLabel: {
    fontWeight: "bold",
    fontSize: 16,
    flex: 1,
    textAlign: "left",
    color: "#333",
    paddingLeft: 10,
  },
  tableCell: {
    flex: 1,
    fontSize: 16,
    textAlign: "right",
    color: "#666",
    paddingRight: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSpacing: {
    marginHorizontal: 10,
  },
  subInputLabel: {
    marginLeft: 8,
  },
});
