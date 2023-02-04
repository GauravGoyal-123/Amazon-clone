import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <img src = "https://pngimg.com/uploads/amazon/amazon_PNG11.png"  className='header-logo' alt = 'amagon-logo' />
        <div className='header-search'> 
            <input className='header-input' type="text" />
            {/*logo */}

        </div>

        <div className='header-nav'>
            <div className='header-option'>
                <span className='header-option-one' >Hello Guest</span>
                <span className='header-option-two'>Sign In</span>
            </div>

            <div className='header-option'>
                <span className='header-option-one' >Returns </span>
                <span className='header-option-two'>& Orders</span>
            </div>

            <div className='header-option'>
                <span className='header-option-one' >Your</span>
                <span className='header-option-two'>Prime</span>
            </div>
        </div>

    </div>
  )
}

export default Header