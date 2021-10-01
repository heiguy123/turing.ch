import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorPage from "./CalculatorPage";
import DefCal from "./DefCal";


const screen ={
    calculator: {
        screen : CalculatorPage 
    },
    Default: {
        screen : DefCal 
    },
}
const screenstack = createStackNavigator(screen) 

export default createAppContainer(screenstack)