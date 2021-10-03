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
  VictoryCursorContainer,
  VictoryLegend,
} from "victory-native";
import _ from "lodash";

import DataGetter from "../dataGetter";
import loadingIndicator from "./loadingIndicator";

export default class OverviewGraph extends Component {
  constructor(props) {
    super(props);
    console.log("Constructing overview graph");
    this.state = {
      data: [],
      highestY: 1,
      smallestY: 1,
    };
  }

  transformData() {
    let endT = this.props.endTime;
    const { data } = this.props;
    if (data.length != 0 && this.state.data.length == 0) {
      let d = data.properties.parameter;
      let desiredData = DataGetter.filterOverViewData(d, this.props.param);
      const highestData = _.maxBy(desiredData, (d) => d.data).data;
      const minData = _.minBy(desiredData, (d) => d.data).data;
      //console.log(highestData);
      this.setState({
        data: desiredData,
        highestY: highestData,
        smallestY: minData,
      });
      console.log("=Updating overview graph...");
      this.forceUpdate();
    }
  }

  //will run if new props passing in
  componentDidUpdate() {
    this.transformData();
    console.log("=Overview graph update DONE.");
  }

  componentDidMount() {
    console.log(`Mounted overview graph`);
    this.transformData();

    // DataGetter.getOverViewData({
    //   longitude: this.props.longitude,
    //   latitude: this.props.latitude,
    // })
    //   .then(({ data }) => {
    //     console.log(`Data gotten!`);
    //     let d = data.properties.parameter;
    //     let desiredData = DataGetter.filterOverViewData(d, this.props.param);
    //     const highestData = _.maxBy(desiredData, (d) => d.data).data;
    //     const minData = _.minBy(desiredData, (d) => d.data).data;
    //     //console.log(highestData);
    //     this.setState({
    //       data: desiredData,
    //       highestY: highestData,
    //       smallestY: minData,
    //     });
    //     this.forceUpdate();
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
            maxDomain={{ y: this.state.highestY * 1.05 }}
            minDomain={{ y: this.state.smallestY * 0.95 }}
            //maxDomain={{ y: 6.5 }}
            theme={VictoryTheme.material}
            //minDomain={{ y: 0.2 }}
            //scale={{ x: "time" }}
            standalone={true}
            containerComponent={
              <VictoryVoronoiContainer
                //voronoiPadding={5}
                labels={({ datum }) => {
                  //console.log(datum);
                  return `${month[datum.month - 1]}:${datum.data}`;
                }}
              />
            }
          >
            <VictoryAxis
              //minDomain={{ x: -1 }}
              tickFormat={(x) => {
                const d = new Date(x);
                const label = month[x - 1] ? month[x - 1] : "";
                return `${label}`;
              }}
              tickLabelComponent={
                <VictoryLabel
                  angle={-15}
                  //dx={-20}
                />
              }
              //label={"Month"}
              tickCount={12}
              style={{ axisLabel: { fontSize: 15, padding: 35 } }}
              fixLabelOverlap={true}
            />

            <VictoryAxis
              dependentAxis
              offsetX={48}
              label={DataGetter.getUnit(this.props.param)}
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

            {/* <VictoryBar
            domain={{ x: [0, 13] }}
            data={this.state.data}
            x={"month"}
            y={"data"}
          /> */}

            <VictoryLine
              x={"month"}
              y={"data"}
              data={this.state.data}
              // x={(d) => {
              //   const { YEAR, MO, DY } = d;
              //   return new Date(YEAR, MO - 1, DY);
              // }}
              // y={this.props.param}
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
    // flex: 1,
    // //flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    // width: "100%",
    // height: "100%",
  },
});
