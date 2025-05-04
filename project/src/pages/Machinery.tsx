import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Truck, Filter } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { equipmentList } from '../data/products';

const Machinery: React.FC = () => {
  const [filter, setFilter] = React.useState<string | null>(null);
  
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

  // Get unique categories
  const categories = Array.from(new Set(equipmentList.map(item => item.category)));
  
  // Filter equipment by category
  const filteredEquipment = filter 
    ? equipmentList.filter(item => item.category === filter)
    : equipmentList;

  return (
    <>
      <PageHeader 
        title="Machinery & Equipment" 
        description="Our modern fleet of machinery ensures efficient production and delivery."
        backgroundImage="https://images.pexels.com/photos/259966/pexels-photo-259966.jpeg"
      />

      {/* Equipment Introduction */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Modern Equipment</h2>
            <p className="text-lg text-gray-700">
              We invest in state-of-the-art machinery and equipment to ensure efficient production, consistent quality, and reliable delivery of our concrete and stone products.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center flex-wrap gap-3 mb-10"
          >
            <span className="text-gray-700 flex items-center mr-2">
              <Filter size={18} className="mr-1" /> Filter:
            </span>
            <button 
              onClick={() => setFilter(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === null
                  ? 'bg-red-700 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All
            </button>
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-red-700 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredEquipment.map((equipment) => (
              <motion.div 
                key={equipment.id} 
                variants={fadeInUp}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="h-60 overflow-hidden relative">
                  <img 
                    src={equipment.image} 
                    alt={equipment.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-red-700 text-white px-3 py-1 rounded-full text-sm">
                    {equipment.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Settings size={20} className="mr-2 text-red-700" />
                    <h3 className="text-xl font-bold">{equipment.name}</h3>
                  </div>
                  <p className="text-gray-700 mb-4">{equipment.description}</p>
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
              className="order-2 lg:order-1"
            >
              <h2 className="section-title mb-8">Modern Production Facility</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our production facility features advanced equipment and technology designed to optimize efficiency, reduce waste, and ensure consistent quality across all our products.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From our automated batching plant to our precision screening equipment, every piece of machinery is maintained to the highest standards and operated by skilled professionals.
              </p>
              <p className="text-lg text-gray-700">
                This commitment to technological excellence allows us to deliver products that meet or exceed industry standards while maintaining competitive pricing and reliable service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl"
            >
              <img 
                src="https://scontent.fprn1-1.fna.fbcdn.net/v/t1.6435-9/157543146_2877005752574658_4079049864439295597_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=U6tSuM4G1egQ7kNvwEQR6lb&_nc_oc=AdlCE7yOPqyOI9bnXnCWkuhVfWLCzhAqrKGEXkyJ45IFz47U1HJM67tbJxDgoqui9rY&_nc_zt=23&_nc_ht=scontent.fprn1-1.fna&_nc_gid=pkfiOw1Om-LFHaN1gyb8iQ&oh=00_AfFcVh1va_w5AIXKj2rJWv6dHyBVr72n0g7tK-KZuDZAYA&oe=683F77B5" 
                alt="Modern Production Facility" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Fleet */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Delivery Fleet</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We maintain a modern fleet of delivery vehicles to ensure your materials arrive on time and in perfect condition.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-red-700 rounded-lg p-8 text-white flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-4 flex items-center">
                <Truck size={24} className="mr-2" />
                Reliable Delivery Service
              </h3>
              <ul className="space-y-3 text-red-100">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-red-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">1</div>
                  <span>Modern mixer trucks for fresh concrete delivery</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-red-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">2</div>
                  <span>Dump trucks for efficient aggregate transport</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-red-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">3</div>
                  <span>GPS tracking for accurate delivery scheduling</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white text-red-700 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">4</div>
                  <span>Experienced drivers familiar with construction sites</span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img 
                src="https://i.ibb.co/DDLMnpJ1/IMG-7314.jpg" 
                alt="Delivery Fleet" 
                className="rounded-lg shadow-lg h-[500px] w-[cover]"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Machinery;