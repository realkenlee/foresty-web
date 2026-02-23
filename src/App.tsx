function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-purple-950 to-black opacity-70"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600/20 via-transparent to-transparent"></div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] mix-blend-soft-light pointer-events-none"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full bg-black/50 backdrop-blur-xl border-b border-white/10 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-sm"></div>
                <div className="relative w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-semibold">Foresty</span>
            </div>
          </div>
        </header>

        {/* Hero Section with animated glow */}
        <section className="pt-40 pb-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              {/* Glowing orb effect */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>

              <div className="relative">
                <h1 className="text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                    Software crafted
                  </span>
                  <br />
                  <span className="text-white">with care</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We build thoughtful applications that bring joy to people's lives.
                  Starting with games, expanding to more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured App Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          {/* Grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f15_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f15_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="max-w-7xl mx-auto relative">
            {/* Floating badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-xl mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-300">Featured App</span>
            </div>

            <h2 className="text-6xl font-bold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Line and Stone
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mb-20 leading-relaxed">
              A strategic tile-drafting game where players compete to complete beautiful
              mosaic patterns. Draft colored materials, fill your blueprint grid, and
              outscore your opponents.
            </p>

            {/* Screenshots with 3D effect */}
            <div className="grid lg:grid-cols-2 gap-8 mb-20">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/screenshots/menu_screenshot.png"
                    alt="Line and Stone Menu"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src="/screenshots/game_screenshot.png"
                    alt="Line and Stone Gameplay"
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Features with glassmorphism */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic gameplay</h3>
                <p className="text-gray-400 leading-relaxed">
                  Plan your moves carefully to maximize scoring opportunities and complete your mosaic grid.
                </p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Beautiful design</h3>
                <p className="text-gray-400 leading-relaxed">
                  Artisan-inspired visuals with handcrafted aesthetics and multiple theme options.
                </p>
              </div>

              <div className="group relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:bg-white/10">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI opponents</h3>
                <p className="text-gray-400 leading-relaxed">
                  Challenge yourself against intelligent AI with multiple difficulty levels.
                </p>
              </div>
            </div>

            {/* Platform badges with glow */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-medium text-gray-400">Available on</span>
              <div className="flex gap-3">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <span className="relative inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black">
                    iOS
                  </span>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                  <span className="relative inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-white text-black">
                    Web
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section with accent */}
        <section className="py-32 px-6 lg:px-8 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold tracking-tight mb-8">
                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Built for quality
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-6">
                Foresty is a software development organization dedicated to creating
                applications that combine thoughtful design with robust engineering.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                We believe in building products that are both beautiful and functional,
                with a focus on user experience and technical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-16 px-6 lg:px-8 bg-black/30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="relative w-7 h-7">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg blur-sm"></div>
                  <div className="relative w-7 h-7 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg"></div>
                </div>
                <span className="font-semibold text-lg">Foresty</span>
              </div>
              <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} Foresty. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
