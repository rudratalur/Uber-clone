import { useEffect, useState } from "react"
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import Map from './components/map'
import Link from 'next/link'
import { auth } from '../firebase'
import { onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router"

// mapboxgl.accessToken = 'pk.eyJ1IjoicnVkcmF0YWx1ciIsImEiOiJja3ZscXZocWMwcjk5MnBrbHRkMDVjM2YzIn0.FWENd-ucttqELcKL7G-e1A';


export default function Home() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    return onAuthStateChanged(auth, user => {
      if (user) {
        setUser({
          name: user.displayName,
          photoUrl : user.photoURL,
        })
      } else {
        setUser(null)
        router.push('/login')
      }
    })
  }, [])

  
  return (
    <Wrapper>
      <Map />
      <ActionItem><Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
          <Name>{ user && user.name }</Name>
          <UserImage src={ user && user.photoUrl} onClick={() => signOut(auth)}/>
          </Profile>
        </Header>
        <ActionButtons>
          <Link href="search">
          <ActionButton>
            <ActionButtonImg src="https://i.ibb.co/cyvcpfF/uberx.png"/>
            Ride
            </ActionButton>
            </Link>
          <ActionButton>
          <ActionButtonImg src="https://i.ibb.co/n776JLm/bike.png"/>
          Wheels
          </ActionButton>
          <ActionButton> <ActionButtonImg src="https://i.ibb.co/5RjchBg/uberschedule.png"/>
           Reserve
           </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton></ActionItem>
    </Wrapper>
   
  )
}

const Wrapper = tw.div`
flex flex-col h-screen
`

const ActionItem = tw.div`
flex-1 bg-red-30
`
const UberLogo = tw.img`
  h-28
  `
  const Profile = tw.div`
  flex items-center
  `

  const UserImage = tw.img`
  h-12 w-12 rounded-full border border-gray-200 p-px cursor-pointer
  `
  const Name = tw.div`
    mr-4 w-20
  `

  const Header = tw.div`
  flex justify-between items-center
  `
  
  const ActionButtons = tw.div`
  flex
  `
  const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32 rounded-lg flex flex-col items-center justify-center transform hover:scale-105 transition text-xl
  ` 
  const ActionButtonImg = tw.img `
  h-3/5
  `
  const InputButton = tw.div `
  bg-gray-200 h-20 mt-8 text-2xl items-center flex p-4
  `
