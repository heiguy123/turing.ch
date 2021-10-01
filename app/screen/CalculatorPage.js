import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, StatusBar, Platform, SafeAreaView, Image, TextInput } from 'react-native';
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

function DefCal({navigation}) {

    return (
        <View style={Calculation.container}>
            <Image resizeMode={"contain"} style={{alignSelf:"flex-start", left:"6%", top:"6%", width:"2%"}} source={require('./assets/arrow.png')}/>
            <Text style={Calculation.h1} onPress={()=> navigation.goBack() }>Back</Text>
            <Text style={[Calculation.textBase, {left:"6%", top:"8%"}]}>Panel Specification</Text>
            <Text style={[Calculation.textBase1,{left:"6%", top:"10%",}]}>Specification 1</Text>
            <View style={[Calculation.textBox, {top:"23%", width:"90%", height: "5%"}]}>
                <Text style={{alignSelf:"center", left:"30%"}}  >Power at Mpp : 435 Watt</Text>
            </View>
            <Text style={[Calculation.textBase1,{left:"6%", top:"18%",}]}>Specification 2</Text>
            <Text style={[Calculation.textBase1,{left:"55%", top:"15.5%",}]}>Specification 3</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"34%", width:"40%", height: "5%"}]}>
                <Text style={{alignSelf:"center", left:"30%"}} >Area: 2 m^2</Text>
            </View>
            <View style={[Calculation.textBox, {left: "55%" , top:"34%", width:"40%", height: "5%"}]}>
                <Text style={{alignSelf:"center", left:"30%"}} >Used time: 10 years</Text>
            </View>
            <Text style={[Calculation.textBase, {left:"6%", top:"27%"}]}>Electricity Settings</Text>
            <Text style={[Calculation.textBase1,{left:"6%", top:"29.5%",}]}>Specification 1</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"55%", width:"90%", height: "5%"}]}>
                <TextInput
                    placeholder="Electricity price per kWh in your area (US Dollar)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <Text style={[Calculation.textBase1,{left:"6%", top:"38%",}]}>Specification 2</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"66%", width:"90%", height: "5%"}]}>
                <TextInput  
                    placeholder="Estimate your electricity bill per month (US Dollar)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <TouchableOpacity style={Calculation.DoneBut} onPress={() => console.log('CalCulation Time!!')}>
                <Text style={{alignSelf:"center", color:"#fff", fontSize:16, fontWeight:"normal"}}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}


function CusCal({navigation : {navigate}}) {
    return (
        <View style={Calculation.container}>
            <Image resizeMode={"contain"} style={{alignSelf:"flex-start", left:"6%", top:"6%", width:"2%"}} source={require('./assets/arrow.png')}/>
            <Text style={Calculation.h1} onPress={()=> navigate('Choose') }>Back</Text>
            <Text style={[Calculation.textBase, {left:"6%", top:"8%"}]}>Panel Specification</Text>
            <Text style={[Calculation.textBase1,{left:"6%", top:"10%",}]}>Specification 1</Text>
            <View style={[Calculation.textBox, {top:"23%", width:"90%", height: "5%"}]}>
                <TextInput  
                    placeholder="Power at Maximum Power Point (MPP)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <Text style={[Calculation.textBase1,{left:"6%", top:"18%",}]}>Specification 2</Text>
            <Text style={[Calculation.textBase1,{left:"55%", top:"15.5%",}]}>Specification 3</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"34%", width:"40%", height: "5%"}]}>
                <TextInput  
                    placeholder="Area of panels (m^2)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <View style={[Calculation.textBox, {left: "55%" , top:"34%", width:"40%", height: "5%"}]}>
                <TextInput  
                    placeholder="Used time (Year)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <Text style={[Calculation.textBase, {left:"6%", top:"27%"}]}>Electricity Settings</Text>
            <Text style={[Calculation.textBase1,{left:"6%", top:"29.5%",}]}>Specification 1</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"55%", width:"90%", height: "5%"}]}>
                <TextInput  
                    placeholder="Electricity price per kWh in your area (US Dollar)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <Text style={[Calculation.textBase1,{left:"6%", top:"38%",}]}>Specification 2</Text>
            <View style={[Calculation.textBox, {left: "5%" , top:"66%", width:"90%", height: "5%"}]}>
                <TextInput  
                    placeholder="Estimate your electricity bill per month (US Dollar)" 
                    style={{alignSelf:"center", left:"30%"}} />
            </View>
            <TouchableOpacity style={Calculation.DoneBut} onPress={() => console.log('CalCulation Time!!')}>
                <Text style={{alignSelf:"center", color:"#fff", fontSize:16, fontWeight:"normal"}}>Done</Text>
            </TouchableOpacity>
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

const Calculation = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        alignItems:"center",
    },
    textBase:{
        fontSize: 24,
        fontWeight: "bold",
        alignSelf: "flex-start",
        color: "#000",
    },
    textBase1:{
        fontSize: 14,
        color:"#555555",
        fontWeight: "normal",
        alignSelf: "flex-start",
    },
    DoneBut:{
        backgroundColor:"#233E8B",
        borderRadius:16,
        position:"absolute",
        top: "77%",
        height:"5.5%",
        width: "65%",
        alignSelf:"center",
        justifyContent:"center",
    },
    textBox:{
        flexDirection:"row",
        backgroundColor: "#ECECEC",
        borderRadius: 6,
        position: "absolute",
        alignSelf: "center",
    },
    h1: {
        fontWeight: "bold",
        fontSize: 18,
        color: "black",
        alignSelf: "flex-start",
        top: "3%",
        left: "10%",
        letterSpacing: 0.15,
      },

})

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
