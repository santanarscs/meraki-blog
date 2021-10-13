import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/solid'
import { useEffect, useState } from 'react'
import { Link as LinkScroll } from 'react-scroll'
import { Disclosure, Menu, Transition } from '@headlessui/react'

const navigation = [
  { label: 'Home', value: 'home' },
  { label: 'Serviços', value: 'services' },
  { label: 'Sobre mim', value: 'about' },
  { label: 'Contato', value: 'contact' },
]

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
    <div>
      <Disclosure as="nav" className={
        `w-full z-10 fixed top-0 transition-colors md:flex
        ${scrolled ? 'bg-white shadow-md h-16' : 'bg-gray-200 h-20'}
      `
      }>
        {({ open, close }) => (
          <>
            <div className="content  px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center w-full justify-between">
                  <div className="relative w-52">
                    <div className="absolute -top-5">
                      <div className="flex-shrink-0">
                        {scrolled
                          ? <img className="h-11" src="/images/lotus.svg" alt="Meraki terapia" />
                          : (
                            <>
                              <img className="hidden md:block sm:h-28 md:h-40" src="/images/Logo.svg" alt="Meraki terapia" />
                              <img className="h-11 md:hidden" src="/images/lotus.svg" alt="Meraki terapia" />
                            </>
                          )
                        }
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <ul className="flex uppercase font-semibold tracking-wide text-gray-800">
                      {navigation.map((item) => (
                        <LinkScroll
                          key={item.value}
                          activeClass="active"
                          to={item.value}
                          spy={true}
                          smooth={true}
                          duration={1000}
                          onSetActive={() => {
                            setActiveLink(item.value);
                          }}
                          className={
                            'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative' +
                            (activeLink === item.value
                              ? " text-brand animation-active "
                              : " text-gray-500 hover:text-brand a")
                          }
                        >
                          {item.label}
                        </LinkScroll>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button 
                    className="bg-transparent inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-300 focus:outline-none transition-colors">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-8 w-8" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className={
              `md:hidden  shadow-md ${scrolled ? 'bg-white': 'bg-gray-200'}`
              
            }>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 uppercase">
                {navigation.map((item) => (
                  <LinkScroll
                    activeClass="active"
                    to={item.value}
                    spy={true}
                    smooth={true}
                    duration={1000}
                    onSetActive={() => {
                      setActiveLink(item.value);
                    }}
                    className={
                      'px-4 py-2 mx-2 cursor-pointer animation-hover block relative' +
                      (activeLink === item.value
                        ? " text-brand animation-active "
                        : " text-black-500 hover:text-brand a")
                    }
                  >
                    {item.label}
                  </LinkScroll>
                  
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )

 }

export { Header }