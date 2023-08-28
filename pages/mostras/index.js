import React from 'react'
import ContentMenu from '../../components/ContentMenu'
import Header from '../../components/Header'
import Footer from '../../components/Footer'

export default function mostras() {
  return (
    <div className="pt-36" style={{width: '100% !important', backgroundColor: 'lightblue', height: '100vh'}}>
        <Header />
        <div className="w-full laptop:mt-30 p-2 laptop:p-0">
          <ContentMenu />
        </div>   
        <Footer />
      </div>
        
  )
}
