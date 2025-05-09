// src/components/Testimonials.tsx
export function Testimonials() {
  return (
    <section className="py-20 px-6 bg-blue-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">
        What Our Customers Say
      </h2>
      <div className="space-y-8 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded shadow-md text-gray-700">
          <p className="italic">
            &quot;I was able to sell my unused licenses easily and quickly. Highly
            recommend!&quot;
          </p>
          <p className="mt-4 font-semibold">- John Doe, CEO, Software Inc.</p>
        </div>
        <div className="bg-white p-6 rounded shadow-md text-gray-700">
          <p className="italic">
            &quot;Great service and amazing customer support! Very satisfied!&quot;
          </p>
          <p className="mt-4 font-semibold">- Jane Smith, CTO, Tech Co.</p>
        </div>
      </div>
    </section>
  );
}
