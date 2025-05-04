import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContactForm from "../components/ContactForm";
import { contactInfo } from "../data/products";

const Contact: React.FC = () => {
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

  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team for inquiries, quotes, or support."
        backgroundImage="https://plus.unsplash.com/premium_photo-1663045584825-90a22961a4de?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      {/* Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="section-title mb-8">Get In Touch</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team is ready to answer your questions about our concrete
                and stone products. Contact us for quotes, technical
                information, or to schedule a delivery.
              </p>

              <motion.div
                variants={staggerChildren}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6 mb-10"
              >
                <motion.div variants={fadeInUp} className="flex">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mr-4 text-red-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Address</h3>
                    <address className="not-italic text-gray-700">
                      {contactInfo.address}
                    </address>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mr-4 text-red-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Phone</h3>
                    <ul className="space-y-1">
                      {contactInfo.phones.map((phone, index) => (
                        <li key={index}>
                          <a
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            className="text-gray-700 hover:text-red-700 transition-colors"
                          >
                            {phone}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mr-4 text-red-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Email</h3>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="text-gray-700 hover:text-red-700 transition-colors"
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mr-4 text-red-700">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      Working Hours
                    </h3>
                    <ul className="text-gray-700">
                      <li>Monday - Friday: 8:00 AM - 5:00 PM</li>
                      <li>Saturday: 8:00 AM - 2:00 PM</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="mb-16">
        <div className="container-custom">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2941.502435203059!2d21.449569075560603!3d42.50212962611491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d0041ceca8f%3A0xf94d22e847e2df6!2sGur%C3%ABthyesi%20%26%20Fabrika%20E%20Betonit%22Agi-Dani%22%20Sh.p.k!5e0!3m2!1ssq!2s!4v1746400019808!5m2!1ssq!2s"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
