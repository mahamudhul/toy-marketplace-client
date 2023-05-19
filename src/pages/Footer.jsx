/* eslint-disable no-unused-vars */
import React from 'react';
import {
    FaFacebookSquare, FaYoutubeSquare, FaSlackHash
} from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                    <h1 className='font-bold text-2xl underline-offset-1 mb-8'>Toy Zone</h1>
                    <p className="font-bold">
                        ACME Industries Ltd. <br />Providing reliable tech since 1992
                    </p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>

            <footer className="footer items-center p-4 bg-neutral text-neutral-content">
                <div className="items-center grid-flow-col">
                    <FaSlackHash className='text-5xl'></FaSlackHash>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
                <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a className='link'><FaYoutubeSquare className='text-4xl'></FaYoutubeSquare></a>
                    <a className='link'><FaFacebookSquare className='text-4xl'></FaFacebookSquare></a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;