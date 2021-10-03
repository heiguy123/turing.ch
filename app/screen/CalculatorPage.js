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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fixassets from "../../config/fixassets";
import DataGetter from "../dataGetter";

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

function ChooseScreen({ navigation: { navigate } }) {
  return (
    <View style={styles.container}>
      <Text style={styles.textBase}>
        Hi, let's walk through{"\n"}the solar panel specification
      </Text>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.smallContainer}
          onPress={() => navigate("Default")}
        >
          <Text style={styles.textBase2}>Default Specification</Text>
          <Text style={styles.textBase4}>Start</Text>
          <Text style={styles.textBase3}>
            I would use the default panel specification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallContainer2}
          onPress={() => navigate("Customise")}
        >
          <Text style={styles.textBase2}>Customise Specification</Text>
          <Text style={styles.textBase4}>Start</Text>
          <Text style={styles.textBase3}>
            I have my specific panel specification
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        resizeMode={"contain"}
        style={styles.picture1}
        source={require("./assets/background.png")}
      />
    </View>
  );
}

function DefCal({ navigation }) {
  const [fPrice, setFix] = useState("");
  const [tPrice, setBill] = useState("");

  (MPP = parseFloat(435)),
    (areaPanels = parseFloat(2)),
    (numberOfPanels = parseFloat(5)),
    (usedTime = parseFloat(5)),
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
          source={require("./assets/blackback.png")}
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
        <Text style={[Calculation.textBase1, { top: "-16%" }]}>
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
        <Text style={[Calculation.textBase1, { top: "-16%" }]}>
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
        <Text style={[Calculation.textBase1, { top: "-7%" }]}>
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
        <Text style={[Calculation.textBase1, { left: "0%", top: "-7%" }]}>
          Specification 1
        </Text>
        <Text
          style={[
            Calculation.textBase,
            { left: "0%", bottom: "200%", position: "absolute" },
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
      <TouchableOpacity
        style={Calculation.DoneBut}
        onPressIn={calculates}
        onPress={() => navigation.navigate("LastPage")}
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
}

function CusCal({ navigation: { navigate } }) {
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
        onPress={() => navigate("Choose")}
      >
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("./assets/blackback.png")}
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
        onPress={() => navigate("LastPage")}
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
}
function CalLastP({ navigation: { navigate } }) {
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
          source={require("./assets/officework.png")}
        />
      </View>
      <View style={CalLast.Graph}>
        <Text style={CalLast.SummaryText}>Summary</Text>
        <View style={CalLast.GraphBox} />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function CalculatorPage() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        flex: 1,
      }}
    >
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Choose"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Choose" component={ChooseScreen} />
          <Stack.Screen name="Default" component={DefCal} />
          <Stack.Screen name="Customise" component={CusCal} />
          <Stack.Screen name="LastPage" component={CalLastP} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default CalculatorPage;

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
  container: {
    backgroundColor: "#fff",
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
  },
  picture1: {
    position: "absolute",
    justifyContent: "center",
    height: "31%",
    top: "5%",
  },
  container2: {
    flex: 1,
    backgroundColor: "#d3d8e8",
    justifyContent: "center",
    alignSelf: "flex-end",
    height: "50%",
    flexDirection: "row",
  },
  smallContainer: {
    backgroundColor: "#fff",
    width: "90%",
    height: "22%",
    position: "absolute",
    alignSelf: "flex-start",
    top: "8%",
    borderRadius: 20,
    elevation: 5,
  },
  smallContainer2: {
    backgroundColor: "#fff",
    width: "90%",
    height: "22%",
    position: "absolute",
    alignSelf: "flex-start",
    top: "38%",
    borderRadius: 20,
    elevation: 5,
  },
  textBase: {
    fontWeight: "bold",
    fontSize: 24,
    position: "absolute",
    bottom: "53%",
    textAlign: "center",
  },
  textBase2: {
    top: "20%",
    left: "5%",
    fontWeight: "bold",
    fontSize: 14,
    position: "absolute",
    lineHeight: 20,
  },
  textBase3: {
    bottom: "25%",
    left: "5%",
    fontWeight: "normal",
    fontSize: 14,
    position: "absolute",
    lineHeight: 20,
  },
  textBase4: {
    top: "20%",
    right: "5%",
    fontWeight: "bold",
    fontSize: 14,
    position: "absolute",
    lineHeight: 20,
    color: "#233E8B",
  },
});
