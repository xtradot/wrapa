import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  BookOpen,
  Video,
  FileText,
  CheckCircle2,
  Clock,
  Trophy,
  PlayCircle,
  Lock,
  Download,
  GraduationCap,
} from "lucide-react"

export default function TrainingResourcesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Training & Resources</h1>
          <p className="text-muted-foreground mt-1">Enhance your skills and knowledge</p>
        </div>
        <Badge className="bg-purple-600">
          <GraduationCap className="h-4 w-4 mr-1" />
          Level 3 Agent
        </Badge>
      </div>

      {/* Learning Progress */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Courses Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12 / 18</div>
            <Progress value={66.7} className="mt-2" />
            <p className="text-xs text-muted-foreground mt-2">6 courses remaining</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Certifications Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <div className="flex items-center gap-2 mt-2">
              <Trophy className="h-4 w-4 text-yellow-600" />
              <span className="text-sm font-medium">Motor Specialist</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Learning Hours</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45.5 hrs</div>
            <p className="text-xs text-muted-foreground mt-2">This month: 8.2 hrs</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="courses" className="space-y-4">
        <TabsList>
          <TabsTrigger value="courses">
            <Video className="h-4 w-4 mr-2" />
            Courses
          </TabsTrigger>
          <TabsTrigger value="certifications">
            <Trophy className="h-4 w-4 mr-2" />
            Certifications
          </TabsTrigger>
          <TabsTrigger value="resources">
            <FileText className="h-4 w-4 mr-2" />
            Resources
          </TabsTrigger>
          <TabsTrigger value="live">
            <PlayCircle className="h-4 w-4 mr-2" />
            Live Sessions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="courses" className="space-y-4">
          <div className="space-y-4">
            {[
              {
                title: "Motor Insurance Fundamentals",
                description: "Complete guide to motor insurance products and underwriting",
                duration: "2.5 hours",
                modules: 8,
                progress: 100,
                status: "completed",
                level: "Beginner",
              },
              {
                title: "Advanced Health Insurance Sales",
                description: "Master health insurance products and overcome objections",
                duration: "3 hours",
                modules: 10,
                progress: 60,
                status: "in-progress",
                level: "Intermediate",
              },
              {
                title: "Customer Relationship Management",
                description: "Build lasting relationships and increase retention",
                duration: "1.5 hours",
                modules: 6,
                progress: 0,
                status: "locked",
                level: "Beginner",
                requirement: "Complete Motor Insurance Fundamentals",
              },
              {
                title: "Digital Sales Techniques",
                description: "Master online sales, social media, and digital marketing",
                duration: "2 hours",
                modules: 7,
                progress: 100,
                status: "completed",
                level: "Intermediate",
              },
            ].map((course) => (
              <Card key={course.title} className={course.status === "locked" ? "opacity-60" : ""}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-16 w-16 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        course.status === "completed"
                          ? "bg-green-500/10"
                          : course.status === "in-progress"
                            ? "bg-blue-500/10"
                            : "bg-muted"
                      }`}
                    >
                      {course.status === "completed" ? (
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      ) : course.status === "locked" ? (
                        <Lock className="h-8 w-8 text-muted-foreground" />
                      ) : (
                        <PlayCircle className="h-8 w-8 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold">{course.title}</h3>
                        <Badge variant="outline" className="text-xs">
                          {course.level}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                      <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {course.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-3 w-3" />
                          {course.modules} modules
                        </div>
                      </div>
                      {course.status !== "locked" && (
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-xs mb-1">
                            <span className="text-muted-foreground">Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      )}
                      {course.status === "locked" && (
                        <p className="text-xs text-orange-600 mt-3">{course.requirement}</p>
                      )}
                    </div>
                    <div>
                      {course.status === "completed" ? (
                        <Button variant="outline">Review</Button>
                      ) : course.status === "in-progress" ? (
                        <Button>Continue</Button>
                      ) : (
                        <Button variant="outline" disabled>
                          <Lock className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="certifications" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Certified Motor Insurance Specialist",
                issuer: "NAICOM",
                earned: true,
                date: "Jan 2024",
                validity: "3 years",
              },
              {
                name: "Health Insurance Expert",
                issuer: "WRAPA Academy",
                earned: true,
                date: "Feb 2024",
                validity: "2 years",
              },
              {
                name: "Digital Sales Certified Agent",
                issuer: "WRAPA Academy",
                earned: true,
                date: "Mar 2024",
                validity: "2 years",
              },
              {
                name: "Advanced Underwriting Certification",
                issuer: "NAICOM",
                earned: false,
                requirements: "Complete 5 advanced courses + 100 policies sold",
              },
            ].map((cert) => (
              <Card key={cert.name}>
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`h-12 w-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        cert.earned ? "bg-yellow-500/10" : "bg-muted"
                      }`}
                    >
                      {cert.earned ? (
                        <Trophy className="h-6 w-6 text-yellow-600" />
                      ) : (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">Issued by {cert.issuer}</p>
                      {cert.earned ? (
                        <>
                          <div className="flex items-center gap-4 mt-3 text-xs text-muted-foreground">
                            <span>Earned: {cert.date}</span>
                            <span>Valid: {cert.validity}</span>
                          </div>
                          <div className="flex gap-2 mt-4">
                            <Button size="sm" variant="outline">
                              <Download className="h-3 w-3 mr-1" />
                              Download
                            </Button>
                          </div>
                        </>
                      ) : (
                        <p className="text-xs text-muted-foreground mt-3">Requirements: {cert.requirements}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Agent Handbook 2024", type: "PDF Guide", size: "4.5 MB", category: "Essential" },
              { title: "Product Comparison Matrix", type: "Excel", size: "850 KB", category: "Sales Tools" },
              { title: "Objection Handling Scripts", type: "PDF", size: "1.2 MB", category: "Sales Tools" },
              { title: "NAICOM Regulations Summary", type: "PDF", size: "2.8 MB", category: "Compliance" },
            ].map((resource) => (
              <Card key={resource.title}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-semibold text-sm">{resource.title}</h4>
                        <p className="text-xs text-muted-foreground">
                          {resource.type} • {resource.size}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                      <Button size="sm" variant="outline">
                        <Download className="h-3 w-3 mr-1" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="live" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Live Training Sessions</CardTitle>
              <CardDescription>Join expert-led training and Q&A sessions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Mastering Motor Insurance Sales",
                    instructor: "Adebayo Ogun",
                    date: "Dec 15, 2024",
                    time: "2:00 PM WAT",
                    duration: "1 hour",
                    registered: true,
                  },
                  {
                    title: "Digital Marketing for Insurance Agents",
                    instructor: "Blessing Eze",
                    date: "Dec 20, 2024",
                    time: "4:00 PM WAT",
                    duration: "1.5 hours",
                    registered: false,
                  },
                ].map((session) => (
                  <div key={session.title} className="flex items-start justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-semibold">{session.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">with {session.instructor}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                        <span>{session.date}</span>
                        <span>•</span>
                        <span>{session.time}</span>
                        <span>•</span>
                        <span>{session.duration}</span>
                      </div>
                    </div>
                    <Button variant={session.registered ? "outline" : "default"} size="sm">
                      {session.registered ? "Registered" : "Register"}
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
