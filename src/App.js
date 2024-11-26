
import {useState,  useEffect } from "react";
import Time from './Time';

const Url =
' https://api.aladhan.com/v1/timingsByAddress/19-02-2024?address=Cairo,EGY&method=5';

function App () {
  const [prayers, setPrayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState([]);

  useEffect(function() {
    async function fetchPrayersTimes() {
      try {
        setIsLoading(true);

        const res = await fetch(Url);
        if(!res) throw new Error('Timing could not load');
        const data = await res.json();

        setPrayers(data.data.timings);
        setCity(data.data.meta);
      }
      catch (err) {
        console.log('Data Not Found');
      } finally {
        setIsLoading(false);
      }
    }
    fetchPrayersTimes();

  }, [prayers]);

  return (
  <ul>
    <li>
    {<Time 
    prayers={prayers} 
    city={city}
    id={prayers.id} 
    />}
    </li>
  </ul>
  );
}

export default App;