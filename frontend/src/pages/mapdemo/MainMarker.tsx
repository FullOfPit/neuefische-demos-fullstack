import {LatLngTuple} from "leaflet";
import {Marker, Popup} from "react-leaflet";
import React from "react";

export default function MainMarker(
    {
        position,
        setPosition

    }: {
        position: LatLngTuple,
        setPosition: (newPosition: LatLngTuple) => void
    }) {


    return (
        <>
            <Marker
                position={position}
                draggable={true}
                eventHandlers={{
                    mouseup: (event) =>
                    {
                        setPosition([event.latlng.lat, event.latlng.lng])
                    }
                }}
            >
                <Popup>
                    <p>Lat: {position[0].toFixed(4)}</p>
                    <p>Lng: {position[1].toFixed(4)}</p>
                </Popup>
            </Marker>
        </>
    )
}