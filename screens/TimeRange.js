import React, { useEffect, useState } from "react";
import {
  Picker,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Image,
  Button,
  View,
  Dimensions,
  Platform,
  Text,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import fixassets from "../config/fixassets";

const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 10;
const TimeRange = ({ navigation, route }) => {
  const [selectedValue1, setSelectedValue1] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("java");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <TouchableOpacity
          style={[
            fixassets.back,
            { top: Dimensions.get("window").height * 0.04 + sbspace },
          ]}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={{
              width: 53,
              height: 24,
            }}
            source={require("../assets/whiteback.png")}
          />
        </TouchableOpacity>
        <Image
          source={require("../assets/sun.png")}
          style={[fixassets.sun, {}]}
        />
        <Text style={[fonts.h1, styles.title, { textAlign: "center" }]}>
          Set your{"\n"}
          <Text style={{ color: colors.secondary }}>Time Range</Text>
        </Text>
        <View style={styles.container1}>
          <Text style={[fonts.p, styles.title2]}>
            We will show you all related records for the given timeframe.
          </Text>
          <Text style={(fonts.p, styles.startYear)}>Start Year</Text>

          <View style={(fonts.p, styles.Year1)}>
            <Picker
              selectedValue={selectedValue1}
              style={{
                height: 20,
                width: "100%",
                justifyContent: "center",
              }}
              onValueChange={(itemValue1, itemIndex1) =>
                setSelectedValue1(itemValue1)
              }
            >
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
            </Picker>
          </View>

          <Text style={(fonts.p, styles.endYear)}>End Year</Text>
          <View style={(fonts.p, styles.Year2)}>
            <Picker
              selectedValue={selectedValue2}
              style={{ height: 20, width: "100%", justifyContent: "center" }}
              onValueChange={(itemValue2, itemIndex2) =>
                setSelectedValue2(itemValue2)
              }
            >
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
            </Picker>
          </View>
          <TouchableOpacity
            style={[fixassets.button, { bottom: "10%" }]}
            //onPress={() => navigation("SetTime")}
            onPress={() =>
              navigation.navigate("Dashboard", {
                location: route.params.location,
                startTime: selectedValue1,
                endTime: selectedValue2,
              })
            }
          >
            <Text
              style={[
                fonts.h4,
                { color: colors.white, lineHeight: 24, textAlign: "center" },
              ]}
            >
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default TimeRange;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    justifyContent: "flex-end",
  },
  container1: {
    flex: 2,
    //backgroundColor: "#233E8B",
    alignItems: "center",
    //justifyContent: "center",
    justifyContent: "flex-end",
  },
  container2: {
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container3: {
    alignItems: "center",
    justifyContent: "center",
  },
  submit: {
    top: "25%",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: "#FFB319",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#FFB319",
  },
  continueText: {
    fontSize: 18,
    color: "#fff",
    textAlign: "center",
  },

  title: {
    color: colors.white,
    alignSelf: "center",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.7,
  },
  title2: {
    position: "absolute",
    color: "white",
    textAlign: "center",
    flexWrap: "wrap",
    bottom: Dimensions.get("window").height * 0.6,
    lineHeight: 24,
    marginHorizontal: "8%",
  },
  startYear: {
    position: "absolute",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    top: "44%",
    left: "10%",
  },
  endYear: {
    position: "absolute",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    top: "61%",
    left: "10%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  Year1: {
    position: "absolute",
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    top: "48%",
    backgroundColor: colors.white,
    height: "7%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: colors.white,
    textAlign: "center",
  },
  Year2: {
    position: "absolute",
    color: colors.white,
    justifyContent: "center",
    top: "65%",
    backgroundColor: colors.white,
    height: "7%",
    width: "80%",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: colors.white,
    textAlign: "center",
  },
});
