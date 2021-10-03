import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryGroup,
  VictoryBar,
  VictoryVoronoiContainer,
  VictoryAxis,
  VictoryBrushContainer,
  createContainer,
  VictoryLabel,
  VictoryTooltip,
  VictoryLegend,
} from "victory-native";
import _ from "lodash";

import DataGetter from "../dataGetter";
import loadingIndicator from "./loadingIndicator";

export default class HourlyGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  transformData() {
    const { data } = this.props;
    if (data.length != 0 && this.state.data.length == 0) {
      //console.log(`Data gotten!`);
      //console.log(data);
      const d = data.properties.parameter;
      let desiredData = DataGetter.formatHourlyData(d);
      this.setState({
        data: desiredData,
      });
      console.log("=Updating hourly graph...");
      this.forceUpdate();
    }
  }

  //will run if new props passing in
  componentDidUpdate() {
    this.transformData();
    console.log("=Hourly graph update DONE.");
  }

  componentDidMount() {
    console.log(`Mounted Hourly graph`);
    this.transformData();

    // console.log(`Getting data...`);
    // DataGetter.getHourlyData({
    //   startYear: this.props.startTime,
    //   endYear: this.props.endTime,
    //   longitude: this.props.longitude,
    //   latitude: this.props.latitude,
    // })
    //   .then(({ data }) => {
    //     console.log(`Data gotten!`);
    //     const d = data.properties.parameter;
    //     let desiredData = DataGetter.formatHourlyData(d);
    //     this.setState({
    //       data: desiredData,
    //     });
    //     this.forceUpdate();
    //     //console.log(desiredData);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  render() {
    let month = new Array(12);
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mar";
    month[3] = "Apr";
    month[4] = "May";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Oct";
    month[10] = "Nov";
    month[11] = "Dec";

    const m = this.props.month;
    return (
      <View
        style={[
          styles.backgrond,
          {
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : styles.backgrond.backgroundColor,
          },
        ]}
      >
        {this.state.data.length != 0 ? (
          <VictoryChart
            height={300}
            theme={VictoryTheme.material}
            //scale={{ x: "time" }}
            standalone={true}
            maxDomain={{ y: 20 }}
            containerComponent={
              <VictoryVoronoiContainer
                labels={function ({ datum }) {
                  const oriHour =
                    Math.floor(datum["localHour"] / 12) == 1 &&
                    datum["localHour"] - 12 == 0
                      ? 24
                      : datum["localHour"];
                  const hour =
                    Math.floor(datum["localHour"] / 12) == 0
                      ? `${oriHour}am`
                      : `${oriHour - 12}pm`;
                  return `${hour}: ${datum[m]}`;
                }}
              />
            }
          >
            <VictoryAxis
              // tickFormat={(datum) => {
              //   console.log(datum);
              //   const oriHour =
              //     Math.floor(datum["localHour"] / 12) == 1 &&
              //     datum["localHour"] - 12 == 0
              //       ? 24
              //       : datum["localHour"];
              //   const hour =
              //     Math.floor(datum["localHour"] / 12) == 0
              //       ? `${oriHour}am`
              //       : `${oriHour - 12}pm`;
              // }}
              // tickLabelComponent={
              //   <VictoryLabel
              //     angle={-15}
              //     //dx={-20}
              //   />
              // }
              label={"Hour"}
              //tickCount={12}
              tickValues={[0, 4, 8, 12, 16, 20, 24]}
              style={{ axisLabel: { fontSize: 15, padding: 35 } }}
              fixLabelOverlap={true}
            />

            <VictoryAxis
              dependentAxis
              offsetX={48}
              label={DataGetter.getUnit("ALLSKY_SFC_SW_DWN")}
              style={{ axisLabel: { fontSize: 15, padding: 30 } }}
            />

            {/* <VictoryLegend
            x={125}
            y={10}
            orientation="horizontal"
            gutter={20}
            //style={{ border: { stroke: "black" } }}
            colorScale={["#586B9F", "#7791D9", "#233E8B"]}
            data={[
              { name: `${this.props.endTime.substr(0, 4) - 2}` },
              { name: `${this.props.endTime.substr(0, 4) - 1}` },
              { name: `${this.props.endTime.substr(0, 4)}` },
            ]}
          /> */}

            <VictoryLine
              // style={{
              //   data: { stroke: "#c43a31" },
              //   parent: { border: "1px solid #ccc" },
              // }}

              interpolation="natural"
              data={this.state.data}
              x={"localhour"}
              y={this.props.month}
            />
          </VictoryChart>
        ) : (
          loadingIndicator()
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgrond: {
    //flex: 1,
    // //flexDirection: "row",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#fff",
    // width: "100%",
    //height: 200,
    //paddingTop: -10,
  },
});
