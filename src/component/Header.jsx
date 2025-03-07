import React from "react"

import { useState, useEffect } from "react"
import { Car, Menu, X, ChevronRight, User, LogIn } from "lucide-react"

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-2 bg-white/80 dark:bg-slate-900/90 backdrop-blur-lg shadow-lg" : "py-5 bg-transparent"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="group flex items-center">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 shadow-md overflow-hidden mr-3 transition-transform duration-300 group-hover:scale-110">
              <Car className="h-5 w-5 text-white transform transition-transform duration-500 group-hover:rotate-12" />
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-800 dark:text-white">RentDrive</span>
             
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800/70 rounded-full px-2 py-1 mx-4">
              {["Home", "Cars", "About", "Contact"].map((item, index) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    index === 0
                      ? "text-white"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {index === 0 && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r shadow-md"></span>
                  )}
                  <span className={`relative ${index === 0 ? "text-white" : ""}`}>{item}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Auth */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="/login"
              className="flex items-center px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
            >
              <LogIn className="w-4 h-4 mr-2" />
              <span>Login</span>
            </a>
            <a
              href="/register"
              className="flex items-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px]"
            >
              <User className="w-4 h-4 mr-2" />
              <span>Register</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={toggleMobileMenu}></div>

          {/* Menu Panel */}
          <div className="absolute top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 shadow-2xl flex flex-col">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
              <a href="/" className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500">
                  <Car className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-lg text-slate-800 dark:text-white">RentDrive</span>
              </a>
              <button
                onClick={toggleMobileMenu}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex-1 overflow-y-auto py-4 px-5">
              <nav className="space-y-1">
                {["Home", "Cars", "About", "Contact"].map((item, index) => (
                  <a
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className={`flex items-center justify-between p-3 rounded-lg text-sm font-medium ${
                      index === 0
                        ? "bg-gradient-to-r from-teal-500/10 to-emerald-500/10 text-teal-600 dark:text-teal-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{item}</span>
                    <ChevronRight className={`w-4 h-4 ${index === 0 ? "text-teal-500" : "text-slate-400"}`} />
                  </a>
                ))}
              </nav>

              {/* Mobile Menu Footer */}
              <div className="mt-8 space-y-3">
                <a
                  href="/login"
                  className="flex items-center justify-center w-full p-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <LogIn className="w-4 h-4 mr-2" />
                  <span className="font-medium">Login</span>
                </a>
                <a
                  href="/register"
                  className="flex items-center justify-center w-full p-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-500 text-white font-medium shadow-md hover:shadow-lg transition-all"
                >
                  <User className="w-4 h-4 mr-2" />
                  <span>Create Account</span>
                </a>
              </div>
             
              </div>
            </div>
          </div>

      )}
    </header>
  )
}

export default Header

