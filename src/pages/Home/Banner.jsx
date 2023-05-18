/* eslint-disable no-unused-vars */
import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='m-12 flex justify-center'>
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
            </div>
        </div>
    );
};

export default Banner;