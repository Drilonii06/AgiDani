import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, BarChart3, Users, Truck } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const About: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <PageHeader 
        title="About AGI-DANI" 
        description="Learn about our commitment to quality and excellence in concrete and stone production."
        backgroundImage="https://images.pexels.com/photos/188679/pexels-photo-188679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-8">Our Story</h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to provide the highest quality construction materials, Fabrika e Betonit & Gurëthyesi AGI-DANI has grown to become a trusted supplier of concrete and stone products in the region.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our state-of-the-art production facilities and commitment to quality have allowed us to serve numerous successful construction projects, from residential buildings to major infrastructure developments.
              </p>
              <p className="text-lg text-gray-700">
                Today, we continue to invest in modern technology and skilled personnel to ensure that our products meet the highest industry standards while providing excellent service to our valued customers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://i.ibb.co/Y4tmtVKB/IMG-7248.jpg" 
                alt="Our Production Facility" 
                className="w-full h-[500px] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The principles that guide our operations and relationships with our customers, partners, and community.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-700">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We are dedicated to producing materials that meet or exceed industry standards, ensuring durability and reliability in every batch.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-ble-100 rounded-full flex items-center justify-center mb-6 text-red-700">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-gray-600">
                We stand behind our commitments, delivering products on time and as specified to keep your projects moving forward without delays.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 text-red-700">
                <BarChart3 size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                We constantly seek ways to enhance our products, processes, and services to provide better value to our customers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h2 className="section-title mb-8">Why Choose AGI-DANI</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-red-700">
                      <Truck size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Comprehensive Delivery Service</h3>
                    <p className="text-gray-700">
                      We include delivery with all orders, ensuring your materials arrive at your site safely and on schedule.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700">
                      <Award size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Quality Control</h3>
                    <p className="text-gray-700">
                      Our materials undergo rigorous testing to ensure they meet the highest standards for strength and durability.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-700">
                      <Users size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
                    <p className="text-gray-700">
                      Our skilled professionals have years of experience in concrete and aggregate production, ensuring expert service.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://i.ibb.co/jCfKFbT/about.jpg" 
                alt="Our Production Process" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;