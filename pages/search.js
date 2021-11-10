import {useState} from 'react'
import tw from "tailwind-styled-components"
import Link from 'next/link'

const Search = () => {

    const [pickup, setPickup ] = useState("");
    const [dropoff, setDropoff] = useState("");

    // console.log(pickup)
    // console.log(dropoff)

    return (
        <Wrapper>
          <ButtonContainer>
            <Link href="./#">
                <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
            </Link>
            </ButtonContainer>
           
            <InputContainer>
                <FromToIcons>
                    <Circle src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"/>
                    <Line src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"/>
                    <Square src="https://img.icons8.com/windows/50/000000/square-full.png"/>
                </FromToIcons>
            <InputBoxes>
            <Input 
            Placeholder="Enter pickup Location"
            value={pickup}
            onChange={(e)=> setPickup(e.target.value)}
            />
            <Input 
            Placeholder="Where To drop?"
            value={dropoff}
            onChange={(e)=> setDropoff(e.target.value)}
            />
            </InputBoxes>
            <PlusIcon src="https://img.icons8.com/ios/50/000000/plus-math.png"/>
            </InputContainer>
            <SavedPlaces>
                <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"/>
                Saved Places
            </SavedPlaces>
            <Link href={{pathname:"./confirm",
                query : {
                    pickup:pickup,
                    dropoff:dropoff
                }
            }}>
            <ConfirmLocation>
                Confirm Locations
            </ConfirmLocation>
            </Link>
        </Wrapper>
    )
}

export default Search

const Wrapper = tw.div`
bg-gray-200 h-screen
`
const InputContainer = tw.div`
bg-white flex items-center px-4 mb-2
`
const ButtonContainer = tw.div`
bg-white
`
const BackButton = tw.img`
px-4 h-12 cursor-pointer
`

const FromToIcons = tw.div`
w-10 flex flex-col mr-2 items-center 
`
const Circle = tw.img`
h-2.5
`
const Line = tw.img`
h-10
`
const Square = tw.img`
h-3
`
const InputBoxes = tw.div`
flex flex-col
`
const Input = tw.input`
h-10 bg-gray-200 my-2 p-4 rounded-2 outline-none border-none`

const PlusIcon = tw.img`
w-10 h-10 bg-gray-200 rounded-full ml-3
`
const SavedPlaces = tw.div`
flex items-center bg-white px-4 py-2
`
const StarIcon = tw.img`
bg-gray-400 rounded-full mr-2 h-10 -w-10 p-2
`
const ConfirmLocation = tw.div`
bg-black text-white text-lg text-center mt-2 mx-4 m-10 rounded-lg px-4 py-2  cursor-pointer
`
