

import { TypeAnimation } from "react-type-animation";

const Login = () => {
 
  const handleLogin = () => {

      window.location.href = "http://localhost:3000/oauth2callback/google";

  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-yellow-100 via-yellow-50 to-zinc-100 flex items-center justify-center px-6">
      <div className="w-full max-w-3xl mx-auto text-center">
        <h1 className="text-6xl font-extrabold text-zinc-900 tracking-tight mb-4">
          Moneiz<span className="text-yellow-600">IQ</span>
        </h1>

        <p className="text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed mb-12">
  <TypeAnimation
    sequence={[
      "Understand your YouTube audience like never before.", 2000,
      "Transform your analytics into powerful insights.", 2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</p>

        <div className="w-full max-w-xl mx-auto p-10 rounded-3xl bg-zinc-50 shadow-2xl border border-zinc-200">
          <h2 className="text-2xl font-semibold text-zinc-900 mb-6">
            Sign in to continue
          </h2>

          <button
            type="button"
            onClick={handleLogin}
            className="w-full py-4 rounded-xl bg-yellow-400 text-zinc-900 text-lg font-semibold hover:bg-zinc-400 transition-all shadow-md hover:shadow-xl"
          >
            🚀 Continue with YouTube
          </button>

        </div>

        <p className="text-zinc-500 text-sm mt-10">
          Secure login powered by Google OAuth · Your data stays private
        </p>
      </div>
    </div>
  );
};

export default Login;
