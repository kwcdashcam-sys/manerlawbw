'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Briefcase, Gavel, HeartHandshake, ArrowRight, Home as HomeIcon, ScrollText, Lightbulb, Linkedin, Mail, MapPin, Phone, Scale, Facebook, Twitter, Award, Shield, Users, ChevronDown } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ContactForm } from '@/components/contact-form';
import Map from '@/components/map';
import { motion } from 'framer-motion';

const practiceAreas = [
  {
    icon: <Users className="h-7 w-7 text-muted" />,
    title: "Immigration Law",
    description: "We offer expert guidance on all aspects of immigration, including visas, permanent residency, and citizenship. Our team is dedicated to helping individuals and families navigate the complex immigration process with confidence."
  },
  {
    icon: <Gavel className="h-7 w-7 text-muted" />,
    title: "Criminal Defence",
    description: "If you are facing criminal charges, our experienced defence lawyers will fight for your rights. We handle all types of criminal cases, from minor infractions to serious indictable offences."
  },
  {
    icon: <Scale className="h-7 w-7 text-muted" />,
    title: "Civil Litigation",
    description: "Our firm represents clients in a wide range of civil disputes. We are committed to resolving conflicts through negotiation, mediation, or litigation, always keeping your best interests at the forefront."
  },
  {
    icon: <HeartHandshake className="h-7 w-7 text-muted" />,
    title: "Family Law",
    description: "We provide compassionate and effective legal support for all family law matters. Our services include divorce, child custody and access, spousal and child support, and property division."
  },
  {
    icon: <ScrollText className="h-7 w-7 text-muted" />,
    title: "Notary Public",
    description: "Our notary public services include administering oaths, taking affidavits and statutory declarations, and certifying true copies of documents. We provide reliable and efficient notarial services."
  },
];

const values = [
  {
    icon: <Scale className="h-8 w-8 text-accent" />,
    title: "Integrity",
    description: "Upholding the highest ethical standards in every case we undertake.",
  },
  {
    icon: <Shield className="h-8 w-8 text-accent" />,
    title: "Dedication",
    description: "Committed to protecting our clients\' interests with unwavering resolve.",
  },
  {
    icon: <Award className="h-8 w-8 text-accent" />,
    title: "Excellence",
    description: "Pursuing exceptional outcomes through meticulous preparation and expertise.",
  },
  {
    icon: <Users className="h-8 w-8 text-accent" />,
    title: "Partnership",
    description: "Building lasting relationships founded on trust and mutual respect.",
  },
]

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-legal');
  const officeImage = PlaceHolderImages.find(p => p.id === 'office-interior');

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen text-white flex items-center">        
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
        <div className="relative mx-auto bg-primary/90" >
        <div className="container mx-auto p-8 sm:p-6 lg:p-8 relative z-20">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div {...fadeIn}>
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-16 h-px bg-accent"></div>
                <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">About Us</span>
                <div className="w-16 h-px bg-accent"></div>
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tight">Maner Law</h1>
              <p className="text-xl md:text-2xl text-primary-foreground/80 font-serif italic mb-4">Advocates of Excellence</p>
              <div className="w-24 h-0.5 bg-accent mx-auto mb-8"></div>
              <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">Distinguished legal counsel built on decades of trust, integrity, and unwavering commitment to our clients' success.</p>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground px-8 py-6 text-base tracking-wide">
                <Link href="#contact">Schedule Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary hover:bg-white/90 text-white px-8 py-6 text-base tracking-wide">
                <Link href="#practice-areas">Our Practice Areas</Link>
              </Button>
            </motion.div>
          </div>
          <div className="text-center mt-10">
            <div className="flex justify-center items-center gap-12">
              <motion.div {...fadeIn} transition={{delay: 0.2}} className='bg-black/30 p-4'>
                 <Image src="/images/The-voice-of-the-criminal-defence-bar-ml.png" alt="The Voice of the Criminal Defence Bar" width={150} height={150} />
              </motion.div>
              <motion.div {...fadeIn} transition={{delay: 0.4}} className='bg-black/30 p-6'>
                <Image src="/images/law-society-of-ontario-ml.png" alt="Law Society of Ontario" width={150} height={150} />
              </motion.div>
            </div>
          </div>
        </div>
        </div>
        <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20">
          <Link href="#about">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ChevronDown className="h-10 w-10" />
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Firm Overview Section */}
      <section id="about" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20"><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">About Our Firm</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">A Legacy of Legal Excellence</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto"></div></div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div {...fadeIn}>
              {officeImage && (
                <Image 
                  src={officeImage.imageUrl}
                  alt={officeImage.description}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover"
                />
              )}
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="space-y-4">
              <p className="text-base text-muted-foreground font-serif">
                For nearly four decades, Maner Law has stood as a pillar of legal excellence in our community. Our firm has grown from a small practice into a distinguished institution known for its principled approach to law.
              </p>
              <p className="text-base text-muted-foreground font-serif">
                Our mission is clear: to provide exceptional legal representation while maintaining the highest standards of professionalism and ethical conduct. We believe that every client deserves not just legal expertise, but a trusted advisor who truly understands their unique circumstances.
              </p>
              <p className="text-base text-muted-foreground font-serif">
                Today, our team of accomplished attorneys continues this legacy, combining traditional values with innovative legal strategies to serve clients across a broad spectrum of practice areas.
              </p>
              <div className="pt-4"><div className="inline-flex items-center gap-3 text-[#1E3A8A]"><div className="w-12 h-px bg-[#A8915F]"></div><span className="font-serif italic text-lg">"Excellence is not a destination, but a journey."</span></div></div>
            </motion.div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
            {values.map((value, index) => (
              <motion.div key={index} {...fadeIn} transition={{delay: 0.4 + index * 0.1}}>
                <div className="flex justify-center items-center h-16 w-16 rounded-full bg-primary/10 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="font-headline font-bold text-lg text-primary">{value.title}</h3>
                <p className="text-sm text-muted-foreground/95 mt-1">{value.description}</p>
              </motion.div>
            ))}
          </div>          

        </div>
      </section>
      
      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Our Expertise</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Practice Areas</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-muted-foreground max-w-2xl mx-auto">Our attorneys bring decades of combined experience across diverse legal disciplines, providing comprehensive counsel tailored to your specific needs.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => (
                <motion.div key={index} {...fadeIn} transition={{ delay: index * 0.1 }}>
                  <Card className="h-full p-8 bg-[#F0F9FF] rounded-sm border border-transparent hover:border-[#A8915F]/20 hover:shadow-xl transition-all duration-500">
                    <CardHeader className="flex flex-col items-start gap-2">
                      <div className="bg-primary rounded-full p-3 flex-shrink-0">
                        {area.icon}
                      </div>
                      <div className="flex-grow">
                        <CardTitle className="text-xl font-normal font-serif text-[#1E3A8A] group-hover:text-[#A8915F] transition-colors duration-300">{area.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Get In Touch</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Contact Us</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-slate-600 max-w-2xl mx-auto text-lg">Ready to discuss your legal needs? Our team is here to help. Reach out to schedule a confidential consultation.</p></div>
          <motion.div {...fadeIn}>
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  <div className="p-6 md:p-10 bg-white">
                    <h2 className="text-2xl font-headline text-primary mb-4">Get in Touch</h2>
                    <p className="text-muted-foreground/90 mb-6">
                      Whether you have a question about our services or need to schedule a consultation, our team is ready to answer all your questions. Fill out the form, and we\'ll be in touch shortly.
                    </p>
                    <div className="space-y-5">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Our Office</h3>
                          <p className="text-sm text-muted-foreground/90">100 King St W Suite #5700<br/>Toronto, ON M5X 1C7</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                          <Mail className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Email Us</h3>
                          <a href="mailto:contact@manerlaw.com" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">contact@manerlaw.com</a>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                          <Phone className="h-5 w-5" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">Call Us</h3>
                          <a href="tel:+14374240886" className="text-sm text-muted-foreground/90 hover:text-primary transition-colors">+14374240886</a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-10">
                    <ContactForm />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      
      {/* Map Section */}
      <section id="map" className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20" ><span className="text-[#A8915F] text-sm tracking-[0.3em] uppercase font-medium">Meet In Person</span><h2 className="text-4xl md:text-5xl font-serif text-[#1E3A8A] mt-4 mb-6">Reach Us</h2><div className="w-20 h-0.5 bg-[#A8915F] mx-auto mb-6"></div><p className="text-slate-600 max-w-2xl mx-auto text-lg">More comfortable to discuss your case in person</p></div>
         
            <motion.div {...fadeIn} className="w-full h-96 md:h-[500px] p-4">
                <Map />
            </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <Link href="#home">
                <Image src="/logo.png" alt="Maner Law Logo" width={200} height={53} />
              </Link>
              <p className="mt-4 text-sm text-primary-foreground/80">
                Providing expert legal solutions with integrity and professionalism.
              </p>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Quick Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="#home" className="text-primary-foreground/80 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#practice-areas" className="text-primary-foreground/80 hover:text-white transition-colors">Practice Areas</Link></li>
                <li><Link href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Contact Info</h3>
              <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-1 flex-shrink-0" />
                  <span>100 King St W Suite #5700<br/>Toronto, ON M5X 1C7</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0" />
                  <a href="mailto:contact@manerlaw.com" className="hover:text-white transition-colors">contact@manerlaw.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 flex-shrink-0" />
                  <a href="tel:+14374240886" className="hover:text-white transition-colors">+14374240886</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold tracking-wider text-primary-foreground/90">Follow Us</h3>
              <div className="flex mt-4 space-x-4">
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Linkedin size={22} />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Facebook size={22} />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-primary-foreground/80 hover:text-white transition-colors">
                  <Twitter size={22} />
                  <span className="sr-only">X.com</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
            <p>&copy; {new Date().getFullYear()} Maner Law. All Rights Reserved. Attorney Advertising.</p>
            <p className="mt-2">Site developed and maintained by <a href="https://easywebtogo.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">easywebtogo.com</a></p>
            <p className="mt-2">The content of this website is provided for informational purposes only, and is not intended to be legal advice. You should not take action in your legal matter without first retaining a lawyer.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
