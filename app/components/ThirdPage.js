import { Code2 } from "lucide-react";

export default function ThirdPage() {
  return (
    <div className="w-full max-w-screen-xl px-4 py-24 bg-[#1A0B2E] relative overflow-hidden">

      <div className="text-center mb-20">
        <h1 className="text-5xl mb-5">
          World's most accurate email <br />verifier and validator online
        </h1>
        <p className="text-gray-300">
          Clean and validate your email addresses in just one click
        </p>
      </div>

      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px]
          bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0)_70%)]
          rounded-full pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center justify-between relative z-10">

        <div className="w-full md:w-1/2 px-20">
          <h2 className="text-gray-300 text-xl mb-3 flex items-center">
            <span className="mr-2">📧</span> Bulk email verifier
          </h2>
          <h1 className="text-2xl mb-4 text-white leading-tight">
            Verify your email lists effortlessly
          </h1>
          <p className="text-gray-400 text-lg mb-6">
            Use the bulk email verifier to improve email deliverability<br />and sender reputation.
          </p>
          <ul className="text-gray-300 space-y-3 text-lg">
            <li className="flex items-center"><span className="text-green-400 text-2xl mr-3">✅</span> Remove wrong emails</li>
            <li className="flex items-center"><span className="text-green-400 text-2xl mr-3">✅</span> Avoid spam traps</li>
            <li className="flex items-center"><span className="text-green-400 text-2xl mr-3">✅</span> Reduce bounces</li>
          </ul>
          <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all font-semibold glow-button">
            Dive In!
          </button>
        </div>

        <div className="w-full md:w-1/2 px-8 mt-12 md:mt-0">
          <div className="bg-[#12102D] rounded-xl p-6 shadow-xl relative">
            <div className="bg-[#19173A] p-5 rounded-lg relative">
              <h3 className="text-gray-300 text-lg">Total Leads</h3>
              <div className="text-white text-3xl font-bold mt-2">5,689</div>
              <p className="text-green-400 text-sm mt-3">✅ 100% Open Rates</p>

              <div className="absolute right-5 top-5">
                <div className="relative w-28 h-28">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">

                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#2D2B42"
                      strokeWidth="8"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#4ADE80"
                      strokeWidth="8"
                      strokeDasharray="150.72 100.48"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FFA500"
                      strokeWidth="8"
                      strokeDasharray="37.68 213.52"
                      strokeDashoffset="-150.72"
                      strokeLinecap="round"
                    />

                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#FF3D00"
                      strokeWidth="8"
                      strokeDasharray="37.68 213.52"
                      strokeDashoffset="-188.4"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-bold">
                    70%<br /> valid
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between bg-[#19173A] p-3 rounded-lg">
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/women/79.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-white">Maria Hill</span>
                </div>
                <span className="text-green-400">✅ Valid</span>
                <span className="text-gray-400">Deliverable</span>
              </div>

              <div className="flex items-center justify-between bg-[#19173A] p-3 rounded-lg">
                <div className="flex items-center">
                  <img src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-white">Britney Stey</span>
                </div>
                <span className="text-green-400">✅ Valid</span>
                <span className="text-gray-400">Deliverable</span>
              </div>

              <div className="flex items-center justify-between bg-[#19173A] p-3 rounded-lg">
                <div className="flex items-center">
                  <img src="https://randomuser.me/api/portraits/men/86.jpg" alt="User" className="w-10 h-10 rounded-full mr-3" />
                  <span className="text-white">Martin Robert</span>
                </div>
                <span className="text-red-400">❌ Invalid</span>
                <span className="text-gray-400">Not Deliverable</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-screen-xl px-4 py-24 bg-[#1A0B2E] relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 px-8">
          <div className="w-full md:w-1/2">
            <div className="bg-[#12102D] p-6 rounded-xl shadow-lg">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code className="language-javascript">
                  {`1.   const api_key = '{api_key}';
2.   const email = '{email}';
3.   const emailable = require('verifier')(api_key);
4.
5.   verifier.verify(email)
6.   .then(function(response)  {
7.     console.log(response);
     })
   
     .catch(function(error) {
       console.error(error);
     });`}
                </code>
              </pre>
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-3">
            <h4 className="text-3xl text-white flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              Email Verification API
            </h4>
            <p className="text-3xl font-semibold text-gray-300">
              Prevent inaccurate data with real-time<br /> email validation
            </p>

            <div className="mt-8 space-y-2">
              <p className="text-lg text-gray-400">
                Guard your system against inaccurate data by instantly<br /> filtering out invalid addresses!
              </p>

              <ul className="text-gray-300 space-y-2 mt-5 text-lg">
                <li className="flex items-center"><span className="text-green-400 text-xl mr-3">✅</span> Elegant and secure HTTPS-based RESTful API, with JSON <br />as its core data format</li>
                <li className="flex items-center"><span className="text-green-400 text-xl mr-3">✅</span> Validate emails before they enter your database</li>
                <li className="flex items-center"><span className="text-green-400 text-xl mr-3">✅</span> Integrate the verifier's real-time API into your website's<br /> registraton process.</li>
              </ul>
              <button className="mt-6 bg-gradient-to-r from-purple-500 to-blue-500 shadow-lg hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all font-semibold glow-button">
                Dive In!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
