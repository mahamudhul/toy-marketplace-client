/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    const [tab, setTab] = useState("car");
    const [toys, setToys] = useState([])
    // const [toy, setToy] = useState([]);


    // console.log(toy)

    useEffect(() => {
        fetch(`http://localhost:5000/category/${tab}`)
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

            <div>
                <Tabs>
                    <TabList>

                        <Tab onClick={() => handleTabClick("car")}>car</Tab>

                        <Tab onClick={() => handleTabClick("truck")}>truck</Tab>

                        <Tab onClick={() => handleTabClick("bus")}>bus</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            toys?.map((s) => (
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={s.photoUrl} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{s.name}!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )

                            )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys?.map((s) => (
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={s.photoUrl} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{s.name}!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )

                            )
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            toys?.map((s) => (
                                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                                    <figure><img src={s.photoUrl} /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{s.name}!</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Buy Now</button>
                                        </div>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </TabPanel>
                </Tabs>
            </div>

            {/* <div className='grid grid-cols-4 gap-4 mx-5'>
                <div>
                    <img className='w-full' src="https://m.media-amazon.com/images/I/71UV2P59vCL.jpg" alt="" />
                    <h2>Merval</h2>
                </div>
                <div>
                    <img src="https://bbts1.azureedge.net/site-images/p/2022/09/1611a3b5-3f7b-4130-b4dd-ff3b81fbfc91.jpg" alt="" />
                    <h2>Transformers</h2>
                </div>
                <div>
                    <img src="https://bbts1.azureedge.net/site-images/p/2023/03/9f306334-79ce-43a0-9888-07b8bafda760.jpg" alt="" />
                    <h2>Avengers</h2>
                </div>
                <div>
                    <img src="https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/909751/homelander_the-boys_gallery_6185d4703f37e.jpg" alt="" />
                    <h2>Star boys</h2>
                </div>
            </div> */}
        </div>
    );
};

export default Category;