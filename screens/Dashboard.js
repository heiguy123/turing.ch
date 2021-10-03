import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  Dimensions,
  Alert,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import navbar from "../config/navbar";

const Dashboard = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.whiteBg }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ marginBottom: 170, flex: 1 }}>
          <View style={[styles.container]}>
            <Image
              style={styles.topImage}
              source={require("../assets/dashboard.png")}
            />
          </View>
          <View style={styles.solarIrradiance}>
            <TouchableHighlight
              style={[styles.greyLabel]}
              onPress={() =>
                navigation.navigate("SetLocation", {
                  location: route.params.location,
                })
              }
              activeOpacity={0.65}
              underlayColor={"rgba(0,0,0,0.1)"}
            >
              <View style={styles.greyLabelInner}>
                <Image
                  style={styles.plane}
                  source={require("../assets/plane.png")}
                />
                <Text
                  style={[
                    fonts.p,
                    { marginTop: -4, paddingLeft: 4, marginBottom: 0 },
                  ]}
                >
                  Miri, Sarawak
                </Text>
              </View>
            </TouchableHighlight>
            <Text style={[fonts.h1, { fontSize: 60, marginBottom: 0 }]}>
              Hi,
            </Text>
            <Text style={fonts.p}>Have a nice day.</Text>
          </View>
          <View
            style={{
              flex: 1,
              top: "3%",
              paddingLeft: "5%",
              paddingRight: "5%",
            }}
          >
            <Text
              style={[
                fonts.h3,
                { color: colors.black, fontFamily: "Bold", marginBottom: 0 },
              ]}
            >
              Summary
            </Text>
            <View
              style={[styles.row, { paddingTop: "8%", paddingBottom: "8%" }]}
            >
              <View
                style={[
                  styles.col6,
                  styles.row,
                  { paddingLeft: "5%", paddingRight: "3%" },
                ]}
              >
                <View style={(styles.col1, styles.progressBar)}>
                  <View style={styles.progressBarFilled}></View>
                  <View style={styles.progressBarFilledCap}></View>
                </View>
                <View style={[styles.col12, { paddingLeft: 14 }]}>
                  <Text style={[fonts.p, { marginBottom: 4, marginTop: 8 }]}>
                    Avg. Solar Irradiance
                  </Text>
                  <Text style={[fonts.h3, { marginBottom: 0 }]}>25%</Text>
                </View>
              </View>
              <View
                style={[
                  styles.col6,
                  styles.row,
                  { paddingLeft: "5%", paddingRight: "5%" },
                ]}
              >
                <View style={(styles.col1, styles.progressBar)}>
                  <View
                    style={[styles.progressBarFilled, { height: "40%" }]}
                  ></View>
                  <View
                    style={[styles.progressBarFilledCap, { bottom: "40%" }]}
                  ></View>
                </View>
                <View style={[styles.col11, { paddingLeft: 14 }]}>
                  <Text style={[fonts.p, { marginBottom: 4, marginTop: 8 }]}>
                    Avg. Temperature
                  </Text>
                  <Text style={[fonts.h3, { marginBottom: 0 }]}>22.3°</Text>
                </View>
              </View>
            </View>
            <View style={styles.hr}></View>
            <View
              style={[styles.row, { paddingTop: "8%", paddingBottom: "8%" }]}
            >
              <View
                style={[
                  styles.col6,
                  styles.row,
                  { paddingLeft: "5%", paddingRight: "5%" },
                ]}
              >
                <View style={(styles.col1, styles.progressBar)}>
                  <View
                    style={[styles.progressBarFilled, { height: "55%" }]}
                  ></View>
                  <View
                    style={[styles.progressBarFilledCap, { bottom: "55%" }]}
                  ></View>
                </View>
                <View style={[styles.col11, { paddingLeft: 14 }]}>
                  <Text style={[fonts.p, { marginBottom: 4, marginTop: 8 }]}>
                    Avg. Percipitation
                  </Text>
                  <Text style={[fonts.h3, { marginBottom: 0 }]}>4.08 mm</Text>
                </View>
              </View>
              <View
                style={[
                  styles.col6,
                  styles.row,
                  { paddingLeft: "5%", paddingRight: "5%" },
                ]}
              >
                <View style={(styles.col1, styles.progressBar)}>
                  <View
                    style={[styles.progressBarFilled, { height: "30%" }]}
                  ></View>
                  <View
                    style={[styles.progressBarFilledCap, { bottom: "30%" }]}
                  ></View>
                </View>
                <View style={[styles.col12, { paddingLeft: 14 }]}>
                  <Text style={[fonts.p, { marginBottom: 4, marginTop: 8 }]}>
                    Avg. Cloud Amount
                  </Text>
                  <Text style={[fonts.h3, { marginBottom: 0 }]}>30%</Text>
                </View>
              </View>
            </View>
            <View
              style={[
                styles.buttonPlacement,
                { flexDirection: "row", alignSelf: "center" },
              ]}
            >
              <TouchableHighlight
                style={styles.button}
                onPress={() =>
                  navigation.navigate("ViewGraphIndex", {
                    location: route.params.location,
                  })
                }
              >
                <Text
                  style={[
                    fonts.h4,
                    {
                      color: colors.white,
                      lineHeight: 24,
                      textAlign: "center",
                    },
                  ]}
                >
                  More Details
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={navbar.navBottom}>
        <View style={[styles.row, { paddingTop: "5%", paddingBottom: "16%" }]}>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("CalculatorPage", {
                location: route.params.location,
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
                source={require("../assets/icon-calculator-inactive.png")}
              />
              <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>
                Calculator
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() =>
              navigation.navigate("Dashboard", {
                location: route.params.location,
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
                source={require("../assets/icon-home.png")}
              />
              <Text style={[fonts.p, { marginBottom: 5 }]}>Dashboard</Text>
              <View style={navbar.navLabelActive}></View>
            </View>
          </TouchableHighlight>
          <TouchableHighlight
            style={(navbar.navButton, styles.col4)}
            onPress={() => Alert.alert("DEF")}
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
    </SafeAreaView>
  );
};
export default Dashboard;
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: 250,
    height: "50%",
  },
  button: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.primary,
    justifyContent: "center",
  },
  buttonPlacement: {
    // position: "absolute",
    // bottom: Math.round(60 * 1.5),
  },
  topImage: {
    resizeMode: "stretch",
    width: Dimensions.get("screen").width,
    height: "100%",
    position: "absolute",
    alignSelf: "center",
    top: 0,
    right: 0,
    zIndex: 0,
  },
  plane: {
    resizeMode: "contain",
    width: 16,
    marginTop: -8,
    marginBottom: 4,
  },
  greyLabel: {
    backgroundColor: "#E4E4E4",
    borderRadius: 6,
    padding: 10,
    paddingBottom: 0,
    maxWidth: 130,
    width: "100%",
    alignItems: "center",
  },
  greyLabelInner: {
    display: "flex",
    flexDirection: "row",
    minWidth: 100,
  },
  solarIrradiance: {
    position: "absolute",
    top: "15%",
    left: "10%",
  },
  progressBar: {
    height: "100%",
    maxHeight: 80,
    width: 2,
    backgroundColor: "#DDDDDD",
  },
  progressBarFilled: {
    position: "absolute",
    height: "25%",
    width: 6,
    bottom: 0,
    right: -2,
    backgroundColor: colors.primary,
  },
  progressBarFilledCap: {
    position: "absolute",
    height: 2,
    width: 10,
    bottom: "25%",
    right: -4,
    backgroundColor: colors.primary,
  },
  hr: {
    alignSelf: "center",
    width: "90%",
    height: 1,
    backgroundColor: "#D9D9D9",
  },
  row: {
    flexDirection: "row",
  },
  col1: {
    maxWidth: "10%",
    flexBasis: "10%",
  },
  col2: {
    maxWidth: "20%",
    flexBasis: "20%",
  },
  col3: {
    maxWidth: "30%",
    flexBasis: "30%",
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%",
  },
  col6: {
    maxWidth: "50%",
    flexBasis: "50%",
  },
  col8: {
    maxWidth: "66%",
    flexBasis: "66%",
  },
  col9: {
    maxWidth: "70%",
    flexBasis: "70%",
  },
  col10: {
    maxWidth: "80%",
    flexBasis: "80%",
  },
  col11: {
    maxWidth: "90%",
    flexBasis: "90%",
  },
  col12: {
    maxWidth: "100%",
    flexBasis: "100%",
  },
});
