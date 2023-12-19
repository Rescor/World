import WorldMap from "../components/WorldMap/WorldMap";
import Menu from "../components/Menu/Menu";
import { useState } from "react";

export default function MainPage({cities, places}) {
  const [sortedMarkers, setSortedMakers] = useState([...cities, ...places]);

  return <div style={{position: "relative"}}>
    <Menu cities={cities} places={places} markers={sortedMarkers} sortHandler={setSortedMakers}/>
    <WorldMap markers={sortedMarkers} />
  </div>
}
