import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, Award, Star, Target, TrendingUp, Zap, Crown, Medal } from "lucide-react"

export default function AchievementsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Achievements & Badges</h1>
          <p className="text-muted-foreground mt-1">Track your milestones and unlock rewards</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Total Points</p>
          <p className="text-3xl font-bold">12,450</p>
        </div>
      </div>

      {/* Current Rank */}
      <Card className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <Crown className="h-10 w-10 text-yellow-600" />
              </div>
              <div>
                <Badge className="bg-yellow-500 mb-2">Current Rank</Badge>
                <h2 className="text-2xl font-bold">Gold Agent</h2>
                <p className="text-sm text-muted-foreground">Top 15% of all agents</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm text-muted-foreground mb-1">Progress to Platinum</p>
              <p className="text-2xl font-bold">1,550 / 15,000 pts</p>
              <Progress value={10.3} className="w-48 mt-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Achievement Categories */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {[
          { category: "Sales", earned: 12, total: 20, icon: TrendingUp, color: "text-blue-600" },
          { category: "Training", earned: 8, total: 15, icon: Star, color: "text-purple-600" },
          { category: "Customer Service", earned: 5, total: 10, icon: Award, color: "text-green-600" },
          { category: "Special", earned: 3, total: 8, icon: Zap, color: "text-orange-600" },
        ].map((cat) => (
          <Card key={cat.category}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">{cat.category}</CardTitle>
                <cat.icon className={`h-5 w-5 ${cat.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {cat.earned}/{cat.total}
              </div>
              <Progress value={(cat.earned / cat.total) * 100} className="mt-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Earned Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Earned Achievements</CardTitle>
          <CardDescription>Your accomplishments and milestones</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "First Sale",
                description: "Complete your first policy sale",
                points: 100,
                date: "Jan 2024",
                icon: Trophy,
                rarity: "Common",
                color: "bg-gray-500",
              },
              {
                name: "Century Club",
                description: "Sell 100 policies",
                points: 500,
                date: "Oct 2024",
                icon: Target,
                rarity: "Rare",
                color: "bg-purple-500",
              },
              {
                name: "Customer Champion",
                description: "Maintain 95%+ customer satisfaction",
                points: 750,
                date: "Nov 2024",
                icon: Award,
                rarity: "Epic",
                color: "bg-orange-500",
              },
              {
                name: "Fast Learner",
                description: "Complete 10 training courses",
                points: 300,
                date: "Sep 2024",
                icon: Star,
                rarity: "Uncommon",
                color: "bg-green-500",
              },
              {
                name: "Million Naira Month",
                description: "Generate ₦1M+ premium in a month",
                points: 1000,
                date: "Dec 2024",
                icon: Medal,
                rarity: "Legendary",
                color: "bg-yellow-500",
              },
            ].map((achievement) => (
              <div key={achievement.name} className="flex items-start gap-4 p-4 border rounded-lg">
                <div className={`h-12 w-12 rounded-lg ${achievement.color}/20 flex items-center justify-center`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color.replace("bg-", "text-")}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-sm">{achievement.name}</h4>
                    <Badge variant="outline" className="text-xs">
                      {achievement.rarity}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  <div className="flex items-center gap-3 mt-2 text-xs">
                    <span className="font-medium text-primary">+{achievement.points} pts</span>
                    <span className="text-muted-foreground">Earned: {achievement.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Locked Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Locked Achievements</CardTitle>
          <CardDescription>Keep pushing to unlock these rewards</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Platinum Agent",
                description: "Reach Platinum rank status",
                points: 2000,
                progress: 82,
                requirement: "Earn 15,000 total points",
              },
              {
                name: "Top Performer",
                description: "Rank #1 in your region",
                points: 1500,
                progress: 45,
                requirement: "Currently ranked #12",
              },
              {
                name: "Master Trainer",
                description: "Complete all certification courses",
                points: 1000,
                progress: 66,
                requirement: "12/18 courses completed",
              },
            ].map((achievement) => (
              <div key={achievement.name} className="flex items-start gap-4 p-4 border rounded-lg opacity-60">
                <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center">
                  <Trophy className="h-6 w-6 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{achievement.name}</h4>
                  <p className="text-xs text-muted-foreground">{achievement.description}</p>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-muted-foreground">{achievement.requirement}</span>
                      <span className="font-medium">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                  </div>
                  <p className="text-xs text-primary mt-2">+{achievement.points} pts when unlocked</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard */}
      <Card>
        <CardHeader>
          <CardTitle>Regional Leaderboard</CardTitle>
          <CardDescription>Top performing agents in Lagos</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { rank: 1, name: "Adebayo Ogun", points: 18450, sales: 245, badge: "Platinum" },
              { rank: 2, name: "Blessing Eze", points: 16200, sales: 198, badge: "Platinum" },
              { rank: 3, name: "Chukwudi Nwosu", points: 15800, sales: 210, badge: "Gold" },
              { rank: 12, name: "You (John Doe)", points: 12450, sales: 142, badge: "Gold", highlight: true },
            ].map((agent) => (
              <div
                key={agent.rank}
                className={`flex items-center justify-between p-4 border rounded-lg ${
                  agent.highlight ? "bg-primary/5 border-primary" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-10">
                    <span className="text-2xl font-bold text-muted-foreground">#{agent.rank}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">{agent.name}</h4>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
                      <span>{agent.sales} sales</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {agent.badge}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{agent.points.toLocaleString()} pts</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
