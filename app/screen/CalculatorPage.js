import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function ChooseScreen({ navigation: { navigate } }) {

    return (

        <View style={styles.container}>
            <Text style={styles.textBase}>Before we start{"\n"}
                <Text style={styles.textBase2}>{"\n"}We show you all related records from the{"\n"}given timeframe.</Text>
            </Text>
            <View style={styles.container2}>
                <TouchableOpacity style={styles.smallContainer} onPress={() =>
                        navigate('Default')
                }    
                />
                <TouchableOpacity style={styles.smallContainer2} onPress={() =>
                        navigate('Customise')
                }
                />
            </View>
           
            <View style={styles.menubar}></View>  

            
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
        <NavigationContainer >
          <Stack.Navigator initialRouteName="Choose" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Choose" component={ChooseScreen} />
            <Stack.Screen name="Default" component={DefCal} />
            <Stack.Screen name="Customise" component={CusCal} />
          </Stack.Navigator>
        </NavigationContainer>
      );
}




export default CalculatorPage;

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#E3E3E3",
        flex: 1,
        justifyContent:"flex-end",
        alignItems: "center",
    },
    container2:{
        backgroundColor:"#E3E3E3",
        alignItems: "center",
        width: "85%",
        height: "25%",
        bottom: "13%",
    },
    smallContainer:{
        backgroundColor: "#000",
        width: "45%",
        height: "100%",
        position:"absolute",
        alignSelf: "flex-start",
    },
    smallContainer2:{
        backgroundColor: "#000",
        width: "45%",
        height: "100%",
        position:"absolute",
        alignSelf: "flex-end",
    },
    textBase:{
        fontWeight:"bold",
        fontSize: 50 ,
        position: "absolute",
        top: 0,
        textAlign:"center",
    },
    textBase2:{
        fontWeight: "normal" ,
        fontSize: 15,
        position: "absolute",
    },
    conBut:{
        backgroundColor:"#233E8B",
        width:"80%",
        height: "7%",
        bottom: "7%",
        justifyContent: "center",
        alignItems:"center",
        borderRadius: 30,
    },
    menubar: {
        backgroundColor: "#fff",
        width: "100%", 
        height: "15%",
        
        
    },
})
