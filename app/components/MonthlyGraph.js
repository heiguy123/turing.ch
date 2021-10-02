import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
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
import colors from "../../config/colors";

import DataGetter from "../dataGetter";
import loadingIndicator from "./loadingIndicator";

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

export default class MonthlyGraph extends Component {
  constructor(props) {
    super(props);
    console.log(`Constructing monthly graph`);
    //console.log(this.props.data);
    this._isMounted = false;
    this.state = {
      currentData: [],
      prevData: [],
      prevPrevData: [],
      highestY: 1,
      smallestY: 1,
    };
  }

  transformData() {
    let endT = this.props.endTime;
    //console.log(`Start time: ${this.props.startTime}`);
    //console.log(`Start time: ${endT}`);
    const { data } = this.props;
    //console.log(data);

    if (data.length != 0 && this.state.currentData.length == 0) {
      console.log("=transforming data");
      //data transforming process
      let desiredData = DataGetter.formatMonthlyData(data, this.props.param);
      const currentYear = endT.substr(0, 4);
      const highestData = _.maxBy(desiredData, (d) => d["DATA"])["DATA"];
      const minData = _.minBy(desiredData, (d) => d["DATA"])["DATA"];
      this._isMounted &&
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
          highestY: highestData,
          smallestY: minData,
        });
      console.log("=Updating monthly graph...");
      this.forceUpdate();
    }
  }

  // static getDerivedStateFromProps(props, state) {
  //   this.setState({ data: nextProps.data });
  // }
  componentDidUpdate() {
    this.transformData();
    console.log("=Monthly graph update DONE.");
  }

  componentDidMount() {
    console.log("=Mounted monthly graph");
    this._isMounted = true;
    this.transformData();
    // let endT = this.props.endTime;
    // const { data } = this.props;
    // console.log(data);
    // if (data.length != 0) {
    //   console.log("=transforming data");
    //   //data transforming process
    //   let desiredData = DataGetter.formatMonthlyData(data, this.props.param);
    //   const currentYear = endT.substr(0, 4);
    //   const highestData = _.maxBy(desiredData, (d) => d["DATA"])["DATA"];
    //   const minData = _.minBy(desiredData, (d) => d["DATA"])["DATA"];
    //   this._isMounted &&
    //     this.setState({
    //       currentData: desiredData.filter((d) => {
    //         return d.YEAR == currentYear;
    //       }),
    //       prevData: desiredData.filter((d) => {
    //         return d.YEAR == currentYear - 1;
    //       }),
    //       prevPrevData: desiredData.filter((d) => {
    //         return d.YEAR == currentYear - 2;
    //       }),
    //       highestY: highestData,
    //       smallestY: minData,
    //     });
    //   console.log("=force update");
    //   this.forceUpdate();
    // }

    //       // console.log(this.state.prevPrevData);
    //       // console.log("===");
    //       // console.log(this.state.prevData);
    //       // console.log("===");
    //       // console.log(this.state.currentData);
    //       // console.log("===");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });

    // this._isMounted = true;
    // console.log(`Getting data...`);
    // let endT = this.props.endTime;
    // this._isMounted &&
    //   DataGetter.getMonthlyData({
    //     startTime: this.props.startTime,
    //     endTime: this.props.endTime,
    //     longitude: this.props.longitude,
    //     latitude: this.props.latitude,
    //   })
    //     .then(({ data }) => {
    //       console.log(`Data gotten!`);
    //       // console.log(data);
    //       let desiredData = DataGetter.formatMonthlyData(
    //         data,
    //         this.props.param
    //       );
    //       const currentYear = endT.substr(0, 4);
    //       const highestData = _.maxBy(desiredData, (d) => d["DATA"])["DATA"];
    //       const minData = _.minBy(desiredData, (d) => d["DATA"])["DATA"];
    //       this._isMounted &&
    //         this.setState({
    //           currentData: desiredData.filter((d) => {
    //             return d.YEAR == currentYear;
    //           }),
    //           prevData: desiredData.filter((d) => {
    //             return d.YEAR == currentYear - 1;
    //           }),
    //           prevPrevData: desiredData.filter((d) => {
    //             return d.YEAR == currentYear - 2;
    //           }),
    //           highestY: highestData,
    //           smallestY: minData,
    //         });
    //       this.forceUpdate();
    //       // console.log(this.state.prevPrevData);
    //       // console.log("===");
    //       // console.log(this.state.prevData);
    //       // console.log("===");
    //       // console.log(this.state.currentData);
    //       // console.log("===");
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
  }

  componentWillUnmount() {
    console.log("=Monthly Graph unmounted");
    this._isMounted = false;
  }

  renderChart() {
    return (
      <VictoryChart
        height={300}
        maxDomain={{ y: this.state.highestY * 1.05 }}
        minDomain={{ y: this.state.smallestY * 0.95 }}
        //padding={{ top: 20 }}
        //minDomain={{ y: 2 }}
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
      </VictoryChart>
    );
  }

  render() {
    return (
      <View
        style={[
          styles.backgrond,
          {
            backgroundColor: this.props.backgroundColor
              ? this.props.backgroundColor
              : styles.backgrond.backgroundColor,
            justifyContent: "flex-start",
          },
        ]}
      >
        {this.state.currentData.length != 0
          ? this.renderChart()
          : loadingIndicator()}
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
