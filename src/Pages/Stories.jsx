import React from 'react'

const Stories = () => {
  return (
    <>
        {/* returning articles and short short stuff */}

        <div className="container">
            <div className='cont'>
                <article>
                    <h1>Talk to Us</h1>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Contact us </a>
                    </div>
                </article>
                <article>
                    <h1>Quick Links</h1>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Check us out </a>
                    </div>
                </article>
                <article>
                    <h1>Newsletter</h1>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Follow Us </a>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Stories