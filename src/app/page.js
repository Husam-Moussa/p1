"use client";

import { FiArrowUpRight, FiPlay, FiGlobe, FiSmartphone } from 'react-icons/fi';
import { FaApple, FaAndroid } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PricingSection from './components/PricingSection';

export default function Home() {
  return (
    <div className="w-full relative">
      {/* Hero Section */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Images/Wallpaper.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-2 left-0 w-full z-50 sm:top-4"
      >
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16">
          <div className="flex justify-between items-center h-12 sm:h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex-shrink-0 ml-2 sm:ml-4 md:ml-6 lg:ml-8"
            >
              <motion.div 
                className="text-white text-lg sm:text-xl md:text-2xl font-bold cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255,255,255,0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white">Logo</span>
              </motion.div>
            </motion.div>
            
            {/* Navigation Menu */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hidden md:flex items-center space-x-4 lg:space-x-8"
            >
              <motion.a 
                href="#" 
                className="text-white px-2 py-2 rounded-lg text-xs md:text-sm font-medium relative overflow-hidden group lg:px-4"
                whileHover={{ 
                  scale: 1.08,
                  y: -2,
                  color: "#bef264"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="relative z-10">Features</span>
                <motion.div 
                  className="absolute inset-0 bg-lime-300/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                  whileHover={{ scale: 1, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.a>
              
              <motion.a 
                href="#pricing" 
                className="text-white px-2 py-2 rounded-lg text-xs md:text-sm font-medium relative overflow-hidden group lg:px-4"
                whileHover={{ 
                  scale: 1.08,
                  y: -2,
                  color: "#bef264"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="relative z-10">Pricing</span>
                <motion.div 
                  className="absolute inset-0 bg-lime-300/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                  whileHover={{ scale: 1, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.a>
              
              <motion.a 
                href="#" 
                className="text-white px-2 py-2 rounded-lg text-xs md:text-sm font-medium relative overflow-hidden group lg:px-4"
                whileHover={{ 
                  scale: 1.08,
                  y: -2,
                  color: "#bef264"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <span className="relative z-10">About us</span>
                <motion.div 
                  className="absolute inset-0 bg-lime-300/20 rounded-lg"
                  initial={{ scale: 0, opacity: 0, rotateX: 90 }}
                  whileHover={{ scale: 1, opacity: 1, rotateX: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
                <motion.div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-300"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                />
              </motion.a>
            </motion.div>
            
            {/* Mobile menu button */}
            <motion.div 
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="md:hidden"
            >
              <motion.button 
                className="text-white focus:outline-none p-1 sm:p-2 rounded-md"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: "rgba(190, 242, 100, 0.1)",
                  color: "#bef264"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <motion.svg 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </motion.svg>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>
      
      {/* Main Content */}
      <div className="absolute top-1/3 left-0 w-full h-2/3 flex items-start pt-8 sm:top-2/5 sm:h-3/5 sm:pt-20 z-10">
        <div className="w-full pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12 lg:pl-36 lg:pr-16">
          <div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight">
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.0, 
                  ease: "easeOut"
                }}
              >
                Unlock
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.1, 
                  ease: "easeOut"
                }}
              >
                {" "}smarter
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.2, 
                  ease: "easeOut"
                }}
              >
                {" "}gym
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.3, 
                  ease: "easeOut"
                }}
              >
                {" "}operations
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.4, 
                  ease: "easeOut"
                }}
              >
                with
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5, 
                  ease: "easeOut"
                }}
              >
                {" "}our
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6, 
                  ease: "easeOut"
                }}
              >
                {" "}next-level
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.7, 
                  ease: "easeOut"
                }}
              >
                {" "}dashboard
              </motion.span>
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.7 }}
              className="text-gray-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-light mt-4 sm:mt-6 opacity-90"
            >
              Experience the next evolution of gym dashboards
              <br />
              for smarter management
            </motion.p>
            
            {/* Buttons and Supported Platforms */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
              className="flex flex-col sm:flex-row lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8 w-full"
            >
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                <motion.button 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                  className="relative bg-lime-300 hover:bg-lime-200 text-black font-bold px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-lime-500/30 flex items-center gap-2 sm:gap-2.5 group overflow-hidden text-sm sm:text-base"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></div>
                  
                  {/* Button content */}
                  <span className="relative z-10 transition-all duration-300 group-hover:text-lime-900">Get Started</span>
                  <span className="relative z-10 bg-black text-white rounded-full w-7 h-7 flex items-center justify-center transition-all duration-500 group-hover:rotate-180 group-hover:scale-110 group-hover:bg-lime-600">
                    <FiArrowUpRight size={14} className="transition-all duration-500 group-hover:rotate-180" />
                  </span>
                  
                  {/* Ripple effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 group-hover:animate-ping bg-lime-400/20"></div>
                </motion.button>
                
                <motion.button 
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                  className="relative bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-4 py-2 sm:px-6 sm:py-2.5 lg:px-7 rounded-2xl hover:bg-white/20 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-white/20 flex items-center gap-2 sm:gap-2.5 group overflow-hidden text-sm sm:text-base"
                >
                  {/* Animated shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                  
                  {/* Button content */}
                  <FiPlay size={14} className="relative z-10 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12" />
                  <span className="relative z-10 transition-all duration-300 group-hover:text-lime-300">Watch Demo</span>
                  
                  {/* Pulsing border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500"></div>
                  
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-white/5 to-white/10"></div>
                </motion.button>
              </div>
              
              {/* Supported Platforms */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                className="text-gray-500 flex-shrink-0 mt-4 sm:mt-0"
              >
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
                  <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                    className="text-xs sm:text-sm opacity-70 whitespace-nowrap"
                  >
                    Supported platforms:
                  </motion.span>
                  {/* Web Development Icon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group flex-shrink-0"
                  >
                    <FiGlobe size={16} className="text-white group-hover:text-lime-300 transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                  </motion.div>
                  
                  {/* Apple Icon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group flex-shrink-0"
                  >
                    <FaApple size={16} className="text-white group-hover:text-lime-300 transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                  </motion.div>
                  
                  {/* Android Icon */}
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
                    className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all duration-300 hover:scale-110 cursor-pointer group flex-shrink-0"
                  >
                    <FaAndroid size={16} className="text-white group-hover:text-lime-300 transition-colors duration-300 sm:w-[18px] sm:h-[18px]" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Wireframe Spheres Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-5">
        
        {/* Medium Sphere - Upper Middle */}
        <div className="absolute top-32 right-1/3 w-48 h-48 opacity-20">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="70" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="white" strokeWidth="1" opacity="0.2"/>
            <circle cx="100" cy="100" r="30" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
            <circle cx="100" cy="100" r="15" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
            {/* Connection lines */}
            <line x1="100" y1="30" x2="100" y2="170" stroke="white" strokeWidth="0.5" opacity="0.2"/>
            <line x1="30" y1="100" x2="170" y2="100" stroke="white" strokeWidth="0.5" opacity="0.2"/>
          </svg>
        </div>
        
        {/* Small Sphere - Top Left */}
        <div className="absolute top-40 left-1/4 w-32 h-32 opacity-15">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="60" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="white" strokeWidth="1" opacity="0.2"/>
            <circle cx="100" cy="100" r="20" fill="none" stroke="white" strokeWidth="1" opacity="0.1"/>
          </svg>
        </div>
        
        {/* Scattered dots */}
        <div className="absolute w-1 h-1 bg-white rounded-full top-24 right-32 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-36 right-48 opacity-30"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-48 right-24 opacity-50"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-28 right-40 opacity-35"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-44 right-36 opacity-45"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-32 right-28 opacity-40"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-52 right-44 opacity-30"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-40 right-52 opacity-35"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-36 right-20 opacity-45"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full top-48 right-32 opacity-40"></div>
      </div>
      
      {/* Animated stars in upper part */}
      <div className="absolute top-0 left-0 w-full h-1/2 pointer-events-none z-5">
        {/* Star 1 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '10%',
               left: '20%',
               animationDelay: '0s',
               animationDuration: '2s'
             }}></div>
        
        {/* Star 2 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '15%',
               left: '60%',
               animationDelay: '0.5s',
               animationDuration: '2.5s'
             }}></div>
        
        {/* Star 3 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '25%',
               left: '80%',
               animationDelay: '1s',
               animationDuration: '3s'
             }}></div>
        
        {/* Star 4 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '8%',
               left: '40%',
               animationDelay: '1.5s',
               animationDuration: '2.2s'
             }}></div>
        
        {/* Star 5 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '30%',
               left: '10%',
               animationDelay: '2s',
               animationDuration: '2.8s'
             }}></div>
        
        {/* Star 6 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '20%',
               left: '90%',
               animationDelay: '0.8s',
               animationDuration: '2.3s'
             }}></div>
        
        {/* Star 7 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '12%',
               left: '70%',
               animationDelay: '1.2s',
               animationDuration: '2.7s'
             }}></div>
        
        {/* Star 8 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '35%',
               left: '50%',
               animationDelay: '1.8s',
               animationDuration: '2.1s'
             }}></div>
        
        {/* Star 9 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '18%',
               left: '30%',
               animationDelay: '0.3s',
               animationDuration: '2.9s'
             }}></div>
        
        {/* Star 10 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '28%',
               left: '75%',
               animationDelay: '1.7s',
               animationDuration: '2.4s'
             }}></div>
        
        {/* Additional Stars - Star 21 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '5%',
               left: '15%',
               animationDelay: '0.3s',
               animationDuration: '2.1s'
             }}></div>
        
        {/* Star 22 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '35%',
               left: '25%',
               animationDelay: '1.1s',
               animationDuration: '2.6s'
             }}></div>
        
        {/* Star 23 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '18%',
               left: '85%',
               animationDelay: '0.7s',
               animationDuration: '2.3s'
             }}></div>
        
        {/* Star 24 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '7%',
               left: '65%',
               animationDelay: '1.3s',
               animationDuration: '2.7s'
             }}></div>
        
        {/* Star 25 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '33%',
               left: '5%',
               animationDelay: '0.9s',
               animationDuration: '2.9s'
             }}></div>
        
        {/* Star 26 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '12%',
               left: '45%',
               animationDelay: '1.8s',
               animationDuration: '2.0s'
             }}></div>
        
        {/* Star 27 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '38%',
               left: '55%',
               animationDelay: '0.4s',
               animationDuration: '2.8s'
             }}></div>
        
        {/* Star 28 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '3%',
               left: '35%',
               animationDelay: '1.6s',
               animationDuration: '2.2s'
             }}></div>
        
        {/* Star 29 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '22%',
               left: '95%',
               animationDelay: '0.8s',
               animationDuration: '2.5s'
             }}></div>
        
        {/* Star 30 */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
             style={{
               top: '40%',
               left: '75%',
               animationDelay: '1.4s',
               animationDuration: '2.1s'
             }}></div>
        
        {/* Additional stars in upper middle with smoothFade animation */}
        {/* Star 11 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '22%',
               left: '45%',
               animation: 'smoothFade 1.5s infinite',
               animationDelay: '0.2s'
             }}></div>
        
        {/* Star 12 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '16%',
               left: '35%',
               animation: 'smoothFade 2.1s infinite',
               animationDelay: '0.8s'
             }}></div>
        
        {/* Star 13 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '24%',
               left: '55%',
               animation: 'smoothFade 1.8s infinite',
               animationDelay: '1.3s'
             }}></div>
        
        {/* Star 14 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '19%',
               left: '65%',
               animation: 'smoothFade 2.3s infinite',
               animationDelay: '0.5s'
             }}></div>
        
        {/* Star 15 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '26%',
               left: '25%',
               animation: 'smoothFade 1.7s infinite',
               animationDelay: '1.1s'
             }}></div>
        
        {/* Star 16 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '14%',
               left: '85%',
               animation: 'smoothFade 2.0s infinite',
               animationDelay: '0.7s'
             }}></div>
        
        {/* Star 17 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '21%',
               left: '15%',
               animation: 'smoothFade 1.9s infinite',
               animationDelay: '1.6s'
             }}></div>
        
        {/* Star 18 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '17%',
               left: '95%',
               animation: 'smoothFade 2.2s infinite',
               animationDelay: '0.4s'
             }}></div>
        
        {/* Star 19 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '23%',
               left: '5%',
               animation: 'smoothFade 1.6s infinite',
               animationDelay: '1.4s'
             }}></div>
        
        {/* Star 20 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '27%',
               left: '45%',
               animation: 'smoothFade 2.4s infinite',
               animationDelay: '0.9s'
             }}></div>
      </div>
      
      {/* More stars below upper area */}
      <div className="absolute top-1/4 left-0 w-full h-1/4 pointer-events-none z-5">
        {/* Upper-Middle Star 1 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '20%',
               left: '25%',
               animation: 'smoothFade 1.9s infinite',
               animationDelay: '0.4s'
             }}></div>
        
        {/* Upper-Middle Star 2 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '15%',
               left: '65%',
               animation: 'smoothFade 2.1s infinite',
               animationDelay: '0.8s'
             }}></div>
        
        {/* Upper-Middle Star 3 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '25%',
               left: '85%',
               animation: 'smoothFade 1.7s infinite',
               animationDelay: '1.2s'
             }}></div>
        
        {/* Upper-Middle Star 4 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '18%',
               left: '45%',
               animation: 'smoothFade 2.3s infinite',
               animationDelay: '0.6s'
             }}></div>
        
        {/* Upper-Middle Star 5 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '22%',
               left: '15%',
               animation: 'smoothFade 1.8s infinite',
               animationDelay: '1.0s'
             }}></div>
        
        {/* Upper-Middle Star 6 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '12%',
               left: '95%',
               animation: 'smoothFade 2.0s infinite',
               animationDelay: '0.3s'
             }}></div>
        
        {/* Upper-Middle Star 7 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '28%',
               left: '75%',
               animation: 'smoothFade 1.6s infinite',
               animationDelay: '1.4s'
             }}></div>
        
        {/* Upper-Middle Star 8 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '16%',
               left: '55%',
               animation: 'smoothFade 2.2s infinite',
               animationDelay: '0.7s'
             }}></div>
        
        {/* Upper-Middle Star 9 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '24%',
               left: '35%',
               animation: 'smoothFade 1.9s infinite',
               animationDelay: '1.1s'
             }}></div>
        
        {/* Upper-Middle Star 10 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '14%',
               left: '5%',
               animation: 'smoothFade 2.4s infinite',
               animationDelay: '0.5s'
             }}></div>
        
        {/* Upper-Middle Star 11 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '26%',
               left: '95%',
               animation: 'smoothFade 1.8s infinite',
               animationDelay: '0.9s'
             }}></div>
        
        {/* Upper-Middle Star 12 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '19%',
               left: '8%',
               animation: 'smoothFade 2.1s infinite',
               animationDelay: '1.3s'
             }}></div>
        
        {/* Upper-Middle Star 13 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '21%',
               left: '88%',
               animation: 'smoothFade 1.7s infinite',
               animationDelay: '0.2s'
             }}></div>
        
        {/* Upper-Middle Star 14 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '17%',
               left: '38%',
               animation: 'smoothFade 2.0s infinite',
               animationDelay: '1.5s'
             }}></div>
        
        {/* Upper-Middle Star 15 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '23%',
               left: '68%',
               animation: 'smoothFade 1.9s infinite',
               animationDelay: '0.1s'
             }}></div>
        
        {/* Additional Upper-Middle Stars - Star 16 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '12%',
               left: '12%',
               animation: 'smoothFade 2.2s infinite',
               animationDelay: '0.5s'
             }}></div>
        
        {/* Star 17 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '28%',
               left: '42%',
               animation: 'smoothFade 1.8s infinite',
               animationDelay: '1.0s'
             }}></div>
        
        {/* Star 18 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '18%',
               left: '78%',
               animation: 'smoothFade 2.0s infinite',
               animationDelay: '0.3s'
             }}></div>
        
        {/* Star 19 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '32%',
               left: '8%',
               animation: 'smoothFade 2.3s infinite',
               animationDelay: '0.7s'
             }}></div>
        
        {/* Star 20 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '10%',
               left: '92%',
               animation: 'smoothFade 1.7s infinite',
               animationDelay: '1.2s'
             }}></div>
        
        {/* Star 21 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '26%',
               left: '58%',
               animation: 'smoothFade 2.1s infinite',
               animationDelay: '0.6s'
             }}></div>
        
        {/* Star 22 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '14%',
               left: '32%',
               animation: 'smoothFade 1.9s infinite',
               animationDelay: '0.9s'
             }}></div>
        
        {/* Star 23 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '30%',
               left: '72%',
               animation: 'smoothFade 2.4s infinite',
               animationDelay: '0.4s'
             }}></div>
        
        {/* Star 24 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '16%',
               left: '18%',
               animation: 'smoothFade 1.6s infinite',
               animationDelay: '1.1s'
             }}></div>
        
        {/* Star 25 */}
        <div className="absolute w-1 h-1 bg-white rounded-full"
             style={{
               top: '22%',
               left: '88%',
               animation: 'smoothFade 2.2s infinite',
               animationDelay: '0.8s'
             }}></div>
      </div>
      
      {/* White light effect from bottom */}
      <div className="absolute bottom-0 left-0 w-full h-96 pointer-events-none z-5">
        <div className="w-full h-full bg-gradient-to-t from-white/20 via-white/5 to-transparent"></div>
      </div>
      
        {/* Custom CSS for smooth fade animation */}
        <style jsx>{`
          @keyframes smoothFade {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
        `}</style>
      </div>
      
      {/* Pricing Section */}
      <PricingSection />
    </div>
  );
}
