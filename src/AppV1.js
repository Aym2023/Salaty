import {useState,  useEffect } from "react";
import Time from './Time';
import Spinner from "./Spinner";

const Url =
' https://api.aladhan.com/v1/timingsByAddress/19-02-2024?address=Cairo,EGY&method=5';

const city_Url= 'https://countriesnow.space/api/v0.1/countries/capital';

function App () {
  const [prayers, setPrayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState([]);

  useEffect(function() {
    async function fetchPrayersTimes() {
      try {
         setIsLoading(true);

        const res = await fetch(Url);
        const response = await fetch(city_Url);

         if(!res) throw new Error('Timing could not load');
         if(!response) throw new Error('City could not load');

         const data = await res.json();
         const dataCity = await response.json();

        //  console.log(data, dataCity);

        setPrayers(data.data.timings);

         setCity(dataCity.data[65]);
        // setCity(data.data.meta);

       }
       catch (err) {
         console.log('Data Not Found');
       } finally {
         setIsLoading(false);
       }
     }
     fetchPrayersTimes();

 }, [prayers.id]);
  
  return (
      <ul>
      <li>
      {isLoading ? <Spinner/> :
      <Time 
       prayers={prayers} 
       city={city}
       id={prayers.id} 
       />
     }
      </li>
      </ul>
  
  );
}

export default App;