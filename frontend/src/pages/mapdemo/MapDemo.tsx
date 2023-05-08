import React, {useState} from "react";
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import {LatLng, LatLngTuple} from "leaflet";

export default function MapDemo() {

    const [mapCenterPosition, setMapCenterPosition] = useState<LatLngTuple>([51.505, -0.09]);

    return (
        <div>
            <MapContainer center={mapCenterPosition} zoom={13} scrollWheelZoom={false} style={{width: 500, height: 500}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={mapCenterPosition}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}