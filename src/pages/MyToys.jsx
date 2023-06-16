/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Result } from 'postcss';
import { Link } from 'react-router-dom';

const MyToys = () => {
    const { user } = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("")


    useEffect(() => {
        fetch(`https://toy-marketplace-server-omega-one.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(Result => setToys(Result))
    }, [user])

    const handleSearch = () => {
        fetch(`https://toy-marketplace-server-omega-one.vercel.app/toysSearch/${searchText}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure Want to delete')
        if (proceed) {
            fetch(`https://toy-marketplace-server-omega-one.vercel.app/toy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }

    }


    return (
        <div>
            <h1>this is header</h1>
            <div>
                <div className="form-control my-12 mx-20">
                    <div className="input-group">
                        <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn">
                            search
                        </button>
                    </div>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className='table table-compact w-full'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Seller</th>
                            <th>rating</th>
                            <th>price</th>
                            <th>Edit</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toys.map((toy, index) => (
                            <tr>
                                <th>{index + 1}</th>
                                <td>{toy.name}</td>
                                <td>{toy.sellerName}</td>
                                <td>{toy.rating}</td>
                                <td>{toy.price}</td>

                                <td>
                                    <Link to={`/editToy/${toy._id}`}>
                                        <button>Edit</button>
                                    </Link>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(toy._id)}>delete</button>
                                </td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;