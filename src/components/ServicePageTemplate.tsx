import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ServiceModal from '@/components/ServiceModal';
import { ServiceType } from '@/data/services';

interface ServicePageTemplateProps {
  service: ServiceType;
  description: string;
  benefits: string[];
  children?: React.ReactNode;
}

export default function ServicePageTemplate({
  service,
  description,
  benefits,
  children,
}: ServicePageTemplateProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-[#0B193F]">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A8A] hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="pb-14 border-b border-[#D5DBEC]"
        >
          <div className="w-12 h-12 rounded-2xl bg-white border border-[#D5DBEC] flex items-center justify-center text-[#1E3A8A] mb-6">
            <service.icon className="w-6 h-6" />
          </div>

          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B193F] leading-tight tracking-tight text-balance">
            {service.title}
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#4B5675] max-w-3xl leading-relaxed">
            {description}
          </p>

          {service.problemSolved && (
            <div className="mt-6 p-5 rounded-2xl bg-white border border-[#D5DBEC] max-w-3xl">
              <p className="text-xs font-semibold text-[#1E3A8A] uppercase tracking-wider">
                Business Challenge Solved
              </p>
              <p className="mt-1.5 text-sm sm:text-base text-[#4B5675] leading-relaxed">
                {service.problemSolved}
              </p>
            </div>
          )}

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="ed-btn p"
            >
              <span>Start This Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <Link to="/#contact" className="ed-btn o">
              <span>Full Project Enquiry</span>
            </Link>
          </div>
        </motion.div>

        <section className="py-16">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B193F] mb-8 tracking-tight">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 p-6 rounded-2xl bg-white border border-[#D5DBEC]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-[#0B193F] font-medium leading-snug">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        {children}
      </div>

      <ServiceModal
        service={isModalOpen ? service : null}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
