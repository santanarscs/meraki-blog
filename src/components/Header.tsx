import { MenuIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'

function Header() {
  
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState(null)
  const [scrollActive, setScrollActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20);
    })
  },[])

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
        <nav className="hidden lg:block justify-self-end">
          <ul className="flex uppercase font-semibold tracking-wide text-gray-800">
          <LinkScroll
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("home");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "home"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              home
            </LinkScroll>
          <LinkScroll
              activeClass="active"
              to="services"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("services");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "services"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Serviços
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Sobre mim
            </LinkScroll>
            <LinkScroll
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("contact");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "contact"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
              Contato
            </LinkScroll>
          </ul>
        </nav>
        <button className="lg:hidden">
          <MenuIcon className="h-10 w-10 text-gray-700" />
        </button>
      </header>
    </div>
  )
 }

export { Header }