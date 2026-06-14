import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Check, FileText, CreditCard, Shield, AlertCircle } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notifications - WRAPA Dashboard",
  description: "View all your notifications",
}

const notifications = [
  {
    id: "1",
    type: "renewal",
    icon: Shield,
    title: "Policy Renewal Reminder",
    message: "Your Home Insurance policy (POL-11223344) expires in 45 days.",
    time: "2 hours ago",
    read: false,
    action: "Renew Now",
    actionLink: "/dashboard/renewals",
  },
  {
    id: "2",
    type: "claim",
    icon: FileText,
    title: "Claim Status Updated",
    message: "Your claim CLM-12345678 status has been updated to 'Under Review'.",
    time: "1 day ago",
    read: false,
    action: "View Claim",
    actionLink: "/dashboard/claims/CLM-12345678",
  },
  {
    id: "3",
    type: "payment",
    icon: CreditCard,
    title: "Payment Due Soon",
    message: "Your payment of ₦45,000 for Motor Insurance is due in 15 days.",
    time: "2 days ago",
    read: true,
    action: "Make Payment",
    actionLink: "/dashboard/payments",
  },
  {
    id: "4",
    type: "policy",
    icon: Shield,
    title: "New Policy Issued",
    message: "Your Health Insurance policy has been successfully issued.",
    time: "5 days ago",
    read: true,
    action: "View Policy",
    actionLink: "/dashboard/policies/POL-87654321",
  },
  {
    id: "5",
    type: "alert",
    icon: AlertCircle,
    title: "KYC Verification Required",
    message: "Please complete your NIN verification to continue using all services.",
    time: "1 week ago",
    read: true,
    action: "Verify Now",
    actionLink: "/dashboard/profile",
  },
]

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read)
  const all = notifications

  const getIconColor = (type: string) => {
    switch (type) {
      case "renewal":
        return "text-orange-600 bg-orange-500/10"
      case "claim":
        return "text-blue-600 bg-blue-500/10"
      case "payment":
        return "text-green-600 bg-green-500/10"
      case "policy":
        return "text-primary bg-primary/10"
      case "alert":
        return "text-red-600 bg-red-500/10"
      default:
        return "text-gray-600 bg-gray-500/10"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Notifications</h1>
          <p className="text-muted-foreground mt-1">Stay updated with your insurance activities</p>
        </div>
        <Button variant="outline" size="sm" className="bg-transparent">
          <Check className="h-4 w-4 mr-2" />
          Mark All as Read
        </Button>
      </div>

      <Tabs defaultValue="unread" className="space-y-4">
        <TabsList>
          <TabsTrigger value="unread">
            Unread
            {unread.length > 0 && (
              <Badge className="ml-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                {unread.length}
              </Badge>
            )}
          </TabsTrigger>
          <TabsTrigger value="all">All</TabsTrigger>
        </TabsList>

        <TabsContent value="unread" className="space-y-3">
          {unread.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <Bell className="h-12 w-12 mx-auto mb-4 text-muted-foreground opacity-30" />
                <p className="text-muted-foreground">No unread notifications</p>
              </CardContent>
            </Card>
          ) : (
            unread.map((notification) => {
              const Icon = notification.icon
              return (
                <Card key={notification.id} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${getIconColor(notification.type)}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h3 className="font-semibold text-sm">{notification.title}</h3>
                          {!notification.read && (
                            <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                        <div className="flex items-center gap-4">
                          <Button size="sm" variant="outline" asChild className="bg-transparent">
                            <a href={notification.actionLink}>{notification.action}</a>
                          </Button>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })
          )}
        </TabsContent>

        <TabsContent value="all" className="space-y-3">
          {all.map((notification) => {
            const Icon = notification.icon
            return (
              <Card key={notification.id} className={notification.read ? "" : "border-l-4 border-l-primary"}>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-10 w-10 rounded-lg flex items-center justify-center shrink-0 ${getIconColor(notification.type)}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-1">
                        <h3 className="font-semibold text-sm">{notification.title}</h3>
                        {!notification.read && (
                          <Badge variant="secondary" className="shrink-0 bg-primary/10 text-primary">
                            New
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{notification.message}</p>
                      <div className="flex items-center gap-4">
                        <Button size="sm" variant="outline" asChild className="bg-transparent">
                          <a href={notification.actionLink}>{notification.action}</a>
                        </Button>
                        <span className="text-xs text-muted-foreground">{notification.time}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </TabsContent>
      </Tabs>
    </div>
  )
}
