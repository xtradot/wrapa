"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Shield, Phone } from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { CountrySelector } from "@/components/country-selector"
import { useCountry } from "@/lib/country-context"

const productLinks = [
  { name: "Motor Insurance", href: "/products/motor", description: "Comprehensive & third-party coverage" },
  { name: "Health Insurance", href: "/products/health", description: "Individual, family & corporate plans" },
  { name: "Travel Insurance", href: "/products/travel", description: "Worldwide medical & trip protection" },
  { name: "Home Insurance", href: "/products/home", description: "Property & contents protection" },
  { name: "Life Insurance", href: "/products/life", description: "Term life & endowment policies" },
  { name: "Business Insurance", href: "/products/business", description: "SME & enterprise coverage" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { country } = useCountry()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5" />
              {country.phoneCode} 800 WRAPA
            </span>
            <span>support@wrapa.{country.code.toLowerCase()}</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/claims" className="hover:underline">
              Track Claim
            </Link>
            <span className="opacity-50">|</span>
            <Link href="/help" className="hover:underline">
              Help Center
            </Link>
            <span className="opacity-50">|</span>
            <CountrySelector />
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 w-full border-b transition-all duration-200 ${
          isScrolled ? "bg-card/95 backdrop-blur-md border-border shadow-sm" : "bg-card border-transparent"
        }`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-primary flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-foreground leading-none">WRAPA</span>
              <span className="text-[10px] text-muted-foreground leading-none">Insurance Marketplace</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-1 p-4 md:grid-cols-2">
                    {productLinks.length > 0 && productLinks.map((link) => (
                      <li key={link.name}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={link.href}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 focus:bg-accent/10"
                          >
                            <div className="text-sm font-medium text-foreground">{link.name}</div>
                            <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/compare" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 focus:bg-accent/10 focus:outline-none">
                    Compare Plans
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/claims" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 focus:bg-accent/10 focus:outline-none">
                    Claims
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about" legacyBehavior passHref>
                  <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent/10 focus:bg-accent/10 focus:outline-none">
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild>
              <Link href="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-2 lg:hidden">
            <CountrySelector />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                      <Shield className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <span className="text-lg font-bold">WRAPA</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                      Products
                    </p>
                    {productLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-sm py-2 px-2 rounded-md hover:bg-accent/10 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>

                  <div className="flex flex-col gap-1 border-t border-border pt-4">
                    <Link
                      href="/compare"
                      className="text-sm font-medium py-2 px-2 rounded-md hover:bg-accent/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Compare Plans
                    </Link>
                    <Link
                      href="/claims"
                      className="text-sm font-medium py-2 px-2 rounded-md hover:bg-accent/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Claims
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm font-medium py-2 px-2 rounded-md hover:bg-accent/10 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                  </div>

                  <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                    <Button variant="outline" asChild className="w-full bg-transparent">
                      <Link href="/login">Sign In</Link>
                    </Button>
                    <Button asChild className="w-full">
                      <Link href="/register">Get Started</Link>
                    </Button>
                  </div>

                  <div className="mt-auto pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground">Need help?</p>
                    <p className="text-sm font-medium">{country.phoneCode} 800 WRAPA</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  )
}
