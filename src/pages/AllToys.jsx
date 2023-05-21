/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import AllToysDetails from './AllToysDetails';
import { Link } from 'react-router-dom';

const AllToys = () => {
    const [toys, setToys] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/alltoys")
            .then(res => res.json())
            .then(result => setToys(result))
    }, [])

    return (
        <div>
            {/* {
                toys.map(toy => <AllToysDetails
                    key={toy._id}
                    toy={toy}
                ></AllToysDetails>)
            } */}
            <h1 className='text-center text-4xl font-bold my-10'>All Toys Collection</h1>
            <div>
                <div className="overflow-x-auto mx-5 my-10">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                toys.map((toy, index) => (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <th>{toy.sellerName}</th>
                                        <td>{toy.name}</td>
                                        <td>{toy.category}</td>
                                        <td>{toy.price}</td>
                                        <td>{toy.quantity}</td>
                                        <td>
                                            <Link to={`/alltoys/${toy._id}`}>
                                                <button className="btn btn-primary">Details</button>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToys;