'use client'

import { useState } from 'react'
import { Clock, Home, Laptop, Phone, Menu, X } from 'lucide-react'
import { HoverBorderGradient } from './ui/hover-border-gradient'
import { AuroraBackground } from './ui/aurora-background'
import { Button } from './ui/button'
import { HoverEffect } from './ui/card-hover-effect'
import { SparklesCore } from './ui/sparkles'
import Link from 'next/link'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="min-h-screen flex flex-col text-white">
      {/* Animated background */}
      <div className="fixed inset-0 z-[-1]">
        <AuroraBackground className="bg-gradient-to-br from-pink-900 via-violet-900 to-black animate-gradient-x">
          <div className="absolute inset-0" />
        </AuroraBackground>
      </div>

      {/* Header */}
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-8xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold min-w-50"></div>
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="#how-it-works" className="hover:text-gray-300 transition-colors">How It Works</Link>
            <Link href="#contact" className="hover:text-gray-300 transition-colors">Contact</Link>
          </nav>
          <HoverBorderGradient as="button" className="hidden md:block">
            Book Now
          </HoverBorderGradient>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none focus:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 bg-opacity-95">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Services</Link>
            <Link href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">How It Works</Link>
            <Link href="#contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-white">Contact</Link>
            <HoverBorderGradient as="button" className="w-full mt-2">
              Book Now
            </HoverBorderGradient>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <SparklesPreview />
        <section className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Expert Tech Support <br /> At Your Doorstep
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We fix your laptop and desktop issues within 24 hours, right at your home or office.
          </p>
          <Button size="lg" className="animate-pulse">
            Get Help Now
          </Button>
        </section>

        {/* Services Section */}
        <section id="services" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Services</h2>
          <div>
            <CardHoverEffectDemo />
          </div>
          
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <StepCard number={1} title="Book a Service" description="Call us or book online. Tell us about your issue." />
            <StepCard number={2} title="We Come to You" description="Our tech expert arrives at your location." />
            <StepCard number={3} title="Problem Solved" description="We diagnose and fix the issue on the spot." />
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Your Tech Fixed?</h2>
          <p className="mb-8">Book a service now and say goodbye to your computer woes!</p>
          <Button size="lg">Book a Service</Button>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg font-semibold mb-4 md:mb-0">TechFix Pro</div>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5" />
            <span>Call us: (123) 456-7890</span>
          </div>
          <div className="mt-4 md:mt-0">
            <HoverBorderGradient className="inline-block">
                Contact Us
            </HoverBorderGradient>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function SparklesPreview() {
  return (
    <div className="h-[15rem] relative w-full bg-transparent flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-9xl lg:text-9xl font-bold text-center text-white relative z-20">
        Patch PC
      </h1>
    </div>
  );
}

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-6xl mx-auto px-2">
      <HoverEffect items={serviceCards} />
    </div>
  );
}

export const serviceCards = [
  {
    icon: <Laptop className="w-12 h-12 mb-4" />,
    title: "Laptop & Desktop Repair",
    description: "From hardware to software, we fix all computer issues.",
    link: "/laptop-desktop-repair"
  },
  {
    icon: <Home className="w-12 h-12 mb-4" />,
    title: "Home Service",
    description: "We come to you. No need to leave your home or office.",
    link: "/home-service"
  },
  {
    icon: <Clock className="w-12 h-12 mb-4" />,
    title: "24-Hour Resolution",
    description: "Quick turnaround time. Most issues resolved within a day.",
    link: "/24-hour-resolution"
  }
];

function StepCard({ number, title, description }: { number: number, title: string, description: string }) {
  return (
    <div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg text-center hover:bg-opacity-70 transition-all">
      <div className="text-4xl font-bold text-gray-400 mb-4">{number}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  )
}