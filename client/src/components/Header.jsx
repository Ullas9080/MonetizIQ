import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAtom } from "jotai";
import { userDeatils } from "../atoms/Atoms";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [userAtom, setUserAtom] = useAtom(userDeatils);

  const navItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Summary", path: "/summary" },
    { name: "About", path: "/about" },
  ];

  const closeSidebar = () => setIsOpen(false);

  
  const handleLogout = () => {
 setUserAtom({
      name: null,
      title: null,
      logo: null,
      gmailProfile: null,
    });
    localStorage.clear();
    sessionStorage.clear();

 window.location.href = "https://monetiziq.onrender.com/oauth2callback/logout";
  };

  return (
    <>
      {/* Main Header */}
      <header className="px-6 py-5 border-b border-purple-800/30 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/home" className="text-3xl font-black">
            Monetiz<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">IQ
</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                    : "text-purple-300 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop: Profile + Logout */}
          <div className="hidden md:flex items-center gap-4">
            {/* Profile */}
            <Link to="/profile" className="flex items-center gap-3 group">
              {userAtom.gmailProfile ? (
                <img
                  src={userAtom.gmailProfile}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border-2 border-purple-500 shadow-md ring-2 ring-purple-500/30"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {userAtom.name?.[0] || "U"}
                </div>
              )}
              <span className="text-purple-200 font-medium group-hover:text-white transition">
                {userAtom.name || "User"}
              </span>
            </Link>

            {/* Logout Button (Desktop) */}
            <button
              onClick={handleLogout}
              className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
            >
              Logout
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg bg-white/10 border border-purple-500/30"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Sidebar (Logout still at bottom) */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeSidebar} />

          <div className="relative ml-auto w-80 bg-gradient-to-b from-purple-950 to-black border-l border-purple-600 shadow-2xl flex flex-col">
            <div className="p-8 flex-1 overflow-y-auto">
              <div className="text-center mb-10">
                <Link to="/profile" onClick={closeSidebar}>
                  {userAtom.gmailProfile ? (
                    <img
                      src={userAtom.gmailProfile}
                      alt="Profile"
                      className="w-24 h-24 rounded-full mx-auto border-4 border-purple-500 shadow-xl"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white shadow-xl">
                      {userAtom.name?.[0] || "U"}
                    </div>
                  )}
                </Link>
                <h3 className="mt-4 text-xl font-bold text-white">{userAtom.name || "User"}</h3>
              </div>

              <nav className="space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={closeSidebar}
                    className={`block w-full text-left px-6 py-4 rounded-xl text-lg font-medium transition-all ${
                      location.pathname === item.path
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                        : "text-purple-200 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Logout Button (Mobile - Fixed Bottom) */}
            <div className="p-8 border-t border-purple-800/50">
              <button
                onClick={handleLogout}
                className="w-full py-4 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-500 hover:to-pink-500 text-white font-bold rounded-xl shadow-lg transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;