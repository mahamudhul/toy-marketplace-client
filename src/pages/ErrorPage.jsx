/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import img from '../assets/undraw_page_not_found_re_e9o6.svg'




const ErrorPage = () => {
    const { error, status } = useRouteError();

    return (
        <div>
            <section className='flex items-center h-50 p-16  '>
                <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <img src={img} alt="" />
                    <div className=' text-center mt-20'>
                        <p className='text-2xl font-semibold md:text-3xl mb-8 border'>
                         message:   {error?.message}
                        </p>
                        <button className="btn btn-outline btn-success"><Link
                            to='/'>
                            go to homepage
                        </Link></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;