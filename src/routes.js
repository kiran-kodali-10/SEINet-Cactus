// import elevatedMap from "./views/elevated-map/elevated-map";
import ImageAnalysis from "./views/ImageAnalysis/ImageAnalyis";
import MultiColorParallelCategories from "./views/Parcats/Parcats";
import ScatterPlot from "./views/ScatterPlot/ScatterPlot";
// import Parcats from "./views/Parcats/Parcats";
import Map from "./views/kepler-maps/Map";
import SpeciesMap from "./views/kepler-maps/elevation-map";


const routes = [
    
    {
        path: "/map",
        name: "Temporal Map",
        component: Map
    },
    {
        path: "/image",
        name: "image-analysis",
        component:ImageAnalysis
    },
    {
        path: "/species-data",
        name: "Species Data",
        component: SpeciesMap
    },
    {
        path: "/parcat",
        name: "parcat",
        component: MultiColorParallelCategories
    },
    {
        path: "/scatter-plot",
        name: "Scatter Plot",
        component: ScatterPlot
    }

]

export default routes;