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

const CustomisePage = ({ navigation, route }) => {
  const [Mpp, setMpp] = useState("");
  const [area, setArea] = useState("");
  const [year, setYear] = useState("");
  const [fPrice, setFix] = useState("");
  const [tPrice, setBill] = useState("");
  const [numofP, setNumOfP] = useState("");

  (MPP = parseFloat(Mpp)),
    (areaPanels = parseFloat(area)),
    (numberOfPanels = parseFloat(numofP)),
    (usedTime = parseFloat(year)),
    (fixPrice = parseFloat(fPrice)),
    (totPrice = parseFloat(tPrice));

  return (
    <View style={Calculation.container}>
      <TouchableOpacity
        style={[
          fixassets.back,
          { top: Dimensions.get("window").height * 0.04 },
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
            Calculation.textBase,
            { bottom: "200%", position: "absolute" },
          ]}
        >
          Panel Specification
        </Text>
        <Text style={[Calculation.textBase1, { top: "-7%" }]}>
          Specification 1
        </Text>
        <TextInput
          onChangeText={(number) => setMpp(number)}
          keyboardType="numeric"
          placeholder="Power at Maximum Power Point (MPP)"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[Calculation.textBase1, { top: "-16%" }]}>
          Specification 2
        </Text>
        <TextInput
          onChangeText={(number) => setArea(number)}
          keyboardType="numeric"
          placeholder="Area per panel(m^2)"
          style={{ alignSelf: "center", left: "6%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "55%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[Calculation.textBase1, { top: "-16%" }]}>
          Specification 3
        </Text>
        <TextInput
          onChangeText={(number) => setNumOfP(number)}
          keyboardType="numeric"
          placeholder="Numbers of panels"
          style={{ alignSelf: "center", left: "6%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { top: "40%", width: "90%", height: "5%" },
        ]}
      >
        <Text style={[Calculation.textBase1, { top: "-7%" }]}>
          Specification 4
        </Text>
        <TextInput
          onChangeText={(number) => setYear(number)}
          keyboardType="numeric"
          placeholder="Duration you want to check (Year)"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "59%", width: "90%", height: "5%" },
        ]}
      >
        <Text
          style={[
            Calculation.textBase,
            { bottom: "200%", position: "absolute" },
          ]}
        >
          Electricity Settings
        </Text>
        <Text style={[Calculation.textBase1, { top: "-7%" }]}>
          Specification 1
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
      <TouchableOpacity
        style={Calculation.DoneBut}
        onPressIn={calculates}
        onPress={() => navigation.navigate("CalLastPage")}
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
      </TouchableOpacity>
    </View>
  );
};

export default CustomisePage;

const Calculation = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
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
    top: "77%",
    height: "5.5%",
    width: "65%",
    alignSelf: "center",
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
