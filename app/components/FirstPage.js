export default function FirstPage() {
  return (
    <div className="w-full max-w-screen-xl px-4 py-16 bg-gradient-to-b from-[#09061A] to-[#1A0B2E] relative overflow-hidden">

      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] 
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0)_70%)] 
          rounded-full pointer-events-none"></div>

      <div className="flex justify-start items-center mb-16 px-8 relative z-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Verifier
        </h1>
      </div>

      <div className="text-center">
        <h1 className="text-6xl font-bold mb-1">Email Checker</h1>
        <h1 className="text-6xl font-bold mb-5">and Verifier</h1>

        <p className="text-lg mb-8 max-w-md mx-auto">
          Reduce bounce rate and improve your email marketing performance with our verifier.
        </p>

        <div className="flex justify-center mb-40">
          <input
            type="text"
            placeholder="Enter an email to verify"
            className="px-6 border-2 border-gray-700 rounded-l-xl focus:outline-none w-96 bg-transparent text-lg"
          />
          <button className="bg-blue-500 text-white px-8 py-3 rounded-r-xl hover:bg-blue-600 transition-colors font-semibold">
            Verify
          </button>
        </div>

        <div className="text-center relative z-10">
          <p className="mb-8 text-gray-400">Modern companies are using <strong>Verifier</strong></p>
          <div className="flex justify-center space-x-8 text-lg">
            <span>SENTRY ECOM</span>
            <span>XLR MEDIA</span>
            <span>Utreach Clerk</span>
            <span>OG</span>
            <span>ACEXMEDIA</span>
          </div>
        </div>
      </div>
    </div>
  );
}