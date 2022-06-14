import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Dcscreen } from '../Dcscreen'
import { Hero } from '../Hero/Hero'
import { SearchScreen } from '../login/SearchScreen'
import { Marvel } from '../Marvel'
import { Navbar } from '../ui/Navbar'


export const Dashboard = () => {
  return (
    <>
    <Navbar/>
    <div className="container">

    <Routes>
        

        <Route path="/marvel" element={<Marvel/>} />
        <Route path="/dc" element={<Dcscreen/>} />
        <Route path="/search" element={<SearchScreen/>} />
        <Route path="/Hero/:id" element={<Hero/>} />

        <Route path="/" element={< Marvel />} />

    </Routes>

    </div>
    </>
  )
}


