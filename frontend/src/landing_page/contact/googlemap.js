import { useEffect, useRef } from "react";
import { setOptions, importLibrary } from "@googlemaps/js-api-loader";


const API_KEY = import.meta.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function GoogleMap() {
    const mapRef = useRef(null);

    useEffect(() => {
        async function initMap() {
            setOptions({
                key: API_KEY,
                v: "weekly",
            });

            const { Map } = await importLibrary("maps");

            new Map(mapRef.current, {
                center: {
                    lat: 16.7050,
                    lng: 74.2433,
                },
                zoom: 13,
            });
        }

        initMap();
    }, []);

    return (
        <div
            ref={mapRef}
            style={{
                width: "100%",
                height: "500px",
            }}
        />
    );
}

export default GoogleMap;