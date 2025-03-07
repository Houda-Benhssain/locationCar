import React from "react"
import { useState, useEffect } from "react"
import { Eye, EyeOff, Car } from "lucide-react"
import { Button } from "../component/ui/button"
import { Input } from "../component/ui/input"
import { Label } from "../component/ui/label"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simple validation example
    if (!email || !password) {
      setIsError(true)
      setTimeout(() => setIsError(false), 500) // Reset after shake animation
      return
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-slate-50 dark:bg-slate-900 overflow-hidden">
      {/* Left side - Image */}
      <div className="h-[30vh] md:h-auto md:w-1/2 lg:w-3/5 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br from-teal-400/80 to-teal-600/80 z-10  transition-opacity duration-1000 ${isLoaded ? "opacity-70" : "opacity-0"}`}></div>
        <div
          className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-out ${isLoaded ? "scale-100" : "scale-110"}`}
          style={{
            backgroundImage: "url('https://i.pinimg.com/736x/f4/df/0d/f4df0d6f0510d7de56a2e9bdf6c56daa.jpg')",
            backgroundPosition: "center",
          }}></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center p-6 sm:p-10">
          <div
            className={`text-white transition-all duration-1000 delay-500
                       ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 drop-shadow-lg">
              RentDrive
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-md drop-shadow-md">
              Your premium car rental service. Drive in style, anywhere, anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex-1 md:w-1/2 lg:w-2/5 flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12">
        <div
          className={`w-full max-w-md space-y-6 sm:space-y-8 bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg 
                     transition-all duration-700 ease-out
                     ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {/* Logo and Header */}
          <div className="text-center">
            <div className="flex justify-center">
              <div  className={`bg-gradient-to-r from-teal-400 to-teal-600 p-3 rounded-full
                           transition-all duration-1000 ease-out
                           ${isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}>
                <Car className="h-6 w-6 sm:h-8 sm:w-8 text-white animate-pulse" />
              </div>
            </div>
            
            <h2
              className={`mt-4 sm:mt-6 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white
                        transition-all duration-700 delay-300 ease-out
                        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}> Welcome Back
            </h2>
            <p
              className={`mt-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400
                        transition-all duration-700 delay-500 ease-out
                        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`} >Sign in to your account to continue
            </p>
          </div>

          {/* Login Form */}
          <form className={`mt-6 sm:mt-8 space-y-4 sm:space-y-6 ${isError ? "animate-shake" : ""}`}
            onSubmit={handleSubmit}>
            <div className="space-y-3 sm:space-y-4">
              <div className={`space-y-1 sm:space-y-2 transition-all duration-700 delay-700 ease-out
                          ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <Label htmlFor="email" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                  Email address
                </Label>
                <Input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-sm sm:text-base border border-slate-300 dark:border-slate-700 rounded-md
                            transition-all duration-300 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                  placeholder="your@email.com" />
              </div>

              <div
                className={`space-y-1 sm:space-y-2 transition-all duration-700 delay-900 ease-out
                          ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
                <div className="flex justify-between items-center">
                  <Label htmlFor="password" className="text-sm sm:text-base text-slate-700 dark:text-slate-300">
                    Password
                  </Label>
                  <a href="#"
                    className="text-xs sm:text-sm font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400
                              transition-all duration-300 hover:translate-x-1">
                    Forgot password?
                  </a>
                </div>
                <div className="relative">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 text-sm sm:text-base border border-slate-300 dark:border-slate-700 rounded-md
                              transition-all duration-300 focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
                    placeholder="••••••••"/>
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 transition-all duration-300 hover:text-teal-500" />
                    ) : (
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-slate-500 transition-all duration-300 hover:text-teal-500" />
                    )}
                  </button>
                </div>
              </div>

              <div
                className={`flex items-center transition-all duration-700 delay-1100 ease-out
                          ${isLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-1300 ease-out
                        ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} >
              <Link to="/" >
              <Button type="submit"
                className="w-full bg-gradient-to-r from-teal-400 to-teal-600 text-white py-2 text-sm sm:text-base rounded-md 
                          hover:from-teal-500 hover:to-teal-700 transition-all duration-300
                          hover:shadow-lg hover:shadow-teal-500/30 active:scale-95" >
                Sign in
              </Button>
              </Link>
            </div>
          </form>

          {/* Sign up option */}
          <div
            className={`text-center mt-4 transition-all duration-700 delay-1500 ease-out
                      ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              Don't have an account?{" "}
              <Link to="/register"  className="font-medium text-teal-500 hover:text-teal-600 dark:text-teal-400
                          transition-all duration-300 hover:underline">Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

