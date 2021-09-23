import Link from 'next/link'
import Head from 'next/head'
import { Header } from '../components/Header'
import { ContactForm } from '../components/ContactForm'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meraki Terapia</title>
      </Head>
      <Header />
      
      <section id="home" className="bg-gray-200 mt-20">
        <div className="content content-area flex items-center justify-between px-3 sm:px-8 text-gray-800">
          <div className="flex flex-none flex-col items-center m-auto lg:m-0 lg:items-end">
            <h1 className="text-3xl text-center sm:text-4xl tracking-wide font-semibold sm:mb-2">Oi, eu sou Ana Caroline</h1>
            <span className="text-brand font-medium text-xl sm:text-2xl mb-4">Auriculoterapia e bem estar</span>
            <button className="bg-brand p-3 sm:p-4 rounded-full text-white uppercase tracking-wide w-36 font-medium hover:bg-brand-dark transition-colors">Saiba mais</button>
          </div>
          <img className="hidden flex-shrink-0 lg:block  lg:p-4 lg:w-auto" src="/images/Carol.png" alt="Ana Caroline Santana"/>
        </div>
      </section>

      <section id="services" className="py-4 sm:py-14 bg-white px-3 sm:px-8 text-gray-800 ">
        <div className="content flex items-center flex-col">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-wider font-medium pb-2 border-b-2 border-brand">Serviços</h1>
          <ul className="grid grid-cols-1 gap-4 mt-3 md:grid-cols-2 lg:grid-cols-3 lg:mt-6 ">
            <li className="rounded-lg shadow-md overflow-hidden bg-white">
              <img className="h-52 sm:h-80 w-full object-cover" src="/images/aurico.jpeg" alt="Auriculoterapia" />
              <div className="p-4 flex flex-col">
                <h2 className="text-xl mb-2 tracking-wide">Auriculoterapia</h2>
                <span className="text-gray-500 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </span>
                <button className="w-32 border border-brand rounded-full text-brand px-4 py-2 mt-2 text-sm hover:bg-brand hover:text-white transition-colors">Leia mais...</button>
              </div>
            </li>
            <li className="rounded-lg shadow-md overflow-hidden bg-white">
              <img className="h-52 sm:h-80 w-full object-cover" src="/images/ventosa.jpeg" alt="Ventosa terapia" />
              <div className="p-4 flex flex-col">
                <h2 className="text-xl mb-2 tracking-wide">Ventosa</h2>
                <span className="text-gray-500 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </span>
                <button className="w-32 border border-brand rounded-full text-brand px-4 py-2 mt-2 text-sm hover:bg-brand hover:text-white transition-colors">Leia mais...</button>
              </div>
            </li>
            <li className="rounded-lg shadow-md overflow-hidden bg-white">
              <img className="h-52 sm:h-80 w-full object-cover" src="/images/coach_child.jpeg" alt="Coach Child education" />
              <div className="p-4 flex flex-col">
                <h2 className="text-xl mb-2 tracking-wide">Coach child education</h2>
                <span className="text-gray-500 text-sm leading-relaxed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum </span>
                <button className="w-32 border border-brand rounded-full text-brand px-4 py-2 mt-2 text-sm hover:bg-brand hover:text-white transition-colors">Leia mais...</button>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="py-4 sm:py-14 bg-gray-200 px-3 sm:px-8 w-full text-gray-800 ">
        <div className="content flex items-center flex-col">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-wider font-medium pb-2 border-b-2 border-brand">Meus Clientes</h1>
          <ul className="my-5 sm:my-10 w-full">
            <li className="flex items-center justify-center">
              <img className="rounded-full h-24 w-24 mr-4" src="/images/ivan.jpeg" alt="Ivan" />
              <p className="text-gray-600 italic text-base w-2/3 line">“Após receber instruções no programa de coach child education meus filhos se tornaram dois dinossauros, o mais velho é o Dimitrisauro e o mais novo é o Icarosauro-san”</p>
            </li>
          </ul>
        </div>
      </section>

      <section className="py-4 sm:py-14 bg-white px-3 sm:px-8 w-full text-gray-800 ">
        <div className="content flex items-center flex-col">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-wider font-medium pb-2 border-b-2 border-brand">Sobre mim</h1>
          <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between mt-6">
            <img className="border-4 border-brand w-1/3 mb-4 sm:mb-0" src="/images/Carol.jpeg" alt="Carol Santana"/>
            <div className="sm:ml-4 flex-1 text-gray-600 space-y-6">
              <p className="leading-relaxed text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              <p className="leading-relaxed text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="py-4 sm:py-14 bg-gray-200 px-3 sm:px-8 w-full text-gray-800">
        <div className="content flex items-center flex-col">
          <h1 className="text-2xl sm:text-4xl uppercase tracking-wider font-medium pb-2 border-b-2 border-brand">Contato</h1>
          <div className="flex flex-col sm:flex-row mt-6">
            <ContactForm />
            <div className="flex flex-col mt-6 sm:mt-0 sm:ml-4">
              <img src="/images/MAPA.png" alt="Localização" />
              <p className="sm:self-end text-gray-700 mt-3">R. Acerbal Pinto Malheiros, 82A - Mariléa Chácara, Rio das Ostras</p>
              <p className="sm:self-end text-gray-700">Telefone: (22) 98324-2230</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="bg-brand text-white px-3">
        <div className="content flex flex-col sm:flex-row py-4 sm:py-14 sm:px-0 w-full justify-between">
          <div className="flex items-center">
            <img className="w-28" src="/images/logo-white.svg" alt="Meraki terapia" />
            <p className="w-52 text-xl ml-8 tracking-wide">Medicina alternativa para seu bem estar</p>
          </div>
          <div className="w-full sm:w-1/3 mt-4 sm:mt-0 self-end">
            <h2 className="text-xl font-bold tracking-wide">Redes sociais</h2>
            <ul className="flex space-x-3 sm:space-x-3 mt-4">
              <li className="hover:bg-brand-dark p-2 rounded-md transition-colors">
                <Link  href="https://www.instagram.com/caroline_sant/?hl=pt-br" >
                  <a className="h-5 w-5 sm:h-10 sm:w-10" target="_blank">
                    <img src="/images/twitter.svg" alt="twitter" />
                  </a>
                </Link>
              </li>
              <li className="hover:bg-brand-dark p-2 rounded-md transition-colors">
                <Link  href="https://www.instagram.com/caroline_sant/?hl=pt-br" >
                  <a className="h-5 w-5 sm:h-10 sm:w-10" target="_blank">
                    <img src="/images/instagram.svg" alt="instagram" />
                  </a>
                </Link>
              </li>
              <li className="hover:bg-brand-dark p-2 rounded-md transition-colors">
                <Link  href="https://www.facebook.com/auriculoriodasostras" >
                  <a className="h-5 w-5 sm:h-10 sm:w-10" target="_blank">
                    <img src="/images/facebook.svg" alt="facebook" />
                  </a>
                </Link>
              </li>
              <li className="hover:bg-brand-dark p-2 rounded-md transition-colors">
                <Link  href="https://www.linkedin.com/in/ana-caroline-santana-21ba8b97/" >
                  <a className="h-5 w-5 sm:h-10 sm:w-10" target="_blank">
                    <img src="/images/linkedin.svg" alt="linkedin" />
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      
      <div className="h-16 bg-brand-dark text-white flex flex-col items-center justify-center font-light text-sm">
        <p>Todos os direitos reservados</p>
        <p className="inline-block">Feito com <img className="inline-block" src="/images/s2.svg" alt="s2"/> para você</p>
      </div>
    </div>
  )
}
