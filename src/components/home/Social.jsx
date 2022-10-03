/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import "./home.css"

const Social = () => {
    return (
        <div className='home__social'>
            <a href='https://github.com/yahya-1' className='home__social-icon' target="_blank" >
                <i className="uil uil-github-alt"></i>
            </a>

            <a href='https://www.instagram.com/yahya_alkhal/' className='home__social-icon' target="_blank" >
                <i className="uil uil-instagram"></i>
            </a>

            <a href='https://www.behance.net/yahyaalkhaldi' className='home__social-icon' target="_blank" >
                <i className="uil uil-behance-alt"></i>
            </a>
        </div>
    )
}

export default Social