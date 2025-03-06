import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import link from '../assets/link.png';
import github from '../assets/github.png';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id='work'
      className='w-full px-[12%] py-10 scroll-mt-20 dark:bg-gray-900 dark:text-white'
    >
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className='text-center mb-2 text-3xl font-Ovo'
      >
        My portfolio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
      >
        Explore a curated selection of projects demonstrating my expertise in software development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-10 p-4'
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            key={index}
            className='relative rounded-xl overflow-hidden shadow-lg group cursor-pointer bg-white dark:bg-gray-800'
          >
            {/* Project Image */}
            <div className='relative w-full h-60'>
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='transition-transform duration-300 group-hover:scale-105 object-cover'
                priority
              />
            </div>

            {/* Project Details */}
            <div
              className='p-5 absolute bottom-0 left-0 right-0 shadow-lg transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded-b-xl bg-white dark:bg-gray-700'
            >
              <h2 className='font-bold text-lg text-gray-900 dark:text-white mb-2'>
                {project.title}
              </h2>
              <p className='text-sm text-gray-700 dark:text-gray-300 mb-4'>{project.description}</p>
              <div className='flex items-center gap-4'>
                <span className='text-xs text-gray-600 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded'>
                  {project.techStack}
                </span>
                {project.link && (
                  <a href={project.link} target='_blank' rel='noopener noreferrer'>
                    <Image src={link} alt='Visit' width={20} height={20} />
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target='_blank' rel='noopener noreferrer'>
                    <Image src={github} alt='GitHub' width={20} height={20} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
