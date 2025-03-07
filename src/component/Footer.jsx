import React from "react"
import { Link } from "react-router-dom"
import { Car, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronRight } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 mr-3">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-xl">RentDrive</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Premium car rental service offering luxury, sports, and comfort vehicles for any occasion. Experience the
              difference with RentDrive.
            </p>
            <div className="flex space-x-3">
              <SocialButton icon={<Facebook className="h-4 w-4" />} />
              <SocialButton icon={<Twitter className="h-4 w-4" />} />
              <SocialButton icon={<Instagram className="h-4 w-4" />} />
              <SocialButton icon={<Linkedin className="h-4 w-4" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Cars", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-slate-400 hover:text-teal-400 transition-colors flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 text-teal-500/50 group-hover:text-teal-400 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Vehicle Categories */}
          <div>
            <h3 className="font-bold text-lg mb-6">Vehicle Categories</h3>
            <ul className="space-y-3">
              {["Luxury", "Sports", "SUV", "Electric", "Economy", "Convertible"].map((item) => (
                <p key={item}  className="text-slate-400 hover:text-teal-400 transition-colors flex items-center group">
                    <ChevronRight className="h-4 w-4 mr-2 text-teal-500/50 group-hover:text-teal-400 transition-transform duration-300 group-hover:translate-x-1" />
                    {item}
                </p>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 mt-0.5 text-teal-400 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-slate-400">123 NY 10001</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 text-teal-400 flex-shrink-0">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-slate-400">+212 634259417</span>
              </li>
              <li className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center mr-3 text-teal-400 flex-shrink-0">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-slate-400">info@rentdrive.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="max-w-3xl mx-auto mb-16 bg-slate-800/50 p-8 rounded-2xl">
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
            <p className="text-slate-400">Stay updated with our latest offers and news</p>
          </div>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-white"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-teal-500/20 transition-all duration-300" >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RentDrive. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/terms" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/sitemap" className="text-slate-500 hover:text-teal-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Social Button Component
const SocialButton = ({ icon }) => {
  return (
    <a
      href="#"
      className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
      {icon}
    </a>
  )
}

export default Footer

