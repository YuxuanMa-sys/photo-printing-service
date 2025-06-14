"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Clock,
  Shield,
  Upload,
  Phone,
  MapPin,
  Award,
  DollarSign,
  FileImage,
  Camera,
  Smartphone,
  HardDrive,
  Disc,
  Film,
  Zap,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Building2,
  Star,
  CheckCircle,
  Printer,
  ImageIcon,
  Users,
  Calendar,
  Mail,
  ExternalLink,
  Shirt,
  ScanLine,
  Presentation,
  Frame,
  CalendarDays,
  FileText,
  Palette,
  RotateCcw,
  Heart,
  MonitorSpeaker,
  Layers,
  PaintBucket,
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function PhotoPrintingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [testimonialsCurrentSlide, setTestimonialsCurrentSlide] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const testimonialsData = [
    {
      name: "Robert Fox",
      title: "Founder & CEO, Strong Insights",
      text: "Laguna Digital is hands down the best printing company I've worked with! I recently had business cards and brochures printed, and the quality was outstanding. The colors were vibrant, and the paper felt premium. Their team was super helpful, ensuring my designs were perfect before printing. Highly recommended!",
      image: "https://printspace.harutheme.com/packaging/wp-content/uploads/2023/07/testi-avatar-1.jpg"
    },
    {
      name: "Jacob Jones",
      title: "Head of Design at Zazoo",
      text: "I needed a batch of flyers and postcards printed urgently for an event, and Laguna Digital delivered on time with flawless results. Their customer service was professional, and they made the entire process smooth and stress-free. Will definitely use them again!",
      image: "https://printspace.harutheme.com/packaging/wp-content/uploads/2023/07/testi-avatar-2.jpg"
    },
    {
      name: "Alex Sandro",
      title: "Artist & Creative Professional",
      text: "As an artist, finding a reliable printer for art reproduction is crucial, and Laguna Digital exceeded my expectations. The prints were true to color, and the attention to detail was impressive. They perfectly captured the essence of my artwork. Highly recommend for artists looking for top-tier printing!",
      image: "https://printspace.harutheme.com/packaging/wp-content/uploads/2023/07/testi-avatar-3.jpg"
    },
    {
      name: "Jennifer C.",
      title: "Head of Design at Aveni",
      text: "Our company has been using Laguna Digital for all our marketing materials, including brochures, rack cards, and posters. Their printing is always sharp, colors are consistent, and their team is great at handling bulk orders efficiently. Great pricing and top-quality service!",
      image: "https://printspace.harutheme.com/packaging/wp-content/uploads/2023/07/testi-avatar-4.jpg"
    },
    {
      name: "Alex Sandro",
      title: "Founder & CEO, Strong Insights",
      text: "I ordered an aluminum sign and a PVC sign for my storefront, and they turned out fantastic! The durability and print quality are top-notch, and the colors don't fade even after months of outdoor exposure. Laguna Digital is my go-to for signage!",
      image: "https://printspace.harutheme.com/packaging/wp-content/uploads/2023/07/testi-avatar-5.jpg"
    }
  ]

  const pricingData = [
    { 
      size: "4x6", 
      price: 2.45, 
      paper: "Matte Uncoated", 
      popular: true,
      description: "Perfect for everyday photos and memories"
    },
    { 
      size: "5x7", 
      price: 4.9, 
      paper: "Luster Photo", 
      popular: true,
      description: "Great for gifts and display"
    },
    { 
      size: "8x10", 
      price: 9.9, 
      paper: "Glossy Photo", 
      popular: true,
      description: "Professional quality for framing"
    },
    { 
      size: "11x14", 
      price: 16.5, 
      paper: "Multiple Options", 
      popular: false,
      description: "Large format for wall display"
    },
    { 
      size: "12x18", 
      price: 29.5, 
      paper: "Multiple Options", 
      popular: false,
      description: "Premium large format printing"
    },
    { 
      size: "16x20", 
      price: 35.25, 
      paper: "Multiple Options", 
      popular: false,
      description: "Gallery-quality presentation"
    },
    { 
      size: "18x24", 
      price: 45.5, 
      paper: "Multiple Options", 
      popular: false,
      description: "Professional poster size"
    },
    { 
      size: "20x24", 
      price: 52.7, 
      paper: "Multiple Options", 
      popular: false,
      description: "Large wall art display"
    },
    { 
      size: "24x28", 
      price: 59.9, 
      paper: "Multiple Options", 
      popular: false,
      description: "Extra large format"
    },
    { 
      size: "24x36", 
      price: 78.4, 
      paper: "Multiple Options", 
      popular: false,
      description: "Panorama and large art prints"
    },
    { 
      size: "30x40", 
      price: 107.5, 
      paper: "Multiple Options", 
      popular: false,
      description: "Gallery wall centerpiece"
    },
    { 
      size: "36x48", 
      price: 154.8, 
      paper: "Multiple Options", 
      popular: false,
      description: "Museum-quality large format"
    },
  ]

  const digitalSources = [
    { 
      icon: Camera, 
      title: "Digital Cameras", 
      desc: "Professional DSLR and mirrorless camera files",
      formats: "RAW, JPEG, TIFF"
    },
    { 
      icon: HardDrive, 
      title: "SD Cards", 
      desc: "All SD card formats including microSD",
      formats: "SD, SDHC, SDXC"
    },
    { 
      icon: Film, 
      title: "Film Processing", 
      desc: "35mm and medium format film development",
      formats: "35mm, 120, 220"
    },
    { 
      icon: Smartphone, 
      title: "Mobile Devices", 
      desc: "iPhone, Android, and tablet photos",
      formats: "HEIC, JPEG"
    },
    { 
      icon: Disc, 
      title: "CD's / DVD's", 
      desc: "Photo discs and data storage media",
      formats: "CD-R, DVD-R"
    },
    { 
      icon: HardDrive, 
      title: "Memory Cards", 
      desc: "CF, MMC, and specialty card formats",
      formats: "CF, MMC, xD"
    },
    { 
      icon: FileImage, 
      title: "Slide Scanning", 
      desc: "35mm slides converted to digital",
      formats: "35mm slides"
    },
    { 
      icon: Upload, 
      title: "Online Upload", 
      desc: "Secure file upload through our website",
      formats: "All formats"
    },
    { 
      icon: HardDrive, 
      title: "USB Drives", 
      desc: "Flash drives and external storage",
      formats: "USB, SSD"
    },
    { 
      icon: Camera, 
      title: "Memory Sticks", 
      desc: "Sony Memory Stick and Pro formats",
      formats: "MS, MS Pro"
    },
  ]

  const additionalServices = [
          {
        title: "Film Development",
        desc: "Professional 35mm and medium format film processing with same-day service",
        image: "https://unsplash.com/photos/l_d78pNk37A/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzQ5OTQxNjAyfA&force=true",
        price: "From $12.99",
        turnaround: "Same Day"
      },
          {
        title: "Slide Processing & Duplication",
        desc: "Convert and duplicate 35mm slides with high-quality digital scanning",
        image: "https://unsplash.com/photos/bzdhc5b3Bxs/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8cG93ZXJwb2ludHxlbnwwfHx8fDE3NDk5NDE0Nzd8MA&force=true",
        price: "From $1.99/slide",
        turnaround: "2-3 Days"
      },
    { 
      title: "Image CD's", 
      desc: "Digital photo storage and backup CDs for long-term preservation", 
      image: "https://unsplash.com/photos/1iVKwElWrPA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTB8fENEfGVufDB8fHx8MTc0OTg0Mzc5Mnww&force=true",
      price: "From $9.99",
      turnaround: "Same Day"
    },
    { 
      title: "Custom T-Shirts", 
      desc: "Photo t-shirt printing on premium cotton with vibrant colors", 
      image: "https://unsplash.com/photos/4u3_pQklVwc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzl8fFQlMjBTaGlydHxlbnwwfHx8fDE3NDk5NDI2NTd8MA&force=true",
      price: "From $19.99",
      turnaround: "2-3 Days"
    },
    { 
      title: "Document Scanning", 
      desc: "Regular and oversized document scanning up to 36 inches wide", 
      image: "https://unsplash.com/photos/8DEDp6S93Po/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8ZG9jdW1lbnQlMjBzY2FubmluZ3xlbnwwfHx8fDE3NDk5NDI2ODB8MA&force=true",
      price: "From $0.99/page",
      turnaround: "Same Day"
    },
    { 
      title: "Photo Slideshow", 
      desc: "Professional digital photo presentation creation for events", 
      image: "https://unsplash.com/photos/aV5xrpB0bwQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGFsYnVtfGVufDB8fHx8MTc0OTk0Mjk1MHwy&force=true",
      price: "From $49.99",
      turnaround: "3-5 Days"
    },
    { 
      title: "Photo Mounting", 
      desc: "Foam-core, Gator-board, Sintra and PVC mounting for displays", 
      image: "https://unsplash.com/photos/v8A9_PkbljA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mzd8fGdhdG9yYm9hcmQlMjBkaXNwbGF5fGVufDB8fHx8MTc0OTk0MzAyNHwy&force=true",
      price: "From $15.99",
      turnaround: "2-3 Days"
    },
    { 
      title: "Custom Calendars", 
      desc: "Personalized photo calendars with your favorite memories", 
      image: "https://unsplash.com/photos/hDuNk0ubnAw/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8Y2FsZW5kZXJ8ZW58MHx8fHwxNzQ5OTQzMDU1fDI&force=true",
      price: "From $24.99",
      turnaround: "3-5 Days"
    },
    { 
      title: "Large Format Posters", 
      desc: "High-resolution poster printing up to 48 inches wide", 
      image: "https://unsplash.com/photos/UIG7Q73bC8Q/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8bGFyZ2UlMjBwb3N0ZXJ8ZW58MHx8fHwxNzQ5OTQzMDczfDI&force=true",
      price: "From $29.99",
      turnaround: "Same Day"
    },
    { 
      title: "Canvas Prints", 
      desc: "Gallery-wrapped canvas prints with museum-quality materials", 
      image: "https://unsplash.com/photos/VH8w75u3LE0/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y2FudmFzfGVufDB8fHx8MTc0OTk0MzEyMnwy&force=true",
      price: "From $49.99",
      turnaround: "3-5 Days"
    },
    { 
      title: "Photo Restoration", 
      desc: "Professional repair of damaged, faded, or torn photographs", 
      image: "https://unsplash.com/photos/-XNm4sB5kkM/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fG9sZCUyMHBob3RvfGVufDB8fHx8MTc0OTkzNjA1MHwy&force=true",
      price: "From $39.99",
      turnaround: "5-7 Days"
    },
    { 
      title: "Greeting Cards", 
      desc: "Custom greeting cards for holidays and special occasions", 
      image: "https://unsplash.com/photos/_j_wGc2iJB8/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8Z3JlZXRpbmclMjBjYXJkfGVufDB8fHx8MTc0OTk0MzE3OHwy&force=true",
      price: "From $2.99",
      turnaround: "Same Day"
    },
  ]

  const faqData = [
    {
      question: "What makes your printing shop in Laguna Beach different from other copy shops in Orange County?",
      answer:
        "Our Laguna Beach printing shop offers same-day in-house processing, premium quality materials, and competitive pricing. Unlike other copy shops in Orange County, we don't outsource - all printing is done on-site for faster turnaround and better quality control. We're known as the most reliable print shop in Laguna Beach with over 15 years of experience.",
    },
    {
      question: "Are you an affordable print shop near me with high quality results?",
      answer:
        "Yes! We're known as one of the most affordable print shops in Orange County while maintaining the highest quality standards. Our same day print shop offers competitive prices starting at just $2.45 for 4x6 prints with bulk discounts available. We believe in providing high quality print shop services without breaking the bank.",
    },
    {
      question: "Do you offer same day print services at your printing shop in Irvine and Laguna Beach?",
      answer:
        "Both our printing shop locations in Irvine and Laguna Beach offer same-day printing services. As a dedicated same day print shop, orders placed by 2 PM are typically ready for pickup by 5 PM the same day. This makes us the fastest copy shop in Orange County.",
    },
    {
      question: "What photo sources does your high quality print shop accept?",
      answer:
        "Our high quality print shop accepts photos from digital cameras, SD cards, smartphones, CDs/DVDs, film, slides, USB drives, and direct website uploads. As a full-service copy shop, we can handle virtually any digital source at both our printing shop locations.",
    },
    {
      question: "Why choose your printing shop over other copy shops in Orange County?",
      answer:
        "Our printing shop stands out from other copy shops in Orange County because we offer in-house processing, same-day service, competitive pricing, and superior quality. We're not just another copy shop - we're a specialized photo printing shop with professional equipment and experienced staff.",
    },
    {
      question: "What are the hours for your printing shop locations in Laguna Beach and Irvine?",
      answer:
        "Both our printing shop locations are open Monday-Friday 9 AM-6 PM, Saturday 10 AM-4 PM, and closed Sundays. As a same day print shop, we offer quick turnaround during all business hours at both our Laguna Beach and Irvine locations.",
    },
    {
      question: "How do I find an affordable print shop near me with professional quality?",
      answer:
        "If you're searching for an 'affordable print shop near me', look no further! Our Orange County locations in Laguna Beach and Irvine offer the perfect combination of affordability and professional quality. We're the top-rated print shop in the area with competitive prices and superior service.",
    },
    {
      question: "What services does your copy shop offer beyond photo printing?",
      answer:
        "Our full-service copy shop offers film development, photo scanning, canvas prints, photo restoration, custom calendars, greeting cards, document copying, and much more. We're your one-stop print shop in Orange County for all printing and copying needs.",
    },
    {
      question: "How can I upload photos to your online printing service?",
      answer:
        "Simply visit our website and click the 'Upload Photos' button. Our secure online system accepts all major file formats and provides instant quotes. This makes ordering from our print shop convenient even before visiting our Laguna Beach or Irvine locations.",
    },
    {
      question: "What paper options are available at your high quality print shop?",
      answer:
        "Our high quality print shop offers 15+ premium paper options including matte, glossy, luster, metallic, and specialty papers. As a professional printing shop, we use only the finest materials to ensure your photos look their best.",
    },
  ]

  const itemsPerSlide = {
    mobile: 2,
    tablet: 4,
    desktop: 6,
  }

  const getItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return itemsPerSlide.mobile
      if (window.innerWidth < 1024) return itemsPerSlide.tablet
      return itemsPerSlide.desktop
    }
    return itemsPerSlide.desktop
  }

  const [itemsVisible, setItemsVisible] = useState(getItemsPerSlide())

  useEffect(() => {
    const handleResize = () => {
      setItemsVisible(getItemsPerSlide())
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const maxSlides = Math.max(0, additionalServices.length - itemsVisible)

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev <= 0 ? maxSlides : prev - 1))
  }

  // Testimonials carousel functions
  const getTestimonialsItemsPerSlide = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1
      if (window.innerWidth < 1024) return 2
      return 3
    }
    return 3
  }

  const [testimonialsItemsVisible, setTestimonialsItemsVisible] = useState(getTestimonialsItemsPerSlide())

  useEffect(() => {
    const handleTestimonialsResize = () => {
      setTestimonialsItemsVisible(getTestimonialsItemsPerSlide())
    }

    window.addEventListener("resize", handleTestimonialsResize)
    return () => window.removeEventListener("resize", handleTestimonialsResize)
  }, [])

  const maxTestimonialsSlides = Math.max(0, testimonialsData.length - testimonialsItemsVisible)

  const nextTestimonialsSlide = () => {
    setTestimonialsCurrentSlide((prev) => (prev >= maxTestimonialsSlides ? 0 : prev + 1))
  }

  const prevTestimonialsSlide = () => {
    setTestimonialsCurrentSlide((prev) => (prev <= 0 ? maxTestimonialsSlides : prev - 1))
  }

  useEffect(() => {
    if (isAutoPlaying && maxSlides > 0) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev >= maxSlides ? 0 : prev + 1))
      }, 3000)
      return () => clearInterval(interval)
    }
  }, [isAutoPlaying, maxSlides])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar with Trust Indicators */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-200 py-2 sm:py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-2 sm:gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-1 sm:gap-2">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" />
              <span className="font-semibold text-gray-800">100% Satisfaction Guaranteed</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Building2 className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600" />
              <span className="font-semibold text-gray-800">Two Convenient Locations</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600" />
              <span className="font-semibold text-gray-800">Same Day Service Available</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Button size="sm" variant="outline" className="text-xs font-medium border-blue-300 hover:bg-blue-50 px-3 py-1.5 min-h-[36px]">
              Get Quote
            </Button>
            <Button size="sm" className="bg-blue-600 text-white hover:bg-blue-700 text-xs font-medium px-3 py-1.5 min-h-[36px]">
              Upload Photos
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50 backdrop-blur-md bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center py-3 sm:py-4 gap-3 sm:gap-4">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#2384C7] to-[#1D65B7] rounded-lg flex items-center justify-center shadow-lg" role="img" aria-label="Laguna Digital Logo">
                <span className="text-white font-bold text-base sm:text-lg">LD</span>
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">LAGUNA DIGITAL</h1>
                <p className="text-xs text-gray-500 font-medium">PRINT • MAIL • DESIGN</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-6 w-full lg:w-auto">
              <div className="text-center sm:text-right">
                <div className="text-gray-600 text-sm font-medium">Call Now</div>
                <a 
                  href="tel:+19494642030" 
                  className="font-bold text-lg sm:text-xl text-[#2384C7] phone-link hover:text-[#1D65B7] transition-colors"
                  aria-label="Call Laguna Digital at 949-464-2030"
                >
                  949-464-2030
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <Button 
                  size="sm" 
                  className="bg-green-600 hover:bg-green-700 text-white font-medium focus-ring px-4 py-2 min-h-[40px] text-sm"
                  onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
                >
                  Order Online
                </Button>
                <Button size="sm" variant="outline" className="font-medium focus-ring px-4 py-2 min-h-[40px] text-sm">
                  Track Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <main id="main-content">
        <section className="relative bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#1D4ED8] text-white py-8 sm:py-12 md:py-14 lg:py-16" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-black/20" aria-hidden="true"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-4 sm:mb-6 bg-white/20 text-white border-white/30 text-xs sm:text-sm font-medium px-3 sm:px-4 py-1.5 sm:py-2">
                <span role="img" aria-label="Trophy">🏆</span> #1 Rated Print Shop in Orange County
              </Badge>
              <h1 id="hero-heading" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight font-jost font-medium">
                Professional Photo Printing
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl text-blue-200 mt-2 font-light font-jost">
                  Starting at $2.45 • Same Day Service
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
                Transform your digital memories into premium quality prints at Orange County's most trusted printing shop.
                In-house processing, 15+ paper options, and guaranteed satisfaction.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4 sm:px-0">
                <Button
                  size="lg"
                  className="bg-white text-[#2384C7] hover:bg-gray-100 font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-xl focus-ring hover-lift min-h-[48px] sm:min-h-[56px]"
                  onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
                >
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Upload & Order Now
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#2384C7] text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg bg-white/10 focus-ring hover-lift min-h-[48px] sm:min-h-[56px]"
                  onClick={() => window.open('https://lagunadigital.com/request-a-quote/', '_blank')}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Get Quote
                </Button>
              </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/20 mx-4 sm:mx-0">
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">15+ Years</div>
                <div className="text-xs sm:text-sm opacity-90">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">Same Day</div>
                <div className="text-xs sm:text-sm opacity-90">Service</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">15+</div>
                <div className="text-xs sm:text-sm opacity-90">Paper Options</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">100%</div>
                <div className="text-xs sm:text-sm opacity-90">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Redesigned */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <Badge className="mb-4 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 text-sm font-medium px-4 py-2 rounded-full border border-orange-200">
              <Award className="w-4 h-4 mr-2 inline" />
              Why Choose Us
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">The Orange County Difference</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Experience professional photo printing with cutting-edge technology and personalized service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-jost font-medium text-gray-900 mb-3">Lightning Fast Turnaround</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    Order by 2PM and pick up the same day by 5PM. No more waiting weeks for your precious memories.
                  </p>
                  <div className="flex items-center text-emerald-600 font-medium text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Same-day guarantee
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-jost font-medium text-gray-900 mb-3">Professional In-House Processing</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    State-of-the-art equipment and expert technicians ensure every print meets gallery standards.
                  </p>
                  <div className="flex items-center text-blue-600 font-medium text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Professional equipment
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-jost font-medium text-gray-900 mb-3">Unbeatable Value</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    Premium quality at competitive prices with bulk discounts. Professional results, affordable pricing.
                  </p>
                  <div className="flex items-center text-purple-600 font-medium text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Volume discounts available
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-jost font-medium text-gray-900 mb-3">Satisfaction Guaranteed</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                    Not happy with your prints? We'll reprint them for free or provide a full refund. Your satisfaction is our priority.
                  </p>
                  <div className="flex items-center text-red-600 font-medium text-sm">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    100% money-back guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 text-center border border-gray-100">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Ready to Experience the Difference?</h3>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust us with their most precious memories
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-6 sm:mb-8">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 text-sm sm:text-base px-4 py-2 sm:py-3 font-medium rounded-full transition-colors">
                <Upload className="w-4 h-4 mr-2 inline" />
                Easy Online Upload
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 text-sm sm:text-base px-4 py-2 sm:py-3 font-medium rounded-full transition-colors">
                <Shield className="w-4 h-4 mr-2 inline" />
                100% Satisfaction Guaranteed
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
                             <Badge className="mb-6 bg-[#2384C7]/10 text-[#2384C7] font-medium px-4 py-2 rounded-full">
                Premium Quality Printing Shop
              </Badge>
              <h2 className="text-h2 text-gray-900 mb-6">
                Orange County's Most Trusted High Quality Print Shop
              </h2>
              <p className="text-body text-lg text-gray-600 mb-6 leading-relaxed">
                At Laguna Digital, we've been serving Orange County as the premier printing shop for over 15 years. Our
                commitment to quality, speed, and customer satisfaction has made us the go-to copy shop for thousands of
                satisfied customers in Laguna Beach, Irvine, and throughout Orange County.
              </p>
              <p className="text-body text-gray-600 mb-8 leading-relaxed">
                Unlike other copy shops that outsource their work, we do everything in-house with professional-grade
                equipment. This means faster turnaround times, better quality control, and competitive pricing that
                makes us the most affordable print shop near you without compromising on quality.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">15+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Trusted by Families</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Professional Equipment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="font-semibold text-gray-900">Expert Staff</span>
                </div>
              </div>

              <Button 
                size="lg" 
                                 className="bg-[#2384C7] hover:bg-[#1D65B7] text-white font-semibold px-8 py-4 rounded-lg"
                onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
              >
                <Upload className="w-5 h-5 mr-3" />
                Start Your Order
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Professional photo printing samples"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="High quality prints"
                className="rounded-lg shadow-lg mt-8 w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Family photo printing"
                className="rounded-lg shadow-lg -mt-8 w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Large format printing"
                className="rounded-lg shadow-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="pricing-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">
              Professional Photo Printing Prices
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Premium quality prints on professional photo paper with same-day service available
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-200 hover:text-green-900 text-sm sm:text-base px-4 py-2 sm:py-3 font-medium rounded-full transition-colors">
                <Upload className="w-4 h-4 mr-2 inline" />
                Easy Online Upload
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 hover:text-blue-900 text-sm sm:text-base px-4 py-2 sm:py-3 font-medium rounded-full transition-colors">
                <Shield className="w-4 h-4 mr-2 inline" />
                100% Satisfaction Guaranteed
              </Badge>
            </div>
          </div>

          {/* Mobile-First Responsive Pricing */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#0066b4] to-[#044a80] text-white p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
                <div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">Photo Printing Prices</h3>
                  <p className="opacity-90 text-base sm:text-lg">Premium quality on professional photo paper</p>
                </div>
                <div className="text-center sm:text-right">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold">$2.45</div>
                  <div className="text-sm opacity-90">Starting Price</div>
                </div>
              </div>
            </div>

            {/* Desktop Table View - Hidden on Mobile */}
            <div className="hidden md:block">
              <div className="overflow-x-auto">
                <table className="w-full" role="table" aria-label="Photo printing prices">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-4 lg:px-6 py-4 text-left font-semibold text-gray-900 text-sm lg:text-base">Size</th>
                      <th scope="col" className="px-4 lg:px-6 py-4 text-left font-semibold text-gray-900 text-sm lg:text-base">Price</th>
                      <th scope="col" className="px-4 lg:px-6 py-4 text-left font-semibold text-gray-900 text-sm lg:text-base">Paper Type</th>
                      <th scope="col" className="px-4 lg:px-6 py-4 text-left font-semibold text-gray-900 text-sm lg:text-base">Description</th>
                      <th scope="col" className="px-4 lg:px-6 py-4 text-center font-semibold text-gray-900 text-sm lg:text-base">Order</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.map((item, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 transition-colors duration-200 ${item.popular ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
                      >
                        <td className="px-4 lg:px-6 py-4">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-lg text-gray-900">{item.size}"</span>
                            {item.popular && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs">
                                <Star className="w-3 h-3 mr-1 inline" />
                                Most Popular
                              </Badge>
                            )}
                          </div>
                        </td>
                        <td className="px-4 lg:px-6 py-4">
                          <div className="text-xl font-bold text-green-600">${item.price}</div>
                          <div className="text-sm text-gray-500">per print</div>
                        </td>
                        <td className="px-4 lg:px-6 py-4 text-gray-700">{item.paper}</td>
                        <td className="px-4 lg:px-6 py-4 text-gray-600 text-sm">{item.description}</td>
                        <td className="px-4 lg:px-6 py-4 text-center">
                          <Button
                            size="sm"
                            className="bg-[#2384C7] hover:bg-[#1D65B7] text-white font-medium px-4 py-2 rounded focus-ring hover-lift min-h-[36px] text-sm"
                            onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
                            aria-label={`Order ${item.size} inch prints for $${item.price} each`}
                          >
                            Order Now
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile Card View - Visible on Mobile Only */}
            <div className="md:hidden">
              <div className="divide-y divide-gray-100">
                {pricingData.map((item, index) => (
                  <div
                    key={index}
                    className={`p-4 hover:bg-gray-50 transition-colors duration-200 ${item.popular ? "bg-blue-50 border-l-4 border-blue-500" : ""}`}
                  >
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-lg text-gray-900">{item.size}"</span>
                          {item.popular && (
                            <Badge className="bg-blue-100 text-blue-800 text-xs">
                              <Star className="w-3 h-3 mr-1 inline" />
                              Popular
                            </Badge>
                          )}
                        </div>
                        <div className="text-sm text-gray-600">{item.paper}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xl font-bold text-green-600">${item.price}</div>
                        <div className="text-xs text-gray-500">per print</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 mb-3">{item.description}</div>
                    <Button
                      size="sm"
                      className="w-full bg-[#2384C7] hover:bg-[#1D65B7] text-white font-medium py-2 rounded focus-ring hover-lift min-h-[44px] text-sm"
                      onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
                      aria-label={`Order ${item.size} inch prints for $${item.price} each`}
                    >
                      Order {item.size}" Prints - ${item.price} each
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 sm:p-6 lg:p-8 text-center">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">10%</div>
                  <div className="text-xs sm:text-sm text-gray-600">50+ prints</div>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">15%</div>
                  <div className="text-xs sm:text-sm text-gray-600">100+ prints</div>
                </div>
              </div>
              <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-green-600">20%</div>
                  <div className="text-xs sm:text-sm text-gray-600">500+ prints</div>
                </div>
              </div>
            </div>
            <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg font-semibold">
              <Award className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline text-yellow-600" />
              Volume Discounts Available - The More You Print, The More You Save!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#2384C7] hover:bg-[#1D65B7] text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg focus-ring hover-lift min-h-[48px] text-sm sm:text-base"
                onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
              >
                <Upload className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Upload Photos Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg focus-ring hover-lift min-h-[48px] text-sm sm:text-base"
                onClick={() => window.open('https://lagunadigital.com/request-a-quote/', '_blank')}
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Get Custom Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Sources Section */}
      <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="sources-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="sources-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">We Print From Any Digital Source</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">Bring your photos from anywhere - our copy shop handles them all</p>
            <Badge className="mt-4 bg-green-100 text-green-800 text-sm sm:text-base px-4 py-2 font-medium rounded-full hover:bg-green-200 hover:text-green-900 transition-colors duration-300">
               <Upload className="w-4 h-4 mr-2 inline" />
               All Formats Accepted
             </Badge>
           </div>

           <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
             {digitalSources.map((source, index) => {
               const IconComponent = source.icon
               return (
                 <Card
                   key={index}
                   className="text-center hover-lift transition-all duration-300 border border-gray-200 rounded-lg p-3 sm:p-4 lg:p-6 group hover:shadow-lg hover:border-green-300"
                 >
                   <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 lg:mb-4 group-hover:from-green-500 group-hover:to-green-600 transition-all duration-300">
                     <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-green-600 group-hover:text-white transition-colors duration-300" />
                   </div>
                  <h3 className="font-semibold text-xs sm:text-sm mb-1 sm:mb-2 text-gray-900 group-hover:text-green-900 transition-colors duration-300">{source.title}</h3>
                  <p className="text-xs text-gray-600 mb-1 sm:mb-2">{source.desc}</p>
                   <p className="text-xs text-green-600 font-medium">{source.formats}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Services Slider */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="services-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">Complete Print Shop Services</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-4 px-4 sm:px-0">More than just photo printing - we're your full-service copy shop</p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge className="bg-purple-100 text-purple-800 text-sm px-3 py-1 font-medium rounded-full">
                Same Day Available
              </Badge>
              <Badge className="bg-orange-100 text-orange-800 text-sm px-3 py-1 font-medium rounded-full">
                Professional Quality
              </Badge>
              <Badge className="bg-green-100 text-green-800 text-sm px-3 py-1 font-medium rounded-full">
                Competitive Pricing
              </Badge>
            </div>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <Button
                variant="outline"
                size="lg"
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-50 min-h-[40px] sm:min-h-[48px]"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>

              <div className="flex space-x-1 sm:space-x-2">
                 {Array.from({ length: maxSlides + 1 }).map((_, index) => (
                   <button
                     key={index}
                     onClick={() => setCurrentSlide(index)}
                     className={`w-2 h-2 rounded-full transition-all duration-300 ${
                       index === currentSlide ? "bg-blue-500 w-6 sm:w-8" : "bg-gray-300"
                     }`}
                   />
                 ))}
               </div>

              <Button
                variant="outline"
                size="lg"
                onClick={nextSlide}
                disabled={currentSlide >= maxSlides}
                className="rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 disabled:opacity-50 min-h-[40px] sm:min-h-[48px]"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>

            <div className="overflow-hidden" ref={sliderRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * (100 / itemsVisible)}%)` }}
              >
                {additionalServices.map((service, index) => {
                  return (
                    <div key={index} className="flex-shrink-0 px-2" style={{ width: `${100 / itemsVisible}%` }}>
                      <Card className="h-full text-center hover-lift transition-all duration-300 border border-gray-200 rounded-lg p-4 sm:p-6 group hover:shadow-xl hover:border-blue-300 overflow-hidden">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-xl overflow-hidden shadow-lg group-hover:shadow-xl transition-all duration-300">
                          <img 
                            src={service.image} 
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base mb-2 text-gray-900 group-hover:text-blue-900 transition-colors duration-300">{service.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3">{service.desc}</p>
                        <div className="mt-auto space-y-2">
                          <div className="text-sm font-bold text-emerald-600">{service.price}</div>
                          <div className="flex items-center justify-center text-xs text-gray-500">
                            <Clock className="w-3 h-3 mr-1" />
                            {service.turnaround}
                          </div>
                        </div>
                      </Card>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="testimonials-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">
              What Our Customers Say About Laguna Digital
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
              Trusted by businesses, artists, and individuals for top-quality printing. See why our clients love us!
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${testimonialsCurrentSlide * (100 / testimonialsItemsVisible)}%)` }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <div key={index} className={`flex-shrink-0 px-2 sm:px-4 ${testimonialsItemsVisible === 1 ? 'w-full' : testimonialsItemsVisible === 2 ? 'w-1/2' : 'w-1/3'}`}>
                    <Card className="p-4 sm:p-6 hover-lift transition-all duration-300 border-0 shadow-lg h-full">
                      <div className="flex items-center mb-3 sm:mb-4">
                        <div className="flex text-yellow-400" role="img" aria-label="5 star rating">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center mt-auto">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                        />
                        <div>
                          <div className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</div>
                          <div className="text-xs sm:text-sm text-gray-500">{testimonial.title}</div>
                        </div>
                      </div>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows - Mobile Optimized */}
            <button
              onClick={prevTestimonialsSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px] min-w-[40px] sm:min-h-[48px] sm:min-w-[48px]"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>
            <button
              onClick={nextTestimonialsSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white rounded-full p-2 sm:p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[40px] min-w-[40px] sm:min-h-[48px] sm:min-w-[48px]"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-1 sm:space-x-2">
              {Array.from({ length: maxTestimonialsSlides + 1 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setTestimonialsCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 min-h-[24px] min-w-[24px] flex items-center justify-center ${
                    index === testimonialsCurrentSlide 
                      ? 'bg-blue-600 scale-110' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 sm:mb-6">
              <div className="flex text-yellow-400" role="img" aria-label="5 star rating">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
                ))}
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">4.9/5</span>
              <span className="text-gray-600 text-sm sm:text-base">(500+ Reviews)</span>
            </div>
            <p className="text-base sm:text-lg text-gray-700 px-4 sm:px-0">Join thousands of satisfied customers across Orange County</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 id="faq-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">Frequently Asked Questions</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">Common questions about our printing shop and copy shop services</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3 sm:space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white border border-gray-200 rounded-lg shadow-sm hover-lift"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 sm:py-6 text-left hover:no-underline hover:bg-gray-50 rounded-t-lg min-h-[56px]">
                  <h3 className="font-semibold text-gray-900 pr-4 text-sm sm:text-base lg:text-lg text-left">{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section id="upload-section" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-[#2384C7] via-[#1D65B7] to-[#0C3A84] text-white" aria-labelledby="cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium mb-4 sm:mb-6">Ready to Print Your Photos?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-8 sm:mb-12 opacity-95 leading-relaxed px-4 sm:px-0">
            Join thousands of satisfied customers who trust Orange County's premier printing shop
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 lg:p-10 border border-white/20 hover-lift">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8" role="img" aria-label="Upload icon">
              <Upload className="w-8 h-8 sm:w-10 sm:h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4">Upload Photos • Same Day Pickup</h3>
            <p className="mb-6 sm:mb-8 opacity-95 text-base sm:text-lg px-4 sm:px-0">
              Easy online ordering with pickup at either of our convenient Orange County locations
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#2384C7] hover:bg-gray-100 text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg focus-ring hover-lift min-h-[48px] sm:min-h-[56px]"
                onClick={() => window.open('https://lagunadigital.com/upload-orders/', '_blank')}
                aria-label="Upload photos and place order online"
              >
                <FileImage className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Upload Photos Now
              </Button>
              <Button
                size="lg"
                className="bg-white/20 border-2 border-white text-white hover:bg-white hover:text-[#2384C7] text-base sm:text-lg font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg focus-ring hover-lift min-h-[48px] sm:min-h-[56px]"
                onClick={() => window.open('tel:+19494642030')}
                aria-label="Call Laguna Digital for a quote"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Call 949-464-2030
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-jost font-medium text-gray-900 mb-4 sm:mb-6">Visit Our Print Shop Locations</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 px-4 sm:px-0">Two convenient locations serving all of Orange County</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <Card className="text-center border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Laguna Beach Print Shop</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="text-gray-600 text-base sm:text-lg">
                  <p className="font-semibold">123 Main Street</p>
                  <p>Laguna Beach, CA 92651</p>
                  <p className="text-sm text-gray-500 mt-2">(Near Whole Foods Market)</p>
                </div>
                <div className="text-gray-600 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="font-semibold focus-ring hover-lift min-h-[44px] text-sm sm:text-base"
                    onClick={() => window.open('https://maps.google.com/?q=123+Main+Street+Laguna+Beach+CA+92651')}
                    aria-label="Get directions to Laguna Beach location"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button 
                    className="bg-[#2384C7] hover:bg-[#1D65B7] text-white font-semibold focus-ring hover-lift min-h-[44px] text-sm sm:text-base"
                    onClick={() => window.open('tel:+19494642030')}
                    aria-label="Call Laguna Beach location"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    949-464-2030
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg rounded-2xl overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 sm:p-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Irvine Print Shop</CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-4 sm:space-y-6">
                <div className="text-gray-600 text-base sm:text-lg">
                  <p className="font-semibold">456 Business Center Drive</p>
                  <p>Irvine, CA 92618</p>
                  <p className="text-sm text-gray-500 mt-2">(Irvine Business District)</p>
                </div>
                <div className="text-gray-600 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button 
                    variant="outline" 
                    className="font-semibold focus-ring hover-lift min-h-[44px] text-sm sm:text-base"
                    onClick={() => window.open('https://maps.google.com/?q=456+Business+Center+Drive+Irvine+CA+92618')}
                    aria-label="Get directions to Irvine location"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button 
                    className="bg-purple-600 hover:bg-purple-700 text-white font-semibold focus-ring hover-lift min-h-[44px] text-sm sm:text-base"
                    onClick={() => window.open('tel:+19495550123')}
                    aria-label="Call Irvine location"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    949-555-0123
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center" role="img" aria-label="Laguna Digital Logo">
                  <span className="text-white font-bold text-sm sm:text-base">LD</span>
                </div>
                <span className="text-lg sm:text-xl font-bold">LAGUNA DIGITAL</span>
              </div>
              <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                Orange County's premier printing shop and copy shop serving Laguna Beach, Irvine, and surrounding areas
                since 2008.
              </p>
              <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                <div className="flex text-yellow-400" role="img" aria-label="5 star rating">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-400">4.9/5 (500+ Reviews)</span>
              </div>
              <div className="text-xs sm:text-sm text-gray-400 space-y-1">
                <p>📧 info@lagunadigital.com</p>
                <p>⏰ Mon-Fri: 9AM-6PM | Sat: 10AM-4PM</p>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Print Shop Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Photo Printing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Large Format Printing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Canvas Prints
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Document Copying
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Photo Scanning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Quick Links</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400 text-sm sm:text-base">
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Upload Photos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 sm:mb-6 text-base sm:text-lg">Our Locations</h3>
              <div className="space-y-3 sm:space-y-4 text-gray-400 text-sm sm:text-base">
                <div>
                  <div className="font-semibold text-white">Laguna Beach</div>
                  <div className="text-sm">123 Main St, CA 92651</div>
                  <a 
                    href="tel:+19494642030" 
                    className="text-sm phone-link text-blue-400 hover:text-blue-300 min-h-[24px] inline-block"
                    aria-label="Call Laguna Beach location"
                  >
                    949-464-2030
                  </a>
                </div>
                <div>
                  <div className="font-semibold text-white">Irvine</div>
                  <div className="text-sm">456 Business Center Dr, CA 92618</div>
                  <a 
                    href="tel:+19495550123" 
                    className="text-sm phone-link text-blue-400 hover:text-blue-300 min-h-[24px] inline-block"
                    aria-label="Call Irvine location"
                  >
                    949-555-0123
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-xs sm:text-sm leading-relaxed">
              &copy; 2024 Laguna Digital. All rights reserved. | Printing Shop Orange County | Copy Shop Laguna Beach |
              Same Day Print Shop Irvine | Affordable Print Shop Near Me | High Quality Print Shop
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}