/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [tab, setTab] = useState("car");
    const [toys, setToys] = useState([])
    // const [toy, setToy] = useState([]);


    // console.log(toy)

    useEffect(() => {
        fetch(`http://localhost:3000/category/${tab}`)
            .then(res => res.json())
            .then(data => setToys(data))
    }, [tab])


    // useEffect(() => {
    //     const result = toys?.filter((toy) => toy.category == tab)
    //     setToy(result)
    //     // console.log(result)
    // }, [])


    const handleTabClick = (tabName) => {
        setTab(tabName)
    }

    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20 mb-10
            '>All category</h1>

            <div className='text-center text-2xl'>
                <Tabs >
                    <TabList >

                        <Tab onClick={() => handleTabClick("car")}>car</Tab>

                        <Tab onClick={() => handleTabClick("truck")}>truck</Tab>

                        <Tab onClick={() => handleTabClick("bus")}>bus</Tab>
                    </TabList>

                    <TabPanel>
                        <div className='flex m-20 gap-5'>
                            {
                                toys?.map((s) => (
                                    <div className=" card card-compact w-96 bg-base-100 shadow-xl flex justify-center">
                                        <div className='h-3/5'>
                                            <figure className=''>
                                                <img src={s.photoUrl} />
                                            </figure>
                                        </div>

                                        <div className="card-body text-start">

                                            <h2 className="card-title font-bold text-2xl ">{s.name}!</h2>
                                            <p className='mt-8 text-xl'> price: {s.price}</p>
                                            <p className='mt-8 text-xl'>Rating: {s.rating}</p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/alltoys/${s._id}`}>
                                                    <button className="btn btn-primary">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex m-20 gap-5'>
                            {
                                toys?.map((s) => (
                                    <div className=" card card-compact w-96 bg-base-100 shadow-xl flex justify-center">
                                        <div className='h-3/5'>
                                            <figure className=''>
                                                <img src={s.photoUrl} />
                                            </figure>
                                        </div>

                                        <div className="card-body text-start">

                                            <h2 className="card-title font-bold text-2xl ">{s.name}!</h2>
                                            <p className='mt-8 text-xl'> price: {s.price}</p>
                                            <p className='mt-8 text-xl'>Rating: {s.rating}</p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/alltoys/${s._id}`}>
                                                    <button className="btn btn-primary">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className='flex m-20 gap-5'>
                            {
                                toys?.map((s) => (
                                    <div className=" card card-compact w-96 bg-base-100 shadow-xl flex justify-center">
                                        <div className='h-3/5'>
                                            <figure className=''>
                                                <img src={s.photoUrl} />
                                            </figure>
                                        </div>

                                        <div className="card-body text-start">

                                            <h2 className="card-title font-bold text-2xl ">{s.name}!</h2>
                                            <p className='mt-8 text-xl'> price: {s.price}</p>
                                            <p className='mt-8 text-xl'>Rating: {s.rating}</p>

                                            <div className="card-actions justify-end">
                                                <Link to={`/alltoys/${s._id}`}>
                                                    <button className="btn btn-primary">Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                                )
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;