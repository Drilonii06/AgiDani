import React from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { stoneProducts } from '../data/products';

const StoneProducts: React.FC = () => {
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
        title="Stone Products" 
        description="Quality aggregates in various sizes for all construction needs."
        backgroundImage="https://i.ibb.co/ycccT4TJ/quarry-2.jpg"
      />

      {/* Products Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Stone Aggregates</h2>
            <p className="text-lg text-gray-700">
              We produce a wide range of high-quality stone aggregates suitable for various construction applications. All our products are processed using modern equipment to ensure consistent sizing and quality.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-red-50 p-6 rounded-lg mb-12 flex items-start"
          >
            <div className="mt-1 mr-4 text-red-700">
              <Info size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-red-800">Pricing Information</h3>
              <p className="text-gray-700">
                Our stone products are priced per ton. Most sizes are available at <span className="font-semibold">$10 per ton</span>, with our premium fine aggregate (0-2mm) priced at <span className="font-semibold">$15 per ton</span>. Volume discounts are available for large orders.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {stoneProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.size} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold">Size: {product.size}</h3>
                    <span className="bg-red-100 text-red-800 font-semibold px-3 py-1 rounded-full text-sm">
                      ${product.price}/m<sup>3</sup>
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <h4 className="font-semibold text-gray-800 mb-2">Applications:</h4>
                  <ul className="space-y-1 mb-6">
                    {product.applications.map((app, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle2 size={16} className="mr-2 text-green-600" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="btn btn-primary w-full">Request Quote</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 md:py-20 bg-stone-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-8">Quality Assurance</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our stone aggregates are produced using state-of-the-art crushing and screening equipment, ensuring consistent sizing and quality for every order.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                All our products undergo rigorous quality control procedures, including regular testing for:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle2 size={20} className="mr-3 text-green-600" />
                  <span className="text-gray-700">Particle size distribution</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={20} className="mr-3 text-green-600" />
                  <span className="text-gray-700">Material hardness and durability</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={20} className="mr-3 text-green-600" />
                  <span className="text-gray-700">Cleanliness and absence of contaminants</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle2 size={20} className="mr-3 text-green-600" />
                  <span className="text-gray-700">Compliance with industry standards</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://i.ibb.co/xKgyfcKQ/quality.jpg" 
                alt="Stone Aggregate Production" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bulk Orders */}
      <section className="py-16 bg-red-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Bulk Orders Available</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              For large construction projects, we offer bulk ordering with competitive pricing. Contact our sales team to discuss your requirements.
            </p>
            <button className="btn bg-white text-red-700 hover:bg-stone-100">
              Request Bulk Pricing
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default StoneProducts;