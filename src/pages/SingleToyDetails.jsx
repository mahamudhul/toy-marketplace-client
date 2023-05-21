/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleToyDetails = () => {
    const [toys, setToys] = useState([])

    const {category, description, name, photoUrl, price, quantity, rating, sellerName, sellerEmail} = toys
    const { id } = useParams()
    console.log(toys)

    useEffect(() => {
        fetch(`http://localhost:3000/alltoys/${id}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Seller name:{sellerName}</p>
                    <p>Seller email:{sellerEmail}</p>
                    <p>Category: {category}</p>
                    <p>Price: {price}</p>
                    <p>Available Quantity: {quantity}</p>
                    <p>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;