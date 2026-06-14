import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, CheckCircle, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function TenantNotificationsPage() {
  const notifications = [
    {
      id: 1,
      type: "info",
      title: "New Policy Issued",
      message: "Motor insurance policy POL-12345 has been issued successfully",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "success",
      title: "Agent Approved",
      message: "Agent John Doe has been approved and activated",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "warning",
      title: "Product Approval Pending",
      message: "New product 'Travel Insurance Plus' awaiting your approval",
      time: "2 hours ago",
      read: true,
    },
  ]

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "warning":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />
      default:
        return <Info className="h-5 w-5 text-blue-500" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Notifications</h1>
        <Button variant="outline">Mark All as Read</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            All Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${notification.read ? "bg-background" : "bg-accent/10"}`}
              >
                <div className="flex items-start gap-4">
                  <div className="mt-1">{getIcon(notification.type)}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{notification.title}</h3>
                      {!notification.read && <Badge variant="default">New</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
