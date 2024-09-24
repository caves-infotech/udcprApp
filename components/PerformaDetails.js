import React, { useState } from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
import { InputComponent } from "./InputComponent"; // Ensure the path is correct
import PickerComponent from "./PickerComponent"; // Ensure the path is correct
import Styles from "../app/Styles";
import HorizontalLine from "./HorizontalLine";

const PerformaDetails = ({
  plotArea,
  dp,
  setDp,
  reservationArea,
  setReservationArea,
  calculateTotal,

  calculateBalanceArea,

  required,
  setRequired,
  adjustment,
  setAdjustment,
  balance,
  setBalance,

  calculateNetPlotArea,

  recreationalRequired,
  setRecreationalRequired,
  recreationalProposed,
  setRecreationalProposed,

  roadArea,
  setRoadArea,

  plotableArea,
  setPlotableArea,

  calculateBuiltUpArea,

  maxFSI,
  setMaxFSI,
  proposedFSI,
  setProposedFSI,

  calculateAreaAgainstDP,
  calculateAreaAgainstAmenity,
  tdrArea,
  setTDRArea,
  calculateTotalInSitu,

  additionalFSI,
  setAdditionalFSI,

  calculateTotalEntitlement,
  paymentCharges,
  setPaymentCharges,
  paymentChargess,
  calculateTotalWithCharges,

  maxUtilization,
  setMaxUtilization,

  existingBuiltUpArea,
  setExistingBuiltUpArea,
  proposedBuiltUpArea,
  setProposedBuiltUpArea,
  calculateTotalBuiltUpArea,

  fsiConsumed,
  setFsiConsumed,

  requiredArea,
  setRequiredArea,
  proposedArea,
  setProposedArea,

  handleNext,
  handlePrevious,
  handleSubmit,
}) => {
  // const [dpValue, setDp] = useState(dp);
  // const [reservationAreaValue, setReservationArea] = useState(reservationArea);
  // const [requiredValue, setRequired] = useState(required);
  // const [adjustmentValue, setAdjustment] = useState(adjustment);
  // const [balanceValue, setBalance] = useState(balance);
  // const [recreationalRequiredValue, setRecreationalRequired] =
  //   useState(recreationalRequired);
  // const [recreationalProposedValue, setRecreationalProposed] =
  //   useState(recreationalProposed);
  // const [roadAreaValue, setRoadArea] = useState(roadArea);
  // const [plotableAreaValue, setPlotableArea] = useState(plotableArea);
  // const [maxFSIValue, setMaxFSI] = useState(maxFSI);
  // const [proposedFSIValue, setProposedFSI] = useState(proposedFSI);
  // const [tdrAreaValue, setTDRArea] = useState(tdrArea);
  // const [additionalFSIValue, setAdditionalFSI] = useState(additionalFSI);
  // const [paymentChargesValue, setPaymentCharges] = useState(paymentCharges);
  // const [maxUtilizationValue, setMaxUtilization] = useState(maxUtilization);
  // const [existingBuiltUpAreaValue, setExistingBuiltUpArea] =
  //   useState(existingBuiltUpArea);
  // const [proposedBuiltUpAreaValue, setProposedBuiltUpArea] =
  //   useState(proposedBuiltUpArea);
  // const [fsiConsumedValue, setFsiConsumed] = useState(fsiConsumed);
  // const [requiredAreaValue, setRequiredArea] = useState(requiredArea);
  // const [proposedAreaValue, setProposedArea] = useState(proposedArea);

  return (
    <View>
      <Text style={Styles.pageTitle}>Performa-I : Area Statement</Text>
      <HorizontalLine />

      <ScrollView>
        <Text style={Styles.label}>1. Area (meter^2)</Text>

        <InputComponent label="" value={plotArea || "0"} editable={false} />

        <Text style={Styles.label}>2. Deductions for :</Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label=" a. Proposed D.P. / D.P. Road widening Area / Service Road / Highway widening"
            value={dp}
            onChange={setDp}
          />
          <InputComponent
            label=" b. Any D.P. Reservation Area"
            value={reservationArea}
            onChange={setReservationArea}
          />
          <InputComponent
            label="c. Total(a + b)"
            value={calculateTotal().toString()}
            editable={false}
          />
        </View>

        <InputComponent
          label="3. Balance Area of Plot"
          value={calculateBalanceArea().toString()}
          editable={false}
        />

        <Text style={Styles.label}>4. Amenity Space (if applicable) :</Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label="a. Required"
            value={required}
            onChange={setRequired}
          />
          <InputComponent
            label=" b. Adjustment of 2(b), if any"
            value={adjustment}
            onChange={setAdjustment}
          />
          <InputComponent
            label="c. Balance Proposed"
            value={balance}
            onChange={setBalance}
          />
        </View>

        <InputComponent
          label="5. Net Plot Area (3-4(c))"
          value={calculateNetPlotArea().toString()}
          editable={false}
        />

        <Text style={Styles.label}>
          6. Recreational Open Space (if applicable) :
        </Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label="a. Required"
            value={recreationalRequired}
            onChange={setRecreationalRequired}
          />
          <InputComponent
            label="b. Proposed"
            value={recreationalProposed}
            onChange={setRecreationalProposed}
          />
        </View>

        <InputComponent
          label="7. Internal Road Area"
          value={roadArea}
          onChange={setRoadArea}
        />

        <InputComponent
          label="8. Plotable Area (if applicable)"
          value={plotableArea}
          onChange={setPlotableArea}
        />

        <InputComponent
          label="9. Built Up Area With Reference to Basic F.S.I. as Per Front Road Width (5 * basic FSI)"
          value={calculateBuiltUpArea().toString()}
          editable={false}
        />

        <Text style={Styles.label}>
          10. Addition of FSI on payment of premium
        </Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label=" a. Maximum Permissible Premium FSI - Based On Road Width / TOD Zone"
            value={maxFSI}
            onChange={setMaxFSI}
          />
          <InputComponent
            label=" b. Proposed FSI on Payment Of Premium"
            value={proposedFSI}
            onChange={setProposedFSI}
          />
        </View>

        <Text style={Styles.label}>11. In-situ FSI / TDR loading</Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label=" a. In-situ area against D.P. road [2.0 * 2(a)], if any"
            value={calculateAreaAgainstDP().toString()}
            editable={false}
          />
          <InputComponent
            label="b. In-situ area against Amenity Space if handed over (2.00 or 1.85 * 4(b) and/or (c))"
            value={calculateAreaAgainstAmenity().toString()}
            editable={false}
          />
          <InputComponent
            label="c. TDR area"
            value={tdrArea}
            onChange={setTDRArea}
          />
          <InputComponent
            label="d. Total in-situ/ TDR loading proposed (11(a + b + c))"
            value={calculateTotalInSitu().toString()}
            editable={false}
          />
        </View>

        <InputComponent
          label="12. Additional FSI Area Under Chapter No.7"
          value={additionalFSI}
          onChange={setAdditionalFSI}
        />

        <Text style={Styles.label}>
          13. Total Entitlement of FSI in the Proposal
        </Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label="a. [9 + 10(b) + 11(d)] or Whichever is Applicable"
            value={calculateTotalEntitlement().toString()}
            editable={false}
          />
          <PickerComponent
            label="b. Ancillary Area FSI Upto 60% or 80% With Payment of Charges"
            selectedValue={paymentCharges}
            setSelectedValue={setPaymentCharges}
            items={paymentChargess}
          />
          <InputComponent
            label="c. Total (a+b)"
            value={calculateTotalWithCharges().toString()}
            editable={false}
          />
        </View>

        <InputComponent
          label="14. Maximum Utilization Limit of F.S.I (Building Potential) Permissible as per Road Width)"
          value={maxUtilization}
          onChange={setMaxUtilization}
        />

        <Text style={Styles.label}>
          15. Total Built-up Area in Proposal (excluding area at No. 17 b)
        </Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label="a. Existing Built-up Area"
            value={existingBuiltUpArea}
            onChange={setExistingBuiltUpArea}
          />
          <InputComponent
            label="b. Proposed Built-up Area"
            value={proposedBuiltUpArea}
            onChange={setProposedBuiltUpArea}
          />
          <InputComponent
            label="c. Total (a+b)"
            value={calculateTotalBuiltUpArea().toString()}
            editable={false}
          />
        </View>

        <InputComponent
          label="16. FSI consumed (15 / 13) (should not be more than serial No.14 above):"
          value={fsiConsumed}
          onChange={setFsiConsumed}
        />

        <Text style={Styles.label}>17. Area for Inclusive Housing, if any</Text>
        <View style={Styles.deductionContainer}>
          <InputComponent
            label="a. Required (20% of Sr. No.5)"
            value={requiredArea}
            onChange={setRequiredArea}
          />
          <InputComponent
            label="b. Proposed"
            value={proposedArea}
            onChange={setProposedArea}
          />
        </View>
      </ScrollView>

      <View style={Styles.buttonContainer}>
        <View style={Styles.buttonSpacing}>
          <Button title="Previous" onPress={handlePrevious} />
        </View>
        <View style={Styles.buttonSpacing}>
          <Button title="Preview" onPress={handleNext} />
        </View>
      </View>
    </View>
  );
};

export default PerformaDetails;
