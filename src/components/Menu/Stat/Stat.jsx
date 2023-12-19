import styles from "./Stat.module.css";

export default function Stat({ data }) {
  const uniqueCountries = new Set([...data.cities, ...data.places].map(marker => marker.country));
  const uniqueCountriesArray = Array.from(uniqueCountries);
  const citiesCount = data.cities.length;
  const placesCount = data.places.length;

  return <>
    <p className={styles.string}>I visited {uniqueCountries.size} countries, {citiesCount} cities, and {placesCount} places.</p>
    <p>Unique countries: {uniqueCountriesArray.join(', ')}.</p>
  </>
}
