import { TypeAnimation } from "react-type-animation";

const Login = () => {
  const handleLogin = () => {
    window.location.href = "https://monetiz-iq-fh2u.vercel.app/oauth2callback/google";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-4xl mx-auto text-center">
        {/* Main Title */}
        <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6">
          Monetiz <span className=" text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">IQ</span>
        </h1>

        {/* Animated Tagline */}
        <p className="text-xl md:text-2xl text-purple-200/90 font-light max-w-3xl mx-auto leading-relaxed mb-16">
          <TypeAnimation
            sequence={[
              "Understand your YouTube audience like never before.",
              3000,
              "Turn raw data into real growth strategies.",
              3000,
              "Know exactly what your viewers love.",
              3000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </p>

        {/* Login Card */}
        <div className="w-full max-w-md mx-auto p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/30 shadow-2xl">
          <h2 className="text-2xl font-bold text-white mb-8">
            Sign in to unlock insights
          </h2>

          <button
            type="button"
            onClick={handleLogin}
            className="
              w-full py-5 rounded-2xl 
              bg-gradient-to-r from-purple-600 to-pink-600 
              hover:from-purple-500 hover:to-pink-500
              text-white text-lg font-bold
              shadow-lg shadow-purple-600/50
              transition-all duration-300 
              flex items-center justify-center gap-3
              group
            "
          >
            <span className="text-2xl group-hover:scale-110 transition-transform">Continue with YouTube</span>
          </button>

          <p className="text-purple-300/70 text-sm mt-8 leading-relaxed">
            Secure Google OAuth • No passwords • Your channel data stays private
          </p>
        </div>

        {/* Footer */}
        <p className="text-purple-400/60 text-xs mt-12">
          Made for creators who want to grow smarter, not harder.
        </p>
      </div>
    </div>
  );
};

export default Login;