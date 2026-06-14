import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Insurance Blog & Resources - WRAPA",
  description: "Learn about insurance in Nigeria. Tips, guides, and updates from WRAPA's insurance experts.",
}

const blogPosts = [
  {
    title: "Understanding Motor Insurance in Nigeria: A Complete Guide",
    excerpt:
      "Everything you need to know about motor insurance options, coverage types, and how to choose the right policy for your vehicle.",
    category: "Motor Insurance",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    slug: "understanding-motor-insurance-nigeria",
  },
  {
    title: "5 Things to Check Before Buying Health Insurance",
    excerpt:
      "Don't make these common mistakes when purchasing health insurance. Our expert checklist helps you make the right choice.",
    category: "Health Insurance",
    date: "Dec 3, 2024",
    readTime: "6 min read",
    slug: "health-insurance-checklist",
  },
  {
    title: "Travel Insurance for Schengen Visa Applications",
    excerpt:
      "Step-by-step guide to getting the right travel insurance for your Schengen visa application from Nigeria.",
    category: "Travel Insurance",
    date: "Nov 30, 2024",
    readTime: "5 min read",
    slug: "schengen-visa-travel-insurance",
  },
  {
    title: "How to File an Insurance Claim Successfully",
    excerpt: "Learn the process of filing insurance claims and the documents you need for a smooth claims experience.",
    category: "Claims",
    date: "Nov 28, 2024",
    readTime: "7 min read",
    slug: "filing-insurance-claims",
  },
  {
    title: "NAICOM Regulations: What You Should Know",
    excerpt: "Understanding how NAICOM protects insurance consumers in Nigeria and what it means for your policy.",
    category: "Regulations",
    date: "Nov 25, 2024",
    readTime: "10 min read",
    slug: "naicom-regulations-guide",
  },
  {
    title: "Why Every Business Needs Professional Indemnity Insurance",
    excerpt: "Protect your business from professional liability claims with the right insurance coverage.",
    category: "Business Insurance",
    date: "Nov 22, 2024",
    readTime: "6 min read",
    slug: "professional-indemnity-insurance",
  },
]

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4">Blog & Resources</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Insurance Insights & Guides</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert advice, tips, and updates to help you make informed insurance decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {post.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl leading-snug line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3 leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Button variant="outline" className="w-full group bg-transparent" asChild>
                    <Link href={`/blog/${post.slug}`}>
                      Read Article
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
