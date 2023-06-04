// import React from "react";
// import * as d3 from "d3";
// import { newPlot } from "plotly.js";

// export default function Parcats(props) {

//     // const data = d3.csv("../")

//     var gd = document.getElementById('myDiv');

//     d3.csv(
//         "https://raw.githubusercontent.com/plotly/datasets/master/titanic.csv",
//         function (titanicData) {
//             var classDim = {
//                 values: titanicData.map(function (row) { return row['Pclass'] }),
//                 categoryorder: 'category ascending',
//                 label: "Class"
//             };

//             var genderDim = {
//                 values: titanicData.map(function (row) { return row['Sex'] }),
//                 label: "Gender"
//             };

//             var survivalDim = {
//                 values: titanicData.map(function (row) { return row['Survived'] }),
//                 label: "Outcome",
//                 categoryarray: [0, 1],
//                 ticktext: ['perished', 'survived'],
//             };

//             var color = survivalDim.values;
//             var colorscale = [[0, 'lightsteelblue'], [1, 'mediumseagreen']];

//             // Build Traces
//             var traces = [
//                 {
//                     type: 'parcats',
//                     dimensions: [classDim, genderDim, survivalDim],
//                     line: {
//                         color: color,
//                         colorscale: colorscale
//                     },
//                     hoveron: 'color',
//                     hoverinfo: 'count+probability',
//                     labelfont: { size: 14 },
//                     arrangement: 'freeform'
//                 }
//             ];

//             var layout = { width: 600 };

//             // Make plot
//             newPlot('myDiv', traces, layout)
//         });

//     return (
//         <div id="myDiv"></div>
//     )

// }

import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
// import 'plotly.js/src/css/style.css';
import * as d3 from 'd3';
import SANKEY_DATA from '../../data/sankey.csv';
import Processors from 'kepler.gl/processors';

const readCSVFile = (filePath) => {
    return new Promise((resolve, reject) => {
        d3.csv(filePath)
            .then((data) => resolve(data))
            .catch((error) => reject(error));
    });
};

export default function MultiColorParallelCategories() {

    const [parcatsData, setParcatsData] = useState({
        'identifiedBy': [],
        'year': [],
        'specificEpithet': [],
        'colorForIdentified': []
    });
    
    useEffect(() => {
        const csvData = Processors.processCsvData(SANKEY_DATA);
        // console.log(csvData["rows"])
        const temp = {...parcatsData}
        csvData["rows"].map((data) => {
            // console.log(`data: ${data[3]} `);
            temp.identifiedBy.push(data[2]);
            temp.year.push(data[3]);
            temp.specificEpithet.push(data[4]);
            if(data[2] === "M. Baker") temp.colorForIdentified.push(1)
            else temp.colorForIdentified.push(0);
        })
        setParcatsData(temp);
    }, []);

    var color = parcatsData.colorForIdentified;

    var colorscale = [[0, 'chestnut brown'], [1, 'mediumseagreen']];

    const data = [
        {
            type: "parcats",
            dimensions: [
                {
                    label: 'Identified By',
                    values: parcatsData.identifiedBy,
                },
                {
                    label: 'Year',
                    values: parcatsData.year,
                },
                {
                    label: 'Specific Epithet',
                    values: parcatsData.specificEpithet,
                },
                // Add more dimensions as needed
            ],
            line: {
                  color: color,
                // showscale: true,
                colorscale: colorscale,
            },
        },
    ];
    return (
        <div>
            <Plot
                data={data}
                layout={{ width: window.innerWidth, height: window.innerHeight, title: "Cacti Discovered after 2000 " }}
            />
        </div>
    );
};

;


