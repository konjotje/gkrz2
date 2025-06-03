import React from "react";
import { Link } from "react-router-dom";

interface GameCardProps {
  title: string;
  emoji: string;
  playable?: boolean;
  comingSoon?: boolean;
  route?: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, emoji, playable, comingSoon, route }) => {
  return (
    <div
      className="w-full max-w-[220px] h-[220px] mx-auto flex flex-col items-center justify-center bg-white border border-gray-100 rounded-2xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-2xl group"
      style={{ minWidth: 0 }}
    >
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <span className="text-[3rem] sm:text-[3.5rem] mb-2 select-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.10)] group-hover:scale-110 transition-transform duration-200" aria-hidden="true">{emoji}</span>
        <h2 className="text-lg font-semibold text-gray-900 text-center mb-1 leading-tight tracking-tight group-hover:text-gokkerz-green transition-colors duration-200">{title}</h2>
      </div>
      {playable ? (
        <Link
          to={route || "#"}
          className="mt-2 w-full px-4 py-2 rounded-full bg-gokkerz-green text-white font-bold shadow hover:bg-gokkerz-green/90 transition text-base text-center"
        >
          Speel nu
        </Link>
      ) : (
        <button
          className="mt-2 w-full px-4 py-2 rounded-full bg-gray-100 text-gray-400 font-semibold shadow text-base text-center cursor-not-allowed border border-gray-200 group-hover:bg-gray-200 transition"
          disabled
        >
          Coming Soon
        </button>
      )}
    </div>
  );
};

export default GameCard;
