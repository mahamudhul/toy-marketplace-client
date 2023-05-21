/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
            {/* <div className='m-12 flex justify-center'> text-neutral-content
                <div className="carousel w-5/6 max-h-80 rounded-lg">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-photo/robot-with-gun-is-standing-small-robot_782419-10062.jpg?w=996" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-vector/cartoon-funny-animals-superhero-ranger-characters_53500-1156.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-vector/cute-super-dinosaur-with-watercolor-illustration_102385-790.jpg?w=900" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src="https://img.freepik.com/premium-vector/cartoon-funny-animals-superhero-ranger-characters_53500-1156.jpg" className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div> */}

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://media.istockphoto.com/id/876439184/photo/vintage-toy-cars.jpg?b=1&s=170667a&w=0&k=20&c=-lfs5U5Ovrv7jAVGy2x6JrB1_j3h0UwHEfE6JwuDJj0=` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-white ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to Toy Zone</h1>
                        <p className="mb-5">The ultimate destination for all your toy needs! Step into a world of wonder and excitement as you explore our vibrant and captivating shop. Bursting with a vast array of toys, games, and playtime essentials, Toy Zone is a haven for children and the young at heart.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;