import { useState } from "react";
import WorldMap from "../components/WorldMap/WorldMap";
import Menu from "../components/Menu/Menu";

export default function MainPage({ data }) {
  const [sortedMarkers, setSortedMarkers] = useState(data);
  const cities = data.filter(marker => marker.type === "City");
  const places = data.filter(marker => marker.type === "Place");

  return <div style={{position: "relative"}}>
    <Menu cities={cities} places={places} markers={sortedMarkers} sortHandler={setSortedMarkers}/>
    <WorldMap markers={sortedMarkers} />
  </div>
}
