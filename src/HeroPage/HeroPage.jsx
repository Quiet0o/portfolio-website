import React from 'react'

const HeroPage = ()=>{
    return (
        <>
        <div className="hero-page">
            <div className="welcome-page">
                <span>Welcome my name is</span>

                <h1>Mikołaj Kłosowski</h1>
                <h2><span>I'm web developer</span></h2>
                <p>I'm web developer and UI/UX designer
I'm specializes in creating website more accessible and faster .  My main goal is that website must be fast and accessible to people</p>
            </div>

        </div>
        <div class="arrow">
                <span></span>
                <span></span>
                <span></span>

</div>
        <div className="about-page">
                <div className="about-me-text">
                <h2><span>I'm web developer</span></h2>
                <p>I'm web developer and UI/UX designer
I'm specializes in creating website more accessible and faster .  My main goal is that website must be fast and accessible to people</p>
                </div>
                <div className="about-me-img">
                    <img src="https://agency.fenze.dev/images/mikolaj.png" alt="face" />
                </div>

            </div>
        </>
    )
}

export default HeroPage;