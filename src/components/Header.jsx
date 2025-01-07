import React from 'react'
import logo from '../assets/logo.png';
export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img className='w-22' src={logo} />
         
        <nav>
          <ul className="flex gap-4">
            <li>
              <a href="#home" className="hover:underline">Home</a>
            </li>
            <li>
              <a href="#catalog" className="hover:underline">Catalog</a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="text-red-500">Тест Tailwind</div>
    </header>
  )
}
