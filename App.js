import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Picker, TextInput, StyleSheet, SafeAreaView, Image, Button, View, Dimensions, Platform, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

 

export default function App() {
  const [selectedValue1, setSelectedValue1] = useState("java");
  const [selectedValue2, setSelectedValue2] = useState("java");
   return (
    
    <SafeAreaView style={styles.container1}>

        <View style={styles.container2} />
        <Image source={{ uri: "https://cdn.discordapp.com/attachments/883931470585008152/893723732898635807/whiteback.png" }}
          style={styles.back} />
        <Image source={{ uri: "https://raw.githubusercontent.com/heiguy123/turing.ch/yongvc/locationaccesspage/assets/sun.png?token=AVTRNVXEOTCDVPYHPRK4IJDBLAK22" }}
          style={styles.sun} />

        <View style={styles.container1}>
          <Text style={styles.title1}>
            Set your
          </Text>
          <Text style={styles.title2}>
            Time Range
          </Text>
          <Text style={styles.title3}>
            We will show you all related records for the given timeframe.
          </Text>
          <Text style={styles.startYear}>
            Start Year
          </Text>

          <View style={styles.Year1}>
            <Picker
              selectedValue={selectedValue1}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue1, itemIndex1) => setSelectedValue1(itemValue1)}
            >
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
            </Picker>
          </View>

          <Text style={styles.endYear}>
            End Year
          </Text>
        <View style={styles.Year2}>
          <Picker
              selectedValue={selectedValue2}
              style={{ height: 50, width: 150 }}
              onValueChange={(itemValue2, itemIndex2) => setSelectedValue2(itemValue2)}
            >
              <Picker.Item label="2021" value="2021" />
              <Picker.Item label="2020" value="2020" />
              <Picker.Item label="2019" value="2019" />
              <Picker.Item label="2018" value="2018" />
            </Picker>
          </View>

          <TouchableHighlight
            style={styles.submit}
            onPress={() => {
              requestPermissions;
              navigate("Dashboard");
            } }
            underlayColor='#EEA718'>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>
  );
};





const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#233E8B",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    height:40,
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: '#233E8B',
  },
  container3: {
    backgroundColor: "#233E8B",
    alignItems: "center",
    justifyContent: "center",
  },
  submit: {
    top: "25%",
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 100,
    paddingRight: 100,
    backgroundColor: '#FFB319',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#FFB319',
  },
  continueText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  
  title1: {
    position: 'absolute',
    fontWeight: "bold",
    fontSize: 48,
    color: "white",
    textAlign: "center",
    letterSpacing: 0.15,
    top: "-10%",
  },
  title2: {
    position: 'absolute',
    fontWeight: "bold",      
    fontSize: 48,
    color: "#FFB319",
    textAlign: "center",
    top: "0%",
  },
  title3: {
    marginRight: 40,
    marginLeft: 40,
    position: 'absolute',
    fontSize: 14,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    textAlign: 'center',
    letterSpacing: 0.15,
    top: "16%",
  },
  startYear: {
    position: 'absolute',
    fontSize: 12,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    letterSpacing: 0.15,
    top: "25%",
    left: "10%",
  },
  endYear: {
   position: 'absolute',
    fontSize: 12,
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    letterSpacing: 0.15,
    top: "39%",
    left: "10%",
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  sun: {
    width: 130, 
    height: 130, 
    resizeMode: "contain", 
    justifyContent: "space-between",
    alignSelf: 'flex-end',
    left: "8%",
  },
    back: {
      width: 50, 
      height: 50, 
      resizeMode: "contain", 
      justifyContent: "space-between",
      alignSelf: "flex-start",
      marginLeft: 15,
  },
  Year1: {
    position: 'absolute',
    fontSize: 12,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    letterSpacing: 0.15,
    top: "29%",
    left: "10%",
    backgroundColor: "white",
    height: "7%",
    width: "35%",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'white',
    textAlign: "center",
  },
  Year2: {
    position: 'absolute',
    fontSize: 12,
    color: "white",
    justifyContent: "center",
    alignSelf: "center",
    letterSpacing: 0.15,
    top: "43%",
    left: "10%",
    backgroundColor: "white",
    height: "7%",
    width: "35%",
    borderRadius: 10,
    borderWidth: 0,
    borderColor: 'white',
    textAlign: "center",
}
});