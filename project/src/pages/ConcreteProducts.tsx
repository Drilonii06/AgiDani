import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Info } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { concreteProducts } from '../data/products';

const ConcreteProducts: React.FC = () => {
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
        title="Concrete Products" 
        description="High-quality concrete products for all your construction needs."
        backgroundImage="https://i.ibb.co/yccGCs21/stones.jpg"
      />

      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Premium Concrete Products</h2>
            <p className="text-lg text-gray-700">
              We offer a range of high-quality concrete products suitable for various construction applications...
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
                All our concrete products are priced at <span className="font-semibold">$70 without additives</span> and <span className="font-semibold">$72 with additives</span>. Prices include delivery.
              </p>
              <div className="mt-4 flex items-center text-red-700">
                <Truck size={18} className="mr-2" />
                <span className="font-medium">Free delivery included with every order!</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {concreteProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row"
              >
                <div className="md:w-2/5">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 md:w-3/5">
                  <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Without Additives:</span>
                      <span className="font-semibold">${product.basePrice}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">With Additives:</span>
                      <span className="font-semibold">${product.additivePrice}</span>
                    </div>
                    <div className="pt-2 text-sm text-gray-500">
                      *Price includes delivery
                    </div>
                  </div>
                  
                  <button className="btn btn-primary w-full">Request Quote</button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-stone-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Concrete Specifications</h2>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-red-700 text-white">
                      <th className="py-3 px-4 text-left">Concrete Type</th>
                      <th className="py-3 px-4 text-left">Strength Class</th>
                      <th className="py-3 px-4 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">MakroBeton</td>
                      <td className="py-3 px-4">Special Formulation</td>
                      <td className="py-3 px-4">Industrial projects, heavy-duty applications</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-medium">C25-30</td>
                      <td className="py-3 px-4">25-30 MPa</td>
                      <td className="py-3 px-4">Residential construction</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4 font-medium">C30-37</td>
                      <td className="py-3 px-4">30-37 MPa</td>
                      <td className="py-3 px-4">Commercial structures</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">C37-45</td>
                      <td className="py-3 px-4">37-45 MPa</td>
                      <td className="py-3 px-4">Bridges, marine structures</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-8 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Additive Information</h3>
              <p className="text-gray-700 mb-4">
                Our concrete additives are carefully selected to enhance performance:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Improved workability</li>
                <li>Enhanced strength</li>
                <li>Faster setting</li>
                <li>Increased durability</li>
                <li>Water resistance</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-red-700 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Place an Order?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact our team today to discuss your concrete requirements and get a personalized quote.
            </p>
            <button className="btn bg-white text-red-700 hover:bg-stone-100">
              Contact Us
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ConcreteProducts;
