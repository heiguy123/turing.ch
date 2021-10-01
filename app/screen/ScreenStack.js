import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorPage from "./CalculatorPage";
import DefCal from "./DefCal";
import CusCal from "./CusCal";
import { NavigationContainer } from "@react-navigation/native";


const screens ={
    calculator: {
        screen : CalculatorPage
    },
    Default: {
        screen : DefCal 
    },
    Customise: {
        screen : CusCal
    }
}
const screenstack = createStackNavigator(screens) 

export default createAppContainer(screenstack)