import React from 'react';
import logo from '../assets/Undraw_Books.svg'
const Landing = () => {
    return (

        <section id="landing">
            <header>
                <div className="header__container">
                    <div className="header__description">
                        <h1>America's most awarded oinline library platform</h1>
                        <h2>Find your dream book with <span className="purple">Library</span></h2>
                        <a href="#features">
                        <button className="btn">Browser Book</button>
                        </a>
                    </div>
                    <figure className="header__img--wrapper">
                        <img src="" alt="" />
                    </figure>
                </div>
            </header>
        </section>
    );
}

export default Landing;
