import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, Share2, ImageIcon, FileText, Video, Mail } from "lucide-react"

export default function MarketingMaterialsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Marketing Materials</h1>
        <p className="text-muted-foreground mt-1">Download and share branded marketing assets</p>
      </div>

      <Tabs defaultValue="social" className="space-y-4">
        <TabsList>
          <TabsTrigger value="social">Social Media</TabsTrigger>
          <TabsTrigger value="brochures">Brochures</TabsTrigger>
          <TabsTrigger value="videos">Videos</TabsTrigger>
          <TabsTrigger value="email">Email Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="social" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Motor Insurance Promo", format: "Instagram Post", size: "1080x1080" },
              { title: "Health Insurance Banner", format: "Facebook Cover", size: "1920x1080" },
              { title: "Travel Insurance Story", format: "Instagram Story", size: "1080x1920" },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="h-40 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <ImageIcon className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>
                    {item.format} • {item.size}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="brochures" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Motor Insurance Guide", pages: 8, format: "PDF" },
              { title: "Health Insurance Overview", pages: 12, format: "PDF" },
              { title: "Product Comparison Sheet", pages: 4, format: "PDF" },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="h-40 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <FileText className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>
                    {item.pages} pages • {item.format}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Product Demo - Motor Insurance", duration: "2:30", format: "MP4" },
              { title: "Customer Testimonials", duration: "1:45", format: "MP4" },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="h-48 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Video className="h-16 w-16 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>
                    {item.duration} • {item.format}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="email" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Welcome Email Template", subject: "Welcome to WRAPA Insurance" },
              { title: "Policy Renewal Reminder", subject: "Your policy is expiring soon" },
              { title: "Quote Follow-up", subject: "Your insurance quote is ready" },
            ].map((item) => (
              <Card key={item.title}>
                <CardHeader>
                  <div className="h-32 bg-muted rounded-lg flex items-center justify-center mb-4">
                    <Mail className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle className="text-base">{item.title}</CardTitle>
                  <CardDescription>{item.subject}</CardDescription>
                </CardHeader>
                <CardContent className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                    <Download className="h-3 w-3 mr-1" />
                    Use Template
                  </Button>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
