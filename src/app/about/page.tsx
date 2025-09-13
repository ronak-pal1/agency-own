export default function About() {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-lg mb-6 text-gray-600 dark:text-gray-300">
              We are a creative agency dedicated to helping businesses grow through innovative design and digital solutions. Our team combines creativity with technical expertise to deliver exceptional results.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Founded with a passion for excellence, we work closely with our clients to understand their vision and bring it to life through thoughtful design and strategic thinking.
            </p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="mb-4">
              To empower businesses with cutting-edge digital solutions that drive growth and create meaningful connections with their audiences.
            </p>
            <ul className="space-y-2">
              <li>✨ Creative Excellence</li>
              <li>🚀 Innovation-Driven</li>
              <li>🤝 Client-Focused</li>
              <li>📈 Results-Oriented</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}