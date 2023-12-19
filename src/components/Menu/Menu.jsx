import { useState, useEffect } from "react";
import Stat from "./Stat/Stat";
import styles from "./Menu.module.css";

export default function Menu(props) {
  const [sortedMarkers, setSortedMarkers] = useState(props.markers);
  const [settings, setSettings] = useState({cities: true, places: true});

  function markersFilter() {
    return Object.keys(settings)
      .filter(option => settings[option])
      .flatMap(option => props[option]);
  }

  function checkboxHandler(option) {
    setSettings(prev => ({ ...prev, [option]: !prev[option] }));
  }

  useEffect(() => {
    props.sortHandler(sortedMarkers)
  }, [sortedMarkers, props.sortHandler])

  useEffect(() => {
    setSortedMarkers(markersFilter());
  }, [settings])

  return <div className={styles.menu}>
    <Stat data={{cities: props.cities, places: props.places}} />
    <div>
      <p className={styles.filter}>Filter:</p>
      <span>
        Cities: <input type="checkbox" onChange={() => checkboxHandler("cities")} checked={settings.cities}/>
      </span>
      <span className={styles.filter_checkbox}>
        Places: <input type="checkbox" onChange={() => checkboxHandler("places")} checked={settings.places}/>
      </span>
    </div>
  </div>
}
