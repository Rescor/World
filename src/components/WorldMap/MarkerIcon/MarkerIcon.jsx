import React from "react";
import L from "leaflet";
import { Marker, Popup } from "react-leaflet";

function getMarker(type) {
  if (type === "City") return "/assets/marker_blue.png";
  if (type === "Place") return "/assets/marker_orange.png";
}

export default function MarkerIcon({ marker }) {
  const icon = new L.Icon({
    iconUrl: getMarker(marker.type),
    iconSize: [19, 29],
    iconAnchor: [16, 32],
    popupAnchor: [-10, -32],
  });

  return <Marker position={marker.position} icon={icon} >
    <Popup>
      <div>
        {marker.content + ", " + marker.country}
      </div>
    </Popup>
  </Marker>
}
