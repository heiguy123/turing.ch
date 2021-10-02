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
  TextInput,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import colors from "../config/colors";
import fonts from "../config/fonts";
import fixassets from "../config/fixassets";

export default function SetLocation({ navigation: { navigate } }) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Image style={fixassets.sun} source={require("../assets/sun.png")} />
        <Image
          style={fixassets.back}
          source={require("../assets/whiteback.png")}
        />
        <Text style={[fonts.h2, styles.title]}>
          Set The <Text style={{ color: colors.secondary }}>Location</Text>
        </Text>
        <View style={styles.search}>
          <Text style={[fonts.h4, { color: colors.white }]}>Search</Text>
          <Image
            style={styles.locate}
            source={require("../assets/locate.png")}
          />
        </View>
        <MapView
          style={styles.map}
          loadingEnabled={true}
          initialRegion={{
            latitude: 4.39757,
            longitude: 113.98826,
            latitudeDelta: 0.0022,
            longitudeDelta: 0.0021,
          }}
        >
          <Marker coordinate={{ latitude: 4.39757, longitude: 113.98826 }} />
        </MapView>
      </View>
      <View
        style={{
          flex: 0.22,
          justifyContent: "flex-start",
          alignSelf: "center",
          backgroundColor: colors.black,
        }}
      >
        <TouchableHighlight
          style={fixassets.button}
          //onPress={() => navigate("SetTime")}
          onPress={() => navigate("Location")}
        >
          <Text style={[fonts.h4, { color: colors.white, lineHeight: 24 }]}>
            Locate Me
          </Text>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "green",
  },
  search: {
    width: "90%",
    height: "8%",
    backgroundColor: colors.black,
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignSelf: "center",
    bottom: "60%",
  },
  locate: {
    width: 45,
    height: 45,
  },
  map: {
    bottom: "7%",
    alignSelf: "center",
    width: "90%",
    height: "50%",
  },
  title: {
    color: colors.white,
    //backgroundColor: colors.black,
    alignSelf: "center",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.58,
  },
});
