import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = ({ isDarkMode }) => {
  return (
    <div className='mt-20'>
      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 Nzubechukwu. All rights reserved.</p>
        
        <ul className='flex items-center gap-6 justify-center mt-4 sm:mt-0'>
          <li>
            <a target='_blank' href="mailto:ugwunzubechukwu6@gmail.com" rel="noopener noreferrer">
              <FaEnvelope className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </li>
          <li>
            <a target='_blank' href="https://x.com/UgwuNzubechukwu" rel="noopener noreferrer">
              <FaTwitter className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </li>
          <li>
            <a target='_blank' href="https://github.com/Nzubechuk" rel="noopener noreferrer">
              <FaGithub className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </li>
          <li>
            <a target='_blank' href="https://www.linkedin.com/in/nzubechukwu-ugwu-07a01b215/" rel="noopener noreferrer">
              <FaLinkedin className={`w-6 h-6 ${isDarkMode ? 'text-white' : 'text-black'}`} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
