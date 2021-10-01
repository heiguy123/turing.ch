// import axios from "axios";
const axios = require("axios");
const m = require("./monthlyDataDemo");
const h = require("./hourlyDataDemo");

const DataGetter = {
  unit: {
    TS: { units: "C", longname: "Earth Skin Temperature" },
    CLOUD_AMT: { units: "%", longname: "Cloud Amount" },
    PRECTOTCORR: { units: "mm", longname: "Precipitation Corrected" },
    ALLSKY_SFC_SW_DWN: {
      units: "kW-hr/m^2/day",
      longname: "All Sky Surface Shortwave Downward Irradiance",
    },
  },

  getUnit: function (param) {
    return this.unit[param].units;
  },

  getLongname: function (param) {
    return this.unit[param].longname;
  },

  getDailyData: async function (
    param = {
      longitude: 113.997,
      latitude: 4.372,
      startTime: "20210101",
      endTime: "20210920",
    }
  ) {
    longitude = param.longitude ? param.longitude : 113.997;
    latitude = param.latitude ? param.latitude : 4.372;
    startTime = param.startTime ? param.startTime : "20210901";
    endTime = param.endTime ? param.endTime : "20210920";
    const url = `https://demo-r-solar-data.herokuapp.com/daily?longitude=${longitude}&latitude=${latitude}&startTime=${startTime}&endTime=${endTime}`;
    let res = await axios.get(url);
    //res.unit = this.unit;
    return res;
    //console.log(res.data);
    return res;
  },

  getMonthlyData: async function (
    param = {
      longitude: 113.997,
      latitude: 4.372,
      startTime: "20190101",
      endTime: "20210920",
    }
  ) {
    longitude = param.longitude ? param.longitude : 113.997;
    latitude = param.latitude ? param.latitude : 4.372;
    startTime = param.startTime ? param.startTime : "20210901";
    endTime = param.endTime ? param.endTime : "20210920";
    const url = `https://demo-r-solar-data.herokuapp.com/monthly?longitude=${longitude}&latitude=${latitude}&startTime=${startTime}&endTime=${endTime}`;
    let res = await axios.get(url);
    //res.unit = this.unit;
    return res;
  },

  getHourlyData: async (
    param = {
      longitude: 113.997,
      latitude: 4.372,
      startYear: "2015",
      endYear: "2019",
    }
  ) => {
    longitude = param.longitude ? param.longitude : 113.997;
    latitude = param.latitude ? param.latitude : 4.372;
    startYear = param.startYear ? param.startYear : "2015";
    endYear = param.endYear ? param.endYear : "2019";
    params = "ALLSKY_SFC_SW_DWN_HR";
    const url = `https://power.larc.nasa.gov/api/temporal/climatology/point?start=${startYear}&end=${endYear}&latitude=${latitude}&longitude=${longitude}&community=re&parameters=${params}&format=JSON&header=false`;
    return await axios.get(url);
  },

  formatMonthlyData: (data, param, year) => {
    let monthlyData = data;
    //const param = "ALLSKY_SFC_SW_DWN";
    let newData = [];

    let month = new Array(12);
    month[0] = "JAN";
    month[1] = "FEB";
    month[2] = "MAR";
    month[3] = "APR";
    month[4] = "MAY";
    month[5] = "JUN";
    month[6] = "JUL";
    month[7] = "AUG";
    month[8] = "SEP";
    month[9] = "OCT";
    month[10] = "NOV";
    month[11] = "DEC";

    if (!year) {
      //to get only data for certain parameter
      monthlyData = monthlyData.filter((d) => {
        return d.PARAMETER == param;
      });
    } else {
      //to get only data for certain parameter
      monthlyData = monthlyData.filter((d) => {
        return d.PARAMETER == param && d.YEAR == year;
      });
    }

    monthlyData.forEach((d) => {
      const { PARAMETER, YEAR } = d;
      const len = Object.keys(d).length - 3; //length of months of that data set

      for (let i = 0; i < len; i++) {
        const newSet = {
          PARAMETER: PARAMETER,
          MONTH: i + 1,
          YEAR: YEAR,
          DATA: d[month[i]],
          DATE: new Date(YEAR, i + 1),
        };
        newData.push(newSet);
      }
    });

    //console.log(newData);
    return newData;
  },

  formatHourlyData: (oriData) => {
    const timeZone = -(new Date().getTimezoneOffset() / 60);
    const data = Object.values(oriData);
    const newData = data.map((d, i) => {
      const tempData = {
        localHour: (i + timeZone) % 24,
        1: d.JAN,
        2: d.FEB,
        3: d.MAR,
        4: d.APR,
        5: d.MAY,
        6: d.JUN,
        7: d.JUL,
        8: d.AUG,
        9: d.SEP,
        10: d.OCT,
        11: d.NOV,
        12: d.DEC,
      };
      return tempData;
    });
    return newData.sort((d1, d2) => d1.localHour - d2.localHour);
  },
};

//console.log([ x: {jerry}}, y: {jerry} ]);
export default DataGetter;

// DataGetter.getDailyData().then(({ data }) => {
//   console.log(data);
// });

// DataGetter.getMonthlyData().then(({ data }) => {
//   let de = DataGetter.formatMonthlyData(data, "ALLSKY_SFC_SW_DWN");
//   console.log(
//     de.filter((d) => {
//       return d.YEAR == 2021;
//     })
//   );
// });

// const d = [
//   {
//     PARAMETER: "ALLSKY_SFC_SW_DWN",
//     YEAR: 2021,
//     JAN: 4.2342,
//     FEB: 5.3336,
//     MAR: 5.7539,
//     APR: 6.019,
//     MAY: 5.15,
//     JUN: 5.1285,
//     JUL: 5.2539,
//     AUG: 4.9871,
//     SEP: 4.7812,
//   },
//   {
//     PARAMETER: "TS",
//     YEAR: 2021,
//     JAN: 28.1877,
//     FEB: 27.1586,
//     MAR: 27.9529,
//     APR: 29.477,
//     MAY: 29.9826,
//     JUN: 30.0383,
//     JUL: 29.7884,
//     AUG: 29.7835,
//     SEP: 29.3415,
//   },
//   {
//     PARAMETER: "PRECTOTCORR",
//     YEAR: 2021,
//     JAN: 15.1277,
//     FEB: 4.6104,
//     MAR: 4.1116,
//     APR: 2.2103,
//     MAY: 7.8155,
//     JUN: 6.3887,
//     JUL: 6.5855,
//     AUG: 20.0465,
//     SEP: 17.512,
//   },
// ];

// console.log(typeof DataGetter.formatMonthlyData(d, "ALLSKY_SFC_SW_DWN"));
