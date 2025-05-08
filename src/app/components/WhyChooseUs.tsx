export default function WhyChooseUs() {
  const reasons = [
    {
      icon: "⚡",
      title: "Fast Process",
      desc: "Quick valuation and payment turnaround.",
    },
    {
      icon: "🔒",
      title: "Secure & Private",
      desc: "Your data is safe and encrypted.",
    },
    {
      icon: "💸",
      title: "Best Offers",
      desc: "We offer the highest possible value.",
    },
    {
      icon: "🤝",
      title: "Trusted by Thousands",
      desc: "We’re the go-to for license resale.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10 text-gray-900">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="flex items-start space-x-4 bg-gray-50 p-4 rounded shadow-sm text-left"
          >
            <div className="text-3xl">{item.icon}</div>
            <div>
              <h3 className="font-semibold text-lg text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
