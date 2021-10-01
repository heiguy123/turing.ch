import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Platform, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ChooseScreen({ navigation: { navigate } }) {
    return (
        <View style={styles.container}>
            <Text style={styles.textBase}>Hi, let's walk through{"\n"}the solar panel specification</Text>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.smallContainer} onPress={() =>navigate('Default')}>
                    <Text style={styles.textBase2}>Default Specification</Text>
                    <Text style={ styles.textBase4}>Start</Text>
                    <Text style={ styles.textBase3} >I would use the default panel specification</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.smallContainer2} onPress={() =>navigate('Customise')}>
                    <Text style={styles.textBase2}>Customise Specification</Text>
                    <Text style={ styles.textBase4}>Start</Text>
                    <Text style={styles.textBase3}>I have my specific panel specification</Text>
                </TouchableOpacity>
            </View>
            <Image resizeMode={"contain"} style={styles.picture1} source={require('./assets/background.png')} />
        </View>
    );
}
function DefCal(props) {
    return (
        <View style={{ flex : 1, alignItems:"center", justifyContent: "center" }}>
            <Text>Hello World</Text>
        </View>
    );
}

function CusCal(props) {
    return (
        <View style={{ flex : 1, alignItems:"center", justifyContent: "center" }}>
            <Text>Hello World</Text>
        </View>
    );
}
    const Stack = createNativeStackNavigator();

function CalculatorPage() {
    return (
    <SafeAreaView style={{paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, flex: 1}}>
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Choose" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Choose" component={ChooseScreen} />
            <Stack.Screen name="Default" component={DefCal} />
            <Stack.Screen name="Customise" component={CusCal} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>        
      );
}




export default CalculatorPage;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#fff",
        flexDirection:"row",
        flex: 1,
        justifyContent:"center",
    },
    picture1:{
        position:"absolute",
        justifyContent:"center",
        height:"31%",
        top:"5%",
    },
    container2:{
        flex:1,
        backgroundColor:"#d3d8e8",
        justifyContent: "center", 
        alignSelf:"flex-end",
        height:"50%",
        flexDirection : "row",
    },
    smallContainer:{
        backgroundColor: "#fff",
        width: "90%",
        height: "22%",
        position:"absolute",
        alignSelf: "flex-start",
        top:"8%",
        borderRadius: 20,
        elevation: 5,
    },
    smallContainer2:{
        backgroundColor: "#fff",
        width: "90%",
        height: "22%",
        position:"absolute",
        alignSelf: "flex-start",
        top:"38%",
        borderRadius: 20,
        elevation: 5,
    },
    textBase:{
        fontWeight:"bold",
        fontSize: 24 ,
        position: "absolute",
        bottom: "53%",
        textAlign:"center",
    },
    textBase2:{
        top: "20%",
        left: "5%",
        fontWeight: "bold" ,
        fontSize: 14,
        position: "absolute",
        lineHeight:20,
    },
    textBase3:{
        bottom: "25%",
        left: "5%",
        fontWeight: "normal" ,
        fontSize: 14,
        position: "absolute",
        lineHeight:20,
    },
    textBase4:{
        top: "20%",
        right: "5%",
        fontWeight: "bold" ,
        fontSize: 14,
        position: "absolute",
        lineHeight:20,
        color:"#233E8B"
    },
    
})
