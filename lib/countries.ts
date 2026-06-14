export interface Country {
  code: string
  name: string
  currency: {
    code: string
    symbol: string
    name: string
  }
  locale: string
  dateFormat: string
  phoneCode: string
  regulator: {
    name: string
    acronym: string
    website: string
  }
  identityVerification: {
    supported: string[]
    required: string[]
  }
  paymentMethods: string[]
  flag: string
}

export const countries: Record<string, Country> = {
  NG: {
    code: "NG",
    name: "Nigeria",
    currency: {
      code: "NGN",
      symbol: "₦",
      name: "Nigerian Naira",
    },
    locale: "en-NG",
    dateFormat: "DD/MM/YYYY",
    phoneCode: "+234",
    regulator: {
      name: "National Insurance Commission",
      acronym: "NAICOM",
      website: "https://naicom.gov.ng",
    },
    identityVerification: {
      supported: ["NIN", "BVN", "DRIVERS_LICENSE", "INTL_PASSPORT"],
      required: ["NIN"],
    },
    paymentMethods: ["card", "bank_transfer", "ussd", "paystack", "flutterwave", "interswitch"],
    flag: "🇳🇬",
  },
  GH: {
    code: "GH",
    name: "Ghana",
    currency: {
      code: "GHS",
      symbol: "GH₵",
      name: "Ghanaian Cedi",
    },
    locale: "en-GH",
    dateFormat: "DD/MM/YYYY",
    phoneCode: "+233",
    regulator: {
      name: "National Insurance Commission",
      acronym: "NIC",
      website: "https://nicgh.org",
    },
    identityVerification: {
      supported: ["GHANA_CARD", "VOTERS_ID", "DRIVERS_LICENSE", "PASSPORT"],
      required: ["GHANA_CARD"],
    },
    paymentMethods: ["card", "mobile_money", "bank_transfer", "mtn_momo", "vodafone_cash"],
    flag: "🇬🇭",
  },
  KE: {
    code: "KE",
    name: "Kenya",
    currency: {
      code: "KES",
      symbol: "KSh",
      name: "Kenyan Shilling",
    },
    locale: "en-KE",
    dateFormat: "DD/MM/YYYY",
    phoneCode: "+254",
    regulator: {
      name: "Insurance Regulatory Authority",
      acronym: "IRA",
      website: "https://ira.go.ke",
    },
    identityVerification: {
      supported: ["NATIONAL_ID", "PASSPORT", "DRIVERS_LICENSE"],
      required: ["NATIONAL_ID"],
    },
    paymentMethods: ["card", "mpesa", "bank_transfer", "airtel_money"],
    flag: "🇰🇪",
  },
  ZA: {
    code: "ZA",
    name: "South Africa",
    currency: {
      code: "ZAR",
      symbol: "R",
      name: "South African Rand",
    },
    locale: "en-ZA",
    dateFormat: "YYYY/MM/DD",
    phoneCode: "+27",
    regulator: {
      name: "Financial Sector Conduct Authority",
      acronym: "FSCA",
      website: "https://www.fsca.co.za",
    },
    identityVerification: {
      supported: ["ID_BOOK", "ID_CARD", "PASSPORT", "DRIVERS_LICENSE"],
      required: ["ID_BOOK"],
    },
    paymentMethods: ["card", "eft", "bank_transfer", "instant_eft"],
    flag: "🇿🇦",
  },
  RW: {
    code: "RW",
    name: "Rwanda",
    currency: {
      code: "RWF",
      symbol: "FRw",
      name: "Rwandan Franc",
    },
    locale: "en-RW",
    dateFormat: "DD/MM/YYYY",
    phoneCode: "+250",
    regulator: {
      name: "National Bank of Rwanda",
      acronym: "BNR",
      website: "https://www.bnr.rw",
    },
    identityVerification: {
      supported: ["NATIONAL_ID", "PASSPORT"],
      required: ["NATIONAL_ID"],
    },
    paymentMethods: ["card", "mobile_money", "bank_transfer", "mtn_momo"],
    flag: "🇷🇼",
  },
  UG: {
    code: "UG",
    name: "Uganda",
    currency: {
      code: "UGX",
      symbol: "USh",
      name: "Ugandan Shilling",
    },
    locale: "en-UG",
    dateFormat: "DD/MM/YYYY",
    phoneCode: "+256",
    regulator: {
      name: "Insurance Regulatory Authority of Uganda",
      acronym: "IRA",
      website: "https://ira.go.ug",
    },
    identityVerification: {
      supported: ["NATIONAL_ID", "PASSPORT", "DRIVERS_LICENSE"],
      required: ["NATIONAL_ID"],
    },
    paymentMethods: ["card", "mobile_money", "bank_transfer", "mtn_momo", "airtel_money"],
    flag: "🇺🇬",
  },
}

export function getCountry(code: string): Country {
  return countries[code] || countries.NG
}

export function formatCurrency(amount: number, countryCode: string): string {
  const country = getCountry(countryCode)
  return `${country.currency.symbol}${amount.toLocaleString(country.locale)}`
}

export function getPaymentMethodLabel(method: string): string {
  const labels: Record<string, string> = {
    card: "Credit/Debit Card",
    bank_transfer: "Bank Transfer",
    ussd: "USSD",
    paystack: "Paystack",
    flutterwave: "Flutterwave",
    interswitch: "Interswitch",
    mobile_money: "Mobile Money",
    mtn_momo: "MTN Mobile Money",
    vodafone_cash: "Vodafone Cash",
    mpesa: "M-Pesa",
    airtel_money: "Airtel Money",
    eft: "EFT",
    instant_eft: "Instant EFT",
  }
  return labels[method] || method
}

export function getIdentityTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    NIN: "National Identification Number",
    BVN: "Bank Verification Number",
    DRIVERS_LICENSE: "Driver's License",
    INTL_PASSPORT: "International Passport",
    GHANA_CARD: "Ghana Card",
    VOTERS_ID: "Voter's ID",
    PASSPORT: "Passport",
    NATIONAL_ID: "National ID",
    ID_BOOK: "ID Book",
    ID_CARD: "ID Card",
  }
  return labels[type] || type
}
