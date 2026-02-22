function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-2xl font-semibold text-slate-800">Foresty</h1>
          <p className="text-sm text-slate-500">Software Development</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Crafting Digital Experiences
        </h2>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto">
          We build thoughtful software that brings joy and value to people's lives.
        </p>
      </section>

      {/* Line and Stone App Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="text-sm font-semibold text-blue-600 mb-2">FEATURED APP</div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Line and Stone</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl">
              A strategic tile-drafting game where players compete to complete beautiful mosaic patterns.
              Draft colored materials, fill your blueprint grid, and outscore your opponents in this
              elegant board game adaptation.
            </p>

            {/* Screenshots */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/screenshots/menu_screenshot.png"
                  alt="Line and Stone Menu Screen"
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                <img
                  src="/screenshots/game_screenshot.png"
                  alt="Line and Stone Gameplay"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Strategic Gameplay</h4>
                <p className="text-slate-600 text-sm">
                  Plan your moves carefully to maximize scoring opportunities and complete your mosaic grid.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Beautiful Design</h4>
                <p className="text-slate-600 text-sm">
                  Artisan-inspired visuals with handcrafted aesthetics and multiple theme options.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">AI Opponents</h4>
                <p className="text-slate-600 text-sm">
                  Challenge yourself against intelligent AI with multiple difficulty levels.
                </p>
              </div>
            </div>

            {/* Platform Info */}
            <div className="flex items-center gap-4 pt-6 border-t border-slate-200">
              <span className="text-sm font-medium text-slate-700">Available on:</span>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  iOS
                </span>
                <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                  Web
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl font-bold text-slate-900 mb-6 text-center">About Foresty</h3>
          <p className="text-lg text-slate-600 mb-4 text-center">
            Foresty is a software development organization dedicated to creating quality applications
            that combine thoughtful design with robust engineering.
          </p>
          <p className="text-lg text-slate-600 text-center">
            We believe in building products that are both beautiful and functional, with a focus on
            user experience and technical excellence.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-slate-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Foresty. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
