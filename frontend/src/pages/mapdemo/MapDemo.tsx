import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {LatLng, LatLngTuple} from "leaflet";
import MainMarker from "./MainMarker";

export default function MapDemo() {

    const [mapCenterPosition, setMapCenterPosition] = useState<LatLngTuple>([51.015, 7.54]);
    //51.015, 7.54
    const [mainMarkerPosition, setMainMarkerPosition] = useState<LatLngTuple>(mapCenterPosition)
    return (
        <div>
            <MapContainer center={mapCenterPosition} zoom={13} scrollWheelZoom={true} style={{width: 750, height: 750}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MainMarker position={mainMarkerPosition} setPosition={setMainMarkerPosition}/>
            </MapContainer>
        </div>
    )
}