import React  from 'react'

export default function Layout({children}) {
  return (
    <div className='flex h-screen m-0'>
{/* <div className="main-background  top-0 left-0 w-full h-full z-0"></div> */}
<div className="main-background  top-0 left-0  h-full z-0"></div>
<main className="relative z-10 w-full border-10 sm:border-20 lg:border-50 border-black ">{children}</main>

    </div>
  )
}