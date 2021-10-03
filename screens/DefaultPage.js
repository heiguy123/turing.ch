import React, { useEffect, useState } from "react";
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
import colors from "../config/colors";
import fonts from "../config/fonts";
import navbar from "../config/navbar";
const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;
let longitude = 113.997; //change this to actual longitude
let latitude = 4.372; //change this to actual latitude
let mean1 = 0;

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
  DataGetter.getSolarMean(longitude, latitude).then((mean) => {
    mean1 = mean;
    console.log(mean);
  });

  const [fPrice, setFix] = useState("");
  const [tPrice, setBill] = useState("");

  (MPP = parseFloat(435)),
    (areaPanels = parseFloat(2)),
    (numberOfPanels = parseFloat(5)),
    (usedTime = parseFloat(5)),
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
        <Text style={{ alignSelf: "center", left: "3%", position: "absolute" }}>
          435
        </Text>
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
        <Text style={{ alignSelf: "center", left: "6%", position: "absolute" }}>
          2
        </Text>
      </View>
      <View
        style={[
          Calculation.textBox,
          { left: "55%", top: "30%", width: "40%", height: "5%" },
        ]}
      >
        <Text style={[fonts.p, { color: "#555555", top: "-16%" }]}>
          Number of panels
        </Text>
        <Text style={{ alignSelf: "center", left: "6%", position: "absolute" }}>
          5
        </Text>
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
        <Text
          style={{
            color: "#000",
            alignSelf: "center",
            left: "3%",
            position: "absolute",
          }}
        >
          5
        </Text>
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
        <Text style={[fonts.p, { color: "#555555", left: "0%", top: "-7%" }]}>
          Electricity price (USD)
        </Text>
        <TextInput
          onChangeText={(number) => setFix(number)}
          keyboardType="numeric"
          onSubmitEditing={Keyboard.dismiss}
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
      <View
        style={{
          flex: 1,
          top: "30%",
          alignSelf: "center",
          justifyContent: "center",
        }}
      ></View>
      <TouchableOpacity
        style={[fixassets.buttonb, { position: "absolute", top: "78%" }]}
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
          style={[
            fonts.h4,
            { color: colors.white, lineHeight: 24, textAlign: "center" },
          ]}
        >
          Done
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          fixassets.back,
          {
            top: Dimensions.get("window").height * 0.06,
          },
        ]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/blackback.png")}
        />
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

export default DefaultPage;

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
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%",
  },
});
