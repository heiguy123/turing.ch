import React from "react";
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
import colors from "../config/colors";
import fonts from "../config/fonts";
const CalChoose = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[fonts.h3, styles.textBase]}>
        Hi, let's walk through{"\n"}the solar panel specification
      </Text>
      <View style={styles.container2}>
        <TouchableOpacity
          style={styles.smallContainer}
          onPress={() =>
            navigation.navigate("DefaultPage", {
              location: route.params.location,
            })
          }
        >
          <Text style={[fonts.p, styles.textBase2]}>Default Specification</Text>
          <Text style={[fonts.p, styles.textBase4]}>Start</Text>
          <Text style={[fonts.p, styles.textBase3]}>
            I would use the default panel specification
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.smallContainer2}
          onPress={() =>
            navigation.navigate("CustomisePage", {
              location: route.params.location,
            })
          }
        >
          <Text style={[fonts.p, styles.textBase2]}>
            Customise Specification
          </Text>
          <Text style={[fonts.p, styles.textBase4]}>Start</Text>
          <Text style={[fonts.p, styles.textBase3]}>
            I have my specific panel specification
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        resizeMode={"contain"}
        style={styles.picture1}
        source={require("../assets/background.png")}
      />
    </SafeAreaView>
  );
};

export default CalChoose;

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
    fontFamily: "Bold",
    position: "absolute",
    bottom: "53%",
    textAlign: "center",
  },
  textBase2: {
    top: "20%",
    left: "5%",
    fontFamily: "Bold",
    position: "absolute",
    lineHeight: 20,
  },
  textBase3: {
    bottom: "25%",
    left: "5%",
    fontFamily: "Regular",
    position: "absolute",
    lineHeight: 20,
  },
  textBase4: {
    top: "20%",
    right: "5%",
    fontFamily: "Bold",
    position: "absolute",
    lineHeight: 20,
    color: colors.primary,
  },
});
