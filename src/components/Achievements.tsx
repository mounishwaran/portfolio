import React from 'react';
import { motion } from 'framer-motion';

const Achievements: React.FC = () => {
  const achievements = [
    {
      position: "1st Prize",
      event: "8-hour Hackathon",
      project: "Tamil learning platform",
      icon: "🏆",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      position: "2nd Prize", 
      event: "SNS College Hackathon",
      project: "ATM surveillance object detection",
      icon: "🥈",
      color: "from-gray-400 to-gray-600"
    },
    {
      position: "3rd Prize",
      event: "CIT Hackathon", 
      project: "AI-powered hospital management system",
      icon: "🥉",
      color: "from-orange-400 to-orange-600"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-white scroll-mt-24">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title">Achievements</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-warm-yellow/20"></div>

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Content Card */}
                <motion.div
                  className="w-5/12 bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${achievement.color} rounded-full flex items-center justify-center mr-4 text-2xl`}>
                      {achievement.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-dark-gray">{achievement.position}</h3>
                      <p className="text-warm-yellow font-semibold">{achievement.event}</p>
                    </div>
                  </div>
                  
                  <div className="bg-light-gray rounded-lg p-4">
                    <p className="text-gray-700 font-medium">{achievement.project}</p>
                  </div>

                  <div className="mt-4 flex items-center text-warm-yellow">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm font-medium">Hackathon Achievement</span>
                  </div>
                </motion.div>

                {/* Timeline Dot */}
                <div className="w-2/12 flex justify-center">
                  <motion.div
                    className="w-8 h-8 bg-warm-yellow rounded-full border-4 border-white shadow-lg z-10"
                    whileHover={{ scale: 1.2 }}
                  >
                    <div className="w-full h-full bg-golden-yellow rounded-full animate-pulse"></div>
                  </motion.div>
                </div>

                {/* Empty Space for alternating layout */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
