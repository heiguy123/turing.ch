import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryZoomContainer,
  VictoryAxis,
  VictoryBrushContainer,
  createContainer,
  VictoryLabel,
  material,
} from "victory-native";
import _ from "lodash";

import DataGetter from "../dataGetter";
import loadingIndicator from "./loadingIndicator";

const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

export default class DailyGraph extends Component {
  constructor(props) {
    console.log("Constructing daily graph...");
    super(props);
    this.state = {
      data: [],
      highestY: 1,
      smallestY: 1,
    };
  }

  transformData() {
    const { data } = this.props;
    if (data.length && this.state.data.length == 0) {
      console.log("=Transforming daily data...");
      const entireDom = this.getEntireDomain(data);
      const zoomDom = this.getZoomDomain(data);
      this.setState({
        data: data,
        zoomDomain: zoomDom,
        entireDomain: entireDom,
        zoomedXDomain: entireDom.x,
      });
      console.log("Updating daily graph...");
      this.forceUpdate();
    }
  }

  componentDidUpdate() {
    this.transformData();
    console.log("=Daily graph update DONE.");
  }

  componentDidMount() {
    console.log("=Mounted daily graph");
    this.transformData();
    this._isMounted = true;
    // // if (!this.state.data) {
    // //get the daily data
    // console.log(`Getting data...`);
    // DataGetter.getDailyData({
    //   startTime: this.props.startTime,
    //   endTime: this.props.endTime,
    //   longitude: this.props.longitude,
    //   latitude: this.props.latitude,
    // })
    //   .then(({ data }) => {
    //     console.log(`Data gotten!`);
    //     //console.log(data);
    //     const entireDom = this.getEntireDomain(data);
    //     const zoomDom = this.getZoomDomain(data);
    //     // const highestData = _.maxBy(data, (d) => d[this.props.param])[
    //     //   this.props.param
    //     // ];
    //     // const minData = _.minBy(data, (d) => d[this.props.param])[
    //     //   this.props.param
    //     // ];
    //     this.setState({
    //       data: data,
    //       zoomDomain: zoomDom,
    //       entireDomain: entireDom,
    //       zoomedXDomain: entireDom.x,
    //       //highestY: highestData,
    //       //smallestY: minData,
    //     });
    //     //console.log(this.state.data);
    //     //console.log(entireDom);
    //     //console.log(zoomDom);
    //     this.forceUpdate();
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // // }
  }

  componentWillUnmount() {
    console.log("=Daily Graph unmounted");
    this._isMounted = false;
  }

  handleZoom(domain) {
    this.setState({
      zoomedXDomain: domain.x,
    });
  }

  //   handleBrush(domain) {
  //     this.setState({ zoomDomain: domain });
  //   }

  getData() {
    const { zoomedXDomain, data } = this.state;
    const { maxPoints } = this.props;

    // // remove this line below to resume large dataset handling
    //return data;

    if (!data || !zoomedXDomain) {
      return [];
    }

    const da = data.filter(
      // is d "between" the ends of the visible x-domain?
      (d) => {
        const date = new Date(d.YEAR, d.MO - 1, d.DY);
        return date >= zoomedXDomain[0] && date <= zoomedXDomain[1];
      }
    );

    if (da.length > maxPoints) {
      const k = Math.ceil(da.length / maxPoints);
      return da.filter((d, i) => i % k === 0);
    }

    return da;
  }

  //get the entire domain
  getEntireDomain(data) {
    // const { data } = state;
    if (data.length && data[0][this.props.param]) {
      return {
        y: [
          _.minBy(data, (d) => d[this.props.param])[this.props.param],
          _.maxBy(data, (d) => d[this.props.param])[this.props.param],
        ],
        x: [
          new Date(data[0].YEAR, data[0].MO - 1, data[0].DY),
          new Date(
            data[data.length - 1].YEAR,
            data[data.length - 1].MO - 1,
            data[data.length - 1].DY
          ),
        ],
      };
    }
    //console.log(temp);
    return {
      x: data.length
        ? [
            new Date(data[0].YEAR, data[0].MO - 1, data[0].DY),
            new Date(
              data[data.length - 1].YEAR,
              data[data.length - 1].MO - 1,
              data[data.length - 1].DY
            ),
          ]
        : [1, 10],
      y: [1, 10],
    };
  }

  //get the domain of 31 days
  getZoomDomain(data) {
    // const { data } = state;
    //to calculate 31 days in ms
    const daysInMs = 31 * 24 * 60 * 60 * 1000;
    const lastDate = data.length
      ? new Date(
          data[data.length - 1].YEAR,
          data[data.length - 1].MO - 1,
          data[data.length - 1].DY
        )
      : new Date();

    if (data.length && data[0][this.props.param]) {
      return {
        y: [
          _.minBy(data, (d) => d[this.props.param])[this.props.param],
          _.maxBy(data, (d) => d[this.props.param])[this.props.param],
        ],
        x: [new Date(lastDate.getTime() - daysInMs), lastDate],
      };
    }
    return {
      y: [1, 10],
      x: [new Date(lastDate.getTime() - daysInMs), lastDate],
    };
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
            domain={this.state.entireDomain}
            // maxDomain={{ y: this.state.highestY * 1.05 }}
            // minDomain={{ y: this.state.smallestY * 0.95 }}
            scale={{ x: "time" }}
            standalone={true}
            theme={VictoryTheme.material}
            containerComponent={
              <VictoryZoomVoronoiContainer
                //allowZoom={false}
                //downsample={5}
                minimumZoom={{ x: 7 * 24 * 60 * 60 * 1000, y: 0.01 }} //minimum zoom for x is 7 days in ms, for y is 0
                zoomDimension="x"
                zoomDomain={this.state.zoomDomain}
                voronoiPadding={5}
                labels={({ datum }) => {
                  return `${datum["DY"]}/${datum["MO"]}/${datum["YEAR"]
                    .toString()
                    .substring(0, 2)}: ${datum[this.props.param]?.toString()}`;
                }}
                onZoomDomainChange={this.handleZoom.bind(this)}
              />
            }
          >
            <VictoryAxis
              tickFormat={(x) => {
                const d = new Date(x);
                return `${
                  month[d.getMonth()]
                } ${d.getDate()}, ${d.getFullYear()}`;
              }}
              tickLabelComponent={
                <VictoryLabel
                  angle={-15}
                  //dx={-20}
                />
              }
              //label={"Time"}
              //tickCount={7}
              style={{ axisLabel: { fontSize: 15, padding: 35 } }}
              fixLabelOverlap={true}
            />

            <VictoryAxis
              dependentAxis
              label={DataGetter.getUnit(this.props.param)}
              style={{ axisLabel: { fontSize: 15, padding: 35 } }}
            />
            <VictoryLine
              // style={{
              //   data: { stroke: "#c43a31" },
              //   parent: { border: "1px solid #ccc" },
              // }}
              x={(d) => {
                const { YEAR, MO, DY } = d;
                return new Date(YEAR, MO - 1, DY);
              }}
              y={(d) => {
                return d[this.props.param] ? d[this.props.param] : 0;
              }}
              data={this.getData()}
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
        {/* <VictoryChart
          scale={{ x: "time" }}
          //padding={{ top: 0, left: 50, right: 50, bottom: 30 }}
          containerComponent={
            <VictoryBrushContainer
              //responsive={false}
              brushDimension="x"
              brushDomain={this.state.selectedDomain}
              onBrushDomainChange={this.handleBrush.bind(this)}
            />
          }
        >
          <VictoryAxis tickFormat={(x) => new Date(x).getFullYear()} />
          <VictoryLine
            style={{
              data: { stroke: "tomato" },
            }}
            data={
              this.state.data
              //   [
              //     { x: 1, y: 2 },
              //     { x: 2, y: 3 },
              //     { x: 3, y: 5 },
              //     { x: 4, y: 4 },
              //     { x: 5, y: 6 },
              //   ]
            }
            x={(d) => {
              const { YEAR, MO, DY } = d;
              return new Date(YEAR, MO - 1, DY - 1);
            }}
            y=this.props.param
          />
        </VictoryChart> */}
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
