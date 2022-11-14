import React from 'react'

const Stories = () => {
  return (
    <>
        {/* returning articles and short short stuff */}

        <div className="container">
            <div>
                <article>
                    <title>Talk to Us</title>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Contact us</a>
                    </div>
                </article>
                <article>
                    <title>Quick Links</title>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Contact us</a>
                    </div>
                </article>
                <article>
                    <title>Newsletter</title>
                    <div className="content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt quibusdam nemo error qui dicta quis corrupti numquam molestias, quisquam magni!</p>
                        <a href="/">Contact us</a>
                    </div>
                </article>
            </div>
        </div>
    </>
  )
}

export default Stories