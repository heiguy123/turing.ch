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

const CalLastPage = ({ navigation, route }) => {
  return (
    <View style={CalLast.container}>
      <View style={CalLast.upperText}>
        <Text style={[CalLast.textBase, { fontSize: 24 }]}>
          Congrats!{"\n"}You will save up to
        </Text>
        <Text style={[CalLast.textBase, { fontSize: 72 }]}>
          {parseInt(percentageSaved)}%
        </Text>
        <Text
          style={[CalLast.textBase, { fontSize: 14, fontWeight: "normal" }]}
        >
          Estimated Electricity
        </Text>
        <Text
          style={[
            CalLast.textBase,
            { bottom: "13%", fontSize: 36, fontWeight: "bold" },
          ]}
        >
          {parseInt(powerGenerated)} kWh
        </Text>
        <Text
          style={[
            CalLast.textBase,
            {
              bottom: "5%",
              position: "absolute",
              fontSize: 24,
              fontWeight: "bold",
            },
          ]}
        >
          generated !
        </Text>
        <Image
          style={CalLast.picture}
          source={require("../assets/officework.png")}
        />
      </View>
      <View style={CalLast.Graph}>
        <Text style={CalLast.SummaryText}>Summary</Text>
        <View style={CalLast.GraphBox} />
      </View>
    </View>
  );
};

export default CalLastPage;

const CalLast = StyleSheet.create({
  container: {
    flex: 1,
  },
  upperText: {
    height: "42%",
    width: "100%",
    justifyContent: "flex-end",
  },
  textBase: {
    paddingLeft: "5%",
    position: "relative",
    bottom: "25%",
    fontWeight: "bold",
    color: "#000",
  },
  picture: {
    position: "absolute",
    left: "20%",
    resizeMode: "contain",
    height: "75%",
  },
  Graph: {
    top: "42%",
    position: "absolute",
    width: "100%",
    height: "58%",
  },
  SummaryText: {
    paddingLeft: "5%",
    position: "absolute",
    paddingTop: "10%",
    fontWeight: "bold",
    color: "#000",
  },
  GraphBox: {
    backgroundColor: "#DDDDDD",
    width: "90%",
    height: "45%",
    position: "absolute",
    left: "5%",
    top: "18%",
  },
});
