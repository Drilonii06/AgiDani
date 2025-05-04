import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Truck, Award, Clock, Phone } from "lucide-react";
import { concreteProducts, stoneProducts } from "../data/products";

const Home: React.FC = () => {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const FeatureCard = ({
    icon,
    title,
    description,
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }) => (
    <motion.div
      variants={fadeInUp}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mb-4 text-red-700">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative h-[85vh] min-h-[600px] bg-cover bg-center flex items-center"
        style={{
          backgroundImage: 'url("https://scontent.fprn1-1.fna.fbcdn.net/v/t39.30808-6/494224428_9466489916752012_1167503817032350677_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AICCUhLStMgQ7kNvwEJx6wZ&_nc_oc=Adl45EQ-gbCoOpFYuMu5j-ppmfmZoAkJM6T8N0XY9RQqtZLepVg20I_76PCa7YKsOCQ&_nc_zt=23&_nc_ht=scontent.fprn1-1.fna&_nc_gid=dhPa49CbTxlYDduXFx0vXg&oh=00_AfFgVtqWevJNqQR934JEuuF_HwFMzJxCs6F6XY_zMcgJ_Q&oe=681DB364")',
          backgroundSize: "cover", // Ensures the image covers the whole section
          backgroundPosition: "center", // Centers the image within the section
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Quality Concrete &{" "}
              <span className="text-red-400">Stone Products</span>
            </h1>
            <p className="text-xl text-stone-200 mb-8">
              Premium materials for construction projects of all sizes. Quality
              products, competitive prices, reliable delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/concrete-products" className="btn btn-primary">
                Explore Products
              </Link>
              <Link
                to="/contact"
                className="btn bg-white text-stone-800 hover:bg-stone-100"
              >
                Request a Quote
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose AGI-DANI?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We are committed to providing the highest quality concrete and
              stone products for construction projects of all sizes.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <FeatureCard
              icon={<Award size={28} />}
              title="Premium Quality"
              description="Our products meet the highest industry standards for strength and durability."
            />
            <FeatureCard
              icon={<Truck size={28} />}
              title="Reliable Delivery"
              description="On-time delivery included with every order to your construction site."
            />
            <FeatureCard
              icon={<Clock size={28} />}
              title="Prompt Service"
              description="Quick response times and efficient order processing for your projects."
            />
            <FeatureCard
              icon={<Phone size={28} />}
              title="Expert Support"
              description="Our team is ready to help you select the right products for your needs."
            />
          </motion.div>
        </div>
      </section>

      {/* Concrete Products Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Concrete Products
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of high-quality concrete products for
              various construction applications.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {concreteProducts.slice(0, 4).map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="product-card group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">
                    {product.description.substring(0, 80)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-red-700 font-semibold">
                      ${product.basePrice} - ${product.additivePrice}
                    </div>
                    <Link
                      to="/concrete-products"
                      className="text-red-700 hover:text-red-800 flex items-center"
                    >
                      Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/concrete-products" className="btn btn-primary">
              View All Concrete Products
            </Link>
          </div>
        </div>
      </section>

      {/* Stone Products Section */}
      <section className="py-16 md:py-24 bg-stone-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stone Aggregates
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We produce a variety of stone aggregates in different sizes for
              all your construction needs.
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {stoneProducts.slice(0, 3).map((product) => (
              <motion.div
                key={product.id}
                variants={fadeInUp}
                className="product-card group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.size}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Size: {product.size}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description.substring(0, 80)}...
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-red-700 font-semibold">
                      ${product.price}/ton
                    </div>
                    <Link
                      to="/stone-products"
                      className="text-red-700 hover:text-red-800 flex items-center"
                    >
                      Details
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-10">
            <Link to="/stone-products" className="btn btn-primary">
              View All Stone Products
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-red-700 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Contact us today to discuss your requirements and get a customized
              quote for your construction project.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-red-700 hover:bg-stone-100 inline-flex items-center"
            >
              Get in Touch
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
