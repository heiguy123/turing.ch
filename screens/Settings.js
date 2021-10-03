import React, {useState} from "react";
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
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import fixassets from "../config/fixassets";
import navbar from "../config/navbar";
const sbspace = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const mobileWidth = Dimensions.get("screen").width;
const widthmul = mobileWidth / 400;

export default function Settings({ navigation: { navigate } }) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>

      <View style={ styles.container }>
          
        <TouchableOpacity style={[fixassets.back, {Top: Dimensions.get("window").height * 0.04}]} 
        onPress={()=> navigate("Dashboard")}>
          <Image style={{ width:"100%",height:"100%"}} source={require("../assets/blackback.png")}/>
        </TouchableOpacity>

        <View style={ styles.textcontainer }>

            <View style= { styles.title1 }>
                <Text style={ fonts.h2 }>
                Settings
            </Text>
            </View>

            <View style= { styles.title2 }>
                <Text style={ fonts.h4 }>
                Default Temperature Unit 
                </Text>
                <Text style={ fonts.p }>
                Celcius {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Default Precipitation Unit 
                </Text>
                <Text style={ fonts.p }>
                mm {"\n"}{"\n"}{"\n"}
                </Text>
                <Text style={ fonts.h4 }>
                Default Solar Irradiance Unit
                </Text>
                <Text style={ fonts.p }>
                kW-hr/m^2/day {"\n"}{"\n"}{"\n"}
                </Text>

                <TouchableHighlight style={ styles.restbutton } onPress={() => navigate("GetStarted")}>
                    <Text style={ styles.reseth1 }>
                    Reset to Default
                    </Text>
                </TouchableHighlight>

                <Text>
                  {"\n"}{"\n"}{"\n"}
                </Text>
                
                <Modal
                animationType= "slide"
                transparent= {true}
                visible= {modalVisible}
                onRequestClose= {() => {
                  setModalVisible(!modalVisible);
                }}>

                  <Pressable
                  style={ [styles.page, styles.pageclose] }
                  onPress= {() => setModalVisible(!modalVisible)}>

                  <Text style={ styles.reseth2 }>
                    Team Leader:
                  </Text>
                  <Text style={ styles.reseth3 }>
                    Moses Lau Yi Hieng{"\n"}
                  </Text>
                  <Text style={ styles.reseth2 }>
                    Team Members:
                  </Text>
                  <Text style={ styles.reseth3 }>
                    Howard Lim{"\n"}
                    Chai Hong Jie{"\n"}
                    Yong Vin Cent{"\n"}
                    Kueh Tze Shuen{"\n"}
                    Jeremy Lau Yi Quan
                  </Text>

                  </Pressable>
                </Modal>

                <TouchableOpacity
                  onPress= {() => setModalVisible(true)}>
                    <Text style={ fonts.h4 }>
                  Contributors
                  </Text>
                  <Text style={ fonts.p }>
                  Thanks for them who created the application
                  </Text>
                </TouchableOpacity>

            </View>

        </View>

      </View>

      <View style={navbar.navBottom}>
          <View
            style={[styles.row, { paddingTop: "5%", paddingBottom: "16%" }]}
          >
            <TouchableHighlight
              style={(navbar.navButton, styles.col4)}
              onPress={() => Alert.alert("ABC")}
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
                <Text
                  style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}
                >
                  Calculator
                </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              style={(navbar.navButton, styles.col4)}
              onPress={() => navigate("Dashboard")}
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
                <Text style={[fonts.p, navbar.navInactive, { marginBottom: 5 }]}>Dashboard</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight 
              style={navbar.navButton, styles.col4}
              onPress={() => navigate("Settings")}
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
                  source={require("../assets/icon-settings.png")}
                />
                <Text
                  style={[fonts.p, { marginBottom: 5 }]}
                >
                  Settings
                </Text>
                <View style={navbar.navLabelActive}></View>
              </View>
            </TouchableHighlight>
          </View>
        </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  textcontainer: {
    flex: 1,
    left: Dimensions.get("window").width * 0.06,
  },
  title1: {
    top: Dimensions.get("window").height * 0.08 + sbspace,
  },
  title2: {
    flex: 0.8,
    top: Dimensions.get("window").height * 0.13 + sbspace,
  },
  restbutton: {
    right: Dimensions.get("window").width * 0.06,
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.primary,
    alignSelf: "center",
    justifyContent: "center",
  },
  reseth1: {
    fontFamily: "Normal",
    fontSize: 18 * widthmul,
    color: colors.white,
    letterSpacing: 0.15,
    alignSelf: "center",
  },
  reseth2: {
    fontWeight: "bold",
    fontSize: 24 * widthmul,
    color: colors.white,
    letterSpacing: 0.15,
    alignSelf: "flex-start",
  },
  reseth3: {
    fontFamily: "Normal",
    fontSize: 18 * widthmul,
    color: colors.white,
    letterSpacing: 0.15,
    alignSelf: "flex-start",
  },
  col4: {
    maxWidth: "33%",
    flexBasis: "33%"
  },
  row: {
    flexDirection: "row"
  },
  page: {
    borderRadius: 20,
    padding: 30,
    elevation: 10,
  },
  pageclose: {
    backgroundColor: colors.primary,
    width: "80%",
    height: "35%",
    justifyContent: "center",
    alignSelf: "center",
    top: "30%",
  },
});
