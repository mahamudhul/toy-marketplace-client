/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';

const Review = () => {
    return (
        <div>
            <h1 className='mt-20 text-3xl font-bold mx-7 mb-5'>Happy customer:</h1>
            <div className=''>
                <div className="card w-96 shadow-xl mb-5 bg-slate-400">
                    <div className="card-body">
                        <h2 className="card-title">Mr. Stark:</h2>
                        <p>" A versatile toy that sparks creativity with colorful bricks for endless building possibilities."</p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-400 shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title">Loki:</h2>
                        <p>"A detailed dollhouse with interactive features, perfect for imaginative play and personalization." </p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-400 shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title">Mr. Wick:</h2>
                        <p> "An adrenaline-pumping track with loops and crash zones, providing thrilling racing action for car enthusiasts."</p>
                    </div>
                </div>

                <div className="card w-96 bg-slate-400 shadow-xl mb-5">
                    <div className="card-body">
                        <h2 className="card-title">Mr. Thor:</h2>
                        <p>"A well-designed and interactive toy featuring lights, sounds, and a extendable ladder, allowing kids to recreate exciting rescue missions from the popular Paw Patrol series."</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;