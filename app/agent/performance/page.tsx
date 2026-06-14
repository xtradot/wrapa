"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Award, Target, Users, Trophy, Star } from "lucide-react"

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Performance Tracking</h1>
        <p className="text-muted-foreground mt-1">Monitor your sales performance and achievements</p>
      </div>

      {/* Current Rank */}
      <Card className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-yellow-600" />
              </div>
              <div>
                <Badge className="mb-2 bg-yellow-500">Current Rank</Badge>
                <h3 className="text-2xl font-bold">Gold Agent</h3>
                <p className="text-sm text-muted-foreground">10% commission on all sales</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Performance Points</p>
              <p className="text-3xl font-bold">3,750</p>
              <p className="text-xs text-muted-foreground mt-1">1,250 to Platinum</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Monthly Targets */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5" />
              Sales Target
            </CardTitle>
            <CardDescription>Track your monthly sales goal</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Progress</span>
                <span className="text-sm font-semibold">₦2.4M / ₦3M</span>
              </div>
              <Progress value={80} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">80% completed - ₦600K remaining</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs text-muted-foreground">Daily Average</p>
                <p className="text-lg font-semibold">₦120K</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Days Remaining</p>
                <p className="text-lg font-semibold">5</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Customer Target
            </CardTitle>
            <CardDescription>New customers this month</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Current Progress</span>
                <span className="text-sm font-semibold">45 / 50</span>
              </div>
              <Progress value={90} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">90% completed - 5 more to go</p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t">
              <div>
                <p className="text-xs text-muted-foreground">Daily Average</p>
                <p className="text-lg font-semibold">2.3</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">This Week</p>
                <p className="text-lg font-semibold">12</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Key Performance Metrics</CardTitle>
          <CardDescription>Your performance across different categories</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="monthly">
            <TabsList>
              <TabsTrigger value="monthly">This Month</TabsTrigger>
              <TabsTrigger value="quarterly">This Quarter</TabsTrigger>
              <TabsTrigger value="yearly">This Year</TabsTrigger>
            </TabsList>

            <TabsContent value="monthly" className="space-y-4 mt-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Total Sales</p>
                  <p className="text-2xl font-bold">₦2.4M</p>
                  <p className="text-xs text-green-600 mt-1">+18% vs last month</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Commission Earned</p>
                  <p className="text-2xl font-bold">₦240K</p>
                  <p className="text-xs text-green-600 mt-1">+15% vs last month</p>
                </div>
                <div className="p-4 border rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Conversion Rate</p>
                  <p className="text-2xl font-bold">78%</p>
                  <p className="text-xs text-green-600 mt-1">+5% vs last month</p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <h4 className="font-semibold">Product Mix</h4>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Motor Insurance</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <Progress value={45} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Health Insurance</span>
                      <span className="font-semibold">30%</span>
                    </div>
                    <Progress value={30} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Travel Insurance</span>
                      <span className="font-semibold">15%</span>
                    </div>
                    <Progress value={15} />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Other Products</span>
                      <span className="font-semibold">10%</span>
                    </div>
                    <Progress value={10} />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5 text-yellow-600" />
            Branch Leaderboard
          </CardTitle>
          <CardDescription>Victoria Island Branch - Top 5 Agents</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { rank: 1, name: "Adebayo Ogunlesi", sales: "₦4.2M", icon: "🥇" },
              { rank: 2, name: "John Doe (You)", sales: "₦2.4M", icon: "🥈", isYou: true },
              { rank: 3, name: "Ngozi Okonkwo", sales: "₦2.1M", icon: "🥉" },
              { rank: 4, name: "Ibrahim Musa", sales: "₦1.8M", icon: "" },
              { rank: 5, name: "Blessing Eze", sales: "₦1.5M", icon: "" },
            ].map((agent) => (
              <div
                key={agent.rank}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  agent.isYou ? "bg-primary/10 border-2 border-primary" : "border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{agent.icon || `#${agent.rank}`}</span>
                  <div>
                    <p className="font-semibold">
                      {agent.name}
                      {agent.isYou && <Badge className="ml-2">You</Badge>}
                    </p>
                    <p className="text-sm text-muted-foreground">Rank #{agent.rank}</p>
                  </div>
                </div>
                <p className="text-xl font-bold">{agent.sales}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Star className="h-5 w-5 text-yellow-600" />
            Recent Achievements
          </CardTitle>
          <CardDescription>Milestones you've unlocked</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center mx-auto mb-2">
                <Trophy className="h-6 w-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-sm">Top Performer</h4>
              <p className="text-xs text-muted-foreground mt-1">Reached ₦2M in sales</p>
              <Badge className="mt-2" variant="secondary">
                Unlocked
              </Badge>
            </div>
            <div className="p-4 border rounded-lg text-center">
              <div className="h-12 w-12 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-2">
                <Users className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-sm">Customer Champion</h4>
              <p className="text-xs text-muted-foreground mt-1">Onboarded 40+ customers</p>
              <Badge className="mt-2" variant="secondary">
                Unlocked
              </Badge>
            </div>
            <div className="p-4 border rounded-lg text-center opacity-50">
              <div className="h-12 w-12 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-2">
                <Target className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-sm">Perfect Month</h4>
              <p className="text-xs text-muted-foreground mt-1">Hit 100% of targets</p>
              <Badge className="mt-2" variant="outline">
                Locked
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
