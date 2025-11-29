import React from "react";
import { useGetGeminiTextQuery } from "../features/apiSlice";
import { useAtom } from "jotai";
import { userDeatils } from "../atoms/Atoms";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { TypeAnimation } from "react-type-animation";

const Summary = () => {
  const [userAtom] = useAtom(userDeatils);

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useGetGeminiTextQuery(userAtom.user_id, {
    skip: !userAtom.user_id,
  });

  if (isLoading) return <Loader />;
  if (error)
    return <Error message="Failed to load your AI plan" onRetry={refetch} />;

  const suggestions = data?.suggestions || "No suggestions yet — upload more videos!";

  // Split suggestions into lines
  const suggestionLines = suggestions.split("\n").filter(line => line.trim() !== "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 mt-10">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              30-Day
            </span>{" "}
            Growth Plan
          </h1>
          <p className="text-xl text-purple-300">
            AI analyzed your channel • Here’s exactly what to do next
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-2xl border border-purple-600/40 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 px-10 py-8 border-b border-purple-800/50">
            <h2 className="text-4xl font-bold text-center">
              Hey {userAtom.name || "Creator"}!
            </h2>
            <p className="text-center text-purple-200 mt-3 text-lg">
              This is your personalized roadmap to 3× growth
            </p>
          </div>

          <div className="p-10 space-y-8">
            {suggestionLines.map((line, index) => {
              const isNumberMatch = line.match(/^\d+\./);
              const isBulletMatch =
                line.toLowerCase().includes("start doing") ||
                line.toLowerCase().includes("stop doing") ||
                line.toLowerCase().includes("keep doing") ||
                line.toLowerCase().includes("post this");

              return (
                <div
                  key={index}
                  className={`flex items-start gap-6 p-6 rounded-2xl transition-all ${
                    isNumberMatch
                      ? "bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50"
                      : "bg-black/40"
                  }`}
                >
                  <div className="flex-shrink-0">
                    {isNumberMatch ? (
                      <span className="text-4xl font-black text-purple-400">
                        {line.split(".")[0]}
                      </span>
                    ) : isBulletMatch ? (
                      <span className="text-3xl">
                        {line.toLowerCase().includes("start") ? "Start" : ""}
                        {line.toLowerCase().includes("stop") ? "Stop" : ""}
                        {line.toLowerCase().includes("keep") ? "Keep" : ""}
                        {line.toLowerCase().includes("post this next") ? "Next Video" : ""}
                        {line.toLowerCase().includes("post this after") ? "Video After" : ""}
                      </span>
                    ) : (
                      <span className="text-4xl">•</span>
                    )}
                  </div>

                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-purple-100">
                    <TypeAnimation
                      sequence={[line, 1000]}
                      speed={50}
                      wrapper="span"
                      repeat={0}
                    />
                  </p>
                </div>
              );
            })}
          </div>

          <div className="bg-black/50 px-10 py-8 text-center border-t border-purple-800/50">
            <p className="text-purple-300 text-lg">
              Follow this plan → come back in 30 days and thank me
            </p>
            <p className="text-sm text-purple-500/70 mt-4">
              Powered by MonetizIQ • Updated automatically
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            This is how you win.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
