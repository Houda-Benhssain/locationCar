import React from "react"
import { useState, useEffect } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { MapPin, Phone, Mail, Send, Clock, MessageSquare, ChevronRight } from "lucide-react"

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  })

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          {/* Page Title */}
          <div
            className={`relative overflow-hidden rounded-2xl shadow-xl mb-12 transition-all duration-700 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-emerald-500 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay"></div>

            <div className="relative p-10 md:p-12">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h1>
                <p className="text-teal-50 text-lg">Have questions or need assistance? We're here to help!</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact Form */}
            <div
              className={`lg:col-span-3 bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-all duration-700 delay-100 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <div className="flex items-center mb-8">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5 text-teal-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Send Us a Message</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="Your first name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6 space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
                    placeholder="Your email address"
                    required
                  />
                </div>

                <div className="mb-6 space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all appearance-none"
                  >
                    <option>General Inquiry</option>
                    <option>Reservation Question</option>
                    <option>Feedback</option>
                    <option>Support</option>
                  </select>
                </div>

                <div className="mb-8 space-y-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 dark:bg-slate-700/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all h-32"
                    placeholder="How can we help you?"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white py-4 rounded-xl font-medium hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300 flex items-center justify-center"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-2">
              <div
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 mb-8 transition-all duration-700 delay-200 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="flex items-center mb-8">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-teal-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Contact Information</h2>
                </div>

                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-4 mt-1 text-teal-500">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white mb-1">Main Office</h3>
                      <p className="text-slate-600 dark:text-slate-300">
                        123 
                        <br />
                        NY 10001
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-4 mt-1 text-teal-500">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white mb-1">Phone</h3>
                      <p className="text-slate-600 dark:text-slate-300">+212 634252417</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Monday to Friday, 8am to 8pm</p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center mr-4 mt-1 text-teal-500">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 dark:text-white mb-1">Email</h3>
                      <p className="text-slate-600 dark:text-slate-300">info@rentdrive.com</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
                        We'll respond as soon as possible
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
                  <div className="flex items-center mb-4">
                    <Clock className="h-5 w-5 text-teal-500 mr-2" />
                    <h3 className="font-bold text-slate-800 dark:text-white">Business Hours</h3>
                  </div>

                  <ul className="space-y-2">
                    <li className="flex justify-between py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <span className="text-slate-600 dark:text-slate-300">Monday - Friday:</span>
                      <span className="text-slate-800 dark:text-white font-medium">8:00 AM - 8:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <span className="text-slate-600 dark:text-slate-300">Saturday:</span>
                      <span className="text-slate-800 dark:text-white font-medium">9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between py-2 px-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                      <span className="text-slate-600 dark:text-slate-300">Sunday:</span>
                      <span className="text-slate-800 dark:text-white font-medium">10:00 AM - 4:00 PM</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Map */}
              <div
                className={`bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 transition-all duration-700 delay-300 transform ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-teal-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-white">Find Us</h2>
                </div>

                <div className="h-64 bg-slate-100 dark:bg-slate-700 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <iframe
                className="w-full h-64 rounded-lg shadow-md"
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53832.67372198694!2d-8.042200240886492!3d31.62579318257264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d31ea41bfb75%3A0x361a64e988568fad!2sMassira%2C%20Marrakech%2C%20Maroc!5e0!3m2!1sfr!2sfr!4v1710000000000!5m2!1sfr!2sfr"
                 allowFullScreen=""
                 loading="lazy"
                ></iframe>
                  <div className="w-full h-full flex items-center justify-center group">
                    <MapPin className="h-12 w-12 text-teal-500 mr-2 transition-transform duration-500 group-hover:scale-110" />
                    <span className="text-slate-500 dark:text-slate-400 font-medium">Interactive Map</span>
                  </div>
                </div>

                <div className="mt-6 flex justify-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-500 hover:text-teal-600 font-medium">
                    <span>Get Directions</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Contact

