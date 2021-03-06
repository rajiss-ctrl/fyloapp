import React from 'react'
import './Subscribe.css'

const Subscribe = ({alert,handleClick}) => {
  return (
    <div className='subscribe'>
        <div className="contact">
            <div className="contact-msg">
                <h2>Get early access today</h2>
                <p>It only takes a minute to sign up and our free stater tier is exetremely generous.
                    If you have any questions, our support team would be happy to help you.
                </p>
            </div>
            <div className="contact-point">
                <input type="email" placeholder='example@fylo.com' required/>
                <p>{alert}</p>
                <button onClick={handleClick} type='submit'>Get Started for free</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe