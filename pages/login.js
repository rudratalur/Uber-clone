import React, { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { auth, provider} from '../firebase'


const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])

    return (
        <Wrapper>
             <UberLogo src="https://i.ibb.co/n6LWQM4/Post.png" />
             <Title>
                Log in to access your account
            </Title>
            <HeaderImage src="https://i.ibb.co/CsV9RYZ/login-image.png" />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign in with google
            </SignInButton>
            
        </Wrapper>
    )
}

export default Login
const Title = tw.div`
text-5xl text-gray-500 pt-4`

const UberLogo = tw.img`
h-20 w-auto self-start object-contain`

const HeaderImage = tw.img`
object-contain w-full`

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 p-4
`
const SignInButton = tw.button`
bg-black text-white w-full text-center py-4 mt-8 self-center `
