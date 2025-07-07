import React from 'react';
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaDiscord
} from 'react-icons/fa';
import logo2 from "../../../public/images/logo2.png"

const Footer: React.FC = () => {
  return (
    <footer className="text-white bg-gray-800">
      <div className="mx-auto text-white w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            
            <a href="/" className="flex items-center">
              <img src={logo2} alt="logo" className='w-20' />
              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Sonsvales</span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Resources</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://flowbite.com/" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Follow us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://github.com/themesberg/flowbite" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold  uppercase text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 <a href="https://flowbite.com/" className="hover:underline">Sonsvales™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0 gap-5 text-gray-500 dark:text-gray-400">
            <a href="#"><FaFacebookF className="hover:text-blue-600" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
            <a href="#"><FaGithub className="hover:text-gray-900 dark:hover:text-white" /></a>
            <a href="#"><FaDribbble className="hover:text-pink-500" /></a>
            <a href="#"><FaLinkedinIn className="hover:text-blue-700" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-600" /></a>
            <a href="#"><FaYoutube className="hover:text-red-600" /></a>
            <a href="#"><FaDiscord className="hover:text-indigo-500" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
