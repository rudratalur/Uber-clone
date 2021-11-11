import React, {useEffect, useState} from 'react'
import tw from "tailwind-styled-components"
import { carList } from '../data/carList'

const RideSelector = ({pickupCoordinates, dropoffCoordinates}) => {


    //to calculate fare
    const [rideDuration, setRideDuration] = useState(0)

    useEffect(() => {
        rideDuration = fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoicnVkcmF0YWx1ciIsImEiOiJja3ZscXZocWMwcjk5MnBrbHRkMDVjM2YzIn0.FWENd-ucttqELcKL7G-e1A`)
        .then(res => res.json())
        .then(data => {
            setRideDuration(data.routes[0].duration / 100)
        })
    }, [pickupCoordinates, dropoffCoordinates])

    return (
        <Wrapper>
            <Title>Choose a ride, or swipe up for more</Title>
            <CarList>
                {/* loop through the car data */}
                {carList.map((car, index)=>(
                    <Car key={index}>
                    <CarImage src={car.imgUrl}></CarImage>
                    <CarDetails>
                    <Service> {car.service}</Service>
                    <Time> 5 Min away</Time>
                    </CarDetails>
                    <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
                </Car>
                ))}

            </CarList>
        </Wrapper>
    )
}

export default RideSelector

const CarList = tw.div`
overflow-y-scroll
`

const Car = tw.div`
flex items-center p-4`

const CarImage = tw.img`
h-14 mr-4`

const CarDetails = tw.div` //to take much space as possible
flex-1`

const Service = tw.div`
font-medium`

const Time = tw.div`
text-xs text-blue-500`

const Price = tw.div`
text-sm
`

const Wrapper = tw.div`
flex-1 overflow-y-scroll flex flex-col`

const Title = tw.div`
text-gray-400 text-center text-sm border-b py-2
`