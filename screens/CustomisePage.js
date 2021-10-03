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
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from "react-native";
import fixassets from "../config/fixassets";
import DataGetter from "../app/dataGetter";
import fonts from "../config/fonts";
import navbar from "../config/navbar";
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

const CustomisePage = ({ navigation, route }) => {
  DataGetter.getSolarMean(longitude, latitude).then((mean) => {
    mean1 = mean;
    console.log(mean);
  });
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={Calculation.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={{
            height: "100%",
            width: "100%",
          }}
        ></View>
      </TouchableWithoutFeedback>
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
          Nominal Power (Watt)
        </Text>
        <TextInput
          onChangeText={(number) => setMpp(number)}
          keyboardType="numeric"
          placeholder="Power"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-16%" }]}>
          Area (m^2)
        </Text>
        <TextInput
          onChangeText={(number) => setArea(number)}
          keyboardType="numeric"
          placeholder="Area per panel"
          style={{ alignSelf: "center", left: "6%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "55%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-16%" }]}>
          Numbers of panels
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
        <Text style={[fonts.p, { color: "#555555", top: "-7%" }]}>
          Estimate use duration (year(s))
        </Text>
        <TextInput
          onChangeText={(number) => setYear(number)}
          keyboardType="numeric"
          placeholder="Estimate use duration of solar panel"
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
        <Text style={[fonts.p, { color: "#555555", top: "-7%" }]}>
          Electricity price (USD)
        </Text>
        <TextInput
          onChangeText={(number) => setFix(number)}
          keyboardType="numeric"
          placeholder="Electricity price per kWh in your area"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "5%", top: "69%", width: "90%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-7%" }]}>
          Electricity bill usage per month (USD/month)
        </Text>
        <TextInput
          onChangeText={(number) => setBill(number)}
          keyboardType="numeric"
          placeholder="Estimate your electricity bill per month"
          style={{ alignSelf: "center", left: "3%", position: "absolute" }}
        />
      </View>
      <TouchableOpacity
        style={[fixassets.buttonb, { position: "absolute", top: "78%" }]}
        onPress={() =>
          navigation.navigate("CalLastPage", {
            location: route.params.location,
            startTime: route.params.startTime,
            endTime: route.params.endTime,
          })
        }
        onPressIn={calculates}
        onPress={() =>
          navigation.navigate("CalLastPage", {
            location: route.params.location,
            startTime: route.params.startTime,
            endTime: route.params.endTime,
            powerGenerated: powerGenerated,
            moneySaved: moneySaved,
            percentageSaved: percentageSaved,
          })
        }
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
      <View style={navbar.navBottom}>
        <View style={[styles.row, { paddingTop: "5%", paddingBottom: "16%" }]}>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("CalChoose", {
                location: route.params.location,
                startTime: route.params.startTime,
                endTime: route.params.endTime,
              })
            }
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-calculator.png")}
              />
              <Text style={[fonts.p, { marginBottom: 5 }]}>Calculator</Text>
              <View style={navbar.navLabelActive}></View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("Dashboard", {
                location: route.params.location,
                startTime: route.params.startTime,
                endTime: route.params.endTime,
              })
            }
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-home-inactive.png")}
              />
              <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>
                Dashboard
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("Settings", {
                location: route.params.location,
                startTime: route.params.startTime,
                endTime: route.params.endTime,
              })
            }
            activeOpacity={0.65}
            underlayColor={"rgba(255,255,255,0)"}
          >
            <View
              style={[
                {
                  paddingLeft: "5%",
                  paddingRight: "5%",
                  alignItems: "center",
                },
              ]}
            >
              <Image
                style={navbar.navIcon}
                source={require("../assets/icon-settings-inactive.png")}
              />
              <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>
                Settings
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    </KeyboardAvoidingView>
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

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%",
  },
});
