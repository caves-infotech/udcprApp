import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import Styles from "./Styles";
import { Colors } from "../constants/Colors";
import { TouchableOpacity } from "react-native";

const FirstScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "UDCPR",
      headerStyle: {
        backgroundColor: Colors.Secondary,
      },
      headerTintColor: "#fff",
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.navigate("index")}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ width: 70, height: 100,marginRight:0}}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={[Styles.container,{padding:0}]}>
      <View style={Styles.profileContainer}>
        <View style={Styles.circle}>
          <Image
            source={require("../assets/images/logo.png")}
            style={Styles.logo}
          />
        </View>
        <View style={Styles.profileInfo}>
          <Text style={Styles.profileText}>Caves Infotech</Text>
          <Text style={Styles.profileText}>5678985678</Text>
          <Text style={Styles.profileText}>cavesinfotech@gmail.com</Text>
        </View>
      </View>
      <View style={Styles.container}>
        <ScrollView>
          <View style={styles.innerContainer}>
            <View>
              <View style={Styles.row}>
                <Link href="/CreatePerforma" style={Styles.listText}>
                  Create Performa-I
                </Link>
                <Link href="/BuildingHeight" style={Styles.listText}>
                  Building Height
                </Link>
              </View>
              <View style={Styles.row}>
                <Link href="/PotentialFSI" style={Styles.listText}>
                  Potential FSI
                </Link>
                <Link href="/BuiltUpArea" style={Styles.listText}>
                  Built-up Area
                </Link>
              </View>
              <View style={Styles.row}>
                <Link href="/Parking" style={Styles.listText}>
                  Parking
                </Link>
                <Link href="/Forms" style={Styles.listText}>
                  Forms
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default FirstScreen;

const styles = StyleSheet.create({
  innerContainer: {
    // backgroundColor: Colors.Secondary,
  },
});
