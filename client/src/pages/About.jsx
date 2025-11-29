import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8">
            About
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
              MonetizIQ
            </span>
          </h1>
          <p className="text-2xl md:text-3xl font-light text-purple-200/90 max-w-4xl mx-auto leading-relaxed">
            We don’t just show you numbers.<br />
            We show you <span className="font-bold text-purple-400">what they actually mean</span>.
          </p>
        </div>

        {/* Floating Glow Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </section>

      {/* Mission */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-purple-200 leading-relaxed max-w-3xl mx-auto">
              Most analytics tools drown creators in data.<br />
              <span className="text-purple-400 font-semibold">MonetizIQ cuts through the noise.</span><br /><br />
              We translate complex YouTube metrics into clear, actionable insights — so you can stop guessing and start growing with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">Why Creators Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Real Insights",
                desc: "No vanity metrics. Only data that actually moves the needle.",
                icon: "Target",
              },
              {
                title: "Built for Creators",
                desc: "Designed by YouTubers, for YouTubers. We speak your language.",
                icon: "Camera",
              },
              {
                title: "Privacy First",
                desc: "Your channel data never leaves your control. 100% secure.",
                icon: "Lock",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 backdrop-blur-lg border border-purple-500/20 rounded-3xl p-10 text-center hover:bg-white/10 hover:border-purple-500/50 transition-all duration-500"
              >
                <div className="text-6xl mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-purple-200/80">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-8">Ready to Level Up?</h2>
          <p className="text-xl text-purple-200 mb-12">
            Join thousands of creators who turned data into domination.
          </p>
          <a
            href="/dashboard"
            className="inline-block px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-purple-600/50 transition-all duration-300 hover:scale-105"
          >
            Go to Dashboard
          </a>
        </div>
      </section>

      {/* Footer Tagline */}
      <div className="text-center py-12 border-t border-purple-800/50">
        <p className="text-purple-400/70 textlg font-medium">
          MonetizIQ — Because guessing is for amateurs.
        </p>
      </div>
    </div>
  );
};

export default About;