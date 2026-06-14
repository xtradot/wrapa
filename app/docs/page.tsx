import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, FileText, Video, Download } from "lucide-react"
import Link from "next/link"

export default function DocsPage() {
  const sections = [
    {
      title: "Getting Started",
      icon: BookOpen,
      items: [
        { title: "Platform Overview", href: "#overview" },
        { title: "How to Register", href: "#register" },
        { title: "Buying Your First Policy", href: "#first-policy" },
        { title: "Understanding Your Coverage", href: "#coverage" },
      ],
    },
    {
      title: "Policy Management",
      icon: FileText,
      items: [
        { title: "Managing Policies", href: "#manage-policies" },
        { title: "Renewals Process", href: "#renewals" },
        { title: "Making Changes", href: "#changes" },
        { title: "Cancellation Policy", href: "#cancellation" },
      ],
    },
    {
      title: "Claims Process",
      icon: FileText,
      items: [
        { title: "Filing a Claim", href: "#file-claim" },
        { title: "Required Documents", href: "#claim-docs" },
        { title: "Claim Status Tracking", href: "#track-claim" },
        { title: "Appeals Process", href: "#appeals" },
      ],
    },
    {
      title: "Video Tutorials",
      icon: Video,
      items: [
        { title: "Platform Tour", href: "#video-tour" },
        { title: "How to File a Claim", href: "#video-claim" },
        { title: "Policy Comparison Guide", href: "#video-compare" },
        { title: "Mobile App Tutorial", href: "#video-mobile" },
      ],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="bg-primary text-primary-foreground py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Documentation & Resources</h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-balance">
              Everything you need to know about using WRAPA Insurance Marketplace
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <section.icon className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item.title}>
                        <Link
                          href={item.href}
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Downloadable Resources
              </CardTitle>
              <CardDescription>
                Download guides and forms to help you get the most out of your insurance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="font-medium">Policy Guide</span>
                  <span className="text-xs text-muted-foreground">PDF, 2.4 MB</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="font-medium">Claims Form</span>
                  <span className="text-xs text-muted-foreground">PDF, 512 KB</span>
                </Button>
                <Button variant="outline" className="h-auto py-4 flex-col gap-2 bg-transparent">
                  <FileText className="h-8 w-8 text-primary" />
                  <span className="font-medium">FAQ Guide</span>
                  <span className="text-xs text-muted-foreground">PDF, 1.8 MB</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
