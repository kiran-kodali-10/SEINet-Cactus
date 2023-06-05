import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
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


