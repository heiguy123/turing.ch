import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import CalculatorPage from "./CalculatorPage";


const screens ={
    calculator: {
        screen : CalculatorPage
    },

}
const screenstack = createStackNavigator(screens) 

export default createAppContainer(screenstack)