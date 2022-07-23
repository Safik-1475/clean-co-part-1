import React from 'react';

const Landing = () => {
    return (
        <>
            <div class="hero h-full lg:h-[80vh] bg-accent lg:px-20">
                <div class="hero-content flex-col lg:flex-row max-w-6xl">
                    <div>
                        <h3 className='font-bold'>Best Quality</h3>
                        <h1 class="lg:text-5xl font-bold">Professinal Cleaning Services</h1>
                        <p class="max-w-xl py-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button class="btn btn-primary" >Get Started</button>
                    </div>
                    <div className="h-[80vh shrink-0]" data-aos="zoom-in-ups">
                        <img class='h-full' src="https://i.ibb.co/wr4SKgZ/cleaner-woman.png" data-aos-duration="3000" />
                    </div>
                </div>
            </div>
            <div className='w-5/6 p-10 mx-auto shadow-xl mt-[-50px] relative bg-base-200 rounded-t-2xl'>
                <h2 className='font-bold text-2xl text-primary py-2'>Get Free Estimate</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center'>
                    <input type="text" placeholder="Your Name" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Your Number" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Number of Bedrooms" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Number of Bedrooms" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Frequency of Cleaning" class="input input-bordered w-full max-w-lg" />
                    <input type="text" placeholder="Type of Cleaning" class="input input-bordered w-full max-w-lg" />
                </div>
                <button className='btn btn-primary mt-2'>Get A Quote</button>
            </div>
        </>
    );
};

export default Landing;