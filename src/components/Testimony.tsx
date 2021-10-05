import { useState } from "react";
import Image from 'next/image'
import Slider from "react-slick";
import { ArrowLeftIcon as ArrowBack, ArrowRightIcon as ArrowNext, StarIcon as Stars} from '@heroicons/react/outline'

const listData = [
  {
    name: "Ivan Camargo",
    image: "/images/ivan.jpeg",
    city: "Rio das Ostras",
    country: "RJ",
    rating: "5.0",
    testimony:
      "Vale muito, me ajudou com minha tdah, e ansiedade.",
  },
  {
    name: "Ana Maria Santana",
    image: "/images/ana.png",
    city: "Unamar",
    country: "RJ",
    rating: "5.0",
    testimony:
      "Muito atenciosa, realmente funciona, vale apena conferir esse tratamento, comigo funciona super bem.",
  },
  {
    name: "Edson Felix",
    image: "/images/edson.png",
    city: "Rio das Ostras",
    country: "RJ",
    rating: "5.0",
    testimony:
      "Ótimo atendimendo, excelente terapeuta, tive um excelente resultado no meu tratamento. Recomendo.",
  },
  {
    name: "Fabiano Guedes",
    image: "/images/fabiano.png",
    city: "Rio das Ostras",
    country: "RJ",
    rating: "5.0",
    testimony:
      "Muito antesiosa, estou adorando o tratamento.",
  },
]


function Testimony() {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20 ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);
  return (
    <section className="py-4 sm:py-14 bg-gray-200 px-3 sm:px-8 w-full">
      <div className="w-full flex flex-col content  items-center">
        <h1 className="text-2xl text-center sm:text-4xl uppercase tracking-wider font-medium pb-2 border-b-2 border-brand text-gray-800">Meus Clientes</h1>
      </div>
      <div className="w-full flex flex-col content">
        <Slider
          {...settings}
          arrows={false}
          ref={setSliderRef}
          className="flex items-stretch justify-items-stretch my-5 sm:my-10 w-full"
        >
          {listData.map((item, index) => (
            <div className="px-3 flex items-stretch" key={`${item.name}-${index}`}>
              <div className="border-2 border-gray-400 hover:border-brand transition-all rounded-lg p-8 flex flex-col">
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <Image
                      src={item.image}
                      height={50}
                      width={50}
                      alt={item.name}
                      className="rounded-full"
                    />
                    <div className="flex flex-col ml-5 text-left">
                      <p className="text-lg text-gray-800 capitalize">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 capitalize">
                        {item.city},{item.country}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-none items-center ml-auto order-1 xl:order-2 text-gray-500">
                    <p className="text-sm">{item.rating}</p>
                    <span className="flex ml-4">
                      <Stars className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <p className="mt-5 text-left text-gray-500">“{item.testimony}”.</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-brand border hover:bg-brand-light hover:text-white-500 transition-all text-brand cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6" />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-brand border hover:bg-brand-light hover:text-white-500 transition-all text-brand cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </section>
  )
}

export  { Testimony }