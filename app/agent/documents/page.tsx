import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  FileText,
  Download,
  Share2,
  FileSignature,
  FileCheck,
  BookOpen,
  Presentation,
  Shield,
  Users,
} from "lucide-react"

export default function AgentDocumentsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Document Center</h1>
          <p className="text-muted-foreground mt-1">Access templates, certificates, and compliance documents</p>
        </div>
      </div>

      <Tabs defaultValue="templates" className="space-y-4">
        <TabsList>
          <TabsTrigger value="templates">
            <FileText className="h-4 w-4 mr-2" />
            Templates
          </TabsTrigger>
          <TabsTrigger value="certificates">
            <FileCheck className="h-4 w-4 mr-2" />
            Certificates
          </TabsTrigger>
          <TabsTrigger value="compliance">
            <Shield className="h-4 w-4 mr-2" />
            Compliance
          </TabsTrigger>
          <TabsTrigger value="marketing">
            <Presentation className="h-4 w-4 mr-2" />
            Marketing
          </TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Motor Insurance Quote Template",
                description: "Standard quote format for all motor insurance products",
                type: "PDF Template",
                size: "245 KB",
                downloads: 1250,
                icon: FileText,
              },
              {
                name: "Health Insurance Application Form",
                description: "Comprehensive health questionnaire for underwriting",
                type: "Fillable PDF",
                size: "180 KB",
                downloads: 890,
                icon: FileSignature,
              },
              {
                name: "Customer Information Sheet",
                description: "Collect KYC details from new customers",
                type: "Word Document",
                size: "95 KB",
                downloads: 2100,
                icon: Users,
              },
              {
                name: "Policy Renewal Notice",
                description: "Template for sending renewal reminders",
                type: "Email Template",
                size: "45 KB",
                downloads: 650,
                icon: FileText,
              },
            ].map((doc) => (
              <Card key={doc.name}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <doc.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{doc.description}</p>
                      <div className="flex items-center gap-3 mt-3 text-xs text-muted-foreground">
                        <span>{doc.type}</span>
                        <span>•</span>
                        <span>{doc.size}</span>
                        <span>•</span>
                        <span>{doc.downloads} downloads</span>
                      </div>
                      <div className="flex gap-2 mt-4">
                        <Button size="sm">
                          <Download className="h-3 w-3 mr-1" />
                          Download
                        </Button>
                        <Button size="sm" variant="outline">
                          <Share2 className="h-3 w-3 mr-1" />
                          Share
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certificates" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Generate Policy Certificates</CardTitle>
              <CardDescription>Create instant certificates for completed sales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Motor Insurance Certificate</h4>
                    <p className="text-sm text-muted-foreground">Includes QR code and NIID verification</p>
                  </div>
                  <Button>Generate</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Health Insurance Card</h4>
                    <p className="text-sm text-muted-foreground">Digital health insurance ID card</p>
                  </div>
                  <Button>Generate</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Cover Note</h4>
                    <p className="text-sm text-muted-foreground">Temporary insurance confirmation</p>
                  </div>
                  <Button>Generate</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recently Generated</CardTitle>
              <CardDescription>Your last 10 certificate generations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { policy: "POL-MTR-2024-001234", customer: "Adebayo Thompson", type: "Motor", date: "2 hours ago" },
                  { policy: "POL-HLT-2024-000856", customer: "Blessing Okoro", type: "Health", date: "1 day ago" },
                  { policy: "POL-MTR-2024-001198", customer: "Chukwudi Eze", type: "Motor", date: "2 days ago" },
                ].map((cert) => (
                  <div key={cert.policy} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium text-sm">{cert.policy}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.customer} • {cert.type} • {cert.date}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Share2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>NAICOM Compliance Documents</CardTitle>
              <CardDescription>Essential regulatory and compliance materials</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[
                  { name: "Agent Code of Conduct", category: "Mandatory Reading", status: "completed" },
                  { name: "Data Protection Guidelines", category: "Mandatory Reading", status: "completed" },
                  { name: "AML/KYC Procedures", category: "Mandatory Reading", status: "pending" },
                  { name: "Customer Complaint Handling", category: "Reference", status: "completed" },
                  { name: "NAICOM License Verification", category: "Reference", status: "completed" },
                ].map((doc) => (
                  <div key={doc.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold text-sm">{doc.name}</h4>
                        <p className="text-xs text-muted-foreground">{doc.category}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={doc.status === "completed" ? "default" : "secondary"}>{doc.status}</Badge>
                      <Button size="sm" variant="outline">
                        <BookOpen className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="marketing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Marketing Materials</CardTitle>
              <CardDescription>Brochures, flyers, and social media content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  { name: "Motor Insurance Flyer", format: "PDF", size: "2.5 MB" },
                  { name: "Health Insurance Brochure", format: "PDF", size: "3.8 MB" },
                  { name: "Social Media Post Templates", format: "ZIP", size: "12 MB" },
                  { name: "WhatsApp Message Templates", format: "DOC", size: "145 KB" },
                ].map((material) => (
                  <div key={material.name} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold text-sm">{material.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {material.format} • {material.size}
                      </p>
                    </div>
                    <Button size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
