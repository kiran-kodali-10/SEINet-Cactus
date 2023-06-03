import KeplerGl from "kepler.gl";
import processors from "kepler.gl/processors";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addDataToMap } from "kepler.gl/actions";
import SPECIES_DATA from "../../data/elevation.csv";

export default function SpeciesMap() {

    var processedData;
    const dispatch = useDispatch();

    const configV2 = {
        "version": "v1",
        "config": {
            "visState": {
                "filters": [],
                "layers": [
                    {
                        "id": "ovawy5q",
                        "type": "point",
                        "config": {
                            "dataId": "species-data",
                            "label": "decimal",
                            "color": [
                                18,
                                147,
                                154
                            ],
                            "columns": {
                                "lat": "decimalLatitude",
                                "lng": "decimalLongitude",
                                "altitude": null
                            },
                            "isVisible": true,
                            "visConfig": {
                                "radius": 10,
                                "fixedRadius": false,
                                "opacity": 0.8,
                                "outline": false,
                                "thickness": 2,
                                "strokeColor": null,
                                "colorRange": {
                                    "name": "ColorBrewer Set1-6",
                                    "type": "qualitative",
                                    "category": "ColorBrewer",
                                    "colors": [
                                        "#e41a1c",
                                        "#377eb8",
                                        "#4daf4a",
                                        "#984ea3",
                                        "#ff7f00",
                                        "#ffff33"
                                    ]
                                },
                                "strokeColorRange": {
                                    "name": "Global Warming",
                                    "type": "sequential",
                                    "category": "Uber",
                                    "colors": [
                                        "#5A1846",
                                        "#900C3F",
                                        "#C70039",
                                        "#E3611C",
                                        "#F1920E",
                                        "#FFC300"
                                    ]
                                },
                                "radiusRange": [
                                    0,
                                    50
                                ],
                                "filled": true
                            },
                            "textLabel": [
                                {
                                    "field": null,
                                    "color": [
                                        255,
                                        255,
                                        255
                                    ],
                                    "size": 18,
                                    "offset": [
                                        0,
                                        0
                                    ],
                                    "anchor": "start",
                                    "alignment": "center"
                                }
                            ]
                        },
                        "visualChannels": {
                            "colorField": {
                                "name": "specificEpithet",
                                "type": "string"
                            },
                            "colorScale": "ordinal",
                            "strokeColorField": null,
                            "strokeColorScale": "quantile",
                            "sizeField": null,
                            "sizeScale": "linear"
                        }
                    }
                ],
                "interactionConfig": {
                    "tooltip": {
                        "fieldsToShow": {
                            "species-data": [
                                "specificEpithet"
                            ]
                        },
                        "enabled": true
                    },
                    "brush": {
                        "size": 0.5,
                        "enabled": false
                    },
                    "coordinate": {
                        "enabled": false
                    }
                },
                "layerBlending": "normal",
                "splitMaps": [],
                "animationConfig": {
                    "currentTime": null,
                    "speed": 1
                }
            },
            "mapState": {
                "bearing": 0,
                "dragRotate": false,
                "latitude": 33.309226053513655,
                "longitude": -112.34035869392407,
                "pitch": 0,
                "zoom": 6.418844125370185,
                "isSplit": false
            },
            "mapStyle": {
                "styleType": "dark",
                "topLayerGroups": {},
                "visibleLayerGroups": {
                    "label": true,
                    "road": true,
                    "border": false,
                    "building": true,
                    "water": true,
                    "land": true,
                    "3d building": false
                },
                "threeDBuildingColor": [
                    9.665468314072013,
                    17.18305478057247,
                    31.1442867897876
                ],
                "mapStyles": {}
            }
        }
    };
    

    useEffect(() => {
        console.log("inside elevation map component")
        processedData = processors.processCsvData(SPECIES_DATA)

        const dataset = {
            data: processedData,
            info: {
                id: "species-data"
            },
            config: configV2,
        }

        dispatch(
            addDataToMap({
                datasets: dataset,
                config: configV2,
                options: {
                    centerMap: true,
                    readOnly: true,
                    currentModal: null
                }
            })
        );
    }, [dispatch, processedData]);

    return (
        <div className="elevated-map-container">
            <KeplerGl
                id="species-data"
                mapboxApiAccessToken="pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja3RpeXhkaXcxNzJtMnZxbmtkcnJuM3BkIn0.kGmGlkbuWaCBf7_RrZXULg"
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    );
}