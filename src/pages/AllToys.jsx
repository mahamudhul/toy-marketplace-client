/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AllToysDetails from './AllToysDetails';

const AllToys = () => {
    const [toys, setToys] =useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/alltoys")
        .then(res => res.json())
        .then(result => setToys(result))
    },[])


    return (
        <div className='grid grid-cols-3 gap-3 my-20 mx-5'>
            {
                toys.map(toy => <AllToysDetails
                key={toy._id}
                toy={toy}
                ></AllToysDetails>)
            }
        </div>
    );
};

export default AllToys;