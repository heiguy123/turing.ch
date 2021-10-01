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

export default class MonthlyGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentData: [],
      prevData: [],
      prevPrevData: [],
    };
  }

  componentDidMount() {
    console.log(`Getting data...`);
    let endT = this.props.endTime;

    DataGetter.getMonthlyData({
      startTime: this.props.startTime,
      endTime: this.props.endTime,
      longitude: this.props.longitude,
      latitude: this.props.latitude,
    })
      .then(({ data }) => {
        console.log(`Data gotten!`);
        // console.log(data);
        let desiredData = DataGetter.formatMonthlyData(data, this.props.param);
        const currentYear = endT.substr(0, 4);
        this.setState({
          currentData: desiredData.filter((d) => {
            return d.YEAR == currentYear;
          }),
          prevData: desiredData.filter((d) => {
            return d.YEAR == currentYear - 1;
          }),
          prevPrevData: desiredData.filter((d) => {
            return d.YEAR == currentYear - 2;
          }),
        });
        this.forceUpdate();
        // console.log(this.state.prevPrevData);
        // console.log("===");
        // console.log(this.state.prevData);
        // console.log("===");
        // console.log(this.state.currentData);
        // console.log("===");
      })
      .catch((err) => {
        console.log(err);
      });
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
        <VictoryChart
          height={300}
          //minDomain={{ y: 2 }}
          maxDomain={{ y: 6.5 }}
          theme={VictoryTheme.material}
          //minDomain={{ y: 0.2 }}
          //scale={{ x: "time" }}
          standalone={true}
          containerComponent={
            <VictoryCursorContainer
              cursorLabel={({ datum }) => {
                return `                ${datum.y.toPrecision(2)}`;
              }}
            />
          }
        >
          <VictoryAxis
            //minDomain={{ x: -1 }}
            tickFormat={(x) => {
              const d = new Date(x);
              return `${month[x - 1]}`;
            }}
            tickLabelComponent={
              <VictoryLabel
                angle={-15}
                //dx={-20}
              />
            }
            label={"Month"}
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

          <VictoryLegend
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
          />

          <VictoryGroup
            offset={5}
            //minDomain={{ x: -1, y: 2 }}
            colorScale={["#586B9F", "#7791D9", "#233E8B"]}
          >
            <VictoryBar data={this.state.prevPrevData} x={"MONTH"} y={"DATA"} />
            <VictoryBar data={this.state.prevData} x={"MONTH"} y={"DATA"} />
            <VictoryBar data={this.state.currentData} x={"MONTH"} y={"DATA"} />
          </VictoryGroup>
          {/* <VictoryLine
            // style={{
            //   data: { stroke: "#c43a31" },
            //   parent: { border: "1px solid #ccc" },
            // }}
            data={this.state.data}
            x={(d) => {
              const { YEAR, MO, DY } = d;
              return new Date(YEAR, MO - 1, DY);
            }}
            y={this.props.param}
          /> */}
        </VictoryChart>
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
