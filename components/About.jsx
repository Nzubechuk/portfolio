import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const About = ({ isDarkMode }) => {
  return (
    <motion.div 
      id='about' 
      className='w-full px-6 sm:px-12 lg:px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-center text-3xl sm:text-5xl font-Ovo'
      >
        About Me
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='flex flex-col lg:flex-row items-center gap-10 sm:gap-16 my-16'
      >
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='w-48 sm:w-64 lg:w-80 rounded-3xl'
        >
          <Image src={assets.pic} alt='user' className='w-full rounded-3xl' />

          <div className='mt-5'>
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
        </motion.div>

        {/* Text Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='flex-1 text-center lg:text-left'
        >
          <p className='mb-8 max-w-2xl font-Ovo text-base sm:text-lg'>
            I am a proficient software developer with expertise in <b>Java, Flutter, JavaScript</b>, 
            and frameworks such as <b>Spring Boot, React.js, and Next.js</b>. I excel in rapidly adapting to 
            new technologies and collaborating with clients to design and implement 
            efficient, scalable, and user-centric solutions that address real-world 
            challenges. Let's work together to bring your vision to life!.
          </p>

          {/* Information List */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className='flex flex-col gap-8 max-w-2xl'
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li 
                whileHover={{ scale: 1.05 }}
                className='flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6' 
                key={index}
              >
                <div className='flex items-center gap-3'>
                  <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-6 sm:w-7' />
                  <h3 className='font-semibold text-gray-700 dark:text-white text-lg'>{title}</h3>
                </div>
                {Array.isArray(description) ? (
                  <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5'>
                    {description.map((item, subIndex) => (
                      <div key={subIndex} className='flex items-center justify-center gap-2 w-28 sm:w-32 h-10 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                        <Image src={item.image} alt={item.name} className='w-5 sm:w-7' />
                        <span className='text-gray-600 text-sm dark:text-white/80'>{item.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>
                )}
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className='mt-8 text-gray-700 font-Ovo dark:text-white text-lg sm:text-xl'
          >
            Tools I Use
          </motion.h4>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className='flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 mt-4'
          >
            {toolsData.map((tool, index) => (
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-28 sm:w-28 gap-2 h-10 border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                key={index}
              >
                <Image src={tool.image} alt={tool.name} className='w-5 sm:w-7' />
                <p className='text-sm text-gray-600 dark:text-white/80'>{tool.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About;
