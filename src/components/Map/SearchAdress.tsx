import React, { useRef } from 'react'
import axios from 'axios';
import 'boxicons'

import './SearchAdress.css'

declare var google: any;

type GoogleGeocodingResponse = {
  results: {geometry: {location: {lat: number, lng: number}}}[],
  status: 'OK' | 'ZERO_RESULTS'
}

const google_api_key = process.env.REACT_APP_GOOGLE_API_KEY;

const SearchAdress: React.FC = () => {
  const textInputRef = useRef<HTMLInputElement>(null);   
  const searchAdressHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(google_api_key)
    const enteredAddress = textInputRef.current!.value;

    //send this to Google's API!
    axios.get<GoogleGeocodingResponse>(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(enteredAddress)}&key=${google_api_key}`)
    .then( async (response) => {
        if (response.data.status !== 'OK') {
            throw new Error('Could not fetch adress')
        }

        const coordinates = response.data.results[0].geometry.location;
        const map = new google.maps.Map(document.getElementById("map"), {
            center: coordinates,
            zoom: 8
        });

        new google.maps.Marker({position: coordinates, map: map})
    })
    .catch(err => {
        alert(err.message)
        return console.log(err)
    });
}

  return (
    <div className='block_search'>
      <form className='search_form' onSubmit={searchAdressHandler}>
          <input placeholder='Search adress' type="text" id="adress" ref={textInputRef} />
          <button className='icon_search' type="submit">
            <i className='bx bx-search bx-sm'></i>
          </button>
      </form>
      <div className='search_title'>
        <p>FIND ANY PLACE</p>
      </div>
    </div>
  )
}

export default SearchAdress
