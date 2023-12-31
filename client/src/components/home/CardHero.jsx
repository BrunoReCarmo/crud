import React, { useState } from "react";
import { jwtDecode } from "jwt-decode";

function CardHero() {
  //Token == LocalStorage
  const token = localStorage.getItem("token");
  //Token => Info User
  const decodedToken = jwtDecode(token);
  //O email do usuário
  const nome = decodedToken.nome;

  const svgStyles = {
    transform: "scale(1.5)",
    opacity: "0.1",
  };

  const blockStyles1 = {
    background: "radial-gradient(black, transparent 60%)",
    transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
    opacity: "0.2",
  };

  return (
    <div className="flex-shrink-0 relative overflow-hidden bg-teal-500 rounded-lg max-w-md shadow-lg">
      <svg
        className="absolute bottom-0 left-0 mb-8"
        viewBox="0 0 375 283"
        fill="none"
        style={svgStyles}
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div
          className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
          style={blockStyles1}
        ></div>
        <img
          className="relative w-40"
          src="https://assets-global.website-files.com/6364b6fd26e298b11fb9391f/6364b6fd26e2982a41b93c71_63184c5867aa7b2b84a1e2ca_DrawKit0035_Startups_%2526_Tech_Thumbnail.png"
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-6 mt-6">
        <span className="block opacity-75 -mb-1">Bem vindo,</span>
        <div className="flex justify-between">
          <span className="block font-semibold text-xl">{nome}</span>
          <span className="block bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
            Olá
          </span>
        </div>
      </div>
    </div>
  );
}

export default CardHero;
