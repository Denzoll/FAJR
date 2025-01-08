import React from "react";
import logo from "../assets/logo.png";
import avitoLogo from "../assets/avito.logo..png";
import wUpLogo from "../assets/wUp.png";

export default function Header() {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-around items-center  ">
        <img className="w-16" src={logo} />

        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="hover:underline">
                О Компании
              </a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">
                Каталог
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Контакты
              </a>
            </li>
            <li>
              <a href="#partners" className="hover:underline">
                Партнеры
              </a>
            </li>
            <li>
              <a href="#condition" className="hover:underline">
                Условия
              </a>
            </li>
          </ul>
        </nav>
        <div className=" flex gap-4 ">
          <a
            href="https://www.avito.ru/user/bf0665358178ca6d02ef99a6046c3219/profile?src=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8 rounded-xl " src={avitoLogo} />
          </a>
          <a
            href="https://www.youtube.com/shorts/JyB1Ip7tdc8"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="w-8 h-8 rounded-xl " src={wUpLogo} />
          </a>
        </div>
      </div>
    </header>
  );
}
