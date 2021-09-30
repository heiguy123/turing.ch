import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
import colors from "../config/colors";
import fonts from "../config/fonts";

export default function GetStarted() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 0.5, justifyContent: "flex-start" }}>
        <Text style={fonts.title1}>Sunlight</Text>
        <Text style={fonts.title2}>Detector App </Text>
        <View style={{ width: "80%", height: "25%", top: 20 }}>
          <Text style={fonts.desc1}>
            ghasgb tbW TBW Tbwb twt wntyndygfdghe gra gae gedrageda g aegeryhe
            ga hegeager g
          </Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    fontSize: 100,
    flex: 1,
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
