/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from "react-hook-form";
import img from '../assets/undraw_add_document_re_mbjx.svg'


const AddToys = () => {


    const { register, handleSubmit, watch, formState: { errors } } = useForm();


    const onSubmit = (data) => {
        // console.log(data);
        fetch("https://toy-marketplace-server-omega-one.vercel.app/addtoys", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result )
                if (data.insertedId=== undefined) {
                    alert('Toy Added successfully')
                }
            })

    }

    return (
        <div className='flex items-center justify-around my-20'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='bg-slate-400 rounded-lg shadow-2xl'>
                <h1 className='text-center text-4xl font-bold my-10'>Enter Toy Details</h1>

                <form onSubmit={handleSubmit(onSubmit)} className='grid grid-cols-2'>

                    <input
                        className='p-5 text-2xl m-3 border rounded-lg bg-slate-400'
                        {...register("name")}
                        placeholder='name'
                        defaultValue="Name"
                    />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="Seller name" {...register("sellerName")} />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="Seller email" {...register("sellerEmail")} />

                    <select className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' {...register("category")}>
                        <option value="car">car</option>
                        <option value="bus">bus</option>
                        <option value="truck">truck</option>
                    </select>

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="price" {...register("price")} />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="rating" {...register("rating")} />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="Available quantity" {...register("quantity")} />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="Detail Description" {...register("description")} />

                    <input className='p-5 text-2xl m-3 border rounded-lg bg-slate-400' defaultValue="Photo url" {...register("photoUrl")} />
                    <br />

                    {/* {errors.exampleRequired && <span>This field is required</span>} */}

                    <input className="btn btn-success text-center m-10" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddToys;