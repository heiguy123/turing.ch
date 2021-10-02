import * as React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableHighlight,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import colors from "../config/colors";
import fonts, { SIZES } from "../config/fonts";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FontAwesome5 } from "@expo/vector-icons";
import OverviewGraph from "../app/components/OverviewGraph";
import MonthlyGraph from "../app/components/MonthlyGraph";
import DailyGraph from "../app/components/DailyGraph";
import HourlyGraph from "../app/components/HourlyGraph";
import DataGetter from "../app/dataGetter";

export default function ViewGraphIndex({ route, navigation }) {
  const OVERVIEW = "Overview";
  const MONTHLY = "Monthly";
  const DAILY = "Daily";
  const HOURLY = "Hourly";
  let _isMounted = false;
  const [longitude, setLongitude] = React.useState(113.9798);
  const [latitude, setLatitude] = React.useState(3.4345);
  const [graph, setGraph] = React.useState(OVERVIEW);
  const [startTime, setStartTime] = React.useState("20190101");
  const [endTime, setEndTime] = React.useState("20210920");
  const [monthlyData, setMonthlyData] = React.useState([]);
  const [dailyData, setDailyData] = React.useState([]);
  const [overviewData, setOverviewData] = React.useState([]);
  const [hourlyData, sethourlyData] = React.useState([]);
  console.log(`========================\nRefreshing......: ${_isMounted}`);

  React.useEffect(() => {
    _isMounted = true;
    //console.log("Fetching monthly data...");
    console.log(`Effect Used.`);

    if (graph == MONTHLY) initMonthlyGraph();
    if (graph == DAILY) initDailyGraph();
    if (graph == OVERVIEW) initOverviewGraph();
    if (graph == HOURLY) initHourlyGraph();

    checkParams();

    //the return will run when the function component unmount
    return () => {
      DataGetter.checkAndResetCancelToken();
    };
  }, [graph]); //only listen to changes of graph state

  function initOverviewGraph() {
    console.log(`To display ${graph} graph`);
    if (!overviewData.length) {
      console.log("Fetching overview data...");
      DataGetter.getOverViewData({
        longitude: longitude,
        latitude: latitude,
      })
        .then(({ data }) => {
          console.log("Overview data gotten!");
          console.log(`ismounted during callback is ${_isMounted}`);
          _isMounted && setOverviewData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function initMonthlyGraph() {
    console.log(`To display ${graph} graph`);
    if (!monthlyData.length) {
      console.log("Fetching monthly data...");
      DataGetter.getMonthlyData({
        startTime: startTime,
        endTime: endTime,
        longitude: longitude,
        latitude: latitude,
      })
        .then(({ data }) => {
          console.log("Monthly data gotten!");
          console.log(`ismounted during callback is ${_isMounted}`);
          _isMounted && setMonthlyData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function initDailyGraph() {
    console.log(`To display ${graph} graph`);
    //console.log(dailyData);
    if (!dailyData.length) {
      console.log("Fetching daily data...");
      DataGetter.getDailyData({
        startTime: startTime,
        endTime: endTime,
        longitude: longitude,
        latitude: latitude,
      })
        .then(({ data }) => {
          console.log("Daily data gotten!");
          _isMounted && setDailyData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function initHourlyGraph() {
    console.log(`To display ${graph} graph`);
    if (!hourlyData.length) {
      console.log("Fetching hourly data...");
      DataGetter.getHourlyData({
        longitude: longitude,
        latitude: latitude,
      })
        .then(({ data }) => {
          console.log("Hourly data gotten!");
          _isMounted && sethourlyData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function checkParams() {
    let { longitude, latitude, startTime, endTime } = route.params
      ? route.params
      : {};
    if (longitude) setLongitude(longitude);
    if (latitude) setLatitude(latitude);
    if (startTime) setStartTime(startTime);
    if (endTime) setEndTime(endTime);
    //if (graph) setGraph(graph);
  }

  function renderHeader() {
    return (
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: SIZES.padding * 2,
            justifyContent: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5
            name="chevron-left"
            size={SIZES.h4}
            color="black"
            resizeMode="contain"
            style={{
              width: 30,
              height: 30,
              paddingTop: 7,
            }}
          />
        </TouchableOpacity>
        <View>
          <Text style={[fonts.h4]}>Back</Text>
        </View>
      </View>
    );
  }

  function renderTopMenu() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          backgroundColor: colors.lightGray,
          borderRadius: 30,
          marginTop: 40,
          height: 60,
          marginLeft: SIZES.padding * 1.5,
          marginRight: SIZES.padding * 1.5,
          alignItems: "center",
          padding: SIZES.padding,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setGraph(OVERVIEW);
            _isMounted = false;
          }}
          style={[
            graph == OVERVIEW
              ? styles.topMenuButtonActived
              : styles.topMenuButton,
          ]}
        >
          <Text style={[styles.topMenuTitle]}>Overview</Text>
        </TouchableOpacity>

        <TouchableOpacity
          // onPress={() => {
          //   navigation.navigate("ViewGraphMonthly");
          // }}
          onPress={() => {
            _isMounted = false;
            setStartTime("20190101");
            setEndTime("20210920");
            setGraph(MONTHLY);
          }}
          style={[
            graph == MONTHLY
              ? styles.topMenuButtonActived
              : styles.topMenuButton,
          ]}
        >
          <Text style={[styles.topMenuTitle]}>Monthly</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            _isMounted = false;
            setStartTime("20210101");
            setEndTime("20210601");
            setGraph(DAILY);
          }}
          style={[
            graph == DAILY ? styles.topMenuButtonActived : styles.topMenuButton,
          ]}
        >
          <Text style={[styles.topMenuTitle]}>Daily</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            _isMounted = false;
            setStartTime("2015");
            setEndTime("2019");
            setGraph(HOURLY);
          }}
          style={[
            graph == HOURLY
              ? styles.topMenuButtonActived
              : styles.topMenuButton,
          ]}
        >
          <Text style={[styles.topMenuTitle]}>Hourly</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function renderOverViewGraphs() {
    return (
      <ScrollView>
        <View
          style={{
            // justifyContent: "space-evenly",
            //backgroundColor: colors.lightGray,
            marginTop: 20,
            marginHorizontal: SIZES.padding * 1.5,
            //alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.graphTitle}>Solar Irradiance</Text>
            <OverviewGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              data={overviewData}
              param={"ALLSKY_SFC_SW_DWN"}
              //backgroundColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.graphTitle}>Cloud Amount</Text>
            <OverviewGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              data={overviewData}
              param={"CLOUD_AMT"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Temperature</Text>
            <OverviewGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              data={overviewData}
              param={"TS"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Precipitation</Text>
            <OverviewGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              data={overviewData}
              param={"PRECTOTCORR"}
              //backgroundColor={colors.secondary}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  function renderMonthlyGraphs() {
    console.log("rendering graph...");
    //console.log(`data when loading graph is$`);
    //console.log(data[0]);
    return (
      <ScrollView>
        <View
          style={{
            // justifyContent: "space-evenly",
            //backgroundColor: colors.lightGray,
            marginTop: 20,
            marginHorizontal: SIZES.padding * 1.5,
            //alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.graphTitle}>Solar Irradiance</Text>
            <MonthlyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={monthlyData}
              param={"ALLSKY_SFC_SW_DWN"}
              //backgroundColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.graphTitle}>Cloud Amount</Text>
            <MonthlyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={monthlyData}
              param={"CLOUD_AMT_DAY"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Temperature</Text>
            <MonthlyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={monthlyData}
              param={"TS"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Precipitation</Text>
            <MonthlyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={monthlyData}
              param={"PRECTOTCORR"}
              //backgroundColor={colors.secondary}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  function renderDailyGraphs() {
    return (
      <ScrollView>
        <View
          style={{
            // justifyContent: "space-evenly",
            //backgroundColor: colors.lightGray,
            marginTop: 20,
            marginHorizontal: SIZES.padding * 1.5,
            //alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.graphTitle}>Solar Irradiance</Text>
            <DailyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={dailyData}
              param={"ALLSKY_SFC_SW_DWN"}
              //backgroundColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.graphTitle}>Cloud Amount</Text>
            <DailyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={dailyData}
              param={"CLOUD_AMT_DAY"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Temperature</Text>
            <DailyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={dailyData}
              param={"TS"}
              //backgroundColor={colors.secondary}
            />
          </View>

          <View>
            <Text style={styles.graphTitle}>Precipitation</Text>
            <DailyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              data={dailyData}
              param={"PRECTOTCORR"}
              //backgroundColor={colors.secondary}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  function renderHourlyGraphs() {
    const month = new Date().getMonth();
    return (
      <ScrollView>
        <View
          style={{
            // justifyContent: "space-evenly",
            //backgroundColor: colors.lightGray,
            marginTop: 20,
            marginHorizontal: SIZES.padding * 1.5,
            //alignItems: "center",
          }}
        >
          <View>
            <Text style={styles.graphTitle}>Solar Irradiance</Text>
            <HourlyGraph
              maxPoint={150}
              longitude={longitude}
              latitude={latitude}
              startTime={startTime}
              endTime={endTime}
              month={month}
              data={hourlyData}
              //param={"ALLSKY_SFC_SW_DWN"}
              //backgroundColor={colors.secondary}
            />
          </View>
        </View>
      </ScrollView>
    );
  }

  function renderGraphs(graphType) {
    //console.log(graphType);
    if (graphType == OVERVIEW) return renderOverViewGraphs();
    if (graphType == MONTHLY) return renderMonthlyGraphs();
    if (graphType == DAILY) return renderDailyGraphs();
    if (graphType == HOURLY) return renderHourlyGraphs();
  }

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      {renderTopMenu()}
      {renderGraphs(graph)}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
    flex: 1,
    backgroundColor: colors.white,
  },
  button: {
    width: 278,
    height: 46,
    borderWidth: 0,
    borderRadius: 16,
    backgroundColor: colors.secondary,
    justifyContent: "center",
  },
  graphTitle: {
    fontFamily: "Bold",
    fontSize: 16,
    color: colors.black,
    letterSpacing: 0.15,
  },
  sun: {
    width: 70,
    height: 140,
    position: "absolute",
    right: "0%",
    bottom: Dimensions.get("window").height * 0.25,
  },
  smarthome: {
    width: 299,
    height: 242,
    position: "absolute",
    alignSelf: "center",
    bottom: Dimensions.get("window").height * 0.02,
  },
  topMenuTitle: {
    fontFamily: "Bold",
    fontSize: 12,
    color: colors.black,
    textAlign: "center",
    letterSpacing: 0.15,
  },
  topMenuButton: {
    justifyContent: "center",
    borderRadius: 25,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
  topMenuButtonActived: {
    justifyContent: "center",
    borderRadius: 25,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    backgroundColor: colors.white,
  },
});
