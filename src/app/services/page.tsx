export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Modern, responsive websites built with the latest technologies",
      features: ["React & Next.js", "TypeScript", "Responsive Design", "SEO Optimization"],
      icon: "🌐"
    },
    {
      title: "Brand Design",
      description: "Complete brand identity and visual design solutions",
      features: ["Logo Design", "Brand Guidelines", "Marketing Materials", "UI/UX Design"],
      icon: "🎨"
    },
    {
      title: "Digital Marketing",
      description: "Strategic marketing campaigns that drive real results",
      features: ["Social Media", "Content Strategy", "Analytics", "Campaign Management"],
      icon: "📈"
    },
    {
      title: "Consulting",
      description: "Expert guidance to help your business grow and scale",
      features: ["Strategy Planning", "Technical Consulting", "Process Optimization", "Growth Planning"],
      icon: "🚀"
    }
  ];

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Let&apos;s discuss how we can help your business succeed
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us Today
          </a>
        </div>
      </main>
    </div>
  );
}