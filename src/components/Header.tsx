
function Header() {
  return (
    <div className="flex w-full h-20 shadow-md z-10">
      <header className="flex justify-between items-center px-8 w-full z-10">
        <div className="relative w-52">
          <div className="absolute -top-5">
            <img className="h-40" src="/images/Logo.svg" alt="Meraki terapia"/>
          </div>
        </div>
        <nav className="justify-self-end">
          <ul className="flex  space-x-5 uppercase font-semibold tracking-wide text-gray-800">
            <li>Home</li>
            <li>Serviços</li>
            <li>Sobre mim</li>
            <li>Contato</li>
          </ul>
        </nav>
      </header>
    </div>
  )
 }


export { Header }