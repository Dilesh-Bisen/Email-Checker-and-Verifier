"use client";

export default function EighthPage() {
  return (
    <div className="w-full max-w-screen-xl mx-auto min-h-screen flex flex-col bg-[#1A0B2E] text-white">

      <div className="flex-grow text-center mb-16 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold mb-24">TrySee Verifier <br/>in action</h1>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold glow-button transition-all">
          Dive In!
        </button>
      </div>

      <footer className="w-full bg-[#1a1422] border-t border-gray-800 pt-8 pb-12">
        <div className="max-w-screen-xl mx-auto px-14 flex flex-col md:flex-row justify-between items-center">
          
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <img src="images/verifier_logo.jpeg" alt="Verifier Logo" className="h-8" />
              <span className="text-lg font-semibold">Verifier</span>
            </div>
            <p className="text-gray-400">© 2024 Verifier. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-1">
              All trademarks, logos, and brand names are the property of <br/>their respective owners.
            </p>
          </div>

          <div className="flex space-x-32">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Terms and conditions
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Privacy policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
