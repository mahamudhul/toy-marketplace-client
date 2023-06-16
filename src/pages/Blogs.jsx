/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import img from '../assets/undraw_questions_re_1fy7.svg'

const Blogs = () => {
    return (
        <div className=' grid grid-cols-2 mx-5 my-14  max-h-full'>
            <div>
                <img src={img} alt="" />
            </div>
            <div >
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                    </div>
                    <div className="collapse-content">
                        <p>A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                            <br />
                            A refresh token just helps you re-validate a user without them having to re-enter their login credentials multiple times. The access token is re-issued, provided the refresh token is a valid one requesting permission to access confidential resources.
                            You can store the access token and refresh token in the server-side session.
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        2. Compare SQL and NoSQL databases?
                    </div>
                    <div className="collapse-content">
                        <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        3. What is express js? What is Nest JS ?
                    </div>
                    <div className="collapse-content">
                        <p>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-3">
                    <div className="collapse-title text-xl font-medium">
                        4. What is Nest JS ?
                    </div>
                    <div className="collapse-content">
                        <p>Nest. js is one of the fastest-growing Node. js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        5. What is MongoDB aggregate and how does it work ?
                    </div>
                    <div className="collapse-content">
                        <p>MongoDB aggregate is a command for data aggregation in MongoDB. It allows you to process and analyze data using a pipeline of stages. These stages include filtering, grouping, sorting, and transforming data. It's a powerful tool for complex data analysis and generating valuable insights.
                            <br />
                            Mongoose's aggregate() function returns an instance of Mongoose's Aggregate class.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;