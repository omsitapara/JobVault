import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'> 
        <img src={assets.logo_main} alt="logo" />
        <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @JobVault | All rights reserved.</p>
        <div className='flex gap-2.5'>
            <Link to="https://www.facebook.com/profile.php?id=61571099176825" target='_blank'>
            <img src={assets.facebook_icon} alt="facebook" />
            </Link>
            <Link to="https://www.instagram.com/job.vault.25/" target='_blank'>
            <img src={assets.instagram_icon} alt="instagram" />
            </Link>
            <Link to="https://x.com/jobvault_" target='_blank'>
            <img src={assets.twitter_icon} alt="twitter" />
            </Link>
        </div>
    </div>
  )
}

export default Footer