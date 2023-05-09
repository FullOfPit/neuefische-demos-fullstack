import React, {useState} from "react";
import {MapContainer, TileLayer} from 'react-leaflet'
import {LatLngTuple} from "leaflet";
import MainMarker from "./MainMarker";
import MapHook from "./MapHook";
import LocationSearchBar from "./LocationSearchBar";

export default function MapDemo() {

    const [mapCenterPosition, setMapCenterPosition] = useState<LatLngTuple>([51.015, 7.54]);

    const [mainMarkerPosition, setMainMarkerPosition] = useState<LatLngTuple>(mapCenterPosition);

    return (
        <div>
            <MapContainer
                center={mapCenterPosition} zoom={13}
                scrollWheelZoom={true}
                style={{width: 750, height: 750}}
                doubleClickZoom={false}
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {
                    <MainMarker position={mainMarkerPosition} setPosition={setMainMarkerPosition}/>
                }
                {
                    <MapHook/>
                }

            </MapContainer>
            {
                //<LocationSearchBar/>
            }
        </div>
    )
}