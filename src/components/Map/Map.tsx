import React, { useEffect, useState } from 'react'

import './Map.css'

declare var google: any;


const Map: React.FC = () => {   
    const [position, setPosition] = useState({ lat: -29.344, lng: 131.031 })

    async function initMap(): Promise<void> {
    
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    
      let map = new Map(
        document.getElementById('map') as HTMLElement,
        {
          zoom: 4,
          center: position,
          mapId: 'DEMO_MAP_ID',
        }
      );
    
      await new google.maps.Marker({
        map: map,
        position: position,
        title: 'Uluru'
      });
    }
    useEffect(() => {
      initMap();
    }, [position])
    
  return (   
      <div id="map">
        <p>Please enter an adress!</p>
      </div>
  )
}

export default Map;
