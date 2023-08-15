import { Route, Routes } from 'react-router-dom';
import { AiOutlinePlusCircle, AiOutlineDownload, AiOutlineArrowRight } from 'react-icons/ai';

import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import foto from './assets/foto.jpg'
import pengelolaan from './assets/pengelolaan.png'
import netflix from './assets/netflix-clone.png'
import next from './assets/tech/next.png'
import laravel from './assets/tech/laravel.png'
import react from './assets/tech/react.png'
import tailwind from './assets/tech/tailwind.png'

function App() {

  return (
    <main className="w-screen py-4 px-4 bg-gray-200 min-h-screen">
      <Header />
      {/* <section>
        <Routes>

        </Routes>
      </section> */}
      <div className='w-full bg-white rounded-xl px-2.5 py-2 mt-3 md:px-12'>
        <div className="w-full grid grid-rows-2 grid-flow-col gap-4 ">
          <div className="row-span-2 col-span-2 justify-start mt-2 md:mt-6">
            <div className='pl-3'>
              <li className='font-semibold text-gray-400 ml-2'>
                <p className='text-gray-800 font-semibold text-sm md:text-2xl '>Fullstack Developer</p>
              </li>
            </div>

            <div className='mt-6 pl-2 md:mt-10'>
              <h1 className='text-[24px] font-bold md:text-[62px]'>I&apos;m Moch Ridwan</h1>
              <h5 className='text-sm text-gray-700 md:text-5xl md:mr-40 mb-5'>Mahasiswa Sistem Informasi Universitas Muria Kudus</h5>
              <div className='flex md:mt-8'>
                <div className='flex bg-gray-800 px-2.5 py-1 rounded-lg cursor-pointer md:px-4 md:py-2'>
                  <AiOutlinePlusCircle size={14} className='fill-white h-6 md:h-8 md:w-8' />
                  <p className='text-white font-semibold text-xs ml-1 mt-1 md:text-xl md:mt-0'>Hire Me</p>
                </div>
                <div className='flex bg-white border border-gray-700 px-2 py-1 rounded-lg ml-1 cursor-pointer md:px-4 md:py-2'>
                  <AiOutlineDownload size={14} className='fill-black h-6 md:h-8 md:w-8' />
                  <p className='text-black font-semibold text-xs ml-1 mt-1 md:text-xl md:mt-0'>Resume</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-3 justify-self-end mt-2 md:mt-6">
            <div className='bg-green-500/20 pl-3 pr-2 py-1 rounded-3xl md:pl-8'>
              <li className='font-semibold text-green-600 text-[8px] md:text-xl'>
                <p>AVAILABLE FOR WORK</p>
              </li>
            </div>
            <div className='mt-6 justify-self-end'>
              <img className='border-4 border-gray-500 rounded-full h-24 w-24  md:h-64 md:w-64 hover:border-green-800' src={foto} alt='Profile' />
            </div>
          </div>
        </div>
        <div className='grid gap-4 grid-cols-3 md:grid-cols-6'>
          <div className='bg-white rounded-2xl mt-1 max-w-lg '>
            <div className='grid  '>
              <img alt='Picture Project' src={next} className=' bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
          <div className='bg-white rounded-2xl mt-1 max-w-lg '>
            <div className='grid'>
              <img alt='Picture Project' src={laravel} className='mx-auto bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
          <div className='bg-white rounded-2xl mt-1 max-w-lg '>
            <div className='grid'>
              <img alt='Picture Project' src={react} className='mx-auto bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
          <div className='bg-white rounded-2xl mt-1 max-w-lg '>
            <div className='grid'>
              <img alt='Picture Project' src={tailwind} className='mx-auto bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
          <div className='bg-white rounded-2xl mt-1 max-w-lg'>
            <div className='grid'>
              <img alt='Picture Project' src={next} className='mx-auto bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
          <div className='bg-white rounded-2xl mt-1 max-w-lg'>
            <div className='grid'>
              <img alt='Picture Project' src={next} className='mx-auto bg-cover w-max bg-center rounded-2xl shadow-lg md:shadow-2xl'></img>
            </div>
          </div>
        </div>
        <div className='bg-gray-200/70 rounded-xl md:rounded-2xl px-5 py-2 mt-6 md:mt-10'>
          <div className='flex justify-between mb-3 mt-3 md:mt-6'>
            <div className='flex pl-2 '>
              <li className='text-gray-500'>
                <p className='text-gray-600 font-semibold text-lg md:text-3xl'>Projects</p>
              </li>
            </div>
            <div className='flex bg-white px-3 py-1 rounded-lg border border-gray-500/40'>
              <p className='text-sm font=semibold'>View All</p>
              <AiOutlineArrowRight className='h-6 ml-1' />
            </div>
          </div>
          <div className='grid gap-4 md:grid-cols-4'>
            <div className='bg-white rounded-2xl mt-1 max-w-lg pt-3'>
              <div className='grid'>
                <img alt='Picture Project' src={netflix} className='mx-auto bg-cover w-max bg-center'></img>
                <h1 className='font-bold text-center mt-2'>Sistem Pengeloaan Desa</h1>
                <h1 className='font-bold text-center text-gray-700/70'>Laravel 10-MySql-Boostrap</h1>
              </div>
            </div>
            <div className='bg-white rounded-2xl mt-1 max-w-lg pt-3'>
              <div className='grid'>
                <img alt='Picture Project' src={netflix} className='mx-auto bg-cover w-max bg-center'></img>
                <h1 className='font-bold text-center mt-2'>Sistem Pengeloaan Desa</h1>
                <h1 className='font-bold text-center text-gray-700/70'>Laravel 10-MySql-Boostrap</h1>
              </div>
            </div>
            <div className='bg-white rounded-2xl mt-1 max-w-lg pt-3'>
              <div className='grid'>
                <img alt='Picture Project' src={netflix} className='mx-auto bg-cover w-max bg-center'></img>
                <h1 className='font-bold text-center mt-2'>Sistem Pengeloaan Desa</h1>
                <h1 className='font-bold text-center text-gray-700/70'>Laravel 10-MySql-Boostrap</h1>
              </div>
            </div>
            <div className='bg-white rounded-2xl mt-1 max-w-lg pt-3'>
              <div className='grid'>
                <img alt='Picture Project' src={netflix} className='mx-auto bg-cover w-max bg-center'></img>
                <h1 className='font-bold text-center mt-2'>Sistem Pengeloaan Desa</h1>
                <h1 className='font-bold text-center text-gray-700/70'>Laravel 10-MySql-Boostrap</h1>
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* <Footer /> */}
    </main >
  )
}

export default App
