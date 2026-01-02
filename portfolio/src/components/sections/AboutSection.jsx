import React, { useRef } from 'react'
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';

import { useTheme } from '../../context/ThemeContext';
import { journey_steps, passions } from '../../utils/data';
import { containerVariants, itemVariants, timelineVariants, stepVariants } from '../../utils/helper';
import signature from "../../assets/images/signature.jpg";

const AboutSections = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const timelineInview = useInView(timelineRef, {
    once: true,
    margin: "-50px",
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      id="giới thiệu"
      ref={sectionRef}
      className={`py-24 px-6 ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } relative overflow-hidden`}
    >
      {/* Section - background*/}
      <motion.div style={{ y }} className='absolute inset-0 overflow-hidden'>
        <div className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`} />
        <div className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`} />
      </motion.div>

      <div className='max-w-6xl mx-auto relative z-10'>

        {/* Section - Header */}
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
            Tôi là ai trên hành trình công nghệ này?
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className='text-3xl md:text-5xl font-light mb-6 capitalize '
          >
            <span className='text-blue-500 font-medium'> Sự phát triển </span>
            không đến từ hoàn hảo, mà đến từ kiên trì
          </motion.h2>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-16 items-start'>
          {/* About - Story */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='space-y-8'
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${isDarkMode ? "bg-gray-800/50 border-gray-500 backdrop-blur-sm" : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                }`}
            >
              <h3 className='text-2xl font-medium mb-6'>Tôi là ai?</h3>
              <p
                className={`text-lg leading-relaxed mb-6 text-justify ${isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
              >
                Tôi là một người yêu công nghệ và đam mê xây dựng sản phẩm số. Tôi đến với lập trình từ sự tò mò, sau đó dần biến nó thành thói quen, kỹ năng và mục tiêu phát triển lâu dài. Với tôi, viết code không chỉ là tạo ra chức năng, mà còn là cách giải quyết vấn đề và tạo ra giá trị thực tế.
              </p>
              <p
                className={`text-base leading-relaxed text-justify ${isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
              >
                Trong quá trình phát triển bản thân, tôi tập trung vào việc xây dựng các sản phẩm có trải nghiệm người dùng tốt, giao diện rõ ràng và hiệu suất ổn định. Tôi yêu thích làm việc với ReactJS, VueJS và đồng thời đã tìm hiểu, làm quen và triển khai sản phẩm trên nền tảng WordPress (WP), từ xây dựng giao diện, tùy chỉnh theme đến tối ưu nội dung và hiệu suất website.
              </p>
            </motion.div>

            {/* About - What I Love*/}
            <motion.div variants={itemVariants} className='space-y-4'>
              <h3 className='text-xl font-medium mb-6'>Khi không viết code, tôi...</h3>
              <div className='grid gap-4'>
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    variants={itemVariants}
                    whileHover={{ x: 4 }}
                    className={`flex items-center space-x-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-800/30 hover:bg-gray-800/50" : "bg-gray-50/50 hover:bg-gray-100/50"
                      } transition-all duration-300`}
                  >
                    <div
                      className={`p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-white"
                        }`}
                    >

                      <passion.icon size={20} className='text-blue-500' />
                    </div>
                    <div>
                      <h4 className='font-medium mb-1'> {passion.title} </h4>
                      <p
                        className={`text-sm text-justify ${isDarkMode ? "text-gray-400" : "text-gray-600"
                          }`}
                      >
                        {passion.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* About - Digital Signature*/}
            <motion.div variants={itemVariants} className='text-center py-4'>
              <div
                className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-600"
                  } mb-4`}
              >
                Được tạo ra bởi niềm đam mê bởi
              </div>

              {/* About - Digital Signature ....*/}
              <div className='flex justify-center'>
                <img src={signature} alt="Chữ ký" className='w-28' />
              </div>
              <div className='text-lg font-medium text-blue-500 mt-2'>
                Nguyễn Nhật Tinh
              </div>
            </motion.div>

          </motion.div>

          {/* About - FE Developer Timeline */}
          <motion.div
            ref={timelineRef}
            initial="hidden"
            animate={timelineInview ? "visible" : 'hidden'}
            variants={timelineVariants}
            className='relative'
          >
            <h3 className='text-2xl font-medium mb-8 text-center lg:text-left'>Mỗi giai đoạn, một bài học</h3>

            {/* About - Timeline */}
            <div
              className={`absolute left-8 top-16 bottom-0 w-px ${isDarkMode ? "bg-gray-700" : "bg-gray-300"
                }`}
            />

            <div className='space-y-8'>
              {journey_steps.map((step, index) => (
                <motion.div
                  key={step.year}
                  variants={stepVariants}
                  whileHover={{ x: 4 }}
                  className='relative flex items-start space-x-6 group'
                >

                  {/* About - Timeline Dot */}
                  <div
                    className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <step.icon size={24} className='text-white' />
                  </div>

                  {/* About - Content */}
                  <div
                    className={`flex-grow p-6 rounded-xl border transition-all duration-300 ${isDarkMode ? "bg-gray-800/50 border-gray-700 group-hover:border-gray-600 group-hover:bg-gray-800/70" : "bg-white/80 border-gray-200 group-hover:border-gray-300 group-hover:bg-white"
                      } backdrop-blur-sm`}
                  >
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-xl font-medium'>{step.title}</h4>
                      <span
                        className={`text-sm px-3 py-1 rounded-full ${isDarkMode ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-700"
                          }`}
                      >
                        {step.year}
                      </span>
                    </div>
                    <div
                      className={`text-sm font-medium ${isDarkMode ? "text-blue-400" : "text-blue-600"
                        } mb-3`}
                    >
                      {step.company}
                    </div>
                    <p
                      className={`text-sm leading-relaxed text-justify ${isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                      {step.description}
                    </p>

                  </div>

                </motion.div>
              ))}
            </div>

          </motion.div>
        </div> 

        {/* About - Call */}
        <motion.div
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className='text-center mt-20'
        >
          <motion.div
            variants={itemVariants}
            className='flex flex-col items-center space-y-6'
          >
            <p
              className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
            >
              Đừng để ý tưởng của bạn chỉ nằm trên giấy. Cùng tôi biến nó thành sản phẩm thực tế!
            </p>

            <motion.button
              whileHover={{ y: -2, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300'
            >
              Cùng nhau biến ý tưởng thành hiện thực
            </motion.button>

          </motion.div>
        </motion.div>

      </div >

    </section >
  )
}

export default AboutSections
