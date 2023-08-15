import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPerson } from 'react-icons/bs';
import { PiProjectorScreenChart } from 'react-icons/pi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';

function Header() {
      const navLink = [
            { icon: BiHomeAlt2, path: '/' },
            { icon: BsPerson, path: '/profil' },
            { icon: PiProjectorScreenChart, path: '/project' },
            { icon: MdOutlineWorkOutline, path: '/experience' },
      ];

      return (
            <div className="w-full sticky flex bg-white items-center justify-between rounded-2xl px-3 py-2 md:px-12">
                  <div className='flex items-center space-x-3'>
                        {navLink.map(({ icon: Icon, path }, index) => (
                              <a key={index} href={path} className='p-1 md:px-4 hover:bg-gray-200 hover:rounded-full'>
                                    <Icon size={30} className='fill-gray-400 hover:fill-black' />
                              </a>
                        ))}
                  </div>
                  <div>
                        <div className='flex bg-gray-800 py-1 px-4 md:px-6 rounded-2xl cursor-pointer'>
                              <AiOutlinePlusCircle size={17} className='fill-white h-7 mr-1' />
                              <p className='text-white'>Hire Me</p>
                        </div>
                  </div>
            </div>
      );
}

export default Header;
