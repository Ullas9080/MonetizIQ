import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black/70 backdrop-blur-2xl border-t border-purple-900/40 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand Section */}
          <div className="space-y-5">
            <h2 className="text-4xl font-black tracking-tighter">
              Monetiz
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
                IQ
              </span>
            </h2>
            <p className="text-purple-300/80 text-sm leading-relaxed max-w-sm">
              The smartest way to understand your YouTube channel. Turn data into decisions, views into revenue.
            </p>
            <p className="text-xs text-purple-500/60">
              © 2025 MonetizIQ • Built for creators who mean business
            </p>
          </div>

          {/* Links */}
          <div className="space-y-8 md:space-y-0 md:flex md:justify-around">
            <div>
              <h3 className="text-lg font-bold text-white mb-5">Navigation</h3>
              <ul className="space-y-3 text-purple-300/80 text-sm">
                <li><a href="/dashboard" className="hover:text-purple-400 transition">Dashboard</a></li>
                <li><a href="/summary" className="hover:text-purple-400 transition">Summary</a></li>
                <li><a href="/videos" className="hover:text-purple-400 transition">Videos</a></li>
                <li><a href="/about" className="hover:text-purple-400 transition">About</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-5">Legal</h3>
              <ul className="space-y-3 text-purple-300/80 text-sm">
                <li><a href="#" className="hover:text-purple-400 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-purple-400 transition">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Final Touch */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-5">Made with</h3>
              <p className="text-purple-300/70 text-sm">
                React • Tailwind • Recharts • Love
              </p>
            </div>

            <p className="text-purple-400/60 text-xs mt-10">
              For creators who don’t guess — they know.
            </p>
          </div>
        </div>

        {/* Bottom Tagline */}
        <div className="mt-14 pt-8 border-t border-purple-800/60 text-center">
          <p className="text-purple-400/70 text-sm font-medium">
            MonetizIQ — Where data meets domination
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;