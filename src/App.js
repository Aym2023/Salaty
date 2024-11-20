
import {useState,  useEffect } from "react";
import Time from './Time';

const Url =
' https://api.aladhan.com/v1/timingsByAddress/19-02-2024?address=Cairo,EGY&method=5';

function App () {
  const [prayers, setPrayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function fetchPrayersTimes() {
      try {
        setIsLoading(true);

        const res = await fetch(Url);

        if(!res) throw new Error('Timing could not load');

        const data = await res.json();
        setPrayers(data.data.timings);
        console.log(data);
      }
      catch(err) {
        console.log('Data Not Found');
      }finally {
        setIsLoading(false);
      }
    }
    fetchPrayersTimes();

  }, [prayers]);

  return (
  <ul>
  {/* {prayers?.map((prayer) => <Time prayer={prayer} />)} */}
  {<Time prayers={prayers} />}
  </ul>
  );
}

export default App;