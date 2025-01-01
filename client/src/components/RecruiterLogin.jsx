import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import AppContext from '../context/AppContext'

const RecruiterLogin = () => {

    const [state, setstate] = useState('Login')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [image, setImage] = useState(false)
    const [isTextDataSubmitted, setIsTextDataSubmitted] = useState(false)
    const {setShowRecruiterLogin} = useContext(AppContext)
    const onSubmitHandler = async (e)=>{
        e.preventDefault()
        if(state === 'Sign Up' && !isTextDataSubmitted){
            setIsTextDataSubmitted(true)
        }
    }

    useEffect(()=>{
        document.body.style.overflow = 'hidden'
        return () =>{
            document.body.style.overflow = 'unset' 
        }
    },[])

  return (
    <div className='absolute top-0 left-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex items-center justify-center w-full'>
        <form onSubmit={onSubmitHandler} className='relative bg-white p-10 rounded-xl text-slate-500'>
            <h1 className='text-center text-2xl text-neutral-700 font-medium'>Recruiter {state}</h1>
            {
                state === 'Login'
                ? <p className='text-sm'>Welcome Back! Please login to continue</p>
                : <p className='text-sm'>First time? Create an account straight away.</p>
            }
            {state === 'Sign Up' && isTextDataSubmitted
                ?<>
                    <div className='flex items-center gap-4 my-5'>
                        <label htmlFor="image">
                            <img className='w-16 rounded-full cursor-pointer' src={image ? URL.createObjectURL(image) :assets.upload_area} alt="" />
                            <input onChange={e=>setImage(e.target.files[0])} type="file" hidden id='image' />
                        </label>
                        <p>Upload Company <br/> Logo</p>
                    </div>
                </>
                :<>

                {state!=='Login' && (
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                    <img src={assets.person_icon} alt="" />
                    <input className='outline-none text-sm' onChange={e=>setName(e.target.value)} value={name} type="text" placeholder='Company Name' required />
                </div>
                )}
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.email_icon} alt="" />
                        <input className='outline-none text-sm' onChange={e=>setEmail(e.target.value)} value={email} type="email" placeholder='Email id' required />
                    </div>
                    <div className='border px-4 py-2 flex items-center gap-2 rounded-full mt-5'>
                        <img src={assets.lock_icon} alt="" />
                        <input className='outline-none text-sm' onChange={e=>setPassword(e.target.value)} value={password} type="password" placeholder='Password' required />
                    </div>
                    <p className='text-sm text-blue-600 cursor-pointer mt-2 ml-2'>Forgot Password?</p>
                </>
            }
            
            <button type='submit' className='bg-blue-600 w-full text-white rounded-full py-2 mt-5'>
                {state === 'Login' ? 'Login' :isTextDataSubmitted ? 'Sign Up' : 'Next'}
            </button>

            {
                state === 'Login' ?
                <p className='mt-3 text-sm text-center'>Don&apos;t have an account?<span className='cursor-pointer text-blue-600' onClick={()=>setstate('Sign Up')}>Sign Up</span></p>
                :
                <p className='mt-3 text-sm text-center'>Already have an account? <span className='cursor-pointer text-blue-600' onClick={()=>setstate('Login')}>Login</span></p>
            }
            <img onClick={e => setShowRecruiterLogin(false)} className='absolute top-5 right-5 cursor-pointer' src={assets.cross_icon} alt="" />
        </form>
    </div>
  )
}

export default RecruiterLogin