export default function SecondPage() {
  return (
    <div className="w-full max-w-screen-xl px-4 py-24 bg-[#1A0B2E]">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold mb-4">How it works</h2>
        <p className="text-lg mb-8">It's super easy to verify your email addresses with Verifier.</p>
      </div>

      <div className="flex justify-around mb-16 px-8">

        <div className="text-center w-64">
          <div className="mb-4 p-6 bg-blue-900/20 rounded-full w-max mx-auto">
            <span className="text-4xl">📁</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Upload</h3>
          <p className="text-gray-300">Upload your email lists in<br />.csv format</p>
        </div>


        <div className="text-center w-64">
          <div className="mb-4 p-6 bg-purple-900/20 rounded-full w-max mx-auto">
            <span className="text-4xl">🔒</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Verify</h3>
          <p className="text-gray-300">Let Verifier perform,<br /> ensuring email validity</p>
        </div>


        <div className="text-center w-64">
          <div className="mb-4 p-6 bg-green-900/20 rounded-full w-max mx-auto">
            <span className="text-4xl">📥</span>
          </div>
          <h3 className="text-xl font-semibold mb-2">Download</h3>
          <p className="text-gray-300">Download your clean and<br />verified email list</p>
        </div>
      </div>
    </div>
  );
}