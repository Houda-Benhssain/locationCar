import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Link } from "react-router-dom"
import { MapPin, Calendar, Car, Search, ArrowRight, Star, Shield, Clock, Zap } from "lucide-react"

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 overflow-hidden">
      <Header />

      <main className="pt-16">
        <section className="relative h-[85vh] flex items-center">
          {/* Background with overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent z-10"></div>
            <img src="https://cdn.motor1.com/images/mgl/Kb7EbG/s1/bugatti-chiron-l-ultime.jpg" alt="Luxury car"  className="w-full h-full object-cover object-center"/>
          </div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-3xl ml-4 md:ml-12 lg:ml-20 text-white">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">Drive{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-500">
                  Excellence
                </span>{" "}on Every Road
              </h1>

              <p className="text-xl text-slate-300 mb-8 max-w-xl">
                Experience the thrill of premium vehicles with our curated collection of luxury, sports, and comfort
                cars at competitive rates.</p>

              <div className="flex flex-wrap gap-4">
                <Link to="/cars">
                  <button className="px-8 py-4 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-lg hover:shadow-teal-500/20 transition-all duration-300 hover:translate-y-[-2px] flex items-center">
                    Browse Fleet
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </Link>

                <Link to="/contact">
                  <button className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white font-medium hover:bg-white/20 transition-all duration-300">
                    Contact Us
                  </button>
                </Link>
              </div>

             {/* Stats */}
              <div className="flex flex-wrap gap-8 mt-12">
                <div className="flex items-center">
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Search Form */}
        <section className="relative z-30  bottom--50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl overflow-hidden transform -translate-y-24">
              <div className="p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Find Your Perfect Ride</h2>
                  <div className="hidden md:flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                    <Clock className="h-4 w-4" />
                    <span>Quick search takes only 2 minutes</span>
                  </div>
                </div>

                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                        Pick-up Location
                      </label>
                      <div className="relative group">
                        <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-hover:text-teal-500 transition-colors h-5 w-5" />
                        <select className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                          <option>New York</option>
                          <option>Los Angeles</option>
                          <option>Chicago</option>
                          <option>Miami</option>
                          <option>San Francisco</option>
                        </select>
                        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Pick-up Date </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-hover:text-teal-500 transition-colors h-5 w-5" />
                        <input
                          type="date"
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white transition-all" />
                        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300"> Return Date </label>
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-hover:text-teal-500 transition-colors h-5 w-5" />
                        <input
                          type="date"
                          className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white transition-all"/>
                        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Vehicle Type</label>
                      <div className="relative group">
                        <Car className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 group-hover:text-teal-500 transition-colors h-5 w-5" />
                        <select className="w-full pl-12 pr-4 py-4 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                          <option>All Types</option>
                          <option>Economy</option>
                          <option>SUV</option>
                          <option>Luxury</option>
                          <option>Sports</option>
                          <option>Electric</option>
                        </select>
                        <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                      </div>
                    </div>
                  </div>

                  <button className="mt-8 w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 flex items-center justify-center">
                    <Search className="mr-2 h-5 w-5" />
                    Search Available Vehicles
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 -mt-8 bg-slate-50 dark:bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800 dark:text-white">
                Why Choose <span className="text-teal-500">RentDrive</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                We offer a premium car rental experience with exceptional service and top-quality vehicles
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Shield className="h-6 w-6" />}
                description="All our vehicles come with comprehensive insurance coverage for your peace of mind."/>

              <FeatureCard
                icon={<Zap className="h-6 w-6" />}
                description="Our streamlined booking process gets you on the road in minutes, not hours."
              />

              <FeatureCard
                icon={<Clock className="h-6 w-6" />}
                description="Our customer service team is available around the clock to assist you."
              />

              <FeatureCard
                icon={<Star className="h-6 w-6" />}
                description="From luxury sedans to sports cars, our fleet features only the finest vehicles."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
      <div className="w-14 h-14 rounded-xl bg-teal-500/10 flex items-center justify-center mb-6 group-hover:bg-teal-500 transition-colors duration-300">
        <div className="text-teal-500 group-hover:text-white transition-colors duration-300">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 text-slate-800 dark:text-white">{title}</h3>
      <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
  )
}

export default Home;

