import React from "react"
import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Filter, ChevronDown, Star, Users, Fuel, Zap, Settings, Heart, Share2 } from "lucide-react"

const Cars = () => {
  const [filtersOpen, setFiltersOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFilter, setActiveFilter] = useState("All")

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen)
  }

  const cars = [
    {id: 1,name: "Luxury Sedan",image: "https://i.pinimg.com/736x/c1/25/4d/c1254dc93c91e9acc6140aebba585eed.jpg?height=400&width=600",price: 89,rating: 4.9,type: "Sedan",seats: 5,transmission: "Automatic",fuelType: "Hybrid",},
    {id: 2,name: "SUV Crossover",image: "https://i.pinimg.com/736x/dd/16/79/dd1679455e5ac5038e9ff2a28b7f1fe7.jpg?height=400&width=600",price: 75,rating: 4.7,type: "SUV",seats: 7,transmission: "Automatic",fuelType: "Gasoline",},
    {id: 3,name: "Sports Convertible",image: "https://i.pinimg.com/736x/1d/54/f3/1d54f3e3722d40eacd39cb96bbd1d1d8.jpg?height=400&width=600",price: 120,rating: 4.8,type: "Sports",seats: 2,transmission: "Automatic",fuelType: "Gasoline",},
    {id: 4,name: "Economy Hatchback",image: "https://i.pinimg.com/736x/c7/da/66/c7da6626367c8c78c7b4f5b299497251.jpg?height=400&width=600",price: 45,rating: 4.5,type: "Economy",seats: 5,transmission: "Manual",fuelType: "Gasoline",},
    {id: 5,name: "Electric Sedan",image: "https://i.pinimg.com/736x/df/45/ef/df45ef2e5811ca988e140db4dcddf0d1.jpg?height=400&width=600",price: 95,rating: 4.9,type: "Sedan",seats: 5,transmission: "Automatic",fuelType: "Electric",},
    {id: 6,name: "Compact SUV",image: "https://i.pinimg.com/736x/03/e4/de/03e4deb4a9f41aa0a791fe45cae75095.jpg?height=400&width=600",price: 65,rating: 4.6,type: "SUV",seats: 5,transmission: "Automatic",fuelType: "Hybrid",},
  ]

  const carTypes = ["All", "Sedan", "SUV", "Sports", "Economy", "Luxury"]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Page Title */}
          <div
            className={`relative overflow-hidden rounded-2xl shadow-xl mb-12 transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="relative p-10 md:p-12">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Premium Fleet</h1>
                <p className="text-teal-50 text-lg">
                  Browse our selection of meticulously maintained vehicles available for rent
                </p>
              </div>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-8 overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex space-x-2 min-w-max">
              {carTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveFilter(type)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeFilter === type
                      ? "bg-gradient-to-r from-teal-500 to-emerald-500 text-white shadow-md"
                      : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                  }`}>
                  {type}
                </button>
              ))}
            </div>
          </div>

          {/* Filters and Search */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 md:p-8 mb-10 transition-all duration-500">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-slate-800 dark:text-white">Refine Your Search</h2>
              <button
                onClick={toggleFilters}
                className="flex items-center text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-400 md:hidden"
              >
                <Filter className="h-5 w-5 mr-2" />
                <span>Filters</span>
                <ChevronDown
                  className={`h-4 w-4 ml-1 transform transition-transform duration-300 ${filtersOpen ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            <div className={`${filtersOpen ? "block" : "hidden"} md:block`}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">Car Type</label>
                  <div className="relative group">
                    <select className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                      <option>All Types</option>
                      <option>Economy</option>
                      <option>Sedan</option>
                      <option>SUV</option>
                      <option>Luxury</option>
                      <option>Sports</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">
                    Price Range
                  </label>
                  <div className="relative group">
                    <select className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                      <option>Any Price</option>
                      <option>$0 - $50</option>
                      <option>$50 - $100</option>
                      <option>$100 - $150</option>
                      <option>$150+</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">Seats</label>
                  <div className="relative group">
                    <select className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                      <option>Any</option>
                      <option>2 Seats</option>
                      <option>4 Seats</option>
                      <option>5 Seats</option>
                      <option>7+ Seats</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 pl-1">Fuel Type</label>
                  <div className="relative group">
                    <select className="w-full pl-4 pr-10 py-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-slate-700 dark:text-white appearance-none transition-all">
                      <option>Any</option>
                      <option>Gasoline</option>
                      <option>Diesel</option>
                      <option>Hybrid</option>
                      <option>Electric</option>
                    </select>
                    <div className="absolute inset-0 rounded-xl pointer-events-none border-2 border-transparent group-hover:border-teal-500/50 transition-all"></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-6 py-3 rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300">
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Car Listings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car, index) => (
              <div
                key={car.id}
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 ${
                  isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${150 + index * 75}ms` }}
              >
                <div className="relative h-56 overflow-hidden group">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-teal-500 transition-colors">
                      <Heart className="h-4 w-4" />
                    </button>
                    <button className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-slate-700 hover:bg-white hover:text-teal-500 transition-colors">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-white">{car.name}</h3>
                    <div className="flex items-center bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-md">
                      <Star className="h-4 w-4 text-amber-500 fill-amber-500 mr-1" />
                      <span className="text-amber-700 dark:text-amber-400 font-medium text-sm">{car.rating}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    <span className="inline-flex items-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                      <Users className="h-3 w-3 mr-1" />
                      {car.seats} Seats
                    </span>
                    <span className="inline-flex items-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                      <Settings className="h-3 w-3 mr-1" />
                      {car.transmission}
                    </span>
                    <span className="inline-flex items-center bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs px-3 py-1.5 rounded-full">
                      {car.fuelType === "Electric" ? (
                        <Zap className="h-3 w-3 mr-1" />
                      ) : (
                        <Fuel className="h-3 w-3 mr-1" />
                      )}
                      {car.fuelType}
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div>
                      <span className="text-slate-500 dark:text-slate-400 text-sm">Daily rate</span>
                      <p className="text-teal-600 dark:text-teal-400 font-bold text-xl">
                        ${car.price}
                        <span className="text-sm font-normal">/day</span>
                      </p>
                    </div>
                    <a
                      href={`/cars/${car.id}`}
                      className="inline-flex items-center bg-gradient-to-r from-teal-500 to-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:shadow-md hover:shadow-teal-500/20 transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Cars

