"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowLeft, CreditCard } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Student Information
    studentName: "",
    dateOfBirth: "",
    gender: "",
    nationality: "",

    // Parent/Guardian Information
    parentName: "",
    relationship: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",

    // Program Selection
    program: "",
    startDate: "",

    // Additional Information
    previousEducation: "",
    medicalConditions: "",
    emergencyContact: "",
    emergencyPhone: "",

    // Agreements
    termsAccepted: false,
    photoConsent: false,
  })

  const totalSteps = 4

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    // Handle form submission
    console.log("Form submitted:", formData)
    // Redirect to payment page
    window.location.href = "/payment"
  }

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
                <p className="text-sm text-emerald-600">Student Registration</p>
              </div>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Student Registration</h2>
              <Badge variant="secondary">
                Step {currentStep} of {totalSteps}
              </Badge>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              ></div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {currentStep === 1 && "Student Information"}
                {currentStep === 2 && "Parent/Guardian Information"}
                {currentStep === 3 && "Program Selection"}
                {currentStep === 4 && "Additional Information & Agreements"}
              </CardTitle>
              <CardDescription>
                {currentStep === 1 && "Please provide the student's basic information"}
                {currentStep === 2 && "Parent or guardian contact details"}
                {currentStep === 3 && "Choose your preferred program and start date"}
                {currentStep === 4 && "Final details and required agreements"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Student Information */}
              {currentStep === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="studentName">Student Full Name *</Label>
                    <Input
                      id="studentName"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      placeholder="Enter student's full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                    />
                  </div>
                  <div>
                    <Label>Gender *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => setFormData({ ...formData, gender: value })}
                      className="flex gap-6 mt-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" />
                        <Label htmlFor="male">Male</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" />
                        <Label htmlFor="female">Female</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="nationality">Nationality</Label>
                    <Input
                      id="nationality"
                      value={formData.nationality}
                      onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                      placeholder="Student's nationality"
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Parent/Guardian Information */}
              {currentStep === 2 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="parentName">Parent/Guardian Name *</Label>
                    <Input
                      id="parentName"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="relationship">Relationship to Student *</Label>
                    <Select
                      value={formData.relationship}
                      onValueChange={(value) => setFormData({ ...formData, relationship: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select relationship" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="father">Father</SelectItem>
                        <SelectItem value="mother">Mother</SelectItem>
                        <SelectItem value="guardian">Guardian</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Address *</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder="Street address"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="City"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State *</Label>
                    <Input
                      id="state"
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      placeholder="State"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCode">ZIP Code *</Label>
                    <Input
                      id="zipCode"
                      value={formData.zipCode}
                      onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                      placeholder="12345"
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Program Selection */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label>Select Program *</Label>
                    <RadioGroup
                      value={formData.program}
                      onValueChange={(value) => setFormData({ ...formData, program: value })}
                      className="mt-4 space-y-4"
                    >
                      <div className="flex items-start space-x-3 p-4 border rounded-lg">
                        <RadioGroupItem value="hifz" id="hifz" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="hifz" className="text-base font-semibold">
                            Hifz Program
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">Complete Quran memorization with proper Tajweed</p>
                          <Badge className="mt-2">$150/month</Badge>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border rounded-lg">
                        <RadioGroupItem value="islamic-studies" id="islamic-studies" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="islamic-studies" className="text-base font-semibold">
                            Islamic Studies
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">
                            Comprehensive Islamic education and Arabic language
                          </p>
                          <Badge className="mt-2">$120/month</Badge>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border rounded-lg">
                        <RadioGroupItem value="weekend" id="weekend" className="mt-1" />
                        <div className="flex-1">
                          <Label htmlFor="weekend" className="text-base font-semibold">
                            Weekend Classes
                          </Label>
                          <p className="text-sm text-gray-600 mt-1">Flexible Islamic education for busy families</p>
                          <Badge className="mt-2">$80/month</Badge>
                        </div>
                      </div>
                    </RadioGroup>
                  </div>
                  <div>
                    <Label htmlFor="startDate">Preferred Start Date *</Label>
                    <Input
                      id="startDate"
                      type="date"
                      value={formData.startDate}
                      onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Additional Information */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="previousEducation">Previous Islamic Education</Label>
                    <Textarea
                      id="previousEducation"
                      value={formData.previousEducation}
                      onChange={(e) => setFormData({ ...formData, previousEducation: e.target.value })}
                      placeholder="Please describe any previous Islamic education or Quran study"
                      rows={3}
                    />
                  </div>
                  <div>
                    <Label htmlFor="medicalConditions">Medical Conditions or Allergies</Label>
                    <Textarea
                      id="medicalConditions"
                      value={formData.medicalConditions}
                      onChange={(e) => setFormData({ ...formData, medicalConditions: e.target.value })}
                      placeholder="Please list any medical conditions, allergies, or special needs"
                      rows={3}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="emergencyContact">Emergency Contact Name</Label>
                      <Input
                        id="emergencyContact"
                        value={formData.emergencyContact}
                        onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
                        placeholder="Emergency contact person"
                      />
                    </div>
                    <div>
                      <Label htmlFor="emergencyPhone">Emergency Contact Phone</Label>
                      <Input
                        id="emergencyPhone"
                        type="tel"
                        value={formData.emergencyPhone}
                        onChange={(e) => setFormData({ ...formData, emergencyPhone: e.target.value })}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="space-y-4 pt-6 border-t">
                    <h4 className="font-semibold">Required Agreements</h4>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => setFormData({ ...formData, termsAccepted: checked as boolean })}
                      />
                      <Label htmlFor="terms" className="text-sm leading-relaxed">
                        I agree to the{" "}
                        <Link href="/terms" className="text-emerald-600 underline">
                          Terms and Conditions
                        </Link>{" "}
                        and
                        <Link href="/policies" className="text-emerald-600 underline ml-1">
                          School Policies
                        </Link>{" "}
                        of Al-Noor Madrasah. I understand the fee structure and payment policies.
                      </Label>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="photo"
                        checked={formData.photoConsent}
                        onCheckedChange={(checked) => setFormData({ ...formData, photoConsent: checked as boolean })}
                      />
                      <Label htmlFor="photo" className="text-sm leading-relaxed">
                        I give permission for my child to be photographed for school activities and promotional
                        materials (photos will be used respectfully and in accordance with Islamic guidelines).
                      </Label>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button onClick={handleNext} className="bg-emerald-600 hover:bg-emerald-700">
                    Next Step
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2"
                    disabled={!formData.termsAccepted}
                  >
                    <CreditCard className="w-4 h-4" />
                    Proceed to Payment
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
