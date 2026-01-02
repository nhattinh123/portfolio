import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Code2, Globe, Zap, Users } from 'lucide-react';

import { useTheme } from '../../context/ThemeContext';
import { projects } from '../../utils/data';
import ProjectCard from '../../components/cards/ProjectCard'
import { containerVariants, itemVariants } from '../../utils/helper';


const ProjectsSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });


  return (
    <section
      id="dự án"
      ref={sectionRef}
      className={`py-24 px-6 ${isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
        } relative overflow-hidden`}
    >

      {/* Section - background*/}
      <div className='absolute inset-0 overflow-hidden'>
        <div
          className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
        />
        <div
          className={`absolute bottom-20 left-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"}`}
        />
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>

        {/* Section - Header*/}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-center mb-20'
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase tracking-widest ${isDarkMode ? "text-gray-500" : "text-gray-600"
              } mb-4`}
          >
            Tôi không theo đuổi sự hoàn hảo, tôi theo đuổi sự tiến bộ qua từng dự án
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-light mb-6 '
          >
            <span className='text-blue-500 font-medium'>Hành Trình</span> Qua Những Dự Án
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
              } max-w-2xl mx-auto font-light`}
          >
            Sau đây là một số dự án tiêu biểu mà tôi đã thực hiện trong quá trình học tập và rèn luyện kỹ năng. Các dự án tập trung vào phát triển giao diện người dùng, tối ưu trải nghiệm người dùng và áp dụng các công nghệ như ReactJS, ASP.Net, HTML/CSS, cùng khả năng tích hợp API và xử lý dữ liệu thực tế.
          </motion.p>
        </motion.div>

        {/* Skill - Grid*/}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isDarkMode={isDarkMode} />
          ))}
        </motion.div>

      </div>

    </section>
  )
}

export default ProjectsSection
