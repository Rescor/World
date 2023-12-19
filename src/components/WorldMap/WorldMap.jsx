import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import MarkerIcon from "./MarkerIcon/MarkerIcon";

const mapParams = {
  center: [51, 19],
  zoom: 5,
  style: { height: '100dvh', width: '100%' }
}

export default function WorldMap({ markers }) {
  return <MapContainer center={mapParams.center} zoom={mapParams.zoom} style={mapParams.style}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://cartodb.com/attributions">CartoDB</a>'
      />

      {markers.map((marker, index) => {
        return <MarkerIcon marker={marker} key={index} />
      })}
  </MapContainer>
};
