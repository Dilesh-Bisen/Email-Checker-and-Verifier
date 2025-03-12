"use client";
import { useState } from "react";

export default function PricingComponent() {
    const [emailCount, setEmailCount] = useState(2000);
    const [isMonthly, setIsMonthly] = useState(true);

    return (
        <div className="w-full max-w-screen-xl px-10 py-20 bg-[#1A0B2E] text-white flex flex-col items-center">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold mb-3">Choose the right plan for you</h1>
                <p className="text-gray-300">With great power comes great plans</p>
            </div>

            <div className="flex flex-col md:flex-row items-stretch justify-center w-full max-w-4xl">

                <div className="bg-[#3A2C50] border border-gray-700 rounded-lg p-8 md:w-[60%] relative shadow-lg flex flex-col gap-6"
                    style={{ background: "radial-gradient(circle, rgba(90,60,140,0.7), rgba(60,40,100,0.9))" }}>

                    <div className="flex justify-center items-center gap-4">
                        <span className={`cursor-pointer text-lg ${isMonthly ? "text-blue-400 font-semibold" : "text-gray-400"}`} onClick={() => setIsMonthly(true)}>Monthly</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" checked={!isMonthly} onChange={() => setIsMonthly(!isMonthly)} />
                            <div className="w-12 h-6 bg-blue-300 rounded-full p-1 flex items-center">
                                <div className={`w-4 h-4 bg-white rounded-full transform transition-all ${isMonthly ? "translate-x-0" : "translate-x-6"}`}></div>
                            </div>
                        </label>
                        <span className={`cursor-pointer text-xl ${!isMonthly ? "text-white font-semibold" : "text-gray-400"}`} onClick={() => setIsMonthly(false)}>Pay-as-you-go</span>
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="block text-gray-300 text-xl text-center mt-4">How many emails do you have?</label>
                        <input
                            type="number"
                            value={emailCount}
                            onChange={(e) => setEmailCount(Number(e.target.value))}
                            className="w-1/2 mb-3.5 mx-auto p-2 bg-white text-black rounded-lg text-center"
                        />
                        <div className="relative w-full mt-5 mb-5">
                            <input
                                type="range"
                                min="2000"
                                max="1000000"
                                defaultValue="300000"
                                className="w-full accent-blue-500"
                                style={{
                                    height: "12px",
                                    background: "linear-gradient(to right, #00c6ff, #0072ff)",
                                    borderRadius: "10px",
                                }}
                            />
                        </div>
                    </div>

                    <div className="text-center text-5xl font-bold">
                        $18 USD<span className="text-lg align-super text-gray-400">/month</span>
                    </div>

                    <button className="w-auto mt-5 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold transition duration-300">
                        Buy this now
                    </button>
                </div>

                <div className="bg-[#1A0B2E] border border-gray-700 rounded-lg p-6 md:w-[40%] text-left shadow-md -ml-px"
                    style={{ background: "radial-gradient(circle, rgba(20,10,30,0.9), rgba(10,5,20,1))" }}>
                    <h2 className="text-xl font-semibold mb-4">Monthly rates</h2>
                    <div>
                        <div className="flex justify-between bg-blue-700 p-2 rounded-lg">
                            <span className="text-white">from 2,000/mo</span>
                            <span className="text-white">0.009 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 5,000/mo</span>
                            <span className="text-white">0.008 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 10,000/mo</span>
                            <span className="text-white">0.0075 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 25,000/mo</span>
                            <span className="text-white">0.007 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 50,000/mo</span>
                            <span className="text-white">0.007 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 100,000/mo</span>
                            <span className="text-white">0.0039 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 250,000/mo</span>
                            <span className="text-white">0.0035 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 500,000/mo</span>
                            <span className="text-white">0.003 USD</span>
                        </div>
                        <div className="flex justify-between p-2">
                            <span className="text-gray-300">from 1,000,000/mo</span>
                            <span className="text-white">0.00225 USD</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}