import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  }, [])
  return (
    <div className={
      `flex w-full z-10 fixed top-0 transition-colors
        ${scrolled ? 'bg-white shadow-md h-16' : 'bg-gray-200 h-20'}
      `
    }>
      <header className="content flex justify-between items-center px-3 sm:px-8 ">
        <div className="relative w-52">
          <div className="absolute -top-5">
            {scrolled
              ? <img className="h-11" src="/images/lotus.svg" alt="Meraki terapia" />
              : <img className="h-20 sm:h-28 md:h-40" src="/images/Logo.svg" alt="Meraki terapia" />
            }
            
          </div>
        </div>
        <nav className="hidden sm:block justify-self-end">
          <ul className="flex space-x-5 uppercase font-semibold tracking-wide text-gray-800">
            <li>
              <Link href="#home">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="#services">
                <a>Serviços</a>
              </Link>
            </li>
            <li>
              <Link href="#about">
                <a>Sobre mim</a>
              </Link>
            </li>
            <li>
              <Link href="#contact">
                <a>Contato</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button className="sm:hidden">
          <MenuIcon className="h-10 w-10 text-gray-700" />
        </button>
      </header>
    </div>
  )
 }


export { Header }