import React, {useState} from "react";
import {MapContainer, TileLayer} from 'react-leaflet'
import {LatLng, LatLngTuple} from "leaflet";
import MainMarker from "./MainMarker";
import MapHook from "./MapHook";
import Routing from "./Routing";
import LocationSearchBar from "./LocationSearchBar";

export default function MapDemo() {

    const [mapCenterPosition, setMapCenterPosition] = useState<LatLng>(new LatLng(51.015, 7.54));
    //LatLng object class with several methods;

    const [mainMarkerPosition, setMainMarkerPosition] = useState<LatLngTuple>([mapCenterPosition.lat, mapCenterPosition.lng]);
    //LatLngTuple type with number[] field for [latitude, longitude]

    return (
        <div>
            <MapContainer
                center={mapCenterPosition} zoom={13}
                //center: takes LatLng object or LatLngTuple, zoom takes number 0 <= x <= 20,
                scrollWheelZoom={true}
                style={{width: 750, height: 750}}
                //setting width/height required to display map
                doubleClickZoom={false}

                //many additional functions can be set
            >

                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    //Main map and other objects are displayed are tiles
                    //e.g. deleting this tile leaves the container and displays a gray box
                />

                {
                    <MainMarker position={mainMarkerPosition} setPosition={setMainMarkerPosition}/>
                    //Contains a marker w/ some functionality
                }
                {
                    <MapHook/>
                    //Contains a reactHook for the map container, used on a marker
                }
                {
                    <Routing/>
                    //Contains the controlComponent to display a routing between two markers
                }

            </MapContainer>
            {
                <LocationSearchBar/>
                //Contains the search form and axios call to run location search requests
            }
        </div>
    )
}