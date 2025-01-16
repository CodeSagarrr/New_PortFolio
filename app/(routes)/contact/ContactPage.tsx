"use client"
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Link from 'next/link';
const ContactPage = () => {
    const [state, handleSubmit] = useForm("myzzvalk");
    if (state.succeeded){
        return <p className='text-4xl font-["Signika"] font-extrabold w-full h-[68vh] flex justify-center items-center'>Thank You For Joining !</p>;
    }

    return (
        <>

            <section className="bg-transperent">
                <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                    
                    <section className="relative flex h-[26rem] items-end bg-gray-900 lg:col-span-5 lg:h-[100vh] xl:col-span-6">
                        <img
                            alt="Image"
                            src="https://img.freepik.com/free-vector/customer-support-illustration_23-2148885964.jpg?t=st=1737025258~exp=1737028858~hmac=576fe3e6f68d4beb59c6d3eab676c6e273624cdf5a378d736815f3ce5daf60ed&w=740"
                            className="absolute inset-0 h-full w-full object-cover opacity-80"
                        />

                        
                    </section>

                    <main
                        className="flex items-center  justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-6 xl:col-span-6"
                    >
                        
                        <div className="max-w-xl lg:max-w-3xl">
                        <h1 className='text-center text-4xl font-bold font-["Signika"]'>Contact</h1>

                            <form onSubmit={handleSubmit} className="mt-8 grid grid-cols-6 gap-6">


                                <div className="col-span-6">
                                    <label htmlFor="Email" className="block text-sm font-bold text-gray-300 "> Email </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="mt-1 p-2 w-full rounded-md border-gray-200 bg-white text-sm text-gray-900 shadow-sm outline-none"
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6">
                                    <label htmlFor="Email" className="block text-sm mb-2 font-bold text-gray-300 "> Message </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        cols={75}
                                        rows={5}
                                        className='shadow-sm w-full p-2 outline-none rounded-md border-gray-200 text-gray-900 resize-none'
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </div>

                                <div className="col-span-6">
                                    <p className="text-sm text-gray-300">
                                        By creating an account, you agree to our
                                        <Link href="/" className="text-gray-600 underline"> terms and conditions </Link>
                                        and
                                        <Link href="/" className="text-gray-600 underline">privacy policy</Link>.
                                    </p>
                                </div>

                                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                    <button
                                        className="inline-block shrink-0 rounded-md bg-white px-12 py-3 text-md font-bold font-['Signika'] text-black transition-all hover:bg-gray-400" type="submit" disabled={state.submitting}
                                    >
                                        Send
                                    </button>


                                </div>
                            </form>
                        </div>
                    </main>
                </div>
            </section>

        </>


    )
}

export default ContactPage
