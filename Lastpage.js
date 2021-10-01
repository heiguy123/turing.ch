import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, StatusBar, Platform } from 'react-native';

export default function App() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
          
          <View  style={styles.container2}>
            <View>
            <Text style={styles.title1}>
              Congrats!{"\n"}You will save up to
             </Text>
             <Text style={styles.title2}>
              35%
            </Text>
            <Text style={styles.title3}>
              Estimated Electricity
            </Text>
            </View>

            <View style={ {position: "absolute"}}>
            <Image  style={styles.image} 
            source={require("./assets/officework.png")} />
            </View>
          </View>

          <View style={[styles.container3, {marginTop: "5%"}]}>
            <Text style={styles.title4}>
              Summary
            </Text>

            <View style={[styles.box, {alignSelf: "center"}]}>
              <Text style={[styles.title4, {alignSelf: "center", marginTop: "25%"}]}>
                Display your graph here jj
              </Text>
            </View>

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
      flex: 1,
      marginHorizontal: "6%",
      paddingTop: "10%",
    },
    container2: {
      flex: 0.8,
      borderBottomWidth: 1,
      borderBottomColor: "#233E8B",
    },
    container3: {
      flex: 1,
    },
    image: {
      resizeMode: "contain",
      width: 290,
      height: 290,
      right: -140,
      top: 30,
    },
    box: {
      marginTop: "10%",
      width: 360,
      height: 240,
      backgroundColor: "#c4c4c4",
      borderRadius: 16,
      borderWidth: 2,
      borderColor: "#233E8B",
    },
    title1: {
      fontWeight: "bold",
      fontSize: 24,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
    title2: {
      fontWeight: "bold",
      fontSize: 72,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
    title3: {
      fontWeight: "bold",
      fontSize: 14,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
    title4: {
      fontWeight: "bold",
      fontSize: 18,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
});