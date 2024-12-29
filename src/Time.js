import {useState,  useEffect } from "react";
import styled from 'styled-components';
import Spinner from "./Spinner";

const Container = styled.html`
background-color:#FFC0CB;
height: 100vh;
// color: white;
`;

const PrayerName = styled.div`  
 font-size: 16px;
  color: rgb(49, 48, 48);
  margin-top: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ede9e9
`;

const Heading1 = styled.div`  
text-align: center;
`;

const Heading3 =  styled.div`
display:flex;
flex-direction: row;
color: rgb(49, 48, 48);
font-weight: 200;
gap: 10px;
`;

const Url =
' https://api.aladhan.com/v1/timingsByAddress/19-02-2024?address=Cairo,EGY&method=5';

const city_Url= 'https://countriesnow.space/api/v0.1/countries/capital';


function Time() {
  const [prayers, setPrayers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState([]);

  useEffect(function() {
    async function fetchPrayersTimes() {
      try {
         setIsLoading(true);

        const res = await fetch(Url);
        const response = await fetch(city_Url);

         if(!res) throw new Error('Timings could not load');
         if(!response) throw new Error('Cities could not load');

         const data = await res.json();
         const dataCity = await response.json();

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
  

   const now = new Date();

   const options = {
       minute: 'numeric',
       hour: 'numeric',
       day: 'numeric',
       month: 'numeric',
       year: 'numeric',
       weekday: 'long',
   };
   const nowIntl = new Intl.DateTimeFormat('en-GB', options).format(now);

   if (isLoading) return <Spinner/> ;

   return (
   <Container>
    <Heading1>Prayer Timings</Heading1>
     <Heading3>
     <span> {city.capital}, {city.name}
      </span>  
      <span>{nowIntl}</span> 
       </Heading3>
     <PrayerName>Sunrise: <span>{prayers.Sunrise}</span></PrayerName>
     <PrayerName>Fajr: <span>{prayers.Fajr}</span></PrayerName>
     <PrayerName>Dhuhr: <span>{prayers.Dhuhr}</span></PrayerName>
     <PrayerName>Asr: <span>{prayers.Asr}</span></PrayerName>
     <PrayerName>Maghrib: <span>{prayers.Maghrib}</span></PrayerName>
     <PrayerName>Sunset: <span>{prayers.Sunset}</span></PrayerName> 
     <PrayerName>Isha: <span>{prayers.Isha}</span></PrayerName>
     <PrayerName>Midnight: <span>{prayers.Midnight}</span></PrayerName>
      </Container>
      );
}

export default Time;