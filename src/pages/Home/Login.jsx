/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import svg from '../../assets/undraw_login_re_4vu2.svg'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';





const Login = () => {
    const { signIn, signInGoogle } = useContext(AuthContext)
    const [error, setError] = useState('')


    const googleProvider = new GoogleAuthProvider();


    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';


    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const data = { email, password }
        console.log(data)

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                // console.log(error);
                if (error) {
                    setError('Your email / password is incorrect... ')
                    return
                }
            })
    }

    // google signIn
    const handleGoogleSignIn = () => {
        signInGoogle(googleProvider)
            .then(result => {
                const GoogleUser = result.user;
                console.log(GoogleUser)
            })
            .catch(error => {
                console.error('error', error.message)
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
                        <form onSubmit={handleSubmit} className="card-body">
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
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='my-5 mx-5'>Don't have account ? <Link className='text-lime-800 font-bold' to='/register'>Sign up</Link></p>

                        <div className="m-5">
                            <p>Sign in With: <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success text-2xl ">Google</button></p>
                        </div>
                    </div>
                </div>

                <p className='text-error text-center mt-5'>{error}</p>
                
            </div>
        </div>
    );
};

export default Login;