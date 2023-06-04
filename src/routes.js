// import elevatedMap from "./views/elevated-map/elevated-map";
import Map from "./views/kepler-maps/Map";
import SpeciesMap from "./views/kepler-maps/elevation-map";
import WordArt from "./views/word-cloud/word-cloud";
import WordArts from "./views/word-cloud/word-cloud2";


const routes = [
    {
        path: "/map",
        name: "map",
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
    }

]

export default routes;