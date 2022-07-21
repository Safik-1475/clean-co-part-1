import React from 'react';

const Landing = () => {
    return (
        <div class="hero h-[80vh] bg-accent lg:px-20">
            <div class="hero-content flex-col lg:flex-row max-w-6xl">
                <div>
                    <h3 className='font-normal'>Best Quality</h3>
                    <h1 class="text-5xl font-bold">Professinal Cleaning Services</h1>
                    <p class="max-w-xl py-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
                <div className="h-[80vh shrink-0]">
                    <img class='h-full' src="https://i.ibb.co/wr4SKgZ/cleaner-woman.png" />
                </div>
            </div>
        </div>
    );
};

export default Landing;