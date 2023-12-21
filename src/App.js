import { useEffect, useState } from "react";
import MainPage from "./Pages/MainPage";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rsx.aww.xyz/world.php');
        if (!response.ok) throw new Error("Server connection error");

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  return data ? <MainPage data={data} /> : <div>Loading...</div>
}
