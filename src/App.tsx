import { Logo } from './components/Logo';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100"></div>

      {/* Noise texture overlay */}
      <div className="fixed inset-0 opacity-[0.015] mix-blend-soft-light pointer-events-none"
           style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full bg-white/80 backdrop-blur-xl border-b border-slate-200 z-50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={40} className="text-slate-700" />
              <span className="text-xl font-semibold text-slate-900">Foresty</span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-40 pb-32 px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              <div className="relative">
                <h1 className="text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                    Software crafted
                  </span>
                  <br />
                  <span className="text-slate-900">with care</span>
                </h1>
                <p className="text-xl lg:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We build thoughtful applications that bring joy to people's lives.
                  Starting with games, expanding to more.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Apps Section */}
        <section className="py-32 px-6 lg:px-8 relative">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

          <div className="max-w-7xl mx-auto relative">
            <div className="mb-16">
              <h2 className="text-5xl font-bold tracking-tight mb-4 text-slate-900">
                Our Apps
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl">
                Quality software built with attention to detail and user experience.
              </p>
            </div>

            {/* Line and Stone App Card */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">Available Now</span>
              </div>

              <h3 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">
                Line and Stone
              </h3>
              <p className="text-lg text-slate-600 max-w-3xl mb-12 leading-relaxed">
                A strategic tile-drafting game where players compete to complete beautiful
                mosaic patterns. Draft colored materials, fill your blueprint grid, and
                outscore your opponents.
              </p>

              {/* Screenshots */}
              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/screenshots/menu_screenshot.png"
                      alt="Line and Stone Menu"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
                <div className="group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <img
                      src="/screenshots/game_screenshot.png"
                      alt="Line and Stone Gameplay"
                      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl mb-6 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <svg className="w-7 h-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-900">Strategic gameplay</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Plan your moves carefully to maximize scoring opportunities and complete your mosaic grid.
                  </p>
                </div>

                <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl mb-6 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <svg className="w-7 h-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-900">Beautiful design</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Artisan-inspired visuals with handcrafted aesthetics and multiple theme options.
                  </p>
                </div>

                <div className="group relative bg-white rounded-2xl p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:shadow-md">
                  <div className="w-14 h-14 bg-slate-100 rounded-xl mb-6 flex items-center justify-center group-hover:bg-slate-200 transition-colors duration-300">
                    <svg className="w-7 h-7 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-slate-900">AI opponents</h4>
                  <p className="text-slate-600 leading-relaxed">
                    Challenge yourself against intelligent AI with multiple difficulty levels.
                  </p>
                </div>
              </div>

              {/* Platform badges */}
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-slate-600">Available on</span>
                <div className="flex gap-3">
                  <span className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                    iOS
                  </span>
                  <span className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors">
                    Web
                  </span>
                </div>
              </div>
            </div>

            {/* More to Come Section */}
            <div className="mt-32 pt-16 border-t border-slate-200">
              <div className="text-center max-w-2xl mx-auto">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6">
                  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  <span className="text-sm font-medium text-slate-600">Coming Soon</span>
                </div>
                <h3 className="text-3xl font-bold tracking-tight mb-4 text-slate-900">
                  More to come
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We're working on new applications that continue our mission of creating thoughtful,
                  well-crafted software. Stay tuned for updates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-32 px-6 lg:px-8 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-5xl font-bold tracking-tight mb-8 text-slate-900">
                Built for quality
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-6">
                Foresty is a software development organization dedicated to creating
                applications that combine thoughtful design with robust engineering.
              </p>
              <p className="text-xl text-slate-600 leading-relaxed">
                We believe in building products that are both beautiful and functional,
                with a focus on user experience and technical excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-16 px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Logo size={36} className="text-slate-700" />
                <span className="font-semibold text-lg text-slate-900">Foresty</span>
              </div>
              <p className="text-sm text-slate-500">
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
