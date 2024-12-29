 import {useState,  useEffect } from "react";
 import styled from 'styled-components';
 import Spinner from "./Spinner";

    
 const Url = 'http://api.aladhan.com/v1/qibla/25.4106386/51.1846025';


const FormRow = styled.div`  
 font-size: 16px;
  color: rgb(49, 48, 48);
  margin-top: 15px;
  padding: 10px;
  display: flex;
  justify-content: start;
  gap: 15px;
  border-bottom: 1px solid #ede9e9
`;


    function Qibla() {
    const [findQibla, setFindQibla] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

  useEffect(function() {
    async function fetchQibla() {
       try {
          setIsLoading(true);

        const res = await fetch(Url);
         if(!res) throw new Error('Timing could not load');

          const data = await res.json();

          setFindQibla(data.data);
          console.log(data.data);
       }
       catch (err) {
          console.log('Data Not Found');
        } finally {
          setIsLoading(false);
       }
      }
     fetchQibla();

  }, []);

  if (isLoading) return <Spinner/>;
    
    return (
        <>
        <FormRow>
         Latitude: 
          <span>{findQibla.latitude}</span>
          </FormRow>

        <FormRow>
          Longitude: 
          <span>{findQibla.longitude}</span>
          </FormRow>

        <FormRow>
          Direction: 
          <span>{findQibla.direction}</span>
          </FormRow>
          </>
        );
}

export default Qibla;