import {Marker, Popup, useMapEvent} from "react-leaflet";
import React, {useState} from "react";
import {LatLng} from "leaflet";

export default function MapHook() {

    const [position, setPosition] = useState<LatLng>(new LatLng(51.505, -0.09));

    useMapEvent("dblclick", (event) => {
        const newPosition = event.latlng;
        setPosition(newPosition);
    });

    return (
        <>
            <Marker position={position} draggable={true}>
                <Popup>
                    <p>Lat: {position.lat.toFixed(4)}</p>
                    <p>Lng: {position.lng.toFixed(4)}</p>
                </Popup>
            </Marker>
        </>
    )
}