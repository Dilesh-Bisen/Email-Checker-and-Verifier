"use client";

import { FaUsers, FaLaptop, FaBriefcase, FaStar, FaMicrophone } from "react-icons/fa";

export default function VerifierUsers() {
    return (
        <div className="w-full max-w-screen-xl px-6 py-20 bg-[#1A0B2E] text-white flex flex-col items-center">

            <h1 className="text-4xl font-bold mb-20 text-center">Who is using Verifier?</h1>


            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">

                <div className="relative bg-[#12102D] border border-blue-500/10 p-5 rounded-xl shadow-lg flex flex-col gap-3">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent rounded-t-sm"></div>
                    <FaUsers size={30} />
                    <p className="text-xl">Sales and marketing teams</p>
                </div>


                <div className="relative bg-[#12102D] border border-blue-500/10 p-6 rounded-xl shadow-lg flex flex-col gap-2 row-span-2">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent rounded-t-sm"></div>
                    <p className="text-4xl">Irreplaceable <br />tool for<br /> businesses</p>
                    <FaBriefcase size={30} className="mt-4" />
                    <p className="text-xl">Service providers</p>
                </div>

                <div className="relative bg-[#12102D] border border-blue-500/10 p-6 rounded-xl shadow-lg flex flex-col gap-2">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent rounded-t-sm"></div>
                    <FaMicrophone size={30} />
                    <p className="text-xl" >Recruiters</p>
                </div>

                <div className="relative bg-[#12102D] border border-blue-500/10 p-6 rounded-xl shadow-lg flex flex-col gap-2">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent rounded-t-sm"></div>
                    <FaLaptop size={30} />
                    <p className="text-xl">Software & IT companies</p>
                </div>

                <div className="relative bg-[#12102D] border border-blue-500/10 p-6 rounded-xl shadow-lg flex flex-col gap-2">
                    <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white/20 to-transparent rounded-t-sm"></div>
                    <FaStar size={30} />
                    <p className="text-xl">Backlinks outreach</p>
                </div>
            </div>

            <button className="mt-10 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all font-semibold glow-button">
                Dive In!
            </button>
        </div>
    );
}
