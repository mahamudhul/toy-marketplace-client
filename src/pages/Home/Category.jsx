/* eslint-disable no-unused-vars */
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Category = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-center mt-20 mb-10
            '>All category</h1>

            <div>
                <Tabs>
                    <TabList>
                        <Tab>car</Tab>
                        <Tab>truck</Tab>
                        <Tab>bus</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>
            </div>

            <div className='grid grid-cols-4 gap-4 mx-5'>
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
            </div>
        </div>
    );
};

export default Category;