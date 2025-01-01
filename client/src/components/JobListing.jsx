import React, { useContext } from 'react'
import AppContext from "../context/AppContext"
import { assets, JobCategories, JobLocations } from '../assets/assets'
import JobCard from './JobCard'
import { useState } from 'react'

const JobListing = () => {
    const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)
    const [showFilter, setShowFilter] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
  return (
    <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
        {/* Sidebar */}
        <div className='w-full lg:w-1/4 bg-white px-4'>
            {
                isSearched && ( searchFilter.title!=='' || searchFilter.location!=='') && (
                    <>
                        <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                        <div className='mb-4 text-gray-600'>
                            {searchFilter.title &&(
                                <span className='inline-flex items-center gap-2.5 bg-blue-50 border-blue-200 px-4 py-1.5 rounded'>
                                    {searchFilter.title}
                                    <img onClick={e=>setSearchFilter(prev =>({...prev,title:''}))} src={assets.cross_icon} alt='cancel'/>
                                </span>
                            )}
                            {searchFilter.location &&(
                                <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border-red-200 px-4 py-1.5 rounded'>
                                    {searchFilter.location}
                                    <img onClick={e=>setSearchFilter(prev =>({...prev,location:''}))} src={assets.cross_icon} alt='cancel'/>
                                </span>
                            )}
                        </div>

                    </>
                )
            }
            <button onClick={e=> setShowFilter(prev=>!prev)} className='px-6 py-1.5 rounded border border-gray-400 lg:hidden'>
                {showFilter ? "Close" : "Filters"}
            </button>

            {/* Category Filter */}
            <div className={showFilter ? '' : 'max-lg:hidden'}>
                <h4 className='font-medium text-lg py-4'>Popular Categories</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobCategories.map((category,index)=>(
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox" name="" id="" />
                                {category}
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className={showFilter ? '' : 'max-lg:hidden'}>
                <h4 className='pt-14 font-medium text-lg py-4'>Popular Locations</h4>
                <ul className='space-y-4 text-gray-600'>
                    {
                        JobLocations.map((location,index)=>(
                            <li className='flex gap-3 items-center' key={index}>
                                <input className='scale-125' type="checkbox" name="" id="" />
                                {location}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>

        {/* Job Listing */}
        <section className='w-full lg:w-3/4 text-gray-800 max-lg:px-4'>
            <h3 className='font-medium text-3xl py-2' id='job-list'>Latest Jobs</h3>
            <p className='mb-8'>Get your desired job from top companies</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
                    {jobs.slice((currentPage-1)*9,currentPage*9).map((job,index)=>(
                        <JobCard key={index} job={job}/>
                    ))}
            </div>
            {/* Pagination */}
            {jobs.length>0 && (
                <div className='flex items-center justify-center space-x-2 mt-10'>
                <a href='#job-list'>
                    <img onClick={()=>setCurrentPage(Math.max((currentPage-1),1))} src={assets.left_arrow_icon} alt='left-arrow'/>
                </a>
                {Array.from({length:Math.ceil(jobs.length/9)}).map((_,index)=>(
                    <a href='#job-list' key={index}>
                        <button className={`w-10 h-10 flex items-center justify-center border border-gray-300 rounded ${currentPage===index+1 ? 'bg-blue-100 text-blue-500' : 'text-gray-500'}`} onClick={e=>setCurrentPage(index+1)}>
                            {index+1}
                        </button>
                    </a>
                ))}
                <a href='#job-list'>
                    <img onClick={()=>setCurrentPage(Math.min((currentPage+1),(Math.ceil(jobs.length/9))))} src={assets.right_arrow_icon} alt='right-arrow'/>
                </a>
            </div>)}
        </section>
    </div>
  )
}

export default JobListing