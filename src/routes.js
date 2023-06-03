// import elevatedMap from "./views/elevated-map/elevated-map";
import Map from "./views/kepler-maps/Map";
import ChallengeContainer from "./views/word-cloud/word-cloud";


const routes = [
    {
        path: "/map",
        name: "map",
        component: Map
    },
    {
        path: "/",
        name: "word-cloud",
        component: ChallengeContainer
    }
    // {
    //     path: "/elevated-map",
    //     name: "elevated map",
    //     component: elevatedMap
    // }

]

export default routes;