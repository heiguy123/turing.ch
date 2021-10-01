import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, StatusBar, Platform } from 'react-native';

export default function App() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
            <View>
              <View style={{flexDirection: "row", alignItems: "center"}}>
                <Image style={styles.image}
                source={require("./assets/back.png")}/>
                <Text style={styles.title1}>
                    Back.
                </Text>
              </View>
              <Text style={styles.title2}>
                Panel Specification
              </Text>
              <Text style={styles.title3}>
                Specification 1
              </Text>
              <Text style={styles.title2}>
                Electricity Settings
              </Text>
              <Text style={styles.title3}>
                Specification 2
              </Text>
            </View>
        </View>
    </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      paddingTop: Platform.OS === "android"? StatusBar.currentHeight : 0,
    },
    container1: {
      marginHorizontal: "8%",
      paddingTop: "8%",
    },
    image: {
      width: 20,
      height: 20,
    },
    title1: {
      fontWeight: "bold",
      fontSize: 18,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
    title2: {
      fontWeight: "bold",
      fontSize: 24,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
    title3: {
      fontWeight: "normal",
      fontSize: 14,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
});