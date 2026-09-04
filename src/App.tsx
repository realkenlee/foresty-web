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
          <div className="max-w-3xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Logo size={40} className="text-slate-700" />
              <span className="text-xl font-semibold text-slate-900">Foresty</span>
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="pt-32 pb-12 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 text-slate-900">
              Games and tools
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Two iOS apps from Foresty: a pocket typewriter and a tile-drafting game.
            </p>
          </div>
        </section>

        {/* Our Apps */}
        <section className="pb-20 px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-slate-900">
              Our Apps
            </h2>

            <div className="grid grid-cols-1 gap-6">
              {/* Platn — launch priority */}
              <article className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6">
                  <span className="text-sm font-medium text-slate-600">Available Now</span>
                </div>

                <h3 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">
                  Platn
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      Local pocket typewriter. No account. No sync. No subscription.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a
                        href="https://apps.apple.com/us/app/pocket-typewriter-platn/id6806239617"
                        className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        App Store
                      </a>
                      <a
                        href="/platn"
                        className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                  <img
                    src="/screenshots/platn_screenshot.png"
                    alt="Platn"
                    className="w-28 rounded-xl border border-slate-200 shrink-0"
                  />
                </div>
              </article>

              {/* Line and Stone — compressed peer */}
              <article className="bg-white rounded-2xl border border-slate-200 p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 mb-6">
                  <span className="text-sm font-medium text-slate-600">Available Now</span>
                </div>

                <h3 className="text-4xl font-bold tracking-tight mb-4 text-slate-900">
                  Line and Stone
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      A strategic tile-drafting game. Draft materials, fill your blueprint, and outscore your opponents.
                    </p>
                    <a
                      href="https://apps.apple.com/us/app/line-and-stone/id6758897625"
                      className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium bg-slate-900 text-white hover:bg-slate-800 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      App Store
                    </a>
                  </div>
                  <img
                    src="/screenshots/menu_screenshot.png"
                    alt="Line and Stone"
                    className="w-28 rounded-xl border border-slate-200 shrink-0"
                  />
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-10 px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Logo size={36} className="text-slate-700" />
                  <span className="font-semibold text-lg text-slate-900">Foresty</span>
                </div>
                <p className="text-sm text-slate-500">
                  iOS apps — games and tools.
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="/privacy"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="/support"
                  className="text-sm text-slate-500 hover:text-slate-700 transition-colors"
                >
                  Support
                </a>
                <p className="text-sm text-slate-500">
                  © {new Date().getFullYear()} Foresty. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
