function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg"></div>
            <span className="text-xl font-semibold">Foresty</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              Software crafted with care
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl leading-relaxed">
              We build thoughtful applications that bring joy to people's lives.
              Starting with games, expanding to more.
            </p>
          </div>
        </div>
      </section>

      {/* Featured App Section */}
      <section className="py-24 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">
              Featured App
            </p>
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 mb-4">
              Line and Stone
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              A strategic tile-drafting game where players compete to complete beautiful
              mosaic patterns. Draft colored materials, fill your blueprint grid, and
              outscore your opponents.
            </p>
          </div>

          {/* Screenshots Grid */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-1">
              <div className="relative overflow-hidden rounded-xl bg-white">
                <img
                  src="/screenshots/menu_screenshot.png"
                  alt="Line and Stone Menu"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-100 to-gray-50 p-1">
              <div className="relative overflow-hidden rounded-xl bg-white">
                <img
                  src="/screenshots/game_screenshot.png"
                  alt="Line and Stone Gameplay"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-violet-500 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic gameplay</h3>
              <p className="text-gray-600 leading-relaxed">
                Plan your moves carefully to maximize scoring opportunities and complete your mosaic grid.
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Beautiful design</h3>
              <p className="text-gray-600 leading-relaxed">
                Artisan-inspired visuals with handcrafted aesthetics and multiple theme options.
              </p>
            </div>

            <div className="group">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AI opponents</h3>
              <p className="text-gray-600 leading-relaxed">
                Challenge yourself against intelligent AI with multiple difficulty levels.
              </p>
            </div>
          </div>

          {/* Platform Badges */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-gray-700">Available on</span>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white">
                iOS
              </span>
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white">
                Web
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-6">
              Built for quality
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              Foresty is a software development organization dedicated to creating
              applications that combine thoughtful design with robust engineering.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              We believe in building products that are both beautiful and functional,
              with a focus on user experience and technical excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg"></div>
              <span className="font-semibold">Foresty</span>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Foresty. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
