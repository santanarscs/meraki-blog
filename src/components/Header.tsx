import Link from 'next/link'
import { MenuIcon } from '@heroicons/react/solid'
function Header() {
  return (
    <div className="flex w-full h-20 shadow-md z-10">
      <header className="content flex justify-between items-center px-3 sm:px-8 z-10">
        <div className="relative w-52">
          <div className="absolute -top-5">
            <img className="h-20 sm:h-28 md:h-40" src="/images/Logo.svg" alt="Meraki terapia"/>
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