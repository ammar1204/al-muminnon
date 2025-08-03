"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar } from "@/components/ui/calendar"
import { BookOpen, CreditCard, CalendarIcon, Download, Bell, CheckCircle, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function StudentPortal() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // Mock data
  const studentInfo = {
    name: "Ahmed Hassan",
    studentId: "ANM2024001",
    program: "Hifz Program",
    grade: "Level 3",
    enrollmentDate: "September 1, 2024",
    parentName: "Omar Hassan",
    parentEmail: "omar.hassan@email.com",
    parentPhone: "(555) 123-4567",
  }

  const academicProgress = {
    quranMemorization: 65,
    tajweed: 80,
    islamicStudies: 75,
    arabicLanguage: 70,
    overallGrade: "B+",
  }

  const upcomingEvents = [
    { date: "2024-03-15", title: "Quran Recitation Competition", type: "competition" },
    { date: "2024-03-20", title: "Parent-Teacher Conference", type: "meeting" },
    { date: "2024-03-25", title: "Islamic History Quiz", type: "assessment" },
    { date: "2024-04-01", title: "Spring Break Begins", type: "holiday" },
  ]

  const recentAnnouncements = [
    {
      id: 1,
      title: "Ramadan Schedule Changes",
      content: "Please note the adjusted class timings during Ramadan month.",
      date: "2024-03-10",
      priority: "high",
    },
    {
      id: 2,
      title: "New Library Books Available",
      content: "We've added new Islamic literature to our library collection.",
      date: "2024-03-08",
      priority: "medium",
    },
    {
      id: 3,
      title: "Field Trip Permission Forms",
      content: "Please submit signed permission forms for the upcoming mosque visit.",
      date: "2024-03-05",
      priority: "medium",
    },
  ]

  const paymentHistory = [
    { date: "2024-03-01", amount: 150, status: "paid", description: "March Tuition" },
    { date: "2024-02-01", amount: 150, status: "paid", description: "February Tuition" },
    { date: "2024-01-01", amount: 150, status: "paid", description: "January Tuition" },
    { date: "2024-04-01", amount: 150, status: "pending", description: "April Tuition" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">Al-Noor Madrasah</h1>
                <p className="text-sm text-emerald-600">Student Portal</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <div className="text-right">
                <div className="font-semibold text-sm">{studentInfo.name}</div>
                <div className="text-xs text-gray-500">{studentInfo.studentId}</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {studentInfo.name}!</h2>
          <p className="text-gray-600">
            Track your Islamic education journey and stay connected with your madrasah community.
          </p>
        </div>

        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                  <GraduationCap className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{academicProgress.overallGrade}</div>
                  <p className="text-xs text-muted-foreground">Current Grade</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Attendance</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">95%</div>
                  <p className="text-xs text-muted-foreground">This month</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$150</div>
                  <p className="text-xs text-muted-foreground">Due April 1st</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Announcements */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Announcements</CardTitle>
                <CardDescription>Stay updated with important madrasah news</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAnnouncements.map((announcement) => (
                  <div key={announcement.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        announcement.priority === "high" ? "bg-red-500" : "bg-blue-500"
                      }`}
                    ></div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{announcement.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{announcement.content}</p>
                      <p className="text-xs text-gray-500 mt-2">{announcement.date}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Don't miss these important dates</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CalendarIcon className="w-4 h-4 text-emerald-600" />
                      <div>
                        <div className="font-semibold text-sm">{event.title}</div>
                        <div className="text-xs text-gray-500">{event.date}</div>
                      </div>
                    </div>
                    <Badge variant={event.type === "competition" ? "default" : "secondary"}>{event.type}</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Progress Tab */}
          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Academic Progress</CardTitle>
                  <CardDescription>Your performance across different subjects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quran Memorization</span>
                      <span>{academicProgress.quranMemorization}%</span>
                    </div>
                    <Progress value={academicProgress.quranMemorization} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Tajweed</span>
                      <span>{academicProgress.tajweed}%</span>
                    </div>
                    <Progress value={academicProgress.tajweed} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Islamic Studies</span>
                      <span>{academicProgress.islamicStudies}%</span>
                    </div>
                    <Progress value={academicProgress.islamicStudies} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Arabic Language</span>
                      <span>{academicProgress.arabicLanguage}%</span>
                    </div>
                    <Progress value={academicProgress.arabicLanguage} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Memorization Progress</CardTitle>
                  <CardDescription>Quran chapters completed</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Juz 30 (Amma)</span>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Juz 29 (Tabarak)</span>
                      <Badge className="bg-green-100 text-green-800">Completed</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Juz 28 (Qad Sami)</span>
                      <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Juz 27 (Qala Fama)</span>
                      <Badge variant="secondary">Not Started</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Assessments</CardTitle>
                <CardDescription>Your latest test results and evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-semibold text-sm">Tajweed Assessment</div>
                      <div className="text-xs text-gray-500">March 10, 2024</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">A-</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-semibold text-sm">Islamic History Quiz</div>
                      <div className="text-xs text-gray-500">March 5, 2024</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">B+</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <div className="font-semibold text-sm">Arabic Grammar Test</div>
                      <div className="text-xs text-gray-500">February 28, 2024</div>
                    </div>
                    <Badge className="bg-green-100 text-green-800">A</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Weekly Schedule</CardTitle>
                    <CardDescription>Your class timetable</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-6 gap-2 text-sm font-semibold">
                        <div></div>
                        <div className="text-center">Mon</div>
                        <div className="text-center">Tue</div>
                        <div className="text-center">Wed</div>
                        <div className="text-center">Thu</div>
                        <div className="text-center">Fri</div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 text-xs">
                        <div className="font-semibold">9:00 AM</div>
                        <div className="bg-emerald-100 p-2 rounded text-center">Quran</div>
                        <div className="bg-blue-100 p-2 rounded text-center">Arabic</div>
                        <div className="bg-emerald-100 p-2 rounded text-center">Quran</div>
                        <div className="bg-purple-100 p-2 rounded text-center">Fiqh</div>
                        <div className="bg-emerald-100 p-2 rounded text-center">Quran</div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 text-xs">
                        <div className="font-semibold">10:30 AM</div>
                        <div className="bg-purple-100 p-2 rounded text-center">Hadith</div>
                        <div className="bg-emerald-100 p-2 rounded text-center">Quran</div>
                        <div className="bg-blue-100 p-2 rounded text-center">Arabic</div>
                        <div className="bg-emerald-100 p-2 rounded text-center">Quran</div>
                        <div className="bg-yellow-100 p-2 rounded text-center">Aqeedah</div>
                      </div>
                      <div className="grid grid-cols-6 gap-2 text-xs">
                        <div className="font-semibold">1:00 PM</div>
                        <div className="bg-blue-100 p-2 rounded text-center">Arabic</div>
                        <div className="bg-purple-100 p-2 rounded text-center">Fiqh</div>
                        <div className="bg-yellow-100 p-2 rounded text-center">History</div>
                        <div className="bg-blue-100 p-2 rounded text-center">Arabic</div>
                        <div className="bg-gray-100 p-2 rounded text-center">Free</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Calendar</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border"
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Payments Tab */}
          <TabsContent value="payments" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment History</CardTitle>
                    <CardDescription>Track your tuition payments</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {paymentHistory.map((payment, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-3 h-3 rounded-full ${
                                payment.status === "paid" ? "bg-green-500" : "bg-yellow-500"
                              }`}
                            ></div>
                            <div>
                              <div className="font-semibold text-sm">{payment.description}</div>
                              <div className="text-xs text-gray-500">{payment.date}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">${payment.amount}</div>
                            <Badge variant={payment.status === "paid" ? "default" : "secondary"}>
                              {payment.status}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Monthly Tuition</span>
                      <span className="font-semibold">$150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Next Due Date</span>
                      <span className="font-semibold">April 1, 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Outstanding Balance</span>
                      <span className="font-semibold text-yellow-600">$150</span>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Make Payment</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Download Receipts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      March 2024 Receipt
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      February 2024 Receipt
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      January 2024 Receipt
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Student Information</CardTitle>
                  <CardDescription>Personal and academic details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="studentName">Full Name</Label>
                      <Input id="studentName" value={studentInfo.name} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="studentId">Student ID</Label>
                      <Input id="studentId" value={studentInfo.studentId} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="program">Program</Label>
                      <Input id="program" value={studentInfo.program} readOnly />
                    </div>
                    <div>
                      <Label htmlFor="grade">Current Level</Label>
                      <Input id="grade" value={studentInfo.grade} readOnly />
                    </div>
                    <div className="col-span-2">
                      <Label htmlFor="enrollment">Enrollment Date</Label>
                      <Input id="enrollment" value={studentInfo.enrollmentDate} readOnly />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Parent/Guardian Information</CardTitle>
                  <CardDescription>Contact details for parent or guardian</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name</Label>
                    <Input id="parentName" value={studentInfo.parentName} />
                  </div>
                  <div>
                    <Label htmlFor="parentEmail">Email Address</Label>
                    <Input id="parentEmail" type="email" value={studentInfo.parentEmail} />
                  </div>
                  <div>
                    <Label htmlFor="parentPhone">Phone Number</Label>
                    <Input id="parentPhone" type="tel" value={studentInfo.parentPhone} />
                  </div>
                  <Button className="w-full">Update Information</Button>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
                <CardDescription>Manage your portal preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">Email Notifications</div>
                    <div className="text-xs text-gray-500">Receive updates about grades and announcements</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">SMS Notifications</div>
                    <div className="text-xs text-gray-500">Get text messages for urgent updates</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-sm">Privacy Settings</div>
                    <div className="text-xs text-gray-500">Control who can see your information</div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
