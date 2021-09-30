import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Text,
  Pressable,
  Image,
  View,
  StatusBar,
  Button,
} from "react-native";
import AppLoading from "expo-app-loading";
import { Roboto_500Medium, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { useFonts } from "expo-font";
import colors from "./config/colors";
import fonts from "./config/fonts";
//import GetStarted from "./screens/GetStarted";

export default function App() {
  let [fontloaded, error] = useFonts({
    Normal: Roboto_500Medium,
    Bold: Roboto_700Bold,
  });
  if (!fontloaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[ fonts.dark ], { maxWidth: "90%" }}>
        <View style={{flexBasis: "45%", alignItems: "center"}}>
          <Image
            style={styles.image}
            source={require('./assets/slash1.png')}
          />
        </View>
        
        <Text style={ fonts.dark, fonts.h1 }>
          <Text>Sunlight</Text>
          <Text style={{color: colors.secondaryColor}}> Detector App</Text>
        </Text>
        <View>
          <Text style={ fonts.p }>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in tempus orci, 
          vel luctus turpis. Praesent nisi odio, venenatis in volutpat quis, dignissim vel augue.
          </Text>
        </View>
        <View style={{alignItems: "center"}}>
          <Pressable style={styles.button} onPress={() => Alert.alert('Next Page')}>
            <Text style={[styles.buttonText]}>Get Started</Text>
          </Pressable>
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
    backgroundColor: colors.primaryColor,
    alignItems: "center"
  },
  image: {
    resizeMode: 'contain',
    maxWidth: Math.round(calculateMaxWidth() * 0.75),
    maxHeight: calculateMaxHeight('100%')
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: colors.secondaryColor,
    width: "80%"
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Normal"
  }
});

function calculateMaxWidth() {
  const dimensions = Dimensions.get('window');
  return dimensions.width;
}

function calculateMaxHeight(ratio) {
  const dimensions = Dimensions.get('window');
  if (ratio == '100%') { return dimensions.width}
  if (ratio == '75%') { return Math.round(dimensions.width * 3 / 4) }
  if (ratio == '56.25%') { return Math.round(dimensions.width * 9 / 16) }
}