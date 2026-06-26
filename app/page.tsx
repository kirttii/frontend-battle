
export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <nav className="flex justify-between items-center px-8 py-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold">Frontend Battle</h1>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-cyan-400">Features</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-lg font-semibold">
            Get Started
          </button>
        </div>
      </nav>
      <section className="flex flex-col items-center justify-center text-center px-8 py-32">
        <h2 className="text-6xl font-extrabold mb-6">
          Build The <span className="text-cyan-400">Future</span> of Web
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          A modern frontend challenge showcasing cutting-edge design, performance, and creativity. 
          Submit before 6 PM.
        </p>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-lg px-8 py-4 rounded-xl font-bold">
          View Submission
        </button>
      </section>
      <section id="features" className="grid md:grid-cols-3 gap-8 px-8 py-20 max-w-6xl mx-auto">
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Speed</h3>
          <p className="text-gray-300">Deployed on Vercel with Next.js 14 for lightning fast performance.</p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Design</h3>
          <p className="text-gray-300">Pixel-perfect UI built with Tailwind CSS and modern components.</p>
        </div>
        <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h3 className="text-2xl font-bold mb-4 text-cyan-400">Responsive</h3>
          <p className="text-gray-300">Fully responsive across mobile, tablet, and desktop devices.</p>
        </div>
      </section>
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        <p>© 2026 Frontend Battle | Built with Next.js + Tailwind</p>
      </footer>
    </main>
  )
}