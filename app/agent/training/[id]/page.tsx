"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Play, CheckCircle, Clock, BookOpen, Award, FileText, Video } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function TrainingDetailPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [currentLesson, setCurrentLesson] = useState(0)

  const course = {
    id: params.id,
    title: "Motor Insurance Fundamentals",
    description:
      "Comprehensive training on motor insurance products, coverage types, claims handling, and sales techniques",
    instructor: "Dr. Adebayo Williams",
    duration: "4 hours",
    lessons: 12,
    completedLessons: 5,
    progress: 42,
    level: "Intermediate",
    category: "Product Knowledge",
    certificate: true,
    enrolled: "15 Nov 2024",
    lastAccessed: "12 Dec 2024",
  }

  const lessons = [
    { id: 1, title: "Introduction to Motor Insurance", duration: "15 min", completed: true, type: "video" },
    { id: 2, title: "Types of Motor Coverage", duration: "20 min", completed: true, type: "video" },
    { id: 3, title: "Premium Calculation Basics", duration: "25 min", completed: true, type: "video" },
    { id: 4, title: "Underwriting Guidelines", duration: "30 min", completed: true, type: "document" },
    { id: 5, title: "Claims Process Overview", duration: "20 min", completed: true, type: "video" },
    { id: 6, title: "Sales Techniques for Motor Insurance", duration: "25 min", completed: false, type: "video" },
    { id: 7, title: "Handling Objections", duration: "20 min", completed: false, type: "video" },
    { id: 8, title: "Third Party vs Comprehensive", duration: "15 min", completed: false, type: "document" },
    { id: 9, title: "Add-ons and Extras", duration: "15 min", completed: false, type: "video" },
    { id: 10, title: "Documentation Requirements", duration: "20 min", completed: false, type: "document" },
    { id: 11, title: "Common Scenarios and Solutions", duration: "25 min", completed: false, type: "video" },
    { id: 12, title: "Final Assessment", duration: "30 min", completed: false, type: "quiz" },
  ]

  const handleStartLesson = (lessonId: number) => {
    setCurrentLesson(lessonId)
    toast({
      title: "Lesson started",
      description: `Starting lesson ${lessonId}`,
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/agent/training">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{course.title}</h1>
          <p className="text-muted-foreground mt-1">By {course.instructor}</p>
        </div>
      </div>

      {/* Progress Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-6">
            <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
              {course.progress}%
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h3 className="font-semibold">Your Progress</h3>
                <Badge variant="secondary">
                  {course.completedLessons}/{course.lessons} lessons completed
                </Badge>
              </div>
              <Progress value={course.progress} className="h-2 mb-2" />
              <p className="text-sm text-muted-foreground">
                {course.lessons - course.completedLessons} lessons remaining
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Course Info */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Duration</p>
                <p className="font-semibold">{course.duration}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <BookOpen className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Lessons</p>
                <p className="font-semibold">{course.lessons} modules</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="font-semibold">{course.level}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Category</p>
                <p className="font-semibold">{course.category}</p>
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-3">
              <Award className="h-5 w-5 text-muted-foreground mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">Certificate</p>
                <p className="font-semibold">{course.certificate ? "Yes" : "No"}</p>
              </div>
            </div>

            {course.progress === 100 && (
              <div className="pt-4">
                <Button className="w-full">
                  <Award className="h-4 w-4 mr-2" />
                  Download Certificate
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Lessons List */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Course Content</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {lessons.map((lesson) => (
                <div key={lesson.id} className="flex items-center gap-4 p-4 border rounded-lg">
                  <div
                    className={`h-10 w-10 rounded-full flex items-center justify-center shrink-0 ${
                      lesson.completed ? "bg-green-500/10" : "bg-muted"
                    }`}
                  >
                    {lesson.completed ? (
                      <CheckCircle className="h-5 w-5 text-green-600" />
                    ) : lesson.type === "video" ? (
                      <Video className="h-5 w-5 text-muted-foreground" />
                    ) : lesson.type === "document" ? (
                      <FileText className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <BookOpen className="h-5 w-5 text-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-sm">
                        Lesson {lesson.id}: {lesson.title}
                      </h4>
                      {lesson.completed && <Badge className="bg-green-500/10 text-green-700 text-xs">Completed</Badge>}
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{lesson.duration}</span>
                      <span>•</span>
                      <span className="capitalize">{lesson.type}</span>
                    </div>
                  </div>

                  <Button
                    size="sm"
                    variant={lesson.completed ? "outline" : "default"}
                    onClick={() => handleStartLesson(lesson.id)}
                    className={lesson.completed ? "bg-transparent" : ""}
                  >
                    {lesson.completed ? (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Review
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        Start
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>About This Course</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
        </CardContent>
      </Card>

      <div className="flex gap-3">
        <Button variant="outline" asChild className="bg-transparent">
          <Link href="/agent/training">Back to Training</Link>
        </Button>
        <Button onClick={() => handleStartLesson(course.completedLessons + 1)}>
          <Play className="h-4 w-4 mr-2" />
          Continue Learning
        </Button>
      </div>
    </div>
  )
}
