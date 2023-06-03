import KeplerGl from "kepler.gl";

export default function elevationMap(props) {

    return (
        <div className="elevated-map-container">
            <KeplerGl
                mapboxApiAccessToken="pk.eyJ1IjoidWNmLW1hcGJveCIsImEiOiJja3RpeXhkaXcxNzJtMnZxbmtkcnJuM3BkIn0.kGmGlkbuWaCBf7_RrZXULg"
                width={window.innerWidth}
                height={window.innerHeight}
            />
        </div>
    )
}