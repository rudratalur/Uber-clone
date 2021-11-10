import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import { useEffect } from "react"


mapboxgl.accessToken = 'pk.eyJ1IjoicnVkcmF0YWx1ciIsImEiOiJja3ZscXZocWMwcjk5MnBrbHRkMDVjM2YzIn0.FWENd-ucttqELcKL7G-e1A';


const Map = (props) => {
    useEffect(() => {
        const map = new mapboxgl.Map({
          container : "map",
          style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [12.901123, 77.606593],
          zoom: 3,
        })
        if(props.pickupCoordinates) {
          addToMap(map, props.pickupCoordinates)
        }

        if(props.dropoffCoordinates){
          addToMap(map, props.dropoffCoordinates)
        }

        if(props.pickupCoordinates && props.dropoffCoordinates) {
          map.fitBounds([
            props.pickupCoordinates,
            props.dropoffCoordinates
          ], {
            padding:60
          } )
        }
      }, [props.pickupCoordinates, props.dropoffCoordinates])

      const addToMap = (map, coordinates) => {
        const marker1 = new mapboxgl.Marker()
        .setLngLat(coordinates)
        .addTo(map);

        // const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
        // .setLngLat([12.901114561053141, 77.60661716784251])
        // .addTo(map);
      } 

    return (
        <Wrapper id="map">  
        </Wrapper>
    )
}

export default Map


const Wrapper = tw.div`
flex-1 h-1/2
`