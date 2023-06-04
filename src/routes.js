// import elevatedMap from "./views/elevated-map/elevated-map";
import MultiColorParallelCategories from "./views/Parcats/Parcats";
// import Parcats from "./views/Parcats/Parcats";
import Map from "./views/kepler-maps/Map";
import SpeciesMap from "./views/kepler-maps/elevation-map";
import WordArt from "./views/word-cloud/word-cloud";
import WordArts from "./views/word-cloud/word-cloud2";


const routes = [
    
    {
        path: "/map",
        name: "Temporal Map",
        component: Map
    },
    {
        path: "/wordart",
        name: "word cloud",
        component:WordArt
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
    }

]

export default routes;