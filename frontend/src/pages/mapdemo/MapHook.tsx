import {Marker, Popup, useMapEvent} from "react-leaflet";
import React, {useState} from "react";
import {LatLng} from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

export default function MapHook() {

    const [position, setPostion] = useState<LatLng>(new LatLng(51.505, -0.09));

    const map = useMapEvent("dblclick", (event) => {
        const newPosition = event.latlng;
        setPostion(newPosition);
    });

    return (
        <>
            <Marker position={position} draggable={true}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </>
    )
}