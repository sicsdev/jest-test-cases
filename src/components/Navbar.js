import React from 'react'

function Navbar() {
  return (
    <>
        <div className='d-flex align-items-center mt-3 justify-content-between container'>
            <div >
                <img src='/assets/logo.svg' width={150} data-testid="logo_test" alt='logo' />
            </div>
            <div className='w-50'>
                <ul className='d-flex m-0 justify-content-between'  data-testid="menu-item-test">
                    <li>Explore</li>
                    <li>How It Works</li>
                    <li>Login</li>
                    <li>Join as Influencer</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Navbar