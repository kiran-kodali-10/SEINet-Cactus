// import elevatedMap from "./views/elevated-map/elevated-map";
import Map from "./views/kepler-maps/Map";
import SpeciesMap from "./views/kepler-maps/elevation-map";
import WordArt from "./views/word-cloud/word-cloud";
import WordArts from "./views/word-cloud/word-cloud2";


const routes = [
    {
        path: "/SEINet-Cactus/map",
        name: "map",
        component: Map
    },
    {
        path: "/SEINet-Cactus/wordart",
        name: "word cloud",
        component:WordArt
    },
    {
        path: "/SEINet-Cactus/species-data",
        name: "Species Data",
        component: SpeciesMap
    }

]

export default routes;