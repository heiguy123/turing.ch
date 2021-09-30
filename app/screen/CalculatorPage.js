import { resetWarningCache } from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Pressable } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
var Def = false, Cuz = false;
function defaultorcus (input){
        if (input == 1){
            return { "Def":true, "Cuz" : false};
        }
        else{
            return { "Cuz" : true, "Def" : false};
        }
}

function CalculatorPage(props) {

    return (
        <View style={styles.container}>
           <Text style={styles.textBase}>Choose your{"\n"}
            <Text style={{color:"#FFB319",}}>Solar Panel{"\n"}</Text>
            <Text style={styles.textBase2}>{"\n"}We show you all related records from the{"\n"}given timeframe.</Text>
           </Text>
           <View style={styles.container2}>
                <TouchableOpacity style={styles.smallContainer} onPress={defaultorcus(1)} />
                <TouchableOpacity style={styles.smallContainer2} onPress={defaultorcus(2)} />
           </View>
           <TouchableOpacity style={styles.conBut} onPress={()=> console.log("Pressed")}>
                <Text style={{color:"#fff", fontSize:20}}>Continue</Text>
           </TouchableOpacity>
           
           <View style={styles.menubar}></View>  

            
        </View>
       
        
    );
}const styles = StyleSheet.create({
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
        backgroundColor: Def ? "#fff":"#000",
        width: "45%",
        height: "100%",
        position:"absolute",
        alignSelf: "flex-start",
    },
    smallContainer2:{
        backgroundColor: Cuz ? "#fff":"#000",
        width: "45%",
        height: "100%",
        position:"absolute",
        alignSelf: "flex-end",
    },
    textBase:{
        fontWeight:"bold",
        fontSize: 50 ,
        position: "absolute",
        top: "12%",
        textAlign:"center",
    },
    textBase2:{
        fontWeight: "normal" ,
        fontSize: 15,
        position: "absolute",
        lineHeight:20,
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
export default CalculatorPage;