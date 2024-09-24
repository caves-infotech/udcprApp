import React, { useState, useEffect } from "react";
import { View, ScrollView, Image, Text } from "react-native";
import data from "../constants/data.json";
import Styles from "./Styles";
import ProjectDetails from "../components/ProjectDetails";
import PlotDetails from "../components/PlotDetails";
import PerformaDetails from "../components/PerformaDetails";
import Preview from "../components/Preview";
import { useNavigation } from "@react-navigation/native";
import CustomHeader from "../components/CustomHeader";
import { TouchableOpacity } from "react-native";
import { Colors } from "../constants/Colors";

const CreatePerforma = ({ onClose, onSubmit }) => {
  // For Tab 1
  const [name, setName] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState([]);
  const [plotNumber, setPlotNumber] = useState("");
  const [district, setDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [taluka, setTaluka] = useState("");
  const [talukas, setTalukas] = useState([]);
  const [village, setVillage] = useState("");

  // For Tab 2
  const [areaType, setAreaType] = useState("");
  const [ulb, setUlb] = useState("");
  const [zone, setZone] = useState("");
  const [plotType, setPlotType] = useState("");
  const [plotArea, setPlotArea] = useState("");
  const [proRataFactor, setProRataFactor] = useState("");
  const [builtUpArea, setBuiltUpArea] = useState("");
  const [roadWidth, setRoadWidth] = useState("");

  // For Tab 3
  const [dp, setDp] = useState("");
  const [reservationArea, setReservationArea] = useState("");
  const [required, setRequired] = useState("");
  const [adjustment, setAdjustment] = useState("");
  const [balance, setBalance] = useState("");
  const [recreationalRequired, setRecreationalRequired] = useState("");
  const [recreationalProposed, setRecreationalProposed] = useState("");
  const [roadArea, setRoadArea] = useState("");
  const [plotableArea, setPlotableArea] = useState("");
  const [maxFSI, setMaxFSI] = useState("");
  const [proposedFSI, setProposedFSI] = useState("");
  const [tdrArea, setTDRArea] = useState("");
  const [additionalFSI, setAdditionalFSI] = useState("");
  const [paymentCharges, setPaymentCharges] = useState("");
  const [paymentChargess, setPaymentChargess] = useState([]);
  const [maxUtilization, setMaxUtilization] = useState("");
  const [existingBuiltUpArea, setExistingBuiltUpArea] = useState("");
  const [proposedBuiltUpArea, setProposedBuiltUpArea] = useState("");
  const [fsiConsumed, setFsiConsumed] = useState("");
  const [requiredArea, setRequiredArea] = useState("");
  const [proposedArea, setProposedArea] = useState("");
  const [currentTab, setCurrentTab] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Create Performa- I",

      headerTintColor: Colors.Light,
      headerStyle: {
        backgroundColor: Colors.Secondary,
      },
    });
  }, [navigation]);

  useEffect(() => {
    setBuildingTypes(data.buildingTypes);

    setPaymentChargess(data.paymentChargess);
  }, [currentTab]);

  const handleNext = () => {
    setCurrentTab(currentTab + 1);
  };

  useEffect(() => {
    setDistricts(
      data.districts.map((district, ind) => {
        return [ind, district.name];
      })
    );
    setTalukas(getTalukas());
  }, [district]);

  const handlePrevious = () => {
    setCurrentTab(currentTab - 1);
  };

  const getTalukas = () => {
    if (district) {
      const dist = data.districts.find((d) => d.name === district);
      return dist ? dist.tahasil : [];
    }
    return [];
  };

  const handleSubmit = () => {
    if (name) {
      onSubmit(name);
      setName("");
    }
    if (onClose) {
      onClose();
    }
    alert(`Form submitted`);
    console.log("Project name", name);
  };

  const handleClose = () => {
    onClose();
  };

  const calculateTotal = () => {
    const dpValue = parseFloat(dp) || 0;
    console.log("DpValue", dp);
    const reservationAreaValue = parseFloat(reservationArea) || 0;
    console.log("reservationAreaValue", reservationAreaValue);
    return dpValue + reservationAreaValue;
  };

  const calculateBalanceArea = () => {
    const plotAreaValue = parseFloat(plotArea) || 0;
    const dpValue = parseFloat(dp) || 0;
    const reservationAreaValue = parseFloat(reservationArea) || 0;

    return plotAreaValue - (dpValue + reservationAreaValue);
  };

  const calculateNetPlotArea = () => {
    const plotAreaValue = parseFloat(plotArea) || 0;
    const dpValue = parseFloat(dp) || 0;
    const reservationAreaValue = parseFloat(reservationArea) || 0;
    const balanceProposedValue = parseFloat(balance) || 0;

    const balanceArea = plotAreaValue - (dpValue + reservationAreaValue);

    return balanceArea - balanceProposedValue;
  };

  const calculateBuiltUpArea = () => {
    const plotAreaValue = parseFloat(plotArea) || 0;
    const dpValue = parseFloat(dp) || 0;
    const reservationAreaValue = parseFloat(reservationArea) || 0;
    const balanceProposedValue = parseFloat(balance) || 0;

    const balanceArea = plotAreaValue - (dpValue + reservationAreaValue);

    return (balanceArea - balanceProposedValue) * 2.2;
  };

  const calculateAreaAgainstDP = () => {
    const dpValue = parseFloat(dp) || 0;
    return 2.0 * dpValue;
  };

  const calculateAreaAgainstAmenity = () => {
    const adjustmentValue = parseFloat(adjustment) || 0;
    return 2.0 * adjustmentValue;
  };

  const calculateTotalInSitu = () => {
    const dpValue = parseFloat(dp) || 0;
    const adjustmentValue = parseFloat(adjustment) || 0;
    const tdrAreaValue = parseFloat(tdrArea) || 0;

    const a = 2.0 * dpValue;
    const b = 2.0 * adjustmentValue;

    return a + b + tdrAreaValue;
  };

  const calculateTotalEntitlement = () => {
    const builtUpAreaValue = parseFloat(calculateBuiltUpArea().toString()) || 0;
    const proposedFSIValue = parseFloat(proposedFSI) || 0;
    const totalInSituValue = parseFloat(calculateTotalInSitu().toString()) || 0;

    return builtUpAreaValue + proposedFSIValue + totalInSituValue;
  };

  const calculateTotalWithCharges = () => {
    const builtUpAreaValue = parseFloat(calculateBuiltUpArea().toString()) || 0;
    const proposedFSIValue = parseFloat(proposedFSI) || 0;
    const totalInSituValue = parseFloat(calculateTotalInSitu().toString()) || 0;

    const paymentChargesValue = paymentCharges === "60%" ? 60 : 80;

    return (
      builtUpAreaValue +
      proposedFSIValue +
      totalInSituValue +
      paymentChargesValue
    );
  };

  const calculateTotalBuiltUpArea = () => {
    const existingArea = parseFloat(existingBuiltUpArea) || 0;
    const proposedArea = parseFloat(proposedBuiltUpArea) || 0;

    return existingArea + proposedArea;
  };

  const roadWidthOptions = {
    Congested: [
      { label: "Below 9.0 m.", value: "Below 9.0 m." },
      { label: "9.0 m. and below 18.0 m.", value: "9.0 m. and below 18.0 m." },
      {
        label: "18.0 m. and below 30.0 m.",
        value: "18.0 m. and below 30.0 m.",
      },
      { label: "30.0 m. and above", value: "30.0 m. and above" },
    ],
    NonCongested: [
      { label: "Below 9.0 m.", value: "Below 9.0 m." },
      {
        label: "9.0 m. and above but below 12.0 m.",
        value: "9.0 m. and above but below 12.0 m.",
      },
      {
        label: "12.0 m. and above but below 15.0 m.",
        value: "12.0 m. and above but below 15.0 m.",
      },
      {
        label: "15.0 m. and above but below 24.0 m.",
        value: "15.0 m. and above but below 24.0 m.",
      },
      {
        label: "24.0 m. and above but below 30.0 m.",
        value: "24.0 m. and above but below 30.0 m.",
      },
      { label: "30.0 m. and above", value: "30.0 m. and above" },
    ],
  };

  const roadWidthOptionsForArea =
    areaType === "Congested"
      ? roadWidthOptions.Congested
      : roadWidthOptions.NonCongested;

  return (
    <View style={Styles.container}>
      {/* <CustomHeader navigation={navigation} /> */}
      <ScrollView>
      <View style={Styles.formContainer}>
        {currentTab === 1 && (
          <ProjectDetails
            name={name}
            buildingType={buildingType}
            plotNumber={plotNumber}
            district={district}
            taluka={taluka}
            village={village}
            setName={setName}
            setBuildingType={setBuildingType}
            setPlotNumber={setPlotNumber}
            setDistrict={setDistrict}
            setTaluka={setTaluka}
            setVillage={setVillage}
            buildingTypes={buildingTypes}
            districts={districts}
            talukas={talukas}
            handleNext={handleNext}
            handleClose={handleClose}
          />
        )}

        {currentTab === 2 && (
          <PlotDetails
            areaType={areaType}
            ulb={ulb}
            zone={zone}
            plotType={plotType}
            plotArea={plotArea}
            proRataFactor={proRataFactor}
            builtUpArea={builtUpArea}
            roadWidth={roadWidth}
            setAreaType={setAreaType}
            setUlb={setUlb}
            setZone={setZone}
            setPlotType={setPlotType}
            setPlotArea={setPlotArea}
            setProRataFactor={setProRataFactor}
            setBuiltUpArea={setBuiltUpArea}
            setRoadWidth={setRoadWidth}
            roadWidthOptions={roadWidthOptionsForArea}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        )}

        {currentTab === 3 && (
          <PerformaDetails
            plotArea={plotArea}
            dp={dp}
            setDp={setDp}
            reservationArea={reservationArea}
            setReservationArea={setReservationArea}
            calculateTotal={calculateTotal}
            calculateBalanceArea={calculateBalanceArea}
            required={required}
            setRequired={setRequired}
            adjustment={adjustment}
            setAdjustment={setAdjustment}
            balance={balance}
            setBalance={setBalance}
            calculateNetPlotArea={calculateNetPlotArea}
            recreationalRequired={recreationalRequired}
            setRecreationalRequired={setRecreationalRequired}
            recreationalProposed={recreationalProposed}
            setRecreationalProposed={setRecreationalProposed}
            roadArea={roadArea}
            setRoadArea={setRoadArea}
            plotableArea={plotableArea}
            setPlotableArea={setPlotableArea}
            calculateBuiltUpArea={calculateBuiltUpArea}
            maxFSI={maxFSI}
            setMaxFSI={setMaxFSI}
            proposedFSI={proposedFSI}
            setProposedFSI={setProposedFSI}
            calculateAreaAgainstDP={calculateAreaAgainstDP}
            calculateAreaAgainstAmenity={calculateAreaAgainstAmenity}
            tdrArea={tdrArea}
            setTDRArea={setTDRArea}
            calculateTotalInSitu={calculateTotalInSitu}
            additionalFSI={additionalFSI}
            setAdditionalFSI={setAdditionalFSI}
            calculateTotalEntitlement={calculateTotalEntitlement}
            paymentCharges={paymentCharges}
            setPaymentCharges={setPaymentCharges}
            paymentChargess={paymentChargess}
            setPaymentChargess={setPaymentChargess}
            calculateTotalWithCharges={calculateTotalWithCharges}
            maxUtilization={maxUtilization}
            setMaxUtilization={setMaxUtilization}
            existingBuiltUpArea={existingBuiltUpArea}
            setExistingBuiltUpArea={setExistingBuiltUpArea}
            proposedBuiltUpArea={proposedBuiltUpArea}
            setProposedBuiltUpArea={setProposedBuiltUpArea}
            calculateTotalBuiltUpArea={calculateTotalBuiltUpArea}
            fsiConsumed={fsiConsumed}
            setFsiConsumed={setFsiConsumed}
            requiredArea={requiredArea}
            setRequiredArea={setRequiredArea}
            proposedArea={proposedArea}
            setProposedArea={setProposedArea}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            handleSubmit={handleNext}
          />
        )}

        {currentTab === 4 && (
          <Preview
            name={name}
            buildingType={buildingType}
            plotNumber={plotNumber}
            district={district}
            taluka={taluka}
            village={village}
            areaType={areaType}
            ulb={ulb}
            zone={zone}
            plotType={plotType}
            plotArea={plotArea}
            proRataFactor={proRataFactor}
            builtUpArea={builtUpArea}
            roadWidth={roadWidth}
            dp={dp}
            reservationArea={reservationArea}
            calculateTotal={calculateTotal}
            calculateBalanceArea={calculateBalanceArea}
            required={required}
            adjustment={adjustment}
            balance={balance}
            calculateNetPlotArea={calculateNetPlotArea}
            recreationalRequired={recreationalRequired}
            recreationalProposed={recreationalProposed}
            roadArea={roadArea}
            plotableArea={plotableArea}
            calculateBuiltUpArea={calculateBuiltUpArea}
            maxFSI={maxFSI}
            proposedFSI={proposedFSI}
            calculateAreaAgainstDP={calculateAreaAgainstDP}
            calculateAreaAgainstAmenity={calculateAreaAgainstAmenity}
            tdrArea={tdrArea}
            calculateTotalInSitu={calculateTotalInSitu}
            additionalFSI={additionalFSI}
            calculateTotalEntitlement={calculateTotalEntitlement}
            paymentCharges={paymentCharges}
            paymentChargess={paymentChargess}
            calculateTotalWithCharges={calculateTotalWithCharges}
            maxUtilization={maxUtilization}
            existingBuiltUpArea={existingBuiltUpArea}
            proposedBuiltUpArea={proposedBuiltUpArea}
            calculateTotalBuiltUpArea={calculateTotalBuiltUpArea}
            fsiConsumed={fsiConsumed}
            requiredArea={requiredArea}
            proposedArea={proposedArea}
            handlePrevious={handlePrevious}
            handleSubmit={handleSubmit}
          />
        )}
      </View>
      </ScrollView>
    </View>
  );
};

export default CreatePerforma;
