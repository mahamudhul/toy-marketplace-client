/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const AllToysDetails = ({ toy }) => {
    console.log(toy)
    const { _id, sellerName, name, photoUrl, price, category, quantity } = toy
    return (
        <div>
            {/* <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photoUrl} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h3>Seller name: {sellerName}</h3>
                    <p>price: {price}</p>
                    <p>category: {category}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/alltoys/${_id}`}>
                            <button className="btn btn-primary">Details</button>
                        </Link>
                    </div>
                </div>
            </div> */}

            <div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Seller</th>
                                <th>Toy Name</th>
                                <th>Sub-category</th>
                                <th>Price</th>
                                <th>Available Quantity</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <th>{sellerName}</th>
                                <td>{name}</td>
                                <td>{category}</td>
                                <td>{price}</td>
                                <td>{quantity}</td>
                                <td>
                                    <Link to={`/alltoys/${_id}`}>
                                        <button className="btn btn-primary">Details</button>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;