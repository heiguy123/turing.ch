import React, { useEffect, useState } from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import colors from "../config/colors";
import fonts from "../config/fonts";
import fixassets from "../config/fixassets";
import useLocation from "../config/useLocation";

const latitudeDelta = 0.002;
const longitudeDelta = 0.002;
class Map extends React.Component {
  state = {
    region: {
      latitude: initLatitude,
      longitude: initLongitude,
      latitudeDelta,
      longitudeDelta,
    },
  };
  onChangeValue = (region) => {
    if (Platform.OS === "android")
      ToastAndroid.show(JSON.stringify(region), ToastAndroid.SHORT);
    this.setState({
      region,
    });
  };
  render() {
    return (
      <MapView
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation={true}
        initialRegion={this.state.region}
        onRegionChangeComplete={this.onChangeValue}
        ref={(ref) => (this.map = ref)}
      >
        <Marker
          draggable
          coordinate={{
            latitude: this.state.region.latitude,
            longitude: this.state.region.longitude,
          }}
          onDragEnd={(x) => {
            this.map.animateToRegion({
              ...this.state.region,
              latitude: x.nativeEvent.coordinate.latitude,
              longitude: x.nativeEvent.coordinate.longitude,
            });
            savecoordinate(x.nativeEvent.coordinate);
          }}
        />
      </MapView>
    );
  }
}
var coordinate = null;

function savecoordinate(coords) {
  coordinate = coords;
}

coordinate = null;
export default function SetLocation({ navigation: { navigate }, route }) {
  initLatitude = route.params.location.latitude;
  initLongitude = route.params.location.longitude;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      <View style={styles.container}>
        <Image style={fixassets.sun} source={require("../assets/sun.png")} />
        <TouchableOpacity
          style={[fixassets.back]}
          onPress={() => navigate("Location")}
        >
          <Image
            style={{ width: 53, height: 24 }}
            source={require("../assets/whiteback.png")}
          />
        </TouchableOpacity>
        <Text style={[fonts.h2, styles.title, { textAlign: "center" }]}>
          Set The <Text style={{ color: colors.secondary }}>Location</Text>
        </Text>
        <View style={styles.bar}>
          <View style={styles.search}>
            <Image
              style={styles.searchicon}
              source={require("../assets/searchicon.png")}
            />
            <TextInput
              style={[fonts.h4]}
              placeholder={"Search"}
              onChangeText={(x) => (saveaddress = x)}
            />
          </View>
          <TouchableOpacity style={styles.locate}>
            <Image
              style={styles.locateicon}
              source={require("../assets/locate.png")}
            />
          </TouchableOpacity>
        </View>
        <Map />
      </View>
      <View
        style={{
          flex: 0.22,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          style={fixassets.button}
          //onPress={() => navigate("SetTime")}
          onPress={() => navigate("Dashboard", route.params.position)}
        >
          <Text
            style={[
              fonts.h4,
              { color: colors.white, lineHeight: 24, textAlign: "center" },
            ]}
          >
            Locate Me
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    justifyContent: "flex-end",
  },
  bar: {
    width: "90%",
    height: "8%",
    flexDirection: "row",
    position: "absolute",
    justifyContent: "space-between",
    alignSelf: "center",
    bottom: "60%",
    flex: 1,
  },
  search: {
    backgroundColor: colors.whiteBg,
    flex: 0.95,
    borderRadius: 6,
    flexDirection: "row",
    alignItems: "center",
  },
  searchicon: {
    width: 20,
    height: 20,
    justifyContent: "center",
    margin: "5%",
    marginRight: "2%",
  },
  locate: {
    flexDirection: "row",
    alignItems: "center",
  },
  locateicon: {
    width: 45,
    height: 45,
  },
  map: {
    bottom: "7%",
    alignSelf: "center",
    width: "90%",
    height: "50%",
    borderRadius: 6,
  },
  title: {
    color: colors.white,
    alignSelf: "center",
    position: "absolute",
    bottom: Dimensions.get("window").height * 0.58,
  },
});
