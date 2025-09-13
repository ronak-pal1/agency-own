import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Your Digital Success Partner
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto">
              We craft exceptional digital experiences that drive growth, enhance user engagement, 
              and transform your business vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
              >
                Start Your Project
              </Link>
              <Link 
                href="/portfolio"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-colors font-semibold text-lg"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive digital solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 text-2xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Web Development</h3>
              <p className="text-gray-600">
                Modern, responsive websites and web applications built with cutting-edge technologies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Development</h3>
              <p className="text-gray-600">
                Native and cross-platform mobile applications for iOS and Android.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">UI/UX Design</h3>
              <p className="text-gray-600">
                Beautiful and intuitive designs that enhance user experience and engagement.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/services"
              className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Agency Own?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick turnaround times without compromising quality.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Results Focused</h3>
              <p className="text-gray-600">Every project is designed to achieve your business goals.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Tech</h3>
              <p className="text-gray-600">Latest technologies and best practices in development.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clear Communication</h3>
              <p className="text-gray-600">Regular updates and transparent project management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s discuss how we can help bring your vision to life.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg inline-block"
          >
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
}
