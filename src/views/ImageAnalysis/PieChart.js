import React from "react";
import { useEffect } from "react";
import Plot from "react-plotly.js";

export default function PieChart(props) {

    useEffect(()=>{
        console.log(props.data)
    })
    var layout = {
        height: document.innerHeight,
        width: document.innerWidth
      };

      var data = [{
        values: props.data,
        labels: props.data,
        hole: .7,
        type: "pie"
    }]

    return (
        <Plot data={[{
            values: [1,2,3,4,5,6,7,8,9,10],
            labels: props.data,
            hole: .7,
            type: "pie",
            marker: {
                colors: props.data
            } 
        }]} layout={layout} />
    )
}