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
                    Lat: {position[0]}
                    Lang: {position[1]}
                </Popup>
            </Marker>
        </>
    )
}