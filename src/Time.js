function Time({prayers, city}) {
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
   
   return (
   <div>
    <h2>Prayer Timings</h2>
     <h3>
      <span>{`${city.timezone},`}</span>  
      <span>{nowIntl}</span> 
       </h3>
     <p>Sunrise: <span>{prayers.Sunrise}</span></p>
     <p>Fajr: <span>{prayers.Fajr}</span></p>
     <p>Dhuhr: <span>{prayers.Dhuhr}</span></p>
     <p>Asr: <span>{prayers.Asr}</span></p>
     <p>Maghrib: <span>{prayers.Maghrib}</span></p>
     <p>Sunset: <span>{prayers.Sunset}</span></p> 
     <p>Isha: <span>{prayers.Isha}</span></p>
     <p>Midnight: <span>{prayers.Midnight}</span></p>
      </div>
      );
}

export default Time;