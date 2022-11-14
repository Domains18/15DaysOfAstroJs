import React from 'react'
import Stories from '../../Pages/Stories'
import Typewriter from 'typewriter-effect'
import './Header.css'
const Header = () => {
  return (
    <section>
        <div className="title">
            <div className="animation">
              <div className="typewriter">
                <Typewriter
                options={{
                  strings: [
                    'Hello', 'We buy and sell', 
                    'list your property here'
                  ],
                  autoStart: true,
                  loop: true,
                }}
                />
              </div>
            </div>
        </div>
        <Stories/>
    </section>
  )
}

export default Header