import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Award, Users, Shield, Zap, Star, Check, ChevronRight } from 'lucide-react';
import { Link } from "react-router-dom";

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10"></div>
            <img 
              src="https://cdn.motor1.com/images/mgl/Kb7EbG/s1/bugatti-chiron-l-ultime.jpg" 
              alt="Luxury car" 
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 md:px-8 lg:px-12 relative z-10">
            <div className="max-w-3xl mx-auto text-center text-white">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/20 border border-teal-500/30 text-teal-400 text-sm font-medium mb-8">
                <span className="mr-2.5">•</span> Established 2014
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">About RentDrive</h1>
              <p className="text-xl text-slate-300 mb-8">Providing premium car rental services with a commitment to excellence</p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 transform transition-all duration-700 hover:shadow-2xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                  Our Journey
                </div>
                <h2 className="text-3xl font-bold mb-4 text-slate-800 dark:text-white">Our Story</h2>
              </div>
              
              <div className="prose max-w-none prose-lg dark:prose-invert prose-headings:text-slate-800 dark:prose-headings:text-white prose-p:text-slate-600 dark:prose-p:text-slate-300">
                <p className="mb-6 leading-relaxed">
                  Founded in 2014, RentDrive began with a simple mission: to provide high-quality car rental services
                  with exceptional customer care. What started as a small fleet of just 10 vehicles in New York has now
                  grown into one of the most trusted car rental services across the United States.
                </p>
                <p className="mb-6 leading-relaxed">
                  Our founder, Michael Thompson, recognized a gap in the market for a rental service that combined
                  premium vehicles with affordable rates and a customer-first approach. This vision has guided our
                  growth over the past decade, as we've expanded to over 25 locations nationwide.
                </p>
                <p className="leading-relaxed">
                  Today, RentDrive continues to innovate in the car rental industry, incorporating the latest technology
                  to streamline the booking process while maintaining the personal touch that has become our hallmark.
                  Our diverse fleet of over 500 vehicles includes everything from economical daily drivers to luxury
                  vehicles and SUVs, ensuring we have the perfect car for every journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-teal-500 to-emerald-500">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
                <p className="text-teal-100">Premium Vehicles</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
                <p className="text-teal-100">Locations</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
                <p className="text-teal-100">Happy Customers</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">9+</div>
                <p className="text-teal-100">Years of Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Award className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Mission</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To provide our customers with safe, reliable, and enjoyable transportation solutions that exceed
                  expectations. We strive to make every rental experience seamless, from booking to return, while
                  offering competitive rates and exceptional service.
                </p>
                
                <ul className="mt-6 space-y-2">
                  {["Customer satisfaction", "Transparent pricing", "Quality vehicles"].map((item) => (
                    <li key={item} className="flex items-center text-slate-600 dark:text-slate-300">
                      <div className="mr-3 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-teal-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white dark:bg-slate-800 p-8 md:p-10 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-2xl flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-slate-800 dark:text-white">Our Vision</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  To be the leading car rental service known for quality, innovation, and customer satisfaction. We aim
                  to revolutionize the industry through technology-driven solutions while maintaining our commitment to
                  personalized service and environmental responsibility.
                </p>
                
                <ul className="mt-6 space-y-2">
                  {["Industry innovation", "Environmental sustainability", "Global expansion"].map((item) => (
                    <li key={item} className="flex items-center text-slate-600 dark:text-slate-300">
                      <div className="mr-3 h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/50 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-teal-500" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-24 bg-slate-100 dark:bg-slate-800/50">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                What Drives Us
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Our Core Values</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The principles that guide everything we do at RentDrive
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <ValueCard 
                icon={<Users className="h-8 w-8" />}
                title="Customer Focus"
                description="We put our customers at the center of everything we do, constantly seeking ways to improve their experience."
              />
              
              <ValueCard 
                icon={<Shield className="h-8 w-8" />}
                title="Integrity"
                description="We operate with honesty and transparency in all interactions, ensuring there are no hidden fees or surprises."
              />
              
              <ValueCard 
                icon={<Star className="h-8 w-8" />}
                title="Quality"
                description="We maintain our vehicles to the highest standard and ensure every rental meets our strict quality criteria."
              />
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-6 md:px-8 lg:px-12">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-100 dark:border-teal-800/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                Our People
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">Meet Our Leadership Team</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                The dedicated professionals driving RentDrive forward
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <TeamMember
                image="https://i.pinimg.com/474x/e9/c9/d6/e9c9d68f49519e856e0324122b318bfa.jpg"
                name="Michael Thompson"
                role="CEO & Founder"
                bio="With over 20 years in the automotive industry, Michael founded RentDrive with a vision to transform the car rental experience."
              />
              
              <TeamMember
                image="https://i.pinimg.com/736x/22/ba/d3/22bad3386d07a265612f8fa99f6de8f0.jpg"
                name="Sarah Johnson"
                role="Chief Operations Officer"
                bio="Sarah oversees all operational aspects of RentDrive, ensuring smooth service delivery across all locations."
              />
              
              <TeamMember
                image="https://i.pinimg.com/736x/6c/db/6a/6cdb6a9348452085c7af5eba4f579e06.jpg"
                name="David Chen"
                role="Chief Technology Officer"
                bio="David leads our technology initiatives, developing innovative solutions to enhance the customer booking experience."
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
          <div className="container mx-auto px-6 md:px-8 lg:px-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience RentDrive?</h2>
            <p className="max-w-2xl mx-auto mb-10 text-teal-100">
              Join thousands of satisfied customers who choose RentDrive for their car rental needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/cars" className="bg-white text-teal-600 px-8 py-4 rounded-xl font-medium hover:bg-teal-50 transition-colors shadow-lg">
                Browse Our Fleet
              </Link>
              <Link to="/contact" className="bg-transparent border-2 border-white px-8 py-4 rounded-xl font-medium hover:bg-white/10 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Value Card Component
const ValueCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="w-16 h-16 bg-teal-50 dark:bg-teal-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
        <div className="text-teal-500">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-300">{description}</p>
    </div>
  );
};

// Team Member Component
const TeamMember = ({ image, name, role, bio }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-800 dark:text-white">{name}</h3>
        <p className="text-teal-500 mb-4">{role}</p>
        <p className="text-slate-600 dark:text-slate-300 mb-6">{bio}</p>
        <div className="flex justify-center space-x-4">
          <SocialIcon>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </SocialIcon>
          <SocialIcon>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z"></path>
            </svg>
          </SocialIcon>
        </div>
      </div>
    </div>
  );
};

// Social Icon Component
const SocialIcon = ({ children }) => {
  return (
    <a href="#" className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
      {children}
    </a>
  );
};

export default About;
