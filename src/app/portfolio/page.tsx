export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our recent projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
              <span className="text-white text-6xl">🏢</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Corporate Website</h3>
              <p className="text-gray-600 mb-4">
                A modern corporate website built with Next.js and TailwindCSS featuring responsive design and optimized performance.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Next.js</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">TailwindCSS</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">TypeScript</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <span className="text-white text-6xl">🛒</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">E-commerce Platform</h3>
              <p className="text-gray-600 mb-4">
                Full-featured e-commerce solution with payment integration, inventory management, and admin dashboard.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React</span>
                <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Node.js</span>
                <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">MongoDB</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
              <span className="text-white text-6xl">📱</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile App</h3>
              <p className="text-gray-600 mb-4">
                Cross-platform mobile application built with React Native, featuring real-time notifications and offline support.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">React Native</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Firebase</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Redux</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center">
              <span className="text-white text-6xl">📊</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Real-time analytics dashboard with interactive charts and data visualization for business intelligence.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Vue.js</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">D3.js</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Python</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
              <span className="text-white text-6xl">🎨</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design System</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive design system and component library for consistent user experience across products.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Figma</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Storybook</span>
                <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">CSS</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-6xl">☁️</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cloud Migration</h3>
              <p className="text-gray-600 mb-4">
                Complete cloud migration project with improved scalability, security, and reduced operational costs.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">AWS</span>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Docker</span>
                <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Kubernetes</span>
              </div>
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Want to See More?</h2>
          <p className="text-gray-600 mb-6">
            These are just a few examples of our work. We&apos;d love to show you more case studies and discuss how we can help with your project.
          </p>
          <a 
            href="/contact" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Let&apos;s Discuss Your Project
          </a>
        </div>
      </div>
    </div>
  );
}