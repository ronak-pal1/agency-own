export default function Services() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-blue-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">🌐</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Custom websites and web applications built with modern technologies like React, Next.js, and TypeScript.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• Responsive Design</li>
              <li>• Modern Frameworks</li>
              <li>• Performance Optimization</li>
              <li>• SEO Friendly</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-green-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">📱</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile Development</h3>
            <p className="text-gray-600 mb-4">
              Native and cross-platform mobile applications for iOS and Android with exceptional user experiences.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• React Native</li>
              <li>• Native iOS/Android</li>
              <li>• Cross-platform Solutions</li>
              <li>• App Store Deployment</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-purple-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              Beautiful and intuitive design systems that enhance user experience and drive engagement.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• User Research</li>
              <li>• Wireframing & Prototyping</li>
              <li>• Design Systems</li>
              <li>• Usability Testing</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-red-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">☁️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-4">
              Scalable cloud infrastructure and deployment solutions for modern applications.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• AWS/Azure/GCP</li>
              <li>• DevOps & CI/CD</li>
              <li>• Serverless Architecture</li>
              <li>• Monitoring & Analytics</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-yellow-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Strategic digital marketing solutions to increase your online presence and reach your target audience.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• SEO Optimization</li>
              <li>• Social Media Marketing</li>
              <li>• Content Strategy</li>
              <li>• Analytics & Reporting</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow">
            <div className="bg-indigo-500 rounded-lg w-12 h-12 flex items-center justify-center mb-6">
              <span className="text-white text-xl">🔧</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Consulting</h3>
            <p className="text-gray-600 mb-4">
              Expert technical consulting to help you make informed decisions about your technology stack and strategy.
            </p>
            <ul className="text-sm text-gray-500">
              <li>• Technology Assessment</li>
              <li>• Architecture Planning</li>
              <li>• Code Review</li>
              <li>• Best Practices</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">Let&apos;s discuss how we can help bring your vision to life.</p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </div>
  );
}