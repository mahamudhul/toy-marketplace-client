/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import svg from '../assets/undraw_welcome_re_h3d9.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const data = { name, email, password, photo }
        console.log(data)

        if (password.length < 6) {
            setError(' Please enter 6 characters password')
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser)
            })
            .catch(error => {
                console.log(error);
            })

    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="text-center lg:text-left">
                        <img src={svg} alt="" />
                    </div>

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold p-5">Register</h1>

                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input name='photo' type="text" placeholder="photo url" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='my-5 mx-5'>already have an account ? <Link className='text-lime-800 font-bold' to='/login'>log in</Link></p>
                    </div>
                    <p className='text-error text-center mt-5'>{error}</p>
                </div>
            </div>
        </div>
    );
};

export default Register;