'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Printer } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Contact() {

    return (
        <section id="contact" className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20" ><span className="text-accent text-base tracking-[0.3em] uppercase">Get In Touch</span><h2 className="text-4xl md:text-5xl font-serif text-primary mt-4 mb-6">Contact Maner Law</h2><div className="w-20 h-0.5 bg-accent mx-auto mb-6"></div><p className="text-slate-600 max-w-2xl mx-auto text-lg">Ready to discuss your legal needs? Our team is here to help. Reach out to schedule a confidential consultation.</p></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <Card className="overflow-hidden shadow-2xl">
                        <CardContent className="p-0"> 
                            <div className="grid md:grid-cols-2">
                                <div className="p-6 md:p-10 bg-white">
                                    <h2 className="text-xl font-serif text-primary mb-4">Get in Touch</h2>
                                    <p className="text-muted-foreground/90 mb-6 text-lg">
                                        Whether you have a question about our services or need to schedule a consultation, our team is ready to answer all your questions. Fill out the form, and we'll be in touch shortly.
                                    </p>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <MapPin className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-semibold text-lg">Our Offices</h3>
                                                <div className="mt-2">
                                                    <h4 className="font-semibold text-base">Toronto Office</h4>
                                                    <p className="text-base text-muted-foreground/90">First Canadian Place<br />100 King St W, Suite #5700<br />Toronto, ON M5X 1C7</p>
                                                    <Link href="https://www.google.com/maps/dir//First+Canadian+Place,+100+King+St+W,+Toronto,+ON+M5X+1C7" target="_blank" className="text-base text-primary underline">Get Directions</Link>
                                                </div>
                                                <div className="mt-4">
                                                    <h4 className="font-semibold text-lg">Waterloo Office</h4>
                                                    <p className="text-base text-muted-foreground/90">Regus <br/>180 Northfield Drive West, Unit 4, 1st Floor<br />Waterloo, ON N2L 0C7</p>
                                                    <Link href="https://www.google.com/maps/dir//Regus+-+Waterloo,+180+Northfield+Dr+W,+Waterloo,+ON+N2L+0C7" target="_blank" className="text-base text-primary underline">Get Directions</Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Mail className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-semibold text-lg">Email Us</h3>
                                                <a href="mailto:contact@manerlaw.ca" className="text-base text-primary hover:underline">contact@manerlaw.ca</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Phone className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-semibold text-lg">Call Us</h3>
                                                <a href="tel:+14374240886" className="text-base text-muted-foreground/90 hover:text-primary transition-colors">+1 (437) 424-0886</a>,                    
                                                <a href="tel:+16047043544" className="text-base text-muted-foreground/90 hover:text-primary transition-colors block">+1 (604) 704-3544</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
                                                <Printer className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <h3 className="font-serif font-semibold text-lg">Fax</h3>
                                                <a href="fax:+17787691971" className="text-base text-muted-foreground/90 hover:text-primary transition-colors">+1 (778) 769-1971</a>
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
    )
}
