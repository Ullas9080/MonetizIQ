import { userDeatils } from "../atoms/Atoms";
import { useSearchParams, Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { useEffect } from "react";
import { useAtom } from "jotai";


const Home = () => {
  const [urlLocation] = useSearchParams();
  const [userAtom, setUserAtom] = useAtom(userDeatils);

  useEffect(() => {
    setUserAtom({
      user_id:urlLocation.get("userId")||"Your UserId",
      name: urlLocation.get("name") || "Your Channel",
      title: urlLocation.get("title") || "Welcome to your analytics",
      logo: urlLocation.get("logo") || urlLocation.get("picture") || null,
      gmailProfile: urlLocation.get("picture") || null,
    });
  }, [urlLocation, setUserAtom]);

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <CardContainer className="inter-var w-full max-w-2xl">
        <CardBody
          className={`
            relative group/card 
            bg-gradient-to-br from-purple-900/50 via-black/80 to-purple-950/60
            backdrop-blur-2xl
            border border-purple-500/30
            shadow-2xl shadow-purple-500/20
            w-full h-auto 
            rounded-3xl p-10
            flex flex-col justify-center items-center text-center
            transition-all duration-500
            hover:shadow-purple-500/40 hover:border-purple-400/50
          `}
        >
          {/* Glowing Orb Background Effect */}
          <div className="absolute inset-0 rounded-3xl overflow-hidden opacity-60">
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-600 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          {/* Channel Logo with Neon Glow */}
          <CardItem translateZ="100" className="relative mt-6">
            {userAtom.logo ? (
              <div className="relative">
                <img
                  src={userAtom.logo}
                  alt={userAtom.name}
                  className="w-44 h-44 object-cover rounded-full border-4 border-purple-500/50 shadow-2xl shadow-purple-600/50"
                />
                <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl animate-pulse" />
              </div>
            ) : (
              <div className="w-44 h-44 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-6xl font-bold text-white shadow-2xl">
                {userAtom.name?.[0] || "Y"}
              </div>
            )}
          </CardItem>

          {/* Channel Name - Neon Text */}
          <CardItem
            translateZ="80"
            className="mt-8 text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 drop-shadow-2xl"
          >
            {userAtom.name || "Your Channel"}
          </CardItem>

          {/* Channel Title */}
          <CardItem
            translateZ="60"
            className="mt-4 text-lg md:text-xl font-medium text-purple-200/90 max-w-md leading-relaxed"
          >
            {userAtom.title || "Dive deep into your YouTube analytics"}
          </CardItem>

          <div className="mt-12">
            <CardItem
              translateZ={40}
              as={Link}
              to="/dashboard"
              className={`
                relative px-10 py-5 
                bg-gradient-to-r from-purple-600 to-pink-600
                text-white text-lg font-bold
                rounded-2xl
                shadow-2xl shadow-purple-600/50
                overflow-hidden
                transition-all duration-500
                hover:scale-110 hover:shadow-purple-500/70
                hover:from-purple-500 hover:to-pink-500
                group
              `}
            >
              <span className="relative z-10">Enter Dashboard</span>
            
            </CardItem>
          </div>

        </CardBody>
      </CardContainer>


    </div>
  );
};

export default Home;