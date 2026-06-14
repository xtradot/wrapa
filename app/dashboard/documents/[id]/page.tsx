import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Download, Eye, FileText, Calendar, Hash, Shield } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Document Details - WRAPA Dashboard",
  description: "View document details",
}

export default function DocumentDetailPage({ params }: { params: { id: string } }) {
  const document = {
    id: params.id,
    name: "Motor Insurance Policy - POL-12345678",
    type: "Policy Document",
    category: "motor",
    policyNumber: "POL-12345678",
    provider: "AXA Mansard",
    uploadDate: "15 Mar 2024",
    uploadTime: "10:30:00",
    size: "1.2 MB",
    format: "PDF",
    pages: 12,
    version: "1.0",
    status: "active",
    validUntil: "15 Mar 2025",
    description: "Full policy document containing terms, conditions, coverage details, and exclusions",
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/dashboard/documents">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">Document Details</h1>
          <p className="text-muted-foreground mt-1">{document.name}</p>
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <FileText className="h-10 w-10 text-primary" />
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h2 className="text-xl font-bold">{document.name}</h2>
                <Badge className="bg-green-500/10 text-green-700">Active</Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{document.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Uploaded: {document.uploadDate}</span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{document.size}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{document.pages} pages</span>
                <span className="text-muted-foreground">•</span>
                <Badge variant="secondary">{document.format}</Badge>
              </div>
            </div>

            <div className="flex gap-2 shrink-0">
              <Button>
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button variant="outline" className="bg-transparent">
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Document Information */}
        <Card>
          <CardHeader>
            <CardTitle>Document Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Document ID</p>
                <p className="font-mono font-semibold">{document.id}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Document Type</p>
                <p className="font-semibold">{document.type}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Upload Date</p>
                <p className="font-semibold">{document.uploadDate}</p>
                <p className="text-sm text-muted-foreground">{document.uploadTime}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">File Size</p>
                <p className="font-semibold">{document.size}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Format</p>
                <p className="font-semibold">{document.format}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Pages</p>
                <p className="font-semibold">{document.pages}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Version</p>
                <p className="font-semibold">{document.version}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Policy */}
        <Card>
          <CardHeader>
            <CardTitle>Related Policy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Hash className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Policy Number</p>
                <p className="font-mono font-semibold">{document.policyNumber}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Insurance Provider</p>
                <p className="font-semibold">{document.provider}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Valid Until</p>
                <p className="font-semibold">{document.validUntil}</p>
              </div>
            </div>

            <div className="pt-4">
              <Button variant="outline" asChild className="w-full bg-transparent">
                <Link href={`/dashboard/policies/${document.policyNumber}`}>View Policy Details</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/dashboard/documents">Back to Documents</Link>
        </Button>
        <Button>
          <Eye className="h-4 w-4 mr-2" />
          View Document
        </Button>
        <Button variant="outline" className="bg-transparent">
          <Download className="h-4 w-4 mr-2" />
          Download
        </Button>
      </div>
    </div>
  )
}
