"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { type Country, getCountry, countries } from "./countries"

interface CountryContextType {
  country: Country
  setCountryCode: (code: string) => void
  availableCountries: Country[]
}

const CountryContext = createContext<CountryContextType | undefined>(undefined)

export function CountryProvider({ children }: { children: React.ReactNode }) {
  const [countryCode, setCountryCode] = useState<string>("NG")
  const country = getCountry(countryCode)
  const availableCountries = Object.values(countries)

  useEffect(() => {
    // Try to detect country from localStorage or browser
    const savedCountry = localStorage.getItem("wrapa_country")
    if (savedCountry && countries[savedCountry]) {
      setCountryCode(savedCountry)
    }
  }, [])

  const handleSetCountry = (code: string) => {
    setCountryCode(code)
    localStorage.setItem("wrapa_country", code)
  }

  return (
    <CountryContext.Provider
      value={{
        country,
        setCountryCode: handleSetCountry,
        availableCountries,
      }}
    >
      {children}
    </CountryContext.Provider>
  )
}

export function useCountry() {
  const context = useContext(CountryContext)
  if (!context) {
    throw new Error("useCountry must be used within CountryProvider")
  }
  return context
}
