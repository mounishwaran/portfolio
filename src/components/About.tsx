import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 leading-relaxed text-lg">
                Detail-oriented software developer with hands-on experience in full-stack web development, including JavaScript, Node.js, and MySQL. Committed to delivering efficient, user-centric solutions and continuous professional growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-warm-yellow to-golden-yellow p-1 rounded-xl">
              <div className="bg-white rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-warm-yellow/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-warm-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-dark-gray">Education</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-dark-gray">B.Tech Information Technology</h4>
                    <p className="text-gray-600">Kongu Engineering College</p>
                    <p className="text-sm text-gray-500">2023 – 2027</p>
                    <div className="mt-2 inline-flex items-center bg-warm-yellow/10 px-3 py-1 rounded-full">
                      <span className="text-warm-yellow font-semibold">CGPA: 8.51</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
