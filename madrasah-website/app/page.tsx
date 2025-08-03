import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Award, Clock, MapPin, Phone, Mail, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-emerald-800">Al-Noor Madrasah</h1>
                <p className="text-sm text-emerald-600">Excellence in Islamic Education</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">
                About
              </Link>
              <Link href="#programs" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Programs
              </Link>
              <Link href="#admissions" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Admissions
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors">
                Contact
              </Link>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/register">Register Now</Link>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Nurturing Hearts, Minds & Souls</h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join our Islamic educational community where traditional Islamic knowledge meets modern learning methods.
              We provide comprehensive Quranic education, Islamic studies, and character development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/register">Apply for Admission</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#programs">Explore Programs</Link>
              </Button>
            </div>
          </div>
          <div className="mt-16">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Al-Noor Madrasah Campus"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-emerald-100">Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-emerald-100">Qualified Teachers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-emerald-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-emerald-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Islamic education programs designed for different age groups and learning levels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-emerald-600" />
                </div>
                <CardTitle>Hifz Program</CardTitle>
                <CardDescription>Complete Quran memorization with proper Tajweed</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Individual attention for each student</li>
                  <li>• Qualified Huffaz instructors</li>
                  <li>• Regular revision sessions</li>
                  <li>• Certificate upon completion</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Ages 7-16</Badge>
                  <span className="font-semibold text-emerald-600">$150/month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Islamic Studies</CardTitle>
                <CardDescription>Comprehensive Islamic education and Arabic language</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Aqeedah, Fiqh, and Hadith studies</li>
                  <li>• Arabic language proficiency</li>
                  <li>• Islamic history and culture</li>
                  <li>• Character development</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Ages 6-18</Badge>
                  <span className="font-semibold text-emerald-600">$120/month</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Weekend Classes</CardTitle>
                <CardDescription>Flexible Islamic education for busy families</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 mb-4">
                  <li>• Saturday and Sunday sessions</li>
                  <li>• Basic Quran reading and Islamic studies</li>
                  <li>• Family-friendly schedule</li>
                  <li>• Community building activities</li>
                </ul>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">All Ages</Badge>
                  <span className="font-semibold text-emerald-600">$80/month</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Begin Your Islamic Journey?</h3>
            <p className="text-lg text-gray-600 mb-8">
              Join hundreds of families who have chosen Al-Noor Madrasah for their children's Islamic education.
              Registration is now open for the new academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="/register">Start Registration</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/payment">Payment Options</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Parents Say</h3>
            <p className="text-xl text-gray-600">Hear from our satisfied parents and students</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "Al-Noor Madrasah has been a blessing for our family. My son has not only memorized the Quran but has
                  also developed excellent Islamic character."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Fatima Ahmed</div>
                    <div className="text-sm text-gray-500">Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "The teachers are incredibly dedicated and caring. They provide individual attention to each student
                  and maintain excellent communication with parents."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Omar Hassan</div>
                    <div className="text-sm text-gray-500">Parent</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "I completed my Hifz here and the experience was amazing. The environment is very supportive and the
                  teaching methods are excellent."
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-semibold">Aisha Rahman</div>
                    <div className="text-sm text-gray-500">Graduate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-bold mb-6">Get in Touch</h3>
              <p className="text-emerald-100 mb-8">
                Have questions about our programs or admission process? We're here to help you every step of the way.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-3 text-emerald-200" />
                  <span>123 Islamic Center Drive, City, State 12345</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-emerald-200" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-emerald-200" />
                  <span>info@alnoor-madrasah.org</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-3 text-emerald-200" />
                  <span>Mon-Fri: 8:00 AM - 6:00 PM</span>
                </div>
              </div>
            </div>

            <div>
              <Card className="bg-white text-gray-900">
                <CardHeader>
                  <CardTitle>Quick Inquiry</CardTitle>
                  <CardDescription>Send us a message and we'll get back to you soon</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Al-Noor Madrasah</span>
              </div>
              <p className="text-gray-400">
                Dedicated to providing quality Islamic education and nurturing the next generation of Muslim leaders.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/programs" className="hover:text-white transition-colors">
                    Programs
                  </Link>
                </li>
                <li>
                  <Link href="/admissions" className="hover:text-white transition-colors">
                    Admissions
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/register" className="hover:text-white transition-colors">
                    Registration
                  </Link>
                </li>
                <li>
                  <Link href="/payment" className="hover:text-white transition-colors">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link href="/portal" className="hover:text-white transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="hover:text-white transition-colors">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>123 Islamic Center Drive</li>
                <li>City, State 12345</li>
                <li>(555) 123-4567</li>
                <li>info@alnoor-madrasah.org</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Al-Noor Madrasah. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
