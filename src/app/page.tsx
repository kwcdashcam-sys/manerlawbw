import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Gavel, HeartHandshake, ArrowRight, Home as HomeIcon, ScrollText, Lightbulb, Linkedin, Mail, MapPin, Phone, Scale, Facebook, Twitter } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';

const practiceAreas = [
  {
    icon: <Briefcase className="h-10 w-10 text-primary" />,
    title: "Corporate Law",
    description: "Our corporate law team provides comprehensive legal support for businesses of all sizes. We assist with business formation, contract drafting and negotiation, mergers and acquisitions, corporate governance, and ensuring regulatory compliance. Let us be your strategic legal partner in the business world."
  },
  {
    icon: <HomeIcon className="h-10 w-10 text-primary" />,
    title: "Real Estate Law",
    description: "Navigating the complexities of real estate transactions requires a knowledgeable guide. We handle everything from residential closings to complex commercial property deals, zoning issues, and landlord-tenant disputes. We protect your property interests at every turn."
  },
  {
    icon: <HeartHandshake className="h-10 w-10 text-primary" />,
    title: "Family Law",
    description: "We approach sensitive family matters with compassion and discretion. Our services cover divorce proceedings, child custody and support agreements, adoptions, and prenuptial agreements. We are committed to finding amicable solutions that prioritize the well-being of your family."
  },
  {
    icon: <Gavel className="h-10 w-10 text-primary" />,
    title: "Criminal Defense",
    description: "When your freedom is on the line, you need a vigorous defense. Our experienced criminal defense attorneys represent clients facing a wide range of charges, from misdemeanors to serious felonies. We are dedicated to protecting your rights and ensuring a fair legal process."
  },
  {
    icon: <ScrollText className="h-10 w-10 text-primary" />,
    title: "Estate Planning",
    description: "Secure your legacy and protect your loved ones with our comprehensive estate planning services. We assist with the creation of wills, trusts, powers of attorney, and healthcare directives. Plan for the future with confidence and peace of mind."
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Intellectual Property",
    description: "In today's innovation-driven economy, protecting your ideas is paramount. Our IP attorneys help clients secure patents, trademarks, and copyrights. We also handle licensing agreements and litigation to defend your intellectual property from infringement."
  },
];

const attorneys = [
  {
    name: "Ashish Manral",
    title: "Founding Partner",
    image: PlaceHolderImages.find(p => p.id === 'attorney-1'),
    bio: "Ashish Manral founded the firm with a vision of providing ethical, client-focused legal representation. With over 25 years of experience in corporate law, he is a renowned strategist in mergers, acquisitions, and complex corporate litigation. His leadership and dedication to justice have set the standard for the entire firm.",
    linkedin: "https://www.linkedin.com/in/ashish-manral-15731536/"
  },
  {
    name: "David Chen",
    title: "Head of Criminal Defense",
    image: PlaceHolderImages.find(p => p.id === 'attorney-2'),
    bio: "A former prosecutor, David Chen brings invaluable insight to his criminal defense practice. He is a tenacious litigator known for his meticulous case preparation and unwavering defense of his clients' rights. David has successfully handled hundreds of cases, from DUIs to major felonies.",
    linkedin: "#"
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-legal');

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-[60vh] min-h-[400px] text-white flex items-center">
        <div className="absolute inset-0 bg-primary/80 z-10" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight mb-4 text-shadow">
            Expert Legal Counsel for Your Peace of Mind
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-shadow-sm">
            Manrel Law is dedicated to providing top-tier legal services with integrity and professionalism.
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
                Decades of Legal Excellence
              </h2>
              <p className="mb-4 text-lg text-foreground/80">
                Manrel Law was founded on the principles of justice, diligence, and unwavering client advocacy. For over 20 years, our firm has been a pillar of the community, offering expert legal guidance across a wide spectrum of practice areas.
              </p>
              <p className="mb-6 text-foreground/80">
                Our mission is to demystify the legal process, providing clear, strategic, and effective solutions tailored to each client's unique situation. We believe in building lasting relationships based on trust and achieving the best possible outcomes.
              </p>
              <Button asChild variant="outline">
                <Link href="#services">Discover Our Expertise <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="bg-primary/10 p-8 rounded-lg">
                <blockquote className="border-l-4 border-accent pl-6 italic text-foreground/90">
                "Our commitment is not just to the law, but to the people we serve. We stand by you every step of the way, ensuring your voice is heard and your rights are protected."
                <footer className="mt-4 not-italic">
                    <span className="font-bold text-primary">Ashish Manral,</span>
                    <span className="text-foreground/80"> Founding Partner</span>
                </footer>
                </blockquote>
            </div>
          </div>
        </div>
      </section>
      
      {/* Practice Areas Section */}
      <section id="services" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Legal Expertise</h2>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">Comprehensive Services for Every Legal Need</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {practiceAreas.map((area, index) => (
                    <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <CardHeader className="flex flex-row items-start gap-4">
                            <div className="bg-primary/10 rounded-full p-3 flex-shrink-0">
                                {area.icon}
                            </div>
                            <div className="flex-grow">
                                <CardTitle className="font-headline text-2xl">{area.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-foreground/80">{area.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Attorney Profiles Preview */}
      <section id="attorneys" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Our Legal Professionals</h2>
                <p className="mt-2 text-lg text-foreground/80 max-w-2xl mx-auto">Experience, Dedication, and Excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                {attorneys.map((attorney, index) => (
                    <Card key={index} className="flex flex-col sm:flex-row items-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                        {attorney.image && (
                            <Avatar className="h-32 w-32 sm:h-40 sm:w-40 flex-shrink-0 mb-6 sm:mb-0 sm:mr-8 border-4 border-accent">
                                <AvatarImage src={attorney.image.imageUrl} alt={`Photo of ${attorney.name}`} data-ai-hint={attorney.image.imageHint} />
                                <AvatarFallback>{attorney.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                        )}
                        <div className="text-center sm:text-left">
                            <CardHeader className="p-0">
                                <div className="flex items-center justify-center sm:justify-start gap-3">
                                    <CardTitle className="font-headline text-2xl text-primary">{attorney.name}</CardTitle>
                                    <Link href={attorney.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                        <Linkedin size={20} />
                                    </Link>
                                </div>
                                <CardDescription className="font-semibold text-accent text-md">{attorney.title}</CardDescription>
                            </CardHeader>
                            <CardContent className="p-0 mt-4">
                                <p className="text-foreground/80">{attorney.bio}</p>
                            </CardContent>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">Contact Us</h2>
                <p className="mt-4 text-lg text-foreground/80 max-w-2xl mx-auto">We're here to help. Reach out to us anytime.</p>
            </div>
          <Card className="overflow-hidden shadow-2xl">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12 bg-background">
                  <h2 className="text-3xl font-headline font-bold text-primary mb-4">Get in Touch</h2>
                  <p className="text-foreground/80 mb-8">
                    Whether you have a question about our services or need to schedule a consultation, our team is ready to answer all your questions. Fill out the form, and we'll be in touch shortly.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Our Office</h3>
                        <p className="text-foreground/80">123 Legal Ave, Suite 500<br/>Justice City, ST 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Email Us</h3>
                        <a href="mailto:contact@manrellaw.com" className="text-foreground/80 hover:text-primary transition-colors">contact@manrellaw.com</a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                        <Phone className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Call Us</h3>
                        <a href="tel:123-456-7890" className="text-foreground/80 hover:text-primary transition-colors">(123) 456-7890</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="#home" className="flex items-center gap-2 font-bold text-2xl font-headline">
                <Scale className="h-7 w-7" />
                Manrel Law
              </Link>
              <p className="mt-4 text-primary-foreground/80">
                Providing expert legal solutions with integrity and professionalism.
              </p>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#services" className="text-primary-foreground/80 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#attorneys" className="text-primary-foreground/80 hover:text-white transition-colors">Attorneys</Link></li>
                <li><Link href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Contact Info</h3>
              <ul className="mt-4 space-y-3 text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>123 Legal Ave, Suite 500<br/>Justice City, ST 12345</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:contact@manrellaw.com" className="hover:text-white transition-colors">contact@manrellaw.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:123-456-7890" className="hover:text-white transition-colors">(123) 456-7890</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Follow Us</h3>
              <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Linkedin size={24} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Facebook size={24} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Twitter size={24} />
                  <span className="sr-only">X.com</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Manrel Law. All Rights Reserved. Attorney Advertising.</p>
            <p className="mt-2">Site developed and maintained by <a href="https://easywebtogo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">easywebtogo.com</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
