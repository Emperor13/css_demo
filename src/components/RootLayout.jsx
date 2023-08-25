import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Home from '../pages/Home'

function RootLayout() {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default RootLayout