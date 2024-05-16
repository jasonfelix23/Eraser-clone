import React from 'react';
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="bg-white dark:bg-zinc-900">
    <div className='mx-auto max-w-screen-xl pt-10 flex justify-center lg:items-center'>
      <div className='border px-10 py-2 rounded-full text-center'>
        <h2>See More | <span className='text-cyan-600'>AI Diagrams &gt;</span></h2>
      </div>
    </div>
  <div className="mx-auto max-w-screen-xl px-4 p-32 lg:flex lg:h-1/2 lg:items-center">
    <div className="mx-auto max-w-xl text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Documents & diagrams
        <strong className="font-extrabold text-cyan-600 sm:block"> for engineering teams. </strong>
      </h1>

      <p className="mt-4 sm:text-xl/relaxed">
      All-in-one markdown editor, collaborative canvas, and diagram-as-code builder!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          className="w-full rounded bg-cyan-600 px-12 py-3 text-sm font-medium flex flex-row justify-center gap-2 text-white shadow hover:bg-cyan-700 focus:outline-none focus:ring active:bg-cyan-500 sm:w-auto "
          href="#"
        >
          <span>Try Eraser</span>
          <BsArrowRight/>
        </a>

        
      </div>
    </div>
  </div>
</section>
  )
}

export default Hero