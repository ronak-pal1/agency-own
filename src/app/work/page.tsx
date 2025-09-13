export default function Work() {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern online store with advanced features and seamless user experience",
      tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
      image: "🛍️",
      category: "Web Development"
    },
    {
      title: "Brand Identity Redesign",
      description: "Complete visual identity overhaul for a growing tech startup",
      tech: ["Adobe Creative Suite", "Figma", "Brand Strategy"],
      image: "🎨",
      category: "Design"
    },
    {
      title: "SaaS Dashboard",
      description: "Analytics dashboard for B2B software with real-time data visualization",
      tech: ["React", "D3.js", "Node.js", "PostgreSQL"],
      image: "📊",
      category: "Web Development"
    },
    {
      title: "Mobile App Design",
      description: "User-friendly mobile application for fitness tracking and coaching",
      tech: ["React Native", "UI/UX Design", "Prototyping"],
      image: "📱",
      category: "Mobile"
    },
    {
      title: "Marketing Website",
      description: "High-converting landing page for digital marketing agency",
      tech: ["Next.js", "Framer Motion", "SEO Optimization"],
      image: "🚀",
      category: "Web Development"
    },
    {
      title: "Content Management System",
      description: "Custom CMS solution for publishing and content management",
      tech: ["Node.js", "MongoDB", "React", "Express"],
      image: "📝",
      category: "Backend"
    }
  ];

  const categories = ["All", "Web Development", "Design", "Mobile", "Backend"];

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and see how we&apos;ve helped businesses achieve their digital goals
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-8">
                <div className="text-4xl mb-4 text-center">{project.image}</div>
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let&apos;s collaborate and create something amazing together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Start a Project
            </a>
            <a
              href="/services"
              className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Services
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}