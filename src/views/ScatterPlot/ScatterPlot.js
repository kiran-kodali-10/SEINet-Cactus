import { Grid } from "@material-ui/core";
import Processors from 'kepler.gl/processors';
import * as d3 from 'd3';
import React from "react";
import { useEffect } from "react";
import SCATTER_PLOT from "../../data/scatter-plot.csv";
import { useState } from "react";
import Plot from "react-plotly.js";

export default function ScatterPlot(props) {

    var trace1 = {
        x: ['acanthocarpa', 'acanthocarpa', 'echinocarpa', 'aurea', 'aurea', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'vivipara', 'basilaris', 'fragilis', 'fragilis', 'fragilis', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'polyacantha', 'engelmannii', 'pulchella', 'pulchella', 'vivipara', 'engelmannii', 'engelmannii', 'engelmannii', 'engelmannii', 'phaeacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'polyacantha', 'coccineus', 'coccineus', 'coccineus', 'coccineus', 'coccineus', 'coccineus', 'pubispinus'],
        y: [5400.0, 4940.0, 3950.0, 5800.0, 6000.0, 5214.0, 5359.0, 5883.0, 6806.0, 6209.0, 5287.0, 5576.0, 6298.0, 6010.0, 5099.0, 6500.0, 6002.0, 5500.0, 8397.0, 6255.0, 7462.0, 6068.0, 7510.0, 3292.0, 5420.0, 7000.0, 7100.0, 5289.0, 5232.0, 5117.0, 6010.0, 6600.0, 3950.0, 3804.0, 5287.0, 5550.0, 6500.0, 5396.0, 6486.0, 6361.0, 8528.0, 5400.0, 5360.0, 8273.0, 3804.0, 5400.0, 5400.0, 5350.0, 6000.0, 6500.0, 5350.0, 5543.0, 5543.0, 5379.0, 7544.0, 6068.0],
        name: 'Utah',
        type: 'scatter',
        mode: 'markers'
    };
    var trace2 = {
        x: ['acanthocarpa', 'spinosior', 'chlorotica', 'macrorhiza', 'phaeacantha', 'phaeacantha', 'phaeacantha', 'triglochidiatus', 'engelmannii', 'acanthocarpa', 'engelmannii', 'vivipara', 'pottsii', 'fulgida', 'fulgida', 'decumbens', 'decumbens', 'salmiana'],
        y: [4000.0, 4000.0, 5960.0, 4620.0, 3300.0, 4000.0, 3048.0, 7000.0, 4000.0, 3670.0, 7228.0, 5600.0, 4260.0, 3658.0, 3658.0, 4625.0, 4625.0, 4625.0],
        name: 'Arizona',
        type: 'scatter',
        mode: 'markers'
    };
    var trace3 = {
        x: ['chlorotica', 'chlorotica', 'phaeacantha', 'grahamii', 'vivipara', 'engelmannii', 'phaeacantha', 'phaeacantha', 'simpsonii', 'viridiflorus', 'clavata'],
        y: [5000.0, 4600.0, 4950.0, 5100.0, 4700.0, 5000.0, 5400.0, 5400.0, 3170.0, 5800.0, 6120.0],
        name: 'New Mexico',
        type: 'scatter',
        mode: 'markers'
    };
    var trace4 = {
        x: ['coccineus', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'simpsonii', 'polyacantha', 'triglochidiatus', 'heacockiae'],
        y: [3049.0, 3048.0, 3098.0, 3084.0, 3018.0, 3048.0, 3353.0, 5000.0, 3048.0, 9340.0],
        name: 'Colorado',
        type: 'scatter',
        mode: 'markers'
    }; 
    var trace5 = {
        x: ['simpsonii', 'simpsonii', 'engelmannii', 'simpsonii'],
        y: [3353.0, 3348.0, 4800.0, 3292.0],
        name: 'Nevada',
        type: 'scatter',
        mode: 'markers'
    }; 
    var trace6 = {
        x: ['pectinatus', 'camanchica', 'schottii', 'coccineus'],
        y: [4100.0, 4100.0, 3050.0, 3500.0],
        name: 'Texas',
        type: 'scatter',
        mode: 'markers'
    };
    var trace7 = {
        x: ['polyacantha', 'munzii'],
        y: [3102.0, 3449.0],
        name: 'California',
        type: 'scatter',
        mode: 'markers'
    };

    var data = [trace1, trace2, trace3, trace4, trace5, trace6, trace7]

    return (
        <Plot
            data={data}
            layout={
                {
                    height: window.innerHeight,
                    width: window.innerWidth,
                    scattermode: 'group',
                    title: 'Cacti Growing above 3000m in the US',
                    xaxis: { title: 'Species' },
                    yaxis: { title: 'Elevation' },
                }
            }
        />
    )
}