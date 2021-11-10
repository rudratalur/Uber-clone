import {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import Map from './components/map'
import Search from './search'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'


const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query

    // console.log("Pickup", pickup);
    // console.log("dropoff", dropoff);

    const [pickupCoordinates, setPickupCoordinates] = useState([0,0]);
    const [dropoffCoordinates, SetDropoffCordinates] = useState([0,0]);

    const getPickupCoordinates = (pickup) => {

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoicnVkcmF0YWx1ciIsImEiOiJja3ZscXZocWMwcjk5MnBrbHRkMDVjM2YzIn0.FWENd-ucttqELcKL7G-e1A",
            limit:1
        })
        )
        .then(response => response.json())
        .then(data => {
            // console.log(data.features[0].center)
            setPickupCoordinates(data.features[0].center)
        })
    }


    const getDropoffCoordinates = (dropoff) => {
        // const dropOff = "The oxford college of engineering, bommanalli, bengaluru"

        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
            access_token: "pk.eyJ1IjoicnVkcmF0YWx1ciIsImEiOiJja3ZscXZocWMwcjk5MnBrbHRkMDVjM2YzIn0.FWENd-ucttqELcKL7G-e1A",
            limit:1
        })
        )
        .then(response => response.json())
        .then(data => {
            // console.log(data.features[0].center)
            SetDropoffCordinates(data.features[0].center)
        })
    }

 
    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup, dropoff])

    return (
        <Wrapper>
            <ButtonContainer>
            <Link href="search">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
            </ButtonContainer>
           <Map
                 pickupCoordinates={pickupCoordinates}
                 dropoffCoordinates={dropoffCoordinates}
            />
         
           
            <RideContainer>
                <RideSelector
                  pickupCoordinates={pickupCoordinates}
                  dropoffCoordinates={dropoffCoordinates}
                 />
                <ConfiirmButtonContainer>
                    <ConfirmButton>
                    Confirm Uber X
                    </ConfirmButton>
                </ConfiirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 bg-white shadow-md cursor-pointer
`
const BackButton = tw.img`
h-full object-contain
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl cursor-pointer rounded-lg
`

const ConfiirmButtonContainer = tw.div`
 border-t-2
`

const RideContainer = tw.div`
flex flex-1 flex-col h-1/2`

const Wrapper = tw.div`
flex flex-1 flex-col h-screen
`

