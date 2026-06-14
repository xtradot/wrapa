"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { FileText, Search, AlertTriangle, Eye, CheckCircle, XCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

const mockClaims = [
  {
    id: "CLM-12345",
    type: "Motor Insurance",
    subtype: "Total Loss",
    policyNumber: "POL-12345678",
    provider: "AXA Mansard",
    customer: "John Adebayo",
    amount: 2500000,
    dateSubmitted: "10 Dec 2024",
    daysOpen: 5,
    priority: "high",
    status: "pending-review",
    hasDocuments: true,
    documentsCount: 8,
  },
  {
    id: "CLM-12346",
    type: "Health Insurance",
    subtype: "Surgery",
    policyNumber: "POL-87654321",
    provider: "Leadway Assurance",
    customer: "Fatima Mohammed",
    amount: 800000,
    dateSubmitted: "11 Dec 2024",
    daysOpen: 4,
    priority: "high",
    status: "pending-review",
    hasDocuments: true,
    documentsCount: 6,
  },
  {
    id: "CLM-12347",
    type: "Home Insurance",
    subtype: "Fire Damage",
    policyNumber: "POL-11223344",
    provider: "AIICO Insurance",
    customer: "Chidi Okafor",
    amount: 1200000,
    dateSubmitted: "08 Dec 2024",
    daysOpen: 7,
    priority: "high",
    status: "pending-review",
    hasDocuments: true,
    documentsCount: 10,
  },
  {
    id: "CLM-12348",
    type: "Motor Insurance",
    subtype: "Accident",
    policyNumber: "POL-55667788",
    provider: "Custodian Insurance",
    customer: "Aisha Ibrahim",
    amount: 450000,
    dateSubmitted: "12 Dec 2024",
    daysOpen: 3,
    priority: "medium",
    status: "pending-review",
    hasDocuments: true,
    documentsCount: 5,
  },
]

export default function ClaimsQueuePage() {
  const [selected, setSelected] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState("")

  const priorityClaims = mockClaims.filter((c) => c.priority === "high")
  const allClaims = mockClaims

  const toggleSelect = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]))
  }

  const toggleSelectAll = () => {
    setSelected(selected.length === mockClaims.length ? [] : mockClaims.map((c) => c.id))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Claims Queue</h1>
          <p className="text-muted-foreground mt-1">Review and process pending insurance claims</p>
        </div>
        <div className="flex gap-2">
          {selected.length > 0 && (
            <>
              <Button variant="outline" className="bg-transparent">
                <CheckCircle className="h-4 w-4 mr-2" />
                Approve Selected ({selected.length})
              </Button>
              <Button variant="outline" className="bg-transparent text-destructive hover:bg-destructive/10">
                <XCircle className="h-4 w-4 mr-2" />
                Reject Selected ({selected.length})
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by claim ID, customer name, or policy number..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Claim Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="motor">Motor</SelectItem>
                <SelectItem value="health">Health</SelectItem>
                <SelectItem value="home">Home</SelectItem>
                <SelectItem value="travel">Travel</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="newest">
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="oldest">Oldest First</SelectItem>
                <SelectItem value="amount-high">Highest Amount</SelectItem>
                <SelectItem value="amount-low">Lowest Amount</SelectItem>
                <SelectItem value="priority">Priority</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="priority" className="space-y-4">
        <TabsList>
          <TabsTrigger value="priority">
            Priority ({priorityClaims.length})
            <Badge variant="destructive" className="ml-2">
              Urgent
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="all">All Claims ({allClaims.length})</TabsTrigger>
          <TabsTrigger value="needs-info">Needs Info (3)</TabsTrigger>
        </TabsList>

        <TabsContent value="priority" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  High Priority Claims - Requires Immediate Action
                </CardTitle>
                <div className="flex items-center gap-2">
                  <Checkbox
                    checked={selected.length === priorityClaims.length}
                    onCheckedChange={toggleSelectAll}
                    id="select-all"
                  />
                  <label htmlFor="select-all" className="text-sm text-muted-foreground cursor-pointer">
                    Select All
                  </label>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {priorityClaims.map((claim) => (
                  <div
                    key={claim.id}
                    className="flex items-start gap-4 p-4 border rounded-lg bg-background hover:bg-muted/50 transition-colors"
                  >
                    <Checkbox
                      checked={selected.includes(claim.id)}
                      onCheckedChange={() => toggleSelect(claim.id)}
                      className="mt-1"
                    />

                    <div className="h-12 w-12 rounded-lg bg-red-100 dark:bg-red-900/20 flex items-center justify-center shrink-0">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono font-semibold">{claim.id}</span>
                            <Badge variant="destructive" className="text-xs">
                              {claim.daysOpen} days old
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {claim.documentsCount} docs
                            </Badge>
                          </div>
                          <p className="text-sm font-medium">
                            {claim.type} - {claim.subtype}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {claim.provider} • Policy: {claim.policyNumber}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-lg">₦{claim.amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{claim.dateSubmitted}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-muted-foreground">Customer:</span>
                          <span className="font-medium">{claim.customer}</span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="bg-transparent" asChild>
                            <Link href={`/officer/review/${claim.id}`}>
                              <Eye className="h-3 w-3 mr-1" />
                              Review
                            </Link>
                          </Button>
                          <Button size="sm" asChild>
                            <Link href={`/officer/review/${claim.id}`}>
                              Process
                              <ArrowRight className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          <div className="space-y-3">
            {allClaims.map((claim) => (
              <Card key={claim.id}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <Checkbox checked={selected.includes(claim.id)} onCheckedChange={() => toggleSelect(claim.id)} />

                    <div
                      className={`h-12 w-12 rounded-lg flex items-center justify-center shrink-0 ${
                        claim.priority === "high" ? "bg-red-100 dark:bg-red-900/20" : "bg-blue-100 dark:bg-blue-900/20"
                      }`}
                    >
                      <FileText className={`h-6 w-6 ${claim.priority === "high" ? "text-red-600" : "text-blue-600"}`} />
                    </div>

                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="font-mono font-semibold">{claim.id}</span>
                            <Badge
                              variant={claim.priority === "high" ? "destructive" : "secondary"}
                              className="text-xs"
                            >
                              {claim.daysOpen} days
                            </Badge>
                          </div>
                          <p className="text-sm font-medium">
                            {claim.type} - {claim.subtype}
                          </p>
                          <p className="text-xs text-muted-foreground">{claim.provider}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">₦{claim.amount.toLocaleString()}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">{claim.customer}</p>
                        <Button size="sm" asChild>
                          <Link href={`/officer/review/${claim.id}`}>Review Claim</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="needs-info">
          <Card>
            <CardContent className="py-12 text-center">
              <FileText className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-30" />
              <p className="text-muted-foreground">Claims requiring additional information will appear here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
