"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCheck } from 'react-icons/fi';
import { AiFillThunderbolt } from 'react-icons/ai';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const pricingPlans = [
    {
      name: "Starter",
      tagColor: "bg-purple-500",
      description: "Perfect for everyday explorers",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Multichain dashboard",
        "Basic swaps & transfers", 
        "Token & NFT auto-detection",
        "Dark UI by default"
      ],
      buttonText: "Start for Free",
      buttonStyle: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
    },
    {
      name: "Pro",
      tagColor: "bg-green-500",
      description: "Built for DeFi users, NFT collectors, and active traders",
      monthlyPrice: 9,
      annualPrice: 90,
      isPopular: true,
      features: [
        "Unlimited swaps",
        "Real-time gas optimizer",
        "Portfolio analytics & performance tracking",
        "Passkey login + advanced recovery",
        "Priority in-app support"
      ],
      buttonText: "Start for Free",
      buttonStyle: "bg-lime-300 hover:bg-[#A3E635]/80 text-black"
    },
    {
      name: "Team",
      tagColor: "bg-blue-400/70",
      description: "For DAOs, dev teams, and institutional users",
      monthlyPrice: 25,
      annualPrice: 250,
      features: [
        "Shared team vaults",
        "Role-based permissions & access control",
        "API access for automation",
        "Bulk transaction mode",
        "Dedicated account manager"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white"
    }
  ];

  return (
    <div id="pricing" className="min-h-screen w-full relative bg-black py-20 px-4 sm:px-8 md:px-12 lg:px-16 font-['Poppins']">
      {/* Starry background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.7
            }}
          />
        ))}
      </div>

      {/* White fog from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-96 pointer-events-none z-5">
        <div className="w-full h-full bg-gradient-to-t from-white/30 via-white/10 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto ">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose Your Level of Power
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Whether you're exploring dApps or managing a DAO treasury, Zyra has a plan built for your flow. No hidden fees. No locked features.
          </motion.p>
          
           {/* Pricing Toggle */}
           <motion.div 
             className="flex items-center cursor-pointer justify-center gap-4 mb-12"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
           >
             <motion.span 
               className={`text-sm font-medium transition-colors duration-300 ${!isAnnual ? 'text-lime-400' : 'text-gray-400'}`}
               animate={{ scale: !isAnnual ? 1.05 : 1 }}
               transition={{ duration: 0.2 }}
             >
               Monthly
             </motion.span>
             <motion.button
               onClick={() => setIsAnnual(!isAnnual)}
               className={`relative w-16 h-8 backdrop-blur-sm border border-gray-600/50 rounded-full p-1 transition-all duration-300 hover:border-lime-400/50 hover:shadow-lg hover:shadow-lime-400/20 ${
                 isAnnual ? 'bg-lime-300' : 'bg-gray-800/50'
               }`}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
             >
               <motion.div
                 className="w-6 h-6 bg-black cursor-pointer rounded-full shadow-lg"
                 animate={{ x: isAnnual ? 32 : 0 }}
                 transition={{ type: "spring", stiffness: 400, damping: 25 }}
               />
               {/* Glow effect */}
               <motion.div
                 className="absolute inset-0 rounded-full bg-lime-400/20 blur-md"
                 animate={{ opacity: isAnnual ? [0.3, 0.6, 0.3] : [0.1, 0.3, 0.1] }}
                 transition={{ duration: 2, repeat: Infinity }}
               />
             </motion.button>
             <motion.span 
               className={`text-sm font-medium transition-colors duration-300 ${isAnnual ? 'text-lime-400' : 'text-gray-400'}`}
               animate={{ scale: isAnnual ? 1.05 : 1 }}
               transition={{ duration: 0.2 }}
             >
               Annually
             </motion.span>
           </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{ 
                y: -20,
                scale: 1.05,
                rotateY: 5,
                rotateX: 3,
                rotateZ: 1,
                boxShadow: "0 25px 50px rgba(0,0,0,0.5), 0 0 30px rgba(255,255,255,0.15), inset 0 0 20px rgba(255,255,255,0.05)",
                filter: "brightness(1.1) saturate(1.2)",
                transition: { 
                  duration: 0.6, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }
              }}
               className={`relative backdrop-blur-md border border-white/20 rounded-2xl p-8 flex flex-col h-full cursor-pointer ${
                 plan.isPopular 
                   ? 'bg-gradient-to-br from-lime-400/10 via-lime-300/5 to-transparent ring-2 ring-lime-400/30' 
                   : plan.name === 'Starter'
                   ? 'bg-white/5'
                   : 'bg-gradient-to-br from-blue-400/10 via-blue-300/5 to-transparent'
               }`}
            >
               {/* Plan Header */}
               <motion.div 
                 className="flex items-center justify-between mb-4"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
               >
                 <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-3 py-1 flex items-center gap-2">
                   <motion.div 
                     className={`${
                       plan.name === 'Starter' ? 'bg-purple-500/30' :
                       plan.name === 'Pro' ? 'bg-green-500/30' :
                       'bg-blue-400/30'
                     } p-1 rounded-full`}
                     whileHover={{ scale: 1.1, rotate: 5 }}
                     transition={{ duration: 0.2 }}
                   >
                     <AiFillThunderbolt className={`w-3 h-3 ${
                       plan.name === 'Starter' ? 'text-purple-500' :
                       plan.name === 'Pro' ? 'text-green-500' :
                       'text-blue-400'
                     }`} />
                   </motion.div>
                   <h3 className="text-sm font-semibold text-white">{plan.name}</h3>
                 </div>
                 {plan.isPopular && (
                   <motion.div 
                     className="bg-lime/10 backdrop-blur-sm border border-white/20 rounded-3xl px-2 py-1"
                     initial={{ scale: 0 }}
                     whileInView={{ scale: 1 }}
                     transition={{ duration: 0.4, delay: 0.5 + index * 0.1, type: "spring" }}
                   >
                     <span className="text-lime-300 text-xs font-semibold">Most Popular</span>
                   </motion.div>
                 )}
               </motion.div>

               {/* Description */}
               <motion.p 
                 className="text-gray-300 text-sm mb-6"
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
               >
                 {plan.description}
               </motion.p>

               {/* Price */}
               <motion.div 
                 className="mb-6"
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
               >
                 <span className="text-4xl font-semibold text-white">
                   ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                 </span>
                 <span className="text-gray-400 ml-2">/mo</span>
                 {isAnnual && plan.monthlyPrice > 0 && (
                   <div className="text-sm text-gray-500 mt-1">
                     Billed annually (${plan.annualPrice}/year)
                   </div>
                 )}
               </motion.div>

               {/* Divider */}
               <motion.div 
                 className="w-full h-px bg-gray-600/50 mb-6"
                 initial={{ scaleX: 0 }}
                 whileInView={{ scaleX: 1 }}
                 transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
               />

              {/* Features */}
              <motion.div 
                className="space-y-4 mb-8 flex-grow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
              >
                {plan.features.map((feature, featureIndex) => (
                  <motion.div 
                    key={featureIndex} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.8 + index * 0.1 + featureIndex * 0.1 
                    }}
                  >
                    <motion.div 
                      className="bg-gray-300 p-1 rounded-full mt-0.5"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiCheck className="w-3 h-3 text-black" />
                    </motion.div>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-3xl font-semibold cursor-pointer transition-all duration-300 ${plan.buttonStyle} text-center mt-auto`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
