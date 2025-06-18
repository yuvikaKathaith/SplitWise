import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="flex justify-between items-center px-6 py-10 md:px-20">
      <div
        onClick={() => navigate("/")} 
        className="flex items-center gap-2 text-black text-[22px] font-bold cursor-pointer">
        <img
          src="/logo.svg"
          alt="Logo"
          height={35}
          width={35}
        />
        SplitWise
      </div>
      <nav className="hidden md:flex items-center gap-10 text-[16px] text-black">
        <a href="/about">about</a>
        <a href="/reviews">reviews</a>
        <a href="/blog">blog</a>
        <a href="/contact">contact us</a>
        <button className="ml-4 border border-black/20 px-7 py-2 rounded-md hover:bg-black/5 transition">
          Login
        </button>
      </nav>
    </header>
  );
};

export default Header;
