import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, StatusBar, Platform } from 'react-native';

export default function App() {
    return (
    <SafeAreaView style={styles.container}>
        <View style={styles.container1}>
            <View>
                <Text style={styles.h1}>
                    Back
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
      width: "90%",
    },
    h1: {
      fontWeight: "bold",
      fontSize: 18,
      color: "black",
      textAlign: "left",
      letterSpacing: 0.15,
    },
});