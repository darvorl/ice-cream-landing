import React, { useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";

const Button = ({ content, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      href="#"
      className={`flex items-center py-4.5 px-6.5 rounded-[30px] gap-3`}
      style={{
        backgroundColor: `#${color}`,
        boxShadow: isHovered ? `0 0 20px 2px #${color}80` : "",
        transition: "0.3s ease",
      }}
    >
      <p className="font-bold text-white font-[Archivo]">{content}</p>
      <BiRightArrowAlt className="text-white font-black text-xl" />
    </a>
  );
};

export default Button;
