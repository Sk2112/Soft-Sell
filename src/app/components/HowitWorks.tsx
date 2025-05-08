export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">How it Works</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <img src="Logo/upload.png" alt="Icon 1" className="w-16 h-16 mb-4" />
          <p className="text-gray-700">	Upload	License</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <img src="/Logo/valuation.png" alt="Icon 2" className="w-16 h-16 mb-4" />
          <p className="text-gray-700">Get	Valuation</p>
        </div>
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <img src="Logo/payment.png" alt="Icon 3" className="w-16 h-16 mb-4" />
          <p className="text-gray-700">Get	Paid</p>
        </div>
      </div>
    </section>
  );
}
