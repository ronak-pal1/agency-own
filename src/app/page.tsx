export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-8 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            We Build Digital
            <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Your partner in creating stunning websites, powerful applications, and memorable brand experiences that drive results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/work"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Our Work
            </a>
            <a
              href="/contact"
              className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              We specialize in creating digital solutions that help businesses grow and succeed in the modern world.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Modern, responsive websites and web applications built with cutting-edge technologies.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-2xl font-bold mb-4">Brand Design</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete brand identity and visual design solutions that make your business stand out.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">📈</div>
              <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Strategic planning and consulting to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a
              href="/services"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Explore All Services
            </a>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                We&apos;re a creative agency passionate about helping businesses succeed through innovative design and technology. Our team combines artistic vision with technical expertise to deliver exceptional results.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Since our founding, we&apos;ve worked with companies of all sizes, from startups to enterprise, helping them achieve their digital goals and grow their online presence.
              </p>
              <a
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Learn More About Us
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-12 text-white text-center">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Ready to Launch?</h3>
              <p className="text-lg opacity-90 mb-6">
                Let&apos;s discuss your project and see how we can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
