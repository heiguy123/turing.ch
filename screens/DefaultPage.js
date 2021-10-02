import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  Image,
  TextInput,
  Dimensions,
} from "react-native";
import fixassets from "../config/fixassets";
import DataGetter from "../app/dataGetter";
import colors from "../config/colors";
import fonts from "../config/fonts";
const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;
let longitude = 113.997; //change this to actual longitude
let latitude = 4.372; //change this to actual latitude
let mean1 = 0;
DataGetter.getSolarMean(longitude, latitude).then((mean) => {
  mean1 = mean;
  console.log(mean);
});
var MPP = parseFloat(435),
  areaPanels = parseFloat(2),
  usedTime = parseFloat(10),
  fixPrice = parseFloat(0),
  totPrice = parseFloat(0),
  powerGenerated,
  moneySaved,
  percentageSaved,
  numberOfPanels;
const calculates = () => {
  powerGenerated =
    mean1 *
    365 *
    usedTime *
    (MPP / (1000 * areaPanels)) *
    ((100 - (usedTime + 1) / 4) / 100) *
    areaPanels *
    numberOfPanels;
  moneySaved = powerGenerated * fixPrice;
  percentageSaved =
    (powerGenerated / ((totPrice / fixPrice) * 12 * usedTime)) * 100;
};

const DefaultPage = ({ navigation, route }) => {
  const [fPrice, setFix] = useState("");
  const [tPrice, setBill] = useState("");

  (MPP = parseFloat(435)),
    (areaPanels = parseFloat(2)),
    (numberOfPanels = parseFloat(5)),
    (usedTime = parseFloat(5)),
    (fixPrice = parseFloat(fPrice)),
    (totPrice = parseFloat(tPrice));

  return (
    <SafeAreaView style={Calculation.container}>
      <TouchableOpacity
        style={[
          fixassets.back,
          {
            top: Dimensions.get("window").height * 0.06,
            position: "absolute",
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/blackback.png")}
        />
      </TouchableOpacity>
      <View
        style={[
          Calculation.textBox,
          { top: "20%", width: "90%", height: "5%" },
        ]}
      >
        <Text
          style={[
            fonts.h3,
            {
              bottom: "200%",
              position: "absolute",
              fontFamily: "Bold",
            },
          ]}
        >
          Panel Specification
        </Text>
        <Text style={[fonts.p, { color: "#555555", top: "-7%" }]}>
          Specification 1
        </Text>
        <Text style={{ alignSelf: "center", left: "3%", position: "absolute" }}>
          Power at Mpp : 435 Watt
        </Text>
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-16%" }]}>
          Specification 2
        </Text>
        <Text style={{ alignSelf: "center", left: "6%", position: "absolute" }}>
          Area: 2 m^2
        </Text>
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "55%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-16%" }]}>
          Specification 3
        </Text>
        <Text style={{ alignSelf: "center", left: "6%", position: "absolute" }}>
          Numbers of panels: 5
        </Text>
      </View>
      <View
        style={[
          Calculation.textBox,
          { top: "40%", width: "90%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-7%" }]}>
          Specification 4
        </Text>
        <Text
          style={{
            color: "#000",
            alignSelf: "center",
            left: "3%",
            position: "absolute",
          }}
        >
          Estimate years : 5 years
        </Text>
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "59%", width: "90%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", left: "0%", top: "-7%" }]}>
          Specification 1
        </Text>
        <Text
          style={[
            fonts.h3,
            {
              bottom: "200%",
              position: "absolute",
              fontFamily: "Bold",
            },
          ]}
        >
          Electricity Settings
        </Text>
        <TextInput
          onChangeText={(number) => setFix(number)}
          keyboardType="numeric"
          placeholder="Electricity price per kWh in your area(US Dollar)"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "69%", width: "90%", height: "5%" },
        ]}
      >
        <Text style={[Calculation.textBase1, { top: "-7%" }]}>
          Specification 2
        </Text>
        <TextInput
          onChangeText={(number) => setBill(number)}
          keyboardType="numeric"
          placeholder="Estimate your electricity bill per month(US Dollar)"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={{
          flex: 1,
          top: "30%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          style={fixassets.buttonb}
          onPress={() =>
            navigation.navigate("Dashboard", {
              location: route.params.location,
            })
          }
        >
          <Text
            style={[
              fonts.h4,
              { color: colors.white, lineHeight: 24, textAlign: "center" },
            ]}
          >
            Done
          </Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={(fixassets.button, { backgroundColor: colors.primary })}
        onPressIn={calculates}
        onPress={() => navigation.navigate("CalLast")}
      >
        <Text
          style={{
            alignSelf: "center",
            color: "#fff",
            fontSize: 16,
            fontWeight: "normal",
          }}
        >
          Done
        </Text>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

export default DefaultPage;

const Calculation = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  textBase: {
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "flex-start",
    color: "#000",
  },
  textBase1: {
    fontSize: 14,
    color: "#555555",
    fontWeight: "normal",
    alignSelf: "flex-start",
  },
  DoneBut: {
    backgroundColor: "#233E8B",
    borderRadius: 16,
    position: "absolute",

    alignSelf: "center",
    justifyContent: "center",
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  textBox: {
    flexDirection: "row",
    backgroundColor: "#ECECEC",
    borderRadius: 6,
    position: "absolute",
    alignSelf: "center",
  },
  h1: {
    fontWeight: "bold",
    fontSize: 18,
    color: "black",
    alignSelf: "flex-start",
    top: "3%",
    left: "10%",
    letterSpacing: 0.15,
  },
});
