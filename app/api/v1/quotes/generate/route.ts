import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization")
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 })
    }

    const body = await request.json()

    const { customerId, productType, coverageType, vehicleDetails } = body
    if (!customerId || !productType) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    // Simulate quote generation delay
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, this would:
    // 1. Fetch customer verification status
    // 2. Query multiple insurance providers
    // 3. Calculate risk-based pricing
    // 4. Apply regulatory compliance rules
    // 5. Return aggregated quotes

    const providers = [
      { id: "provider_001", name: "AXA Mansard", rating: 4.8 },
      { id: "provider_002", name: "Leadway Assurance", rating: 4.6 },
      { id: "provider_003", name: "Custodian Insurance", rating: 4.5 },
    ]

    const basePrice = vehicleDetails?.value ? vehicleDetails.value * 0.05 : 50000

    const quotes = providers.map((provider, index) => ({
      quoteId: `quote_${Math.random().toString(36).substring(2, 15)}`,
      providerId: provider.id,
      providerName: provider.name,
      providerRating: provider.rating,
      premium: Math.round(basePrice * (1 + index * 0.15)),
      currency: "NGN",
      coverageType,
      validUntil: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
      features: [
        "Third Party Liability",
        "Fire & Theft Coverage",
        "Personal Accident Cover",
        coverageType === "comprehensive" ? "Own Damage Cover" : null,
      ].filter(Boolean),
    }))

    return NextResponse.json({
      success: true,
      customerId,
      productType,
      quotes,
      generatedAt: new Date().toISOString(),
    })
  } catch (error) {
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 })
  }
}
