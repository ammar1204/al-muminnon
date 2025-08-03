"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { BookOpen, ArrowLeft, CreditCard, Building, Smartphone, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [paymentPlan, setPaymentPlan] = useState("monthly")

  const fees = {
    registration: 50,
    monthly: 150,
    semester: 750, // 5 months with 10% discount
    annual: 1350, // 10 months with 25% discount
  }

  const calculateTotal = () => {
    let total = fees.registration
    if (paymentPlan === "monthly") total += fees.monthly
    else if (paymentPlan === "semester") total += fees.semester
    else if (paymentPlan === "annual") total += fees.annual
    return total
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
                <h1 className="text-xl font-bold text-emerald-800">Al-Mu'minoon Madrasah</h1>
                <p className="text-sm text-emerald-600">Payment Portal</p>
              </div>
            </Link>
            <Button variant="ghost" asChild>
              <Link href="/register" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Registration
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Payment</h2>
            <p className="text-gray-600">Secure payment processing for your child's Islamic education</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Payment Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Payment Plan Selection */}
              <Card>
                <CardHeader>
                  <CardTitle>Choose Payment Plan</CardTitle>
                  <CardDescription>Select the payment option that works best for your family</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentPlan} onValueChange={setPaymentPlan} className="space-y-4">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <div>
                          <Label htmlFor="monthly" className="text-base font-semibold">
                            Monthly Payment
                          </Label>
                          <p className="text-sm text-gray-600">Pay each month</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">$150/month</div>
                        <Badge variant="secondary">Most Flexible</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="semester" id="semester" />
                        <div>
                          <Label htmlFor="semester" className="text-base font-semibold">
                            Semester Payment
                          </Label>
                          <p className="text-sm text-gray-600">Pay for 5 months (10% discount)</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">$750</div>
                        <Badge className="bg-blue-100 text-blue-800">Save $75</Badge>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="annual" id="annual" />
                        <div>
                          <Label htmlFor="annual" className="text-base font-semibold">
                            Annual Payment
                          </Label>
                          <p className="text-sm text-gray-600">Pay for full year (25% discount)</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold">$1,350</div>
                        <Badge className="bg-green-100 text-green-800">Save $450</Badge>
                      </div>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose how you'd like to pay</CardDescription>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="card" id="card" />
                      <CreditCard className="w-5 h-5 text-gray-500" />
                      <Label htmlFor="card" className="flex-1">
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="bank" id="bank" />
                      <Building className="w-5 h-5 text-gray-500" />
                      <Label htmlFor="bank" className="flex-1">
                        Bank Transfer
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg">
                      <RadioGroupItem value="mobile" id="mobile" />
                      <Smartphone className="w-5 h-5 text-gray-500" />
                      <Label htmlFor="mobile" className="flex-1">
                        Mobile Payment
                      </Label>
                    </div>
                  </RadioGroup>
                </CardContent>
              </Card>

              {/* Payment Details */}
              {paymentMethod === "card" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Card Information</CardTitle>
                    <CardDescription>Enter your card details securely</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input id="expiry" placeholder="MM/YY" className="font-mono" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">CVV</Label>
                        <Input id="cvv" placeholder="123" className="font-mono" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input id="cardName" placeholder="John Doe" />
                    </div>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === "bank" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Bank Transfer Details</CardTitle>
                    <CardDescription>Transfer funds directly to our account</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                      <div>
                        <strong>Bank Name:</strong> Islamic Community Bank
                      </div>
                      <div>
                        <strong>Account Name:</strong> Al-Mu'minoon Madrasah
                      </div>
                      <div>
                        <strong>Account Number:</strong> 1234567890
                      </div>
                      <div>
                        <strong>Routing Number:</strong> 021000021
                      </div>
                      <div>
                        <strong>Reference:</strong> Student Registration + Student Name
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      Please include the student's name in the transfer reference and email us the transfer receipt.
                    </p>
                  </CardContent>
                </Card>
              )}

              {paymentMethod === "mobile" && (
                <Card>
                  <CardHeader>
                    <CardTitle>Mobile Payment</CardTitle>
                    <CardDescription>Pay using your mobile wallet</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="mobileProvider">Select Provider</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Choose mobile payment provider" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apple-pay">Apple Pay</SelectItem>
                          <SelectItem value="google-pay">Google Pay</SelectItem>
                          <SelectItem value="samsung-pay">Samsung Pay</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Registration Fee</span>
                      <span>${fees.registration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>
                        {paymentPlan === "monthly" && "First Month Tuition"}
                        {paymentPlan === "semester" && "Semester Tuition"}
                        {paymentPlan === "annual" && "Annual Tuition"}
                      </span>
                      <span>
                        ${paymentPlan === "monthly" && fees.monthly}${paymentPlan === "semester" && fees.semester}$
                        {paymentPlan === "annual" && fees.annual}
                      </span>
                    </div>
                    {paymentPlan !== "monthly" && (
                      <div className="flex justify-between text-green-600">
                        <span>Discount Applied</span>
                        <span>-${paymentPlan === "semester" ? "75" : "450"}</span>
                      </div>
                    )}
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${calculateTotal()}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Student Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div>
                    <strong>Student:</strong> Ahmed Hassan
                  </div>
                  <div>
                    <strong>Program:</strong> Hifz Program
                  </div>
                  <div>
                    <strong>Start Date:</strong> September 1, 2024
                  </div>
                  <div>
                    <strong>Parent:</strong> Omar Hassan
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-green-600" />
                    Secure Payment
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      256-bit SSL encryption
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      PCI DSS compliant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      Your data is protected
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Button
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700"
                onClick={() => alert("Payment processed successfully! Welcome to Al-Mu'minoon Madrasah.")}
              >
                Complete Payment - ${calculateTotal()}
              </Button>

              <p className="text-xs text-gray-500 text-center">
                By completing this payment, you agree to our terms and conditions. You will receive a confirmation email
                shortly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
