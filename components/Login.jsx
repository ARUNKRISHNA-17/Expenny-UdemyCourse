'use client'

import { useAuth } from "@/context/AuthContext"
import { useSearchParams } from "next/navigation"
import { useState } from "react"


export default function Login(){

    const params = useSearchParams()
    const isReg = params.get('register')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [isRegistration, setIsRegistration] = useState(isReg)
    const [error,setError] = useState(null)
    const [authenticating,setAuthenticating] = useState(false)
    const {signup,login} = useAuth()

    async function handleAuthenticate() {
        if(!email||!email.includes('@')||password.length<6||authenticating){return}
        setError(null)
        setAuthenticating(true)
        try{
            if(isRegistration){
                //register a user
                await signup(email,password)
            }
            else{
                //login the user
                await login(email,password)
            }
        }
        catch(err)
        {
            console.log(err.message)
            setError(err.message)
        }finally{
            setAuthenticating(false)
        }
    }

    return(
        <div className="login">
            <h2>{isRegistration ? 'Create an Account' : 'Login'}</h2>
            {error && (<div className="">
                <p>❌{error}</p>
            </div>)}
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email"/>
            <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password"/>
            <button onClick={handleAuthenticate} disabled={authenticating}>{authenticating ? 'Submitting...' : 'Submit'}</button>
            <div className="full-line"/>
            <div>
                <p>{isRegistration ? 'Already have an Account?':'Don\'t have an Account'}</p>
                <button onClick={()=>{
                    setIsRegistration(!isRegistration)
                }}>{isRegistration ? 'Log In' : 'Sign Up'}</button>
            </div>
        </div>
    )
}